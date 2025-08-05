
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_detalle_documento()}
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
                                <select class="negrita text-danger form-control" id="cmbTipo">
                                    <option value="ENT">ENTRADA DE INVENTARIO</option>
                                    <option value="SAL">SALIDA DE INVENTARIO</option>
                                    <option value="CON">SALIDA POR CONSUMO</option>
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
                        
                        <div class="form-group">
                            <label class="text-secondary negrita">Escriba para buscar...</label>
                            <input type="text" class="form-control negrita text-secondary border-base"
                            placeholder="Escriba para buscar..."
                            id="txtBuscar"
                            oninput="F.FiltrarTabla('tblDocumentos','txtBuscar')">
                        </div>

                        <table class="table table-responsive table-hover col-12" id="tblDocumentos">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>BODEGA</td>
                                    <td>DOCUMENTO</td>
                                    <td>FECHA</td>
                                    <td>RECIBE/SOLICITA</td>
                                    <td>FECHA RECIBIDO / ORIGEN</td>
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
                    <br>
                    <small class="negrita">${r.SOLICITA}</small>
                </td>
                <td>${F.convertDateNormal(r.FECHA_RECIBE)}
                    <br>
                    <small class="negrita">${r.EMPRESA_ORIGEN}</small>
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
                    <button class="btn btn-info btn-md btn-circle hand shadow">
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
                        <td>${r.DESPROD}</td>
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