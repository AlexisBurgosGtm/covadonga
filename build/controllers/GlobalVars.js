let versionapp = "M.26.07.2025:0"
// &nbsp

let map; //mapa de leaflet

// kardex de productos
function historial_producto(codprod,desprod){

    $("#modal_historial").modal('show');
 
    document.getElementById('lbKardexDesprod').innerText = desprod;
    
    tbl_kardex_producto(codprod);

};

function tbl_kardex_producto(codprod){

    let contenedor = document.getElementById('tblDataHistorial');

    contenedor.innerHTML = GlobalLoader;

    console.log('por aqui 1')


    let varConteo = 0; let varEntradas = 0; let varSalidas = 0;

    GF.data_producto_kardex(codprod,'%')
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{

            let entrada = 0; let salida = 0; let prestamo=0;
            switch (r.INV.toString()) {
                case '0':
                    prestamo = Number(r.CANTIDAD);
                    entrada = 0;
                    salida = 0;
                    break;
            case '1':
                    prestamo = 0;
                    entrada = Number(r.CANTIDAD);
                    salida = 0;
                    break;
            case '-1':
                    prestamo = 0;
                    entrada = 0;
                    salida = Number(r.CANTIDAD);
                    break;
            }
            varConteo += 1; varEntradas += Number(entrada); varSalidas += Number(salida);
            str +=  `
                <tr>
                    <td>${F.convertDateNormal(r.FECHA)}
                        <br>
                        <small class="negrita text-danger">Hora: ${r.HORA}</small>
                    </td>
                    <td>${r.EMPRESA}
                        <br>
                        <small class="negrita text-danger">${r.CODDOC}-${r.CORRELATIVO}</small>
                    </td>
                    <td>${entrada}</td>
                    <td>${salida}</td>
                    <td></td>
                </tr>
                `
        })
        contenedor.innerHTML = str;  

        console.log(varEntradas)
        console.log(1)
        
        document.getElementById('lbKardexConteo').innerText = `${varConteo}`;
        document.getElementById('lbKardexEntradas').innerText = `${varEntradas}`;
        document.getElementById('lbKardexSalidas').innerText = `${varSalidas}`;

        console.log(2)

    })
    .catch((error)=>{

        console.log(error);

        contenedor.innerHTML = 'No se cargaron datos...';

         document.getElementById('lbKardexConteo').innerText = '';
        document.getElementById('lbKardexEntradas').innerText = '';
        document.getElementById('lbKardexSalidas').innerText = '';
    })



};
// kardex de productos

let GlobalUrlCalls = '';
let GlobalUrlServicioLocal = 'http://192.168.1.16:8080'
let GlobalUrlPrinter = 'http://192.168.0.250:9000'
let TOKEN = '';
let GlobalEmpnitBodega = '';
let GlobalEmpnit ='';

let GlobalUsuario = '';
let GlobalPass = '';
let GlobalNivelUsuario = 1;
let GlobalCodUsuario = 0;

let selected_clasificacion = '';


let data_config_general = [];

function get_config(id){

    let valor = '';

    data_config_general.map((r)=>{
        if(Number(r.ID)==Number(id)){
            valor = r.VALOR;
        }
    })
    
    return valor;
    
};

let data_empresa_config = [];
let data_usuario_config = [];

let tbl_etiquetas = [
    {valor:"BAJA",color:"bg-info"},
    {valor:"MEDIA",color:"bg-warning"},
    {valor:"ALTA",color:"bg-danger"},
]



let root = document.getElementById('root');
let rootErrores = document.getElementById('rootErrores');


let navmenu = document.getElementById('js-nav-menu');



let GlobalLoader = `
                <div>
                    <div class="spinner-border text-base" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-base" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-base" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                </div>
                `
               
function get_button_loader(texto){
    let str = '';

    str = `${texto}<div>
                <div class="spinner-grow text-base" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-grow text-base" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-grow text-base" role="status"><span class="sr-only">Loading...</span></div>
            </div>`


    return str;

}


// VARIABLES
let GlobalSelected_empnit = '';

let GlobalSelected_codmedida = '';
let GlobalSelected_Codprod = '';
let GlobalSelected_Desprod = '';
let GlobalSelected_Costo = 0;
let GlobalSelected_Status = '';

let Selected_exento =0; 
let Selected_tipoprod = '';
let Selected_existencia = 0;
let Selected_bono = 0;

let GlobalSelectedCodclie = 0;
let GlobalSelectedNoOrden = 0;
let GlobalSelectedCodEquipo = 0;
let GlobalConfigIVA = 1.12;

let GlobalCodBodega  = 0;


let GlobalTotalDocumento = 0;
let GlobalTotalCostoDocumento = 0;
let GlobalTotalDescuento = 0;
let GlobalTotalItems = 0;

let Selected_coddoc_env = '';
let Selected_coddoc_cot = '';


let selected_ped_coddoc = '';
let selected_ped_correlativo = '';
let selected_ped_codembarque = '';

let selected_id_element = '';



function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

