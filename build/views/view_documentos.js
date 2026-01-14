
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_detalle_documento() + view.modal_editar_compras() + view.modal_editar_entrada_bodega() + view.modal_editar_salida_consumo() + view.modal_editar_salida_traslado()}
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
                                <div class="input-group">
                                    <select class="negrita text-danger form-control" id="cmbTipo">
                                        <option value="ENT">ENTRADA DE INVENTARIO</option>
                                        <option value="SAL">SALIDA DE INVENTARIO</option>
                                        <option value="CON">SALIDA POR CONSUMO</option>
                                        <option value="COM">COMPRAS</option>
                                        <option value="PRS">PRESTAMO DE HERRAMIENTA</option>
                                    </select>
                                    <button class="btn btn-md btn-success hand shadow"
                                    onclick="tbl_movimientos()">
                                        <i class="fal fa-sync"></i>
                                    </button>
                                </div>

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
                        
                        <div class="form-group">
                            <label class="text-secondary negrita">Escriba para buscar...</label>
                            <input type="text" class="form-control negrita text-secondary border-base"
                            placeholder="Escriba para buscar..."
                            id="txtBuscar"
                            oninput="F.FiltrarTabla('tblDocumentos','txtBuscar')">
                        </div>

                        <table class="table h-full table-hover col-12" id="tblDocumentos">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>BODEGA</td>
                                    <td>DOCUMENTO</td>
                                    <td>FECHA</td>
                                    <td>ENCARGADO</td>
                                    <td>ENTREGADO A</td>
                                    <td>PROYECTO / AREA</td>
                                    <td>FECHA RECIBIDO / ORIGEN</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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

          
            <nav class="hidden shortcut-menu hidden-sm-down">
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
        modal_detalle_documento:()=>{
            return `
            <div id="modal_detalle_documento" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                PRODUCTOS AGREGADOS A LA ENTRADA
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">


                                    <div class="table-responsive col-12">
                                        <table class="table table-bordered h-full col-12">
                                            <thead class="bg-base text-white">
                                                <tr>
                                                    <td>CODIGO</td>
                                                    <td>PRODUCTO</td>
                                                    <td>CANTIDAD</td>
                                                    <td>COSTO</td>
                                                    <td>TOTALCOSTO</td>
                                                </tr>
                                            </thead>
                                            <tbody id="tblDataDetalle"></tbody>
                                        </table>

                                        <div class="form-group">
                                            <label class="negrita text-base">Observaciones</label>
                                            <textarea class="form-control border-base" rows="4" id="txtObs"></textarea>
                                        </div>

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
        },
        modal_editar_compras:()=>{
            return `
              <div id="modal_editar_compra" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                EDITAR COMPRAS
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">

                                    <div class="row">
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>Proveedor</label>
                                                <div class="input-group">
                                                    <select class="form-control negrita" id="cmb_edit_compra_proveedor">
                                                    </select>
                                                    <button class="btn btn-info btn-md hand shadow" id="btn_editar_compra_guardar_proveedor">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>Documento</label>
                                                <div class="input-group">
                                                    
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_compra_coddoc">
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_compra_correlativo">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    
                                    <div class="row">
                                        
                                        <div class="col-sm-12 col-lg-4 col-xl-4 col-md-4">
                                            <div class="form-group">
                                                <label>FECHA DOCUMENTO</label>
                                                <div class="input-group">
                                                    <input type="date" class="negrita form-control" id="txt_edit_compra_fecha">
                                                    <button class="btn btn-info btn-md hand shadow" id="btn_editar_compra_guardar_fecha">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-lg-4 col-xl-4 col-md-4">
                                            <div class="form-group">
                                                <label>SERIE FEL</label>
                                                <div class="input-group">
                                                    <input type="text" class="negrita form-control" id="txt_edit_compra_FEL_SERIE">
                                                    <button class="btn btn-info btn-md hand shadow" id="btn_editar_compra_guardar_fel_serie">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-lg-4 col-xl-4 col-md-4">
                                            <div class="form-group">
                                                <label>NUMERO FEL</label>
                                                <div class="input-group">
                                                    <input type="text" class="negrita form-control" id="txt_edit_compra_FEL_NUMERO">
                                                    <button class="btn btn-info btn-md hand shadow" id="btn_editar_compra_guardar_proveedor_fel_numero">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br>


                                    <div class="table-responsive col-12">
                                        <table class="table table-bordered h-full col-12">
                                            <thead class="bg-base text-white">
                                                <tr>
                                                    <td>CODIGO</td>
                                                    <td>PRODUCTO</td>
                                                    <td>CANTIDAD</td>
                                                    <td>COSTO</td>
                                                    <td>TOTALCOSTO</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody id="tbl_data_edit_compra"></tbody>
                                        </table>

                                        <div class="form-group">
                                            <label class="negrita text-base">Observaciones</label>
                                            <textarea class="form-control border-base" rows="2" id="txt_edit_compra_obs" disabled="true"></textarea>
                                        </div>

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
        },
        modal_editar_entrada_bodega:()=>{
            return `
              <div id="modal_editar_entrada_bodega" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                EDITAR ENTRADAS DE BODEGA
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">

                                    <div class="row">
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>Proyecto/Area</label>
                                                <div class="input-group">
                                                    <select class="form-control negrita" id="cmb_edit_entbod_proyecto">
                                                    </select>
                                                    <button class="btn btn-info btn-md hand shadow" id="btn_editar_entbod_guardar_proyecto">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>Documento</label>
                                                <div class="input-group">
                                                    
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_entbod_coddoc">
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_entbod_correlativo">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    
                                    <div class="row">
                                        
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>FECHA DOCUMENTO</label>
                                                <div class="input-group">
                                                    <input type="date" class="negrita form-control" id="txt_edit_entbod_fecha">
                                                    <button class="btn btn-info btn-md hand shadow" id="btn_editar_entbod_guardar_fecha">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>RECIBE</label>
                                                <div class="input-group">
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_entbod_recibe">
                                                    <button class="btn btn-info btn-md hand shadow hidden" id="btn_editar_entbod_guardar_recibe">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <br>


                                    <div class="table-responsive col-12">
                                        <table class="table table-bordered h-full col-12">
                                            <thead class="bg-base text-white">
                                                <tr>
                                                    <td>CODIGO</td>
                                                    <td>PRODUCTO</td>
                                                    <td>CANTIDAD</td>
                                                    <td>COSTO</td>
                                                    <td>TOTALCOSTO</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody id="tbl_data_edit_entrada_bodega"></tbody>
                                        </table>

                                        <div class="form-group">
                                            <label class="negrita text-base">Observaciones</label>
                                            <textarea class="form-control border-base" rows="2" id="txt_edit_entbod_obs" disabled="true"></textarea>
                                        </div>

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
        },
        modal_editar_salida_consumo:()=>{
            return `
              <div id="modal_editar_salida_consumo" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                EDITAR SALIDA POR CONSUMO
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">

                                    <div class="row">
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>Proyecto/Area</label>
                                                <div class="input-group">
                                                    <select class="form-control negrita" id="cmb_edit_salcons_proyecto">
                                                    </select>
                                                    <button class="btn btn-info btn-md hand shadow" id="btn_editar_salcons_guardar_proyecto">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>Documento</label>
                                                <div class="input-group">
                                                    
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_salcons_coddoc">
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_salcons_correlativo">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    
                                    <div class="row">
                                        
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>FECHA DOCUMENTO</label>
                                                <div class="input-group">
                                                    <input type="date" class="negrita form-control" id="txt_edit_salcons_fecha">
                                                    <button class="btn btn-info btn-md hand shadow" id="btn_editar_salcons_guardar_fecha">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>RECIBE</label>
                                                <div class="input-group">
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_salcons_recibe">
                                                    <button class="btn btn-info btn-md hand shadow hidden" id="btn_editar_salcons_guardar_recibe">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <br>


                                    <div class="table-responsive col-12">
                                        <table class="table table-bordered h-full col-12">
                                            <thead class="bg-base text-white">
                                                <tr>
                                                    <td>CODIGO</td>
                                                    <td>PRODUCTO</td>
                                                    <td>CANTIDAD</td>
                                                    <td>COSTO</td>
                                                    <td>TOTALCOSTO</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody id="tbl_data_edit_salcons"></tbody>
                                        </table>

                                        <div class="form-group">
                                            <label class="negrita text-base">Observaciones</label>
                                            <textarea class="form-control border-base" rows="2" id="txt_edit_salcons_obs" disabled="true"></textarea>
                                        </div>

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
        },
        modal_editar_salida_traslado:()=>{
            return `
              <div id="modal_editar_salida_traslado" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                EDITAR SALIDA POR TRASLADO
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">

                                    <div class="row">
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>Proyecto/Area</label>
                                                <div class="input-group">
                                                    <select class="form-control negrita" id="cmb_edit_saltras_proyecto">
                                                    </select>
                                                    <button class="btn btn-info btn-md hand shadow" id="btn_editar_saltras_guardar_proyecto">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>Documento</label>
                                                <div class="input-group">
                                                    
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_saltras_coddoc">
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_saltras_correlativo">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    
                                    <div class="row">
                                        
                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>FECHA DOCUMENTO</label>
                                                <div class="input-group">
                                                    <input type="date" class="negrita form-control" id="txt_edit_saltras_fecha">
                                                    <button class="btn btn-info btn-md hand shadow" id="btn_editar_saltras_guardar_fecha">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-lg-6 col-xl-6 col-md-6">
                                            <div class="form-group">
                                                <label>RECIBE</label>
                                                <div class="input-group">
                                                    <input type="text" class="negrita form-control" disabled="true" id="txt_edit_saltras_recibe">
                                                    <button class="btn btn-info btn-md hand shadow hidden" id="btn_editar_saltras_guardar_recibe">
                                                        <i class="fal fa-save"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <br>


                                    <div class="table-responsive col-12">
                                        <table class="table table-bordered h-full col-12">
                                            <thead class="bg-base text-white">
                                                <tr>
                                                    <td>CODIGO</td>
                                                    <td>PRODUCTO</td>
                                                    <td>CANTIDAD</td>
                                                    <td>COSTO</td>
                                                    <td>TOTALCOSTO</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody id="tbl_data_edit_saltras"></tbody>
                                        </table>

                                        <div class="form-group">
                                            <label class="negrita text-base">Observaciones</label>
                                            <textarea class="form-control border-base" rows="2" id="txt_edit_saltras_obs" disabled="true"></textarea>
                                        </div>

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
        },
    }

    root.innerHTML = view.body();

};

function addListeners(){

    
    document.title = 'ARCHIVO DE DOCUMENTOS';

    F.slideAnimationTabs();

    
    //carga los tipos
    let strtipo = '';
    data_tipodocumentos.map((r)=>{
        strtipo += `<option value='${r.CODDOC}'>${r.DESDOC}</option>`;
    })
    document.getElementById('cmbTipo').innerHTML = strtipo;


    F.get_combo_meses('cmbMes');
    F.get_combo_anios('cmbAnio');

 
    document.getElementById('cmbTipo').addEventListener('change',()=>{
        tbl_movimientos(); 
    });


    document.getElementById('cmbMes').addEventListener('change',()=>{
        tbl_movimientos(); 
    });

    document.getElementById('cmbAnio').addEventListener('change',()=>{
        tbl_movimientos(); 
    });


    tbl_movimientos();


    //listeners para editar compras
    listener_edicion_documentos_compras();
    //edicion de entrada bodega
    listeners_edicion_entrada_bodega();
    //edicion de salidas por consumo
    listeners_salida_consumo_bodega();
    //edicion de salidas por traslado
    listeners_salida_traslado_bodega();


};

function initView(){

    getView();
    addListeners();

};


function tbl_movimientos(){

    let tipo = document.getElementById('cmbTipo').value;
    let mes = document.getElementById('cmbMes').value;
    let anio = document.getElementById('cmbAnio').value;

    let container = document.getElementById('tblDataDocumentos');
    container.innerHTML = GlobalLoader;

    GF.data_documentos(GlobalEmpnit,tipo,mes,anio)
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            let idbtnEliminar = `btnEliminar${r.ID}`;
            let btnDownload = `btnDownload${r.ID}`
            str += `
            <tr>
                <td>${r.EMPRESA}</td>
                <td>${r.CODDOC}-${r.CORRELATIVO}
                    <br>
                    <small class="negrita">SERIE: ${r.FEL_SERIE}</small>
                    <br>
                    <small class="negrita">NUMERO: ${r.FEL_NUMERO}</small>
                </td>
                <td>${F.convertDateNormal(r.FECHA)}</td>
                <td>${r.RECIBE}
                
                <td>${r.ENTREGADO}
                <td>${r.NOMPROYECTO}
                    
                </td>
                <td>${F.convertDateNormal(r.FECHA_RECIBE)}
                    <br>
                    <small class="negrita">${r.EMPRESA_ORIGEN}</small>
                </td>
                <td>
                    <button class="btn btn-primary btn-md btn-circle hand shadow" id="${btnDownload}"
                    onclick="descargar_documento('${r.CODDOC}','${r.CORRELATIVO}','${tipo}','${btnDownload}')">
                        <i class="fal fa-download"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-success btn-md btn-circle hand shadow"
                    onclick="F.enviar_documento_whatsapp2('${r.EMPNIT}','${r.CODDOC}','${r.CORRELATIVO}')">
                        <i class="fal fa-paper-plane"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-secondary btn-md btn-circle hand shadow"
                    onclick="get_detalle_documento('${r.EMPNIT}','${r.CODDOC}','${r.CORRELATIVO}','${F.limpiarTexto(r.OBS)}')">
                        <i class="fal fa-list"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-info btn-md btn-circle hand shadow"
                    onclick="get_edicion_documento('${r.EMPNIT}','${r.CODDOC}','${r.CORRELATIVO}','${tipo}')">
                        <i class="fal fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-danger btn-md btn-circle hand shadow"
                    id="${idbtnEliminar}"
                    onclick="eliminar_documento('${r.EMPNIT}','${r.CODDOC}','${r.CORRELATIVO}','${idbtnEliminar}')">
                        <i class="fal fa-trash"></i>
                    </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...';
    })
    

};

function get_detalle_documento(sucursal,coddoc,correlativo,obs){

        $("#modal_detalle_documento").modal('show');

        document.getElementById('txtObs').value = obs;
    
        let container = document.getElementById('tblDataDetalle');
        container.innerHTML = GlobalLoader;

        GF.data_detalle_documento(sucursal,coddoc,correlativo)
        .then((data)=>{
                let str = '';
                data.recordset.map((r)=>{
                    str += `
                    <tr>
                        <td>${r.CODPROD}</td>
                        <td>${r.DESPROD} (${r.ESTADO})</td>
                        <td>${r.CANTIDAD}</td>
                        <td>${F.setMoneda(r.COSTO,'Q')}</td>
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

function eliminar_documento(sucursal,coddoc,correlativo,idbtn){

    let btn = document.getElementById(idbtn);

    F.Confirmacion('Esta seguro que desea ELIMINAR este documento?')
    .then((value)=>{
        if(value==true){

            btn.disabled = true;
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;

            GF.delete_documento(sucursal,coddoc,correlativo)
            .then(()=>{

                F.Aviso('Documento ELIMINADO exitosamente!!');
                btn.disabled = false;
                btn.innerHTML = `<i class="fal fa-trash"></i>`;

                tbl_movimientos();
            })
            .catch(()=>{

                F.AvisoError('No se pudo ELIMINAR');
                btn.disabled = false;
                btn.innerHTML = `<i class="fal fa-trash"></i>`;
                
            })


        }
    })

};




// -----------------------------
// EDICION DE DOCUMENTOS
// -----------------------------

function get_edicion_documento(sucursal,coddoc,correlativo,tipo){

    /*
        "SAL">SALIDA DE INVENTARIO TRASLADO
        "PRS">PRESTAMO DE HERRAMIENTA
    */
   _selected_empnit=sucursal;
   _selected_coddoc=coddoc;
   _selected_correlativo=correlativo;

    switch (tipo) {
        case 'ENT': //ENTRADA DE INVENTARIO
            cargar_entrada_bodega(sucursal,coddoc,correlativo);
            break;
        case 'CON': //SALIDA POR CONSUMO
            cargar_salida_consumo(sucursal,coddoc,correlativo);
            break;
        case 'SAL': //SALIDA POR TRASLADO
            cargar_salida_traslado(sucursal,coddoc,correlativo);
            break;
        case 'COM': //COMPRA
            cargar_compra(sucursal,coddoc,correlativo);
            break;
        
        default:
            F.AvisoError('Opcion en construccion');
            break;
    }


};


function listener_edicion_documentos_compras(){

    

    //carga el combo proveedores para edicion
    GF.data_select_proveedores()
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            str += `<option value='${r.CODPROV}'>${r.NIT}-${r.PROVEEDOR}</option>`; 
        })
        document.getElementById('cmb_edit_compra_proveedor').innerHTML = str;
    })
    .catch(()=>{
         document.getElementById('cmb_edit_compra_proveedor').innerHTML = "<option value='0'>SIN PROVEEDOR</option>";
    });




    document.getElementById('btn_editar_compra_guardar_proveedor').addEventListener('click',()=>{
        
        let btn = document.getElementById('btn_editar_compra_guardar_proveedor');
        let codprov = document.getElementById('cmb_edit_compra_proveedor').value;

        btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-save"></i>`;

        GF.update_campo_documento(_selected_empnit,_selected_coddoc,_selected_correlativo,'PROVEEDOR',codprov)
        .then(()=>{
            F.showToast('Proveedor actualizado');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
        
        })
        .catch(()=>{
            F.showToast('Proveedor NO ACTUALIZADO');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
     
        })
    
    });

    document.getElementById('btn_editar_compra_guardar_fel_serie').addEventListener('click',()=>{
        //txt_edit_compra_FEL_SERIE

        let btn = document.getElementById('btn_editar_compra_guardar_fel_serie');
        let valor = document.getElementById('txt_edit_compra_FEL_SERIE').value || '';

        btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-save"></i>`;

        GF.update_campo_documento(_selected_empnit,_selected_coddoc,_selected_correlativo,'FEL_SERIE',valor)
        .then(()=>{
            F.showToast('Serie FEL actualizada');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
        
        })
        .catch(()=>{
            F.showToast('Serie FEL NO ACTUALIZADA');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
     
        })

    });

    document.getElementById('btn_editar_compra_guardar_proveedor_fel_numero').addEventListener('click',()=>{
        //txt_edit_compra_FEL_NUMERO

         let btn = document.getElementById('btn_editar_compra_guardar_proveedor_fel_numero');
        let valor = document.getElementById('txt_edit_compra_FEL_NUMERO').value || '';

        btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-save"></i>`;

        GF.update_campo_documento(_selected_empnit,_selected_coddoc,_selected_correlativo,'FEL_NUMERO',valor)
        .then(()=>{
            F.showToast('Numero FEL actualizado');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
        
        })
        .catch(()=>{
            F.showToast('Numero FEL NO ACTUALIZADO');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
     
        })

    });

    document.getElementById('btn_editar_compra_guardar_fecha').addEventListener('click',()=>{
       
        let btn = document.getElementById('btn_editar_compra_guardar_fecha');
        let valor = F.devuelveFecha('txt_edit_compra_fecha');

        btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-save"></i>`;

        GF.update_campo_documento(_selected_empnit,_selected_coddoc,_selected_correlativo,'FECHA',valor)
        .then(()=>{
            F.showToast('Fecha actualizada');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
        
        })
        .catch(()=>{
            F.showToast('Fecha NO ACTUALIZADA');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
     
        })

    });



};
function listeners_edicion_entrada_bodega(){


    
    document.getElementById('btn_editar_entbod_guardar_proyecto').addEventListener('click',()=>{
        
        let btn = document.getElementById('btn_editar_entbod_guardar_proyecto');
        let codprov = document.getElementById('cmb_edit_entbod_proyecto').value;

        btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-save"></i>`;

        GF.update_campo_documento(_selected_empnit,_selected_coddoc,_selected_correlativo,'PROYECTO',codprov)
        .then(()=>{
            F.showToast('Proyecto/Area actualizado');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
        
        })
        .catch(()=>{
            F.showToast('Proyecto/Area NO ACTUALIZADO');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
     
        })
    
    });

    document.getElementById('btn_editar_entbod_guardar_fecha').addEventListener('click',()=>{
       
        let btn = document.getElementById('btn_editar_entbod_guardar_fecha');
        let valor = F.devuelveFecha('txt_edit_entbod_fecha');

        btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-save"></i>`;

        GF.update_campo_documento(_selected_empnit,_selected_coddoc,_selected_correlativo,'FECHA',valor)
        .then(()=>{
            F.showToast('Fecha actualizada');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
        
        })
        .catch(()=>{
            F.showToast('Fecha NO ACTUALIZADA');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
     
        })

    });



};
function listeners_salida_consumo_bodega(){


    
    document.getElementById('btn_editar_salcons_guardar_proyecto').addEventListener('click',()=>{
        
        let btn = document.getElementById('btn_editar_salcons_guardar_proyecto');
        let codprov = document.getElementById('cmb_edit_salcons_proyecto').value;

        btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-save"></i>`;

        GF.update_campo_documento(_selected_empnit,_selected_coddoc,_selected_correlativo,'PROYECTO',codprov)
        .then(()=>{
            F.showToast('Proyecto/Area actualizado');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
        
        })
        .catch(()=>{
            F.showToast('Proyecto/Area NO ACTUALIZADO');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
     
        })
    
    });

    document.getElementById('btn_editar_salcons_guardar_fecha').addEventListener('click',()=>{
       
        let btn = document.getElementById('btn_editar_salcons_guardar_fecha');
        let valor = F.devuelveFecha('txt_edit_salcons_fecha');

        btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-save"></i>`;

        GF.update_campo_documento(_selected_empnit,_selected_coddoc,_selected_correlativo,'FECHA',valor)
        .then(()=>{
            F.showToast('Fecha actualizada');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
        
        })
        .catch(()=>{
            F.showToast('Fecha NO ACTUALIZADA');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
     
        })

    });



};
function listeners_salida_traslado_bodega(){


    
    document.getElementById('btn_editar_saltras_guardar_proyecto').addEventListener('click',()=>{
        
        let btn = document.getElementById('btn_editar_saltras_guardar_proyecto');
        let codprov = document.getElementById('cmb_edit_saltras_proyecto').value;

        btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-save"></i>`;

        GF.update_campo_documento(_selected_empnit,_selected_coddoc,_selected_correlativo,'PROYECTO',codprov)
        .then(()=>{
            F.showToast('Proyecto/Area actualizado');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
        
        })
        .catch(()=>{
            F.showToast('Proyecto/Area NO ACTUALIZADO');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
     
        })
    
    });

    document.getElementById('btn_editar_saltras_guardar_fecha').addEventListener('click',()=>{
       
        let btn = document.getElementById('btn_editar_saltras_guardar_fecha');
        let valor = F.devuelveFecha('txt_edit_saltras_fecha');

        btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-save"></i>`;

        GF.update_campo_documento(_selected_empnit,_selected_coddoc,_selected_correlativo,'FECHA',valor)
        .then(()=>{
            F.showToast('Fecha actualizada');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
        
        })
        .catch(()=>{
            F.showToast('Fecha NO ACTUALIZADA');
            btn.disabled=false;btn.innerHTML=`<i class="fal fa-save"></i>`;
     
        })

    });



};
function cargar_proyectos(sucursal){
    
    return new Promise((resolve,reject)=>{

            let tipo = document.getElementById('cmbTipo').value;
            let idcontainer ='';

            switch (tipo) {
                case 'ENT': //ENTRADA A BODEGA
                    idcontainer = 'cmb_edit_entbod_proyecto';
                    break;
                case 'CON': //SALIDA POR CONSUMO
                    idcontainer = '';
                    break;
                case 'SAL': //TRASLADO SALIDA A OTRA BODEGA
                    idcontainer = '';
                    break;
            }

            //cargando proyectos
            GF.data_listado_proyectos(sucursal)
            .then((data)=>{
                
                let str = '';

                data.recordset.map((r)=>{
                    str += `
                    <option value='${r.CODPROYECTO}'>${r.NOMPROYECTO}</option>
                    `
                })
                document.getElementById(idcontainer).innerHTML = str;
                resolve();

            })
            .catch(()=>{
                document.getElementById(idcontainer).innerHTML = "<option value='0'>Sin areas/proyectos cargados</option>";
                reject();
            });

    });

    

};



function eliminar_item_documento(coddoc,correlativo,iditem,idbtn,idrowtabla){


    let btn = document.getElementById(idbtn);

  
    
    F.Confirmacion('¿Está seguro que desea ELIMINAR este item?')
    .then((value)=>{
        if(value==true){

                btn.disabled = true;
                btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;

                GF.delete_item_documento(_selected_empnit,coddoc,correlativo,iditem)
                .then(()=>{
                    F.showToast('Item eliminado exitosamente!!');
                    document.getElementById(idrowtabla).remove();
                })
                .catch(()=>{
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fal fa-trash"></i>`;
    
                })


        }
    })

    


};



function cargar_compra(sucursal,coddoc,correlativo){

  
        $("#modal_editar_compra").modal('show');
      
        
        let container = document.getElementById('tbl_data_edit_compra');
        container.innerHTML = GlobalLoader;

        GF.data_detalle_documento(sucursal,coddoc,correlativo)
        .then((data)=>{
                
                let str = '';
                let _codprov = '';
                let _fecha = '';
                let _fel_serie=''; let _fel_numero='';
                let _obs = '';

                data.recordset.map((r)=>{
                    let idBtnEliminar = `idBtnEliminarItem${r.ID}`;
                    let idrowtabla = `row_compras_${r.ID}`;
                    str += `
                    <tr id="${idrowtabla}">
                        <td>${r.CODPROD}</td>
                        <td>${r.DESPROD}</td>
                        <td>${r.CANTIDAD}</td>
                        <td>${F.setMoneda(r.COSTO,'Q')}</td>
                        <td>${F.setMoneda(r.TOTALCOSTO,'Q')}</td>
                        <td>

                        </td>
                        <td>
                            <button class="btn btn-danger btn-md btn-circle hand shadow"
                            onclick="eliminar_item_documento('${coddoc}','${correlativo}','${r.ID}','${idBtnEliminar}','${idrowtabla}')"
                            id="${idBtnEliminar}">
                                <i class="fal fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    `
                    _codprov = r.CODPROV;
                    _fecha = r.FECHA;
                    _obs = r.OBS;
                    _fel_serie = r.FEL_SERIE;
                    _fel_numero = r.FEL_NUMERO;

                });

                container.innerHTML = str;
                
                document.getElementById('cmb_edit_compra_proveedor').value = _codprov;
               
                document.getElementById('txt_edit_compra_coddoc').value = coddoc;
                document.getElementById('txt_edit_compra_correlativo').value = correlativo;
                document.getElementById('txt_edit_compra_obs').value = F.limpiarTexto(_obs);
                document.getElementById('txt_edit_compra_fecha').value = _fecha.replace('T00:00:00.000Z',''); //F.convertDateNormal(_fecha);
                document.getElementById('txt_edit_compra_FEL_SERIE').value = _fel_serie;
                document.getElementById('txt_edit_compra_FEL_NUMERO').value = _fel_numero;
                
        })
        .catch((err)=>{

            console.log(err);

            container.innerHTML = 'No se cargaron datos...';

            document.getElementById('cmb_edit_compra_proveedor').value = '';
            document.getElementById('txt_edit_compra_fecha').value = F.getFecha();
            document.getElementById('txt_edit_compra_coddoc').value = '';
            document.getElementById('txt_edit_compra_correlativo').value = '';
            document.getElementById('txt_edit_compra_obs').value = ''; 
            document.getElementById('txt_edit_compra_FEL_SERIE').value = '';
            document.getElementById('txt_edit_compra_FEL_NUMERO').value = '';
             
        })


   
};
function cargar_entrada_bodega(sucursal,coddoc,correlativo){

  
        $("#modal_editar_entrada_bodega").modal('show');
      
        
        let container = document.getElementById('tbl_data_edit_entrada_bodega');
        container.innerHTML = GlobalLoader;

        

        GF.data_detalle_documento(sucursal,coddoc,correlativo)
        .then((data)=>{
                
                let str = '';
                let _codprov = '';
                let _fecha = '';
                let _recibe=''; 
                let _obs = '';

                data.recordset.map((r)=>{
                    let idBtnEliminar = `idBtnEliminarItemEntBod${r.ID}`;
                    let idrowtabla = `row_entbod_${r.ID}`;
                    str += `
                    <tr id="${idrowtabla}">
                        <td>${r.CODPROD}</td>
                        <td>${r.DESPROD}</td>
                        <td>${r.CANTIDAD}</td>
                        <td>${F.setMoneda(r.COSTO,'Q')}</td>
                        <td>${F.setMoneda(r.TOTALCOSTO,'Q')}</td>
                        <td>

                        </td>
                        <td>
                            <button class="btn btn-danger btn-md btn-circle hand shadow"
                            onclick="eliminar_item_documento('${coddoc}','${correlativo}','${r.ID}','${idBtnEliminar}','${idrowtabla}')"
                            id="${idBtnEliminar}">
                                <i class="fal fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    `
                    _codprov = r.CODPROYECTO;
                    _fecha = r.FECHA;
                    _obs = r.OBS;
                    _recibe = r.RECIBE;
                   
                });

                container.innerHTML = str;
                
                cargar_proyectos(sucursal)
                .then(()=>{
                    document.getElementById('cmb_edit_entbod_proyecto').value = _codprov;
                });
                
                document.getElementById('txt_edit_entbod_coddoc').value = coddoc;
                document.getElementById('txt_edit_entbod_correlativo').value = correlativo;
                document.getElementById('txt_edit_entbod_obs').value = F.limpiarTexto(_obs);
                document.getElementById('txt_edit_entbod_fecha').value = _fecha.replace('T00:00:00.000Z',''); 
                document.getElementById('txt_edit_entbod_recibe').value = _recibe;
        })
        .catch((err)=>{

            console.log(err);

            container.innerHTML = 'No se cargaron datos...';

            document.getElementById('cmb_edit_entbod_proyecto').value = '';
            document.getElementById('txt_edit_entbod_coddoc').value = '';
            document.getElementById('txt_edit_entbod_correlativo').value = '';
            document.getElementById('txt_edit_entbod_obs').value ='';
            document.getElementById('txt_edit_entbod_fecha').value = ''; 
            document.getElementById('txt_edit_entbod_recibe').value = '';
             
        })


   
};
function cargar_salida_consumo(sucursal,coddoc,correlativo){

  
        $("#modal_editar_salida_consumo").modal('show');
      
        
        let container = document.getElementById('tbl_data_edit_salcons');
        container.innerHTML = GlobalLoader;

        

        GF.data_detalle_documento(sucursal,coddoc,correlativo)
        .then((data)=>{
                
                let str = '';
                let _codprov = '';
                let _fecha = '';
                let _recibe=''; 
                let _obs = '';

                data.recordset.map((r)=>{
                    let idBtnEliminar = `idBtnEliminarItemSalCon${r.ID}`;
                    let idrowtabla = `row_salcons_${r.ID}`;
                    str += `
                    <tr id="${idrowtabla}">
                        <td>${r.CODPROD}</td>
                        <td>${r.DESPROD}</td>
                        <td>${r.CANTIDAD}</td>
                        <td>${F.setMoneda(r.COSTO,'Q')}</td>
                        <td>${F.setMoneda(r.TOTALCOSTO,'Q')}</td>
                        <td>

                        </td>
                        <td>
                            <button class="btn btn-danger btn-md btn-circle hand shadow"
                            onclick="eliminar_item_documento('${coddoc}','${correlativo}','${r.ID}','${idBtnEliminar}','${idrowtabla}')"
                            id="${idBtnEliminar}">
                                <i class="fal fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    `
                    _codprov = r.CODPROYECTO;
                    _fecha = r.FECHA;
                    _obs = r.OBS;
                    _recibe = r.RECIBE;
                   
                });

                container.innerHTML = str;
                
                cargar_proyectos(sucursal)
                .then(()=>{
                    document.getElementById('cmb_edit_salcons_proyecto').value = _codprov;
                });
                
                document.getElementById('txt_edit_salcons_coddoc').value = coddoc;
                document.getElementById('txt_edit_salcons_correlativo').value = correlativo;
                document.getElementById('txt_edit_salcons_obs').value = F.limpiarTexto(_obs);
                document.getElementById('txt_edit_salcons_fecha').value = _fecha.replace('T00:00:00.000Z',''); 
                document.getElementById('txt_edit_salcons_recibe').value = _recibe;
        })
        .catch((err)=>{

            console.log(err);

            container.innerHTML = 'No se cargaron datos...';

            document.getElementById('cmb_edit_salcons_proyecto').value = '';
            document.getElementById('txt_edit_salcons_coddoc').value = '';
            document.getElementById('txt_edit_salcons_correlativo').value = '';
            document.getElementById('txt_edit_salcons_obs').value ='';
            document.getElementById('txt_edit_salcons_fecha').value = ''; 
            document.getElementById('txt_edit_salcons_recibe').value = '';
             
        })


   
};
function cargar_salida_traslado(sucursal,coddoc,correlativo){

  
        $("#modal_editar_salida_traslado").modal('show');
      
        
        let container = document.getElementById('tbl_data_edit_saltras');
        container.innerHTML = GlobalLoader;

        

        GF.data_detalle_documento(sucursal,coddoc,correlativo)
        .then((data)=>{
                
                let str = '';
                let _codprov = '';
                let _fecha = '';
                let _recibe=''; 
                let _obs = '';

                data.recordset.map((r)=>{
                    let idBtnEliminar = `idBtnEliminarItemSalTras${r.ID}`;
                    let idrowtabla = `row_saltras_${r.ID}`;
                    str += `
                    <tr id="${idrowtabla}">
                        <td>${r.CODPROD}</td>
                        <td>${r.DESPROD}</td>
                        <td>${r.CANTIDAD}</td>
                        <td>${F.setMoneda(r.COSTO,'Q')}</td>
                        <td>${F.setMoneda(r.TOTALCOSTO,'Q')}</td>
                        <td>

                        </td>
                        <td>
                            <button class="btn btn-danger btn-md btn-circle hand shadow"
                            onclick="eliminar_item_documento('${coddoc}','${correlativo}','${r.ID}','${idBtnEliminar}','${idrowtabla}')"
                            id="${idBtnEliminar}">
                                <i class="fal fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    `
                    _codprov = r.CODPROYECTO;
                    _fecha = r.FECHA;
                    _obs = r.OBS;
                    _recibe = r.RECIBE;
                   
                });

                container.innerHTML = str;
                
                cargar_proyectos(sucursal)
                .then(()=>{
                    document.getElementById('cmb_edit_saltras_proyecto').value = _codprov;
                });
                
                document.getElementById('txt_edit_saltras_coddoc').value = coddoc;
                document.getElementById('txt_edit_saltras_correlativo').value = correlativo;
                document.getElementById('txt_edit_saltras_obs').value = F.limpiarTexto(_obs);
                document.getElementById('txt_edit_saltras_fecha').value = _fecha.replace('T00:00:00.000Z',''); 
                document.getElementById('txt_edit_saltras_recibe').value = _recibe;
        })
        .catch((err)=>{

            console.log(err);

            container.innerHTML = 'No se cargaron datos...';

            document.getElementById('cmb_edit_saltras_proyecto').value = '';
            document.getElementById('txt_edit_saltras_coddoc').value = '';
            document.getElementById('txt_edit_saltras_correlativo').value = '';
            document.getElementById('txt_edit_saltras_obs').value ='';
            document.getElementById('txt_edit_saltras_fecha').value = ''; 
            document.getElementById('txt_edit_saltras_recibe').value = '';
             
        })


   
};



// -----------------------------
// EDICION DE DOCUMENTOS
// -----------------------------
