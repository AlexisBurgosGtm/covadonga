
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_datos_documento()}
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
                <div class="col-sm-12 col-md-6 col-lg-5 col-xl-4">
                    ${view.frag_generales()}
                </div>
                <div class="col-sm-12 col-md-6 col-lg-7 col-xl-8">
                    ${view.frag_tipodocumentos()}
                </div>
            </div>
            

            <button class="btn btn-bottom-r btn-success btn-circle btn-xl hand shadow" 
            id="btnNuevoDocumento">
                <i class="fal fa-plus"></i>
            </button>
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
                                    <td>TIPO</td>
                                    <td>DESCRIPCION</td>
                                    <td>SERIE</td>
                                    <td>CORRELATIVO</td>
                                    <td>INV</td>
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
        modal_datos_documento:()=>{
            return `
              <div id="modal_datos_documento" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                TITULO
                            </h4>
                        </div>
                        <div class="modal-body p-2">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">

                                    <div class="form-group">
                                        <label class="negrita text-base">A</label>
                                        <input type="text" class="form-control" id="txt">
                                    </div>

                                     <div class="form-group">
                                        <label class="negrita text-base">A</label>
                                        <input type="text" class="form-control" id="txt">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-base">A</label>
                                        <input type="text" class="form-control" id="txt">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-base">A</label>
                                        <input type="text" class="form-control" id="txt">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-base">A</label>
                                        <input type="text" class="form-control" id="txt">
                                    </div>



                                    <div class="row">
                                        <div class="col-6">
                                            <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                                <i class="fal fa-arrow-left"></i>
                                            </button>
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-info btn-circle btn-xl hand shadow" id="btnGuardar">
                                                <i class="fal fa-save"></i>
                                            </button>
                                        </div>
                                        
                                    </div>

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

    F.slideAnimationTabs();


    tbl_tipodocumentos();


    let btnNuevoDocumento = document.getElementById('btnNuevoDocumento');
    btnNuevoDocumento.addEventListener('click',()=>{

        clean_data();

        $("#modal_datos_documento").modal('show');



    });



    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{



    });



};

function initView(){

    getView();
    addListeners();

};



function clean_data(){


};

function tbl_tipodocumentos(){

    let container = document.getElementById('tblDataTipodocumentos');

    container.innerHTML = GlobalLoader;


    GF.data_select_tipodocumentos('')
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{

            let idbtnHabilitado = `idbtnHabilitado${r.ID}`;
            let idbtnEliminar = `idbtnEliminar${r.ID}`;
            let strClassHabilitado = '';
            if(r.HABILITADO=='SI'){strClassHabilitado='btn-success'}else{strClassHabilitado='btn-danger'};

            str += `
                <tr>
                    <td>${r.TIPODOC}</td>
                    <td>${r.DESCRIPCION}</td>
                    <td>${r.CODDOC}</td>
                    <td>${r.CORRELATIVO}</td>
                    <td>${r.INV}</td>
                    <td>
                        <button class="btn btn-md ${strClassHabilitado} btn-circle hand shadow" 
                        id="${idbtnHabilitado}"
                        onclick="update_status_documento('${r.ID}','${r.HABILITADO}','${idbtnHabilitado}')">
                            <i class="fal fa-sync"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-md btn-danger btn-circle hand shadow" 
                        id="${idbtnEliminar}"
                        onclick="eliminar_documento('${r.ID}','${idbtnEliminar}')">
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

function update_status_documento(id,status,idbtn){

    let btn = document.getElementById(idbtn);
    let strMsn = ''; let newST = '';


    if(status=='SI'){
        strMsn = '¿Está seguro que desea DESHABILITAR este Documento?';
        newST = 'NO';
    }else{
        strMsn = '¿Está seguro que desea HABILITAR este Documento?';
        newST = 'SI';
    };

    F.Confirmacion(strMsn)
    .then((value)=>{
        if(value==true){

            btn.disabled = true;
            btn.innerHTML = `<i class="fa fa-sync fa-spin"></i>`;

            GF.update_status_tipodocumento(id,newST)
            .then(()=>{

                F.Aviso('Status cambiado exitosamente!!');
                btn.disabled = false;
                btn.innerHTML = `<i class="fa fa-sync"></i>`;
                tbl_tipodocumentos();
            })
            .catch(()=>{
                F.AvisoError('No se pudo actualizar')
                btn.disabled = false;
                btn.innerHTML = `<i class="fa fa-sync"></i>`;
            })

        }
    })


};


function eliminar_documento(id,idbtn){


    let btn = document.getElementById(idbtn);


    F.Confirmacion('¿Está seguro que desea ELIMINAR este Documento?')
    .then((value)=>{
        if(value==true){

                btn.disabled = true;
                btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;

                GF.delete_tipodocumento(id)
                .then(()=>{
                    F.Aviso('Documento eliminado exitosamente!!');
                    tbl_tipodocumentos();
                })
                .catch(()=>{
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fal fa-trash"></i>`;
                    F.AvisoError('No se pudo Eliminar, quizas ya posee movimientos, deshabilitelo en su lugar');
                })

        }
    })


};