
try {
  process.loadEnvFile() //process.loadEnvFile(['./dev.env','./dev2.env'])  
} catch (error) {
  
};
  

var express = require("express");
var axios = require('axios');
var pathLib = require('path');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


const execute = require('./connection');

var router_productos = require('./router/router_productos.js');
var router_empleados =require('./router/router_empleados.js');
var router_general =require('./router/router_general.js');
var router_config = require('./router/router_config.js');
var router_bi = require('./router/router_bi.js');
var PDF = require('./reports_pdf.js');


var http = require('http').Server(app);
var io = require('socket.io')(http, { cors: { origin: '*' } });


const cors = require('cors');
app.use(cors({
    origin: '*'
}));


const PORT = process.env.PORT || 8800;

//app.use(bodyParser.json());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  
  next();
});






app.get("/",function(req,res){
  
 

	res.sendFile(path + 'index.html');
}); 



app.post("/activate_config_count_rows",function(req,res){
  let qry = `
  EXEC sys.sp_configure N'user options', N'0';
  RECONFIGURE WITH OVERRIDE;
  `;

  execute.Query(res,qry);

})

app.get("/login",function(req,res){
  res.redirect('/');
}); 

app.post("/crear_pdf",function(req,res){
      
      const {coddoc,correlativo,tipo} = req.body;


      let fileName = ``;

  
      switch (tipo) {
          case 'PRS': //PRESTAMO SALIDA HERRAMIENTA

                fileName = `prestamo_herramienta_salida_${coddoc}_${correlativo}.pdf`;
                PDF.prestamo_herramienta_salida(coddoc,correlativo)
                .then(()=>{
                  res.send(fileName);
                })
                .catch(()=>{
                  res.send('error');
                });

              break;
          case 'PRE': //PRESTAMO ENTRADA HERRAMIENTA

                fileName = `prestamo_herramienta_${coddoc}_${correlativo}.pdf`;
                PDF.prestamo_herramienta(coddoc,correlativo)
                .then(()=>{
                  res.send(fileName);
                })
                .catch(()=>{
                  res.send('error');
                });

              break;
          case 'COM': //COMPRAS

                fileName = `compra_${coddoc}_${correlativo}.pdf`;
                PDF.compra(coddoc,correlativo)
                .then(()=>{
                  res.send(fileName);
                })
                .catch(()=>{
                  res.send('error');
                });

            break;
          case 'ENT': //ENTRADA A BODEGA

                fileName = `entrada_bodega_${coddoc}_${correlativo}.pdf`;
                PDF.entrada_bodega(coddoc,correlativo)
                .then(()=>{
                  res.send(fileName);
                })
                .catch(()=>{
                  res.send('error');
                });

            break;
          case 'CON': //SALIDA POR CONSUMO

                fileName = `salida_consumo_${coddoc}_${correlativo}.pdf`;
                PDF.salida_consumo(coddoc,correlativo)
                .then(()=>{
                  res.send(fileName);
                })
                .catch(()=>{
                  res.send('error');
                });

            break;
          case 'SAL': //SALIDA POR TRASLADO

                fileName = `salida_traslado_${coddoc}_${correlativo}.pdf`;
                PDF.salida_traslado(coddoc,correlativo)
                .then(()=>{
                  res.send(fileName);
                })
                .catch(()=>{
                  res.send('error');
                });

            break;
          
        default:  
          res.send('error');
          break;
      };


});
app.get("/download_pdf",function(req,res){
      
      const {filename} = req.query;

      if(!filename){res.status(400).send('error');return;}

      //basename descarta cualquier ruta: sin esto un filename como
      //"../../.env" dejaba descargar archivos fuera de la carpeta PDF
      const archivo = pathLib.basename(filename.toString());

      res.download(pathLib.join(__dirname, 'PDF', archivo), archivo, function(err){

            if(!err){return;}

            console.error('No se pudo descargar el PDF:', archivo, err.message);

            //si ya se empezo a mandar el archivo no se puede responder otra cosa
            if(res.headersSent){res.end();return;}

            res.status(404).send('error');

      });
      
});

app.get("/config_eliminar_cache_pdf",function(req,res){
      
      //const {filename} = req.query;

      PDF.config_eliminar_archivos()
      .then(()=>{
        
          res.send('ok');
      
      })
      .catch(()=>{

          res.send('error');

      })

      
});





//Router 
app.use('/productos', router_productos);
app.use('/empleados', router_empleados);
app.use('/general', router_general);
app.use('/config', router_config);
app.use('/bi', router_bi);




app.use("/",router);

app.use("*",function(req,res){
  res.redirect('/');
  //res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});




// SOCKET HANDLER
io.on('connection', function(socket){

     
  
      socket.on('notificacion', (tipo,msn)=>{
        io.emit('notificacion', tipo, msn);
      });

   
      
  
});


// Red de seguridad. Un error no capturado en cualquier peticion (por ejemplo
// un stream de PDF que no puede abrir su archivo) mataba el proceso completo
// y dejaba el sistema caido hasta reiniciarlo a mano. Se deja registrado y el
// servidor sigue atendiendo al resto de usuarios.
// No sustituye el manejo de errores de cada modulo, es el ultimo recurso.
process.on('uncaughtException', function(err){
  console.error('[uncaughtException]', err);
});

process.on('unhandledRejection', function(reason){
  console.error('[unhandledRejection]', reason);
});


http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

