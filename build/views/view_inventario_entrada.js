
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
                            ${view.movimiento_salida()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.movimiento_entrada()}
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
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                         
                            <div class="form-group">
                                <label class="negrita text-secondary">Tipo Movimiento</label>
                                <select class="negrita text-danger form-control" id="cmbMovimiento">
                                    <option value="ENT">ENTRADA DE INVENTARIO</option>
                                    <option value="SAL">SALIDA DE INVENTARIO</option>
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
                                    <td>EMPRESA</td>
                                    <td>BODEGA</td>
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

          

            <button class="btn btn-success btn-xl btn-circle btn-bottom-r hand shadow" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button>
            `
        },
        movimiento_salida: ()=>{
            return `
            
            <div class="card card-rounded col-12">
                <div class="card-body p-2">

                    <h4 class="negrita text-danger">Nueva Salida de Inventario</h4>
                    <div class="row">
                        <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">

                            <div class="form-group">
                                <label class="negrita">Empresa</label>
                                <select class="form-control negrita" id="cmbEmpresaS">
                                </select>

                                <label class="negrita">Proyecto / Area</label>
                                <select class="form-control negrita" id="cmbProyectoS">
                                </select>
                            </div>

                           

                            <div class="form-group">

                                <label class="negrita">Persona que Recibe</label>
                                <select class="form-control negrita"  id="cmbRecibeS">
                                </select>

                                 <label class="negrita">Persona que Solicita</label>
                                <select class="form-control negrita"  id="cmbSolicitaS">
                                </select>

                            </div>

                        

                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        
                            <div class="form-group">
                                <label class="negrita">Fecha Despacho</label>
                                <input type="date" class="form-control negrita" id="txtFechaS">
                                
                            </div>

                            <div class="form-group">
                                <label class="negrita">Hora</label>
                                <input type="text" class="form-control negrita" id="txtHoraS" disabled="true">
                                
                            </div>
                        
                        </div>
                    </div>

                </div>
            </div>


            <br>
            <div class="card card-rounded col-12">
                <div class="card-body p-4">



                </div>
            </div>
            <div class="card card-rounded col-12">
                <div class="card-body p-4">



                </div>
            </div>
            
            
            <button class="btn btn-secondary btn-xl btn-circle btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-arrow-left"></i>
            </button>

            <button class="btn btn-info btn-xl btn-circle btn-bottom-r hand shadow" id="btnGuardarS">
                <i class="fal fa-save"></i>
            </button>
            `
        },
        movimiento_entrada: ()=>{
            return `
            
            <div class="card card-rounded col-12">
                <div class="card-body p-2">

                    <h4 class="negrita text-danger">Nueva Entrada de Inventario</h4>
                    <div class="row">
                        <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">

                            <div class="form-group">
                                <label class="negrita">Empresa</label>
                                <select class="form-control negrita" id="cmbEmpresaE">
                                </select>

                                <label class="negrita">Proyecto / Area</label>
                                <select class="form-control negrita" id="cmbProyectoE">
                                </select>
                            </div>
                           
                            <div class="form-group">
                                <label class="negrita">Persona que Recibe</label>
                                <select class="form-control negrita"  id="cmbRecibeE">
                                </select>                               
                            </div>
                        

                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        
                            <div class="form-group">
                                <label class="negrita">Fecha Despacho</label>
                                <input type="date" class="form-control negrita" id="txtFechaE">           
                            </div>

                            <div class="form-group">
                                <label class="negrita">Hora</label>
                                <input type="text" class="form-control negrita" id="txtHoraE" disabled="true">
                            </div>
                        
                        </div>
                    </div>

                </div>
            </div>

            <br>
            <div class="card card-rounded col-12">
                <div class="card-body p-2">



                </div>
            </div>
            
            
            <button class="btn btn-secondary btn-xl btn-circle btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-arrow-left"></i>
            </button>

            <button class="btn btn-info btn-xl btn-circle btn-bottom-r hand shadow" id="btnGuardarE">
                <i class="fal fa-save"></i>
            </button>
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


    F.slideAnimationTabs();


    F.get_combo_meses('cmbMes');
    F.get_combo_anios('cmbAnio');


    document.getElementById('txtFechaS').value = F.getFecha();
    document.getElementById('txtHoraS').value = F.getHora();
    document.getElementById('txtFechaE').value = F.getFecha();
    document.getElementById('txtHoraE').value = F.getHora();


    setInterval(() => {
        document.getElementById('txtHoraS').value = F.getHora();
        document.getElementById('txtHoraE').value = F.getHora()
    }, 10000);

   


    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{

        let movinv = document.getElementById('cmbMovimiento').value;

        if(movinv=='ENT'){
            document.getElementById('tab-tres').click();
        }else{
            document.getElementById('tab-dos').click();
        }
        
        clean_data();
            
    });




    tbl_movimientos();



};

function initView(){

    getView();
    addListeners();

};



function clean_data(){

};



function tbl_movimientos(){

    let mes = document.getElementById('cmbMes').value;
    let anio = document.getElementById('cmbAnio').value;
    let movinv = document.getElementById('cmbMovimiento').value;







};