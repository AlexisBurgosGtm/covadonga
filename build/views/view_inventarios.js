
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_kardex()}
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
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-4">
                    
                    <div class="row">
                        
                        <div class="col-6">
                            <h4 class="negrita text-danger">Inventario de productos</h4>

                             <div class="form-group">
                                <label>Bodegas</label>
                                <select class="negrita form-control" id="cmbEmpresas">
                                   
                                </select>
                            </div>
                            
                        </div>
                        <div class="col-6">

                         <h4 class="negrita text-danger">&nbsp</h4>

                            <div class="form-group">
                                <label>Status  /  Filtro</label>
                                <div class="input-group">
                                    <select class="negrita form-control" id="cmbStatus">
                                        <option value='SI'>HABILITADOS</option>
                                        <option value='NO'>DESHABILITADOS</option>
                                    </select>
                                    <select class="negrita form-control" id="cmbStatusExistencia">
                                        <option value='SI'>CON EXISTENCIA</option>
                                        <option value='NO'>TODOS</option>
                                    </select>
                                </div>
                                
                            </div>
                        </div>

                    </div>

                    <br>

                    <div class="table-responsive col-12">

                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">Escriba para filtrar...</label>
                                    <input type="text" class="negrita text-secondary form-control" id="txtBuscarProd" placeholder="Escriba para filtrar..."
                                    oninput="F.FiltrarTabla('tblProductos','txtBuscarProd')">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <br>
                                <button class="btn btn-md btn-success hand shadow" id="btnExportarInventario">
                                    <i class="fal fa-share"></i> Exportar Excel
                                </button>
                            </div>
                        </div>

                        <br>

                        <table class="table table-hover col-12 h-full" id="tblProductos">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>TIPO</td>
                                    <td>CODIGOS</td>
                                    <td>DESCRIPCIONES</td>
                                    <td>MARCA</td>
                                    <td>EMPAQUE</td>
                                    <td>EXISTENCIA</td>
                                    <td>COSTO</td>
                                    <td>TOTAL_COSTO</td>
                                    <td></td>
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
        modal_kardex:()=>{
            return `
              <div id="modal_historial_producto" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-primary d-flex justify-content-center align-items-center w-100">
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
                                        <thead class="bg-primary text-white">
                                            <tr>
                                                <td>FECHA</td>
                                                <td>DOCUMENTO</td>
                                                <td>ENTRADA</td>
                                                <td>SALIDA</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblDataHistorial">
                                        </tbody>
                                        <tfoot class="bg-primary text-white negrita">
                                            <tr>
                                                <td></td>
                                                <td><b id="lbKardexConteo"></b></td>
                                                <td><b id="lbKardexEntradas"></b></td>
                                                <td><b id="lbKardexSalidas"></b></td>
                                                <td id=""></td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    
                                </div>
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


    
    document.title = 'INVENTARIOS';
    
    F.slideAnimationTabs();            


    //cargando empresas
    GF.data_listado_empresas()
    .then((data)=>{
        let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value='${r.EMPNIT}'>${r.EMPRESA}</option>
            `
        })
      
        document.getElementById('cmbEmpresas').innerHTML = str;
        get_tbl_productos();
      
    })
    .catch(()=>{
       document.getElementById('cmbEmpresas').innerHTML = "<option value=''>No se cargaron las empresas</option>";
    });
    //cargando empresas

    document.getElementById('cmbStatus').addEventListener('change',()=>{
        get_tbl_productos();
    })

     document.getElementById('cmbEmpresas').addEventListener('change',()=>{
        get_tbl_productos();
    })

    
     document.getElementById('cmbStatusExistencia').addEventListener('change',()=>{
        get_tbl_productos();
    })


    let btnExportarInventario = document.getElementById('btnExportarInventario');
    btnExportarInventario.addEventListener('click',()=>{

        btnExportarInventario.disabled = true;

        F.showToast('Exportando...')

        let st = document.getElementById('cmbStatus').value;

        get_inventario_export(st)
        .then((data)=>{

            let datos = data.recordset;
            F.export_json_to_xlsx(datos,'InventarioProductos')

            btnExportarInventario.disabled = false;
        
        })
        .catch(()=>{
            F.AvisoError('No se pudo exportar');
            btnExportarInventario.disabled = false;
        })

    });




};

function initView(){

    getView();
    addListeners();

};


function get_inventario_export(st){

    let sucursal = document.getElementById('cmbEmpresas').value;
    let existencia = document.getElementById('cmbStatusExistencia').value;

    return new Promise((resolve,reject)=>{
    
        axios.post(GlobalUrlCalls + '/productos/inventario_productos_export',
            {
                sucursal:sucursal,
                habilitado:st,
                existencia:existencia
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

function get_data_productos(st){

    let sucursal = document.getElementById('cmbEmpresas').value;
    let existencia = document.getElementById('cmbStatusExistencia').value;

    return new Promise((resolve,reject)=>{
    
        axios.post(GlobalUrlCalls + '/productos/inventario_productos',
            {
                sucursal:sucursal,
                habilitado:st,
                existencia:existencia
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
    container.innerHTML = GlobalLoader;


    let st = document.getElementById('cmbStatus').value;

    get_data_productos(st)
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{

            let btnE = `btnE${r.CODPROD}`;
            let btnST = `btnST${r.CODPROD}`;
            let classBtnSt = ''; if(r.HABILITADO=='SI'){classBtnSt='btn-outline-success'}else{classBtnSt='btn-outline-danger'};

            let strPermisoCostos = '';
            if(Number(GlobalNivelUsuario)==3){if(data_config_general[1].VALOR.toString()=='NO'){strPermisoCostos='hidden'};}
            
            
            str += `
            <tr>
                <td>${r.TIPO}</td>
                <td><b class="text-danger">${F.limpiarTextoExport(r.CODPROD)}</b></td>
                <td>${F.limpiarTextoExport(r.DESPROD)}</td>
                <td>${r.DESMARCA}</td>
                <td>${r.CODMEDIDA}</td>
                <td>${r.EXISTENCIA}</td>
                <td class="${strPermisoCostos}">${F.setMoneda(r.COSTO,'Q')}</td>
                <td class="${strPermisoCostos}">${F.setMoneda((Number(r.COSTO)*Number(r.EXISTENCIA)),'Q')}</td>
                <td>
                    <button class="btn btn-md btn-circle btn-warning hand shadow"
                    onclick="historial_producto('${F.limpiarTexto(r.CODPROD)}','${F.limpiarTexto(r.DESPROD)}')"
                    >
                        <i class="fal fa-list"></i>
                    </button>
                </td>
                
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...'

    })


};


// kardex de productos
function historial_producto(codprod,desprod){

   
 
    document.getElementById('lbKardexDesprod').innerText = desprod;
    
    tbl_kardex_producto(codprod);

};

function tbl_kardex_producto(codprod){

   


    $("#modal_historial_producto").modal('show');

    let contenedor = document.getElementById('tblDataHistorial');


    contenedor.innerHTML = GlobalLoader;



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

        
        document.getElementById('lbKardexConteo').innerText = `${varConteo}`;
        document.getElementById('lbKardexEntradas').innerText = `${varEntradas}`;
        document.getElementById('lbKardexSalidas').innerText = `${varSalidas}`;


    })
    .catch((error)=>{


        contenedor.innerHTML = 'No se cargaron datos...';

         document.getElementById('lbKardexConteo').innerText = '';
        document.getElementById('lbKardexEntradas').innerText = '';
        document.getElementById('lbKardexSalidas').innerText = '';
    })



};
// kardex de productos






