
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
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-4">

                    <div class="row">
                        <div class="col-4">
                            <img src="./favicon.png" width="100px" height="100px">
                        </div>
                        <div class="col-8">
                            <br>
                            <h3 class="negrita text-danger">CONFIGURACIONES</h3>
                            <small class="negrita text-base">Opciones generales</small>
                        </div>
                    </div>                    

                </div>
            </div>

            <br>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    ${view.frag_generales()}
                </div>
                <div class="col-sm-12 col-md-6 col-lg-8 col-xl-8">
                    ${view.frag_tipodocumentos()}
                </div>
            </div>
            
            `
        },
        frag_generales:()=>{
            return `
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-4">

                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <h5 class="text-base">¿Permite venta sin existencia?</h5>
                                </td>
                                <td>
                                    <select class="form-control negrita text-danger" id="cmbExistencia">
                                        <option value='SI'>SI</option>
                                        <option value='NO'>NO</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h5 class="text-base">¿opcion 2?</h5>
                                </td>
                                <td>
                                    <select class="form-control negrita text-danger" id="cmb">
                                        <option value='SI'>SI</option>
                                        <option value='NO'>NO</option>
                                    </select>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                 
                                        
                </div>
            </div>
            `
        },
        frag_tipodocumentos:()=>{
            return `
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-4">
                    
                    <h3 class="negrita text-base">Tipo de Documentos</h3>

                    <div class="table-responsive col-12">
                        <table class="table table-bordered h-full" id="tblTipodocumentos">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>Tipo</td>
                                    <td>Serie</td>
                                    <td>Correlativo</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataTipodocumentos"></tbody>
                        </table>
                    </div>

                                        

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

};

function initView(){

    getView();
    addListeners();

};


