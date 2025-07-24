
function getView(){
    let view = {
        body:()=>{
            return `
                ${view.frag_encabezado()}
                <br>
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_inicio()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `
        },
        frag_encabezado:()=>{
            return `
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-4">
                    <h3 class="negrita text-base">INICIO GERENCIA</h3>
                </div>
            </div>
            `
        },
        vista_inicio:()=>{
            return `
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    ${view.frag_productos()}
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    ${view.frag_inventarios()}
                </div>
            </div>
            ${view.modal_historial_productos()}
            `
        },
        frag_productos:()=>{
            return `
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-2">

                    <h4 class="negrita text-danger">Catalogo de productos</h4>
                    
                    <div class="col-12">
                        <div class="form-group">
                            <label class="negrita">Escriba para Buscar...</label>
                            <div class="input-group">
                                <input type="text" class="negrita text-secondary form-control" id="txtBuscarProd" placeholder="Escriba para buscar...">
                                <button class="btn btn-info btn-md" id="btnBuscarProd">
                                    <i class="fal fa-search"></i>
                                </button>
                                <select class="negrita form-control" id="cmbStatus">
                                    <option value='SI'>HABILITADOS</option>
                                    <option value='NO'>DESHABILITADOS</option>
                                </select>
                            </div>
                        </div>

                        <table class="table table-responsive table-hover col-12 h-full" id="tblProductos">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>CODIGO</td>
                                    <td>DESCRIPCIONES</td>
                                    <td>COSTO</td>
                                   
                                </tr>
                            </thead>
                            <tbody id="tblDataProductos">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            `
        },
        modal_historial_productos:()=>{
            return `
              <div id="modal_historial" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-warning d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Historial de Movimientos del Producto
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">

                                    <h4 class="negrita text-danger" id="lbKardexDesprod"></h4>

                                    <div class="form-group">
                                        <label>Escriba para buscar...</label>
                                        <input type="text"
                                        placeholder='Escriba para filtrar...'
                                        class="form-control negrita text-danger"
                                        id="txtBuscarHistorial"
                                        oninput="F.FiltrarTabla('tblHistorial','txtBuscarHistorial')">
                                    </div>

                                    <table class="table h-full col-12 table-bordered" id="tblHistorial">
                                        <thead class="bg-secondary text-white">
                                            <tr>
                                                <td>FECHA</td>
                                                <td>DOCUMENTO</td>
                                                <td>ENTRADA</td>
                                                <td>SALIDA</td>
                                                <td>PRESTAMO</td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblDataHistorial">
                                        </tbody>
                                    </table>

                                    
                                </div>
                            </div>

                                
                            

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        },
        frag_inventarios:()=>{
            return `
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-4">
                    <h3 class="negrita text-secondary">RESUMEN DE INVENTARIOS</h3>

                    <div class="table-responsive col-12">
                        <table class="table h-full table-striped">
                            <thead class="bg-secondary text-white">
                                <tr>
                                    <td>BODEGA</td>
                                    <td>UNIDADES</td>
                                    <td>TOTALCOSTO</td>
                                </tr>
                            </thead>
                            <tbody id="tblDataResumen"></tbody>
                        </table>
                    </div>

                </div>
            </div>
            `
        },
        frag_empleados:()=>{
            return `
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-4">
                    <h1>EMPLEADOS</h1>
                </div>
            </div>
            `
        },
        modal:()=>{
            return `
              <div id="modal_" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                TITULO
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">

                                </div>
                            </div>

                                
                            <div class="row">
                                <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                            </div>

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

        document.title = 'INICIO GERENCIA';
    
        F.slideAnimationTabs();    



        document.getElementById('cmbStatus').addEventListener('change',()=>{
            get_tbl_productos();
        })


        document.getElementById('txtBuscarProd').addEventListener('keyup',(e)=>{
            if (e.code === 'Enter') { 
                document.getElementById('btnBuscarProd').click();
            };
            if (e.keyCode === 13 && !e.shiftKey) {
                document.getElementById('btnBuscarProd').click();
            };
        });
        
        document.getElementById('btnBuscarProd').addEventListener('click',()=>{
            get_tbl_productos();
        });
        

        tbl_resumen_inventarios();


};

function initView(){

    getView();
    addListeners();

};

function get_data_productos(filtro,st){

    return new Promise((resolve,reject)=>{
    
        axios.post(GlobalUrlCalls + '/productos/select_productos_filtro',
            {
                sucursal:GlobalEmpnit,
                habilitado:st,
                filtro:filtro
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(data.toString()=="error"){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    } 
                }       
            }else{
                reject();
            }                   
        }, (error) => {
            reject();
        });
    })   

};
function get_tbl_productos(){

    let container = document.getElementById('tblDataProductos');
   
    let st = document.getElementById('cmbStatus').value;

    let filtro = document.getElementById('txtBuscarProd').value || '';

    if(filtro==''){return;}

     container.innerHTML = GlobalLoader;



    get_data_productos(filtro,st)
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{

            let btnE = `btnE${r.CODPROD}`;
            let btnST = `btnST${r.CODPROD}`;
            let classBtnSt = ''; if(r.HABILITADO=='SI'){classBtnSt='btn-outline-success'}else{classBtnSt='btn-outline-danger'};
            
            str += `
            <tr>
                <td><b class="text-danger">${r.CODPROD}</b>
                    <br>
                    ${r.TIPO}
                    <br>
                    <button class="btn btn-sm btn-warning hand shadow"
                    onclick="historial_producto('${F.limpiarTexto(r.CODPROD)}','${F.limpiarTexto(r.DESPROD)}')"
                    >
                        <i class="fal fa-list"></i>Historial
                    </button>
                </td>
                <td>${r.DESPROD}
                    <br>
                    <small>${r.CODMEDIDA}</small>
                     <br>
                    <small class="text-info negrita">${r.MARCA}</small>
                    <br>
                    <small class="text-secondary negrita">${r.RUBRO}</small>
                </td>
                <td>${F.setMoneda(r.COSTO,'Q')}</td>
               
               
                
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...'

    })


};
function historial_producto(codprod,desprod){

    $("#modal_historial").modal('show');
 
    document.getElementById('lbKardexDesprod').innerText = desprod;
    
    tbl_kardex_producto(codprod);
};
function tbl_kardex_producto(codprod){

    let container = document.getElementById('tblDataHistorial');


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
                    <td>${prestamo}</td>
                </tr>
                `
        })
        container.innerHTML = str;  

    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...';
    })



};


function tbl_resumen_inventarios(){

    let container = document.getElementById('tblDataResumen');
    container.innerHTML = GlobalLoader;


    GF.data_bi_resumen_inventarios()
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{
            str += `
            <tr>
                <td>${r.EMPRESA}</td>
                <td>${r.CONTEO}</td>
                <td>${F.setMoneda(r.TOTALCOSTO,'Q')}</td>
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...'
    })



};