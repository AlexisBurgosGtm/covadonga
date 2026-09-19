
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_datos()}
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

                    <h3 class="negrita text-danger">Listado de Proyectos</h3>

                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>BODEGA</td>
                                    <td>AREA</td>
                                    <td>EDITAR</td>
                                    <td>ACTIVA</td>
                                    <td>ELIMINAR</td>
                                </tr>
                            </thead>
                            <tbody id="tblDataProyectos">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button class="btn btn-circle btn-xl btn-success btn-bottom-r hand shadow" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button>

            `
        },
        modal_datos:()=>{
            return `
              <div id="modal_datos" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Detalles del Proyecto
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">
                                    
                                 

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Bodega</label>
                                        <select class="negrita text-danger form-control" id="cmbEmpresa"></select>
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Nombre del Area</label>
                                        <input type="text" class="negrita text-danger form-control" id="txtDescripcion">
                                    </div>


                                    <br>
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
                                        <input type="number" class="hidden negrita text-danger form-control" id="txtCodigo">
                                    <br>

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

    
    document.title = 'GESTION DE AREAS/PROYECTOS';

    document.getElementById('btnNuevo').addEventListener('click',()=>{
        $("#modal_datos").modal('show');

        clean_data();
    })


     //cargando empresas
    GF.data_listado_empresas()
    .then((data)=>{
        
        let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value='${r.EMPNIT}'>${r.EMPRESA}</option>
            `
        })
      
        document.getElementById('cmbEmpresa').innerHTML = str;
        
    })
    .catch(()=>{
        document.getElementById('cmbEmpresa').innerHTML = "<option value=''>No se cargaron las empresas</option>";
    });
    //cargando empresas


    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{

      
        let empnit = document.getElementById('cmbEmpresa').value;
        let nombre = document.getElementById('txtDescripcion').value || '';
       

        if(nombre==''){F.AvisoError('Indique un nombre del Proyecto');return;}


        F.Confirmacion('¿Está seguro que desea GUARDAR esta nuevo Proyecto?')
        .then((value)=>{
            if(value==true){

                btnGuardar.disabled = true;
                btnGuardar.innerHTML = `<i class="fal fa-save fa-spin"></i>`;


                    if(document.getElementById('txtCodigo').disabled==true){
                       //edita
                       let codigo = document.getElementById('txtCodigo').value;

                        GF.edit_proyecto(empnit,codigo,nombre)
                        .then(()=>{
                            $("#modal_datos").modal('hide');
                            tbl_proyectos();
                            F.Aviso('Proyecto actualizado exitosamente!!');
                            btnGuardar.disabled = false;
                            btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                        })
                        .catch(()=>{
                            F.AvisoError('No se pudo actualizar');
                            btnGuardar.disabled = false;
                            btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;
            
                        })



                    }else{
                         //guarda
                        GF.insert_proyecto(empnit,nombre)
                        .then(()=>{
                            $("#modal_datos").modal('hide');
                            tbl_proyectos();
                            F.Aviso('Proyecto creado exitosamente!!');
                            btnGuardar.disabled = false;
                            btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                        })
                        .catch(()=>{
                            F.AvisoError('No se pudo guardar');
                            btnGuardar.disabled = false;
                            btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                        })
                        
                        
                    }


            }
        })


    });



    tbl_proyectos();


};

function initView(){

    getView();
    addListeners();

};


function clean_data(){


    document.getElementById('txtCodigo').disabled = false;

    document.getElementById('txtCodigo').value ='';
    document.getElementById('txtDescripcion').value ='';

};

function tbl_proyectos(){

    let container = document.getElementById('tblDataProyectos');
    container.innerHTML = GlobalLoader;

    GF.data_listado_proyectos_todos()
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            let idbtnDelete = `btnDelete${r.CODPROYECTO}`; 
            let idbtnDesactivar = `btnDesactivar${r.CODPROYECTO}`; 
            
            str += `
            <tr>
                <td>${r.EMPRESA}</td>
                 <td>${r.NOMPROYECTO}</td>
                <td>
                    <button class="btn btn-circle btn-info btn-md hand shadow"
                     onclick="editar_proyecto('${r.CODPROYECTO}','${r.NOMPROYECTO}','${r.EMPNIT}')">
                        <i class="fal fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-warning btn-md hand shadow"
                    onclick="deshabilitar_proyecto('${r.CODPROYECTO}','${r.HABILITADO}','${idbtnDesactivar}')"
                    id="${idbtnDesactivar}">
                        ${r.HABILITADO}
                    </button>
                </td>
                <td>
                    <button class="btn btn-circle btn-danger btn-md hand shadow"
                    onclick="eliminar_proyecto('${r.CODPROYECTO}','${idbtnDelete}')"
                    id="${idbtnDelete}">
                        <i class="fal fa-trash"></i>
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



function eliminar_proyecto(codigo,idbtn){

    let btn = document.getElementById(idbtn);

    F.Confirmacion('¿Está seguro que desea ELIMINAR esta Proyecto ?')
    .then((value)=>{
        if(value==true){


            btn.disabled = true;
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;

            GF.delete_proyecto(codigo)
            .then(()=>{
                F.Aviso('Proyecto eliminado exitosamente!!');
                tbl_proyectos();
            })
            .catch(()=>{
                F.AvisoError('No se pudo Eliminar');
                btn.disabled = false;
                btn.innerHTML = `<i class="fal fa-trash"></i>`;
            })


        }
    })


};

function deshabilitar_proyecto(codigo,st,idbtn){

    let btn = document.getElementById(idbtn);

    let strMsn = '';
    let newSt = ''

    if(st=='SI'){
        strMsn = "¿Está seguro que desea DESACTIVAR este Proyecto?"
        newSt = "NO" 
    }else{
        strMsn = "¿Está seguro que desea ACTIVAR este Proyecto?"
        newSt = "SI"
    }

    F.Confirmacion(strMsn)
    .then((value)=>{
        if(value==true){

            btn.disabled = true;
            F.showToast('Actualizando...');

            GF.update_proyecto_status(codigo,newSt)
            .then(()=>{
                F.Aviso('Proyecto actualizado exitosamente!!')
                tbl_proyectos();
            })
            .catch(()=>{
                F.AvisoError('No se pudo Actualizar');
                 btn.disabled = false;
        
            })


        }
    })

};

function editar_proyecto(codigo,proyecto,empnit){

    $("#modal_datos").modal('show');

    document.getElementById('txtCodigo').disabled = true;
    document.getElementById('txtCodigo').value = codigo;
    document.getElementById('txtDescripcion').value = proyecto;
    document.getElementById('cmbEmpresa').value = empnit


};