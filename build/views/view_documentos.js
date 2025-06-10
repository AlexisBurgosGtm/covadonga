
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado()}
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
                    
                    <h4 class="negrita text-danger">ARCHIVO DE DOCUMENTOS</h4>

                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                         
                            <div class="form-group">
                                <label class="negrita text-secondary">Tipo Documento</label>
                                <select class="negrita text-danger form-control" id="cmbMovimiento">
                                    <option value="ENT">ENTRADA DE INVENTARIO</option>
                                    <option value="SAL">SALIDA DE INVENTARIO</option>
                                    <option value="COM">COMPRAS</option>
                                    <option value="PRS">PRESTAMO DE HERRAMIENTA</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="form-group">
                                <label class="negrita text-secondary">Seleccione Mes y Año</label>
                                <div class="input-group">
                                    <select class="negrita form-control" id="cmbMes">
                                    </select>
                                    <select class="negrita form-control" id="cmbAnio">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12" id="tblDocumentos">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>EMPRESA / BODEGA</td>
                                    <td>DOCUMENTO</td>
                                    <td>FECHA</td>
                                    <td>RESPONSABLES</td>
                                    <td>IMPORTE</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataDocumentos">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

          
            <nav class="shortcut-menu hidden-sm-down">
                <input type="checkbox" class="menu-open" name="menu-open" id="menu_open" />
                <label for="menu_open" class="menu-open-button ">
                    <span class="app-shortcut-icon d-block"></span>
                </label>
                <a href="#" class="menu-item btn" data-toggle="tooltip" data-placement="left" title="Nueva Compra" onclick="Menu.nueva_compra()">
                    <i class="fal fa-shopping-cart"></i>
                </a>
                <a href="#" class="menu-item btn" data-toggle="tooltip" data-placement="left" title="Nueva Salida de Bodega" onclick="Menu.nueva_salida()">
                    <i class="fal fa-arrow-right"></i>
                </a>
                <a href="#" class="menu-item btn" data-toggle="tooltip" data-placement="left" title="Nueva Entrada de Bodega" onclick="Menu.nueva_entrada()">
                    <i class="fal fa-arrow-left"></i>
                </a>
                
            </nav>

            `
        },
        modal_lista_productos:()=>{
            return `
              <div id="modal_productos" 
              class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Seleccione un Producto
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">
                                    
                                    <div class="table-responsive">
                                        
                                        <div class="form-group">
                                            <input type="text" class="negrita text-base border-warning form-control" 
                                                id="txtBuscarProducto" 
                                                oninput="F.FiltrarTabla('tblProductos','txtBuscarProducto')"
                                                placeholder="Escriba para filtrar...."
                                            >
                                        </div>

                                        <table class="table table-bordered h-full col-12" id="tblProductos">
                                            <thead class="bg-secondary text-white">
                                                <tr>
                                                    <td>CODIGO</td>
                                                    <td>PRODUCTO</td>
                                                    <td>EXISTENCIA</td>
                                                    <td>MARCA</td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody id="tblDataProductos"></tbody>
                                        </table>
                                    </div>

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


    F.slideAnimationTabs();


    F.get_combo_meses('cmbMes');
    F.get_combo_anios('cmbAnio');

 



    tbl_movimientos();



};

function initView(){

    getView();
    addListeners();

};


function tbl_movimientos(){

    let tipo = document.getElementById('cmbMovimiento').value;
    let mes = document.getElementById('cmbMes').value;
    let anio = document.getElementById('cmbAnio').value;


    

};