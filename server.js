
try {
  process.loadEnvFile() //process.loadEnvFile(['./dev.env','./dev2.env'])  
} catch (error) {
  
};
  

var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


const execute = require('./connection');

var router_productos = require('./router/router_productos.js');
var router_empleados =require('./router/router_empleados.js');
var router_general =require('./router/router_general.js');
var router_config = require('./router/router_config.js');
var router_bi = require('./router/router_bi.js');


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

// DESPACHO //







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


http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

