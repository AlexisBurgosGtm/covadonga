
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

                    <h3 class="negrita text-danger">Listado de Bodegas</h3>

                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>CODIGO</td>
                                    <td>BODEGA</td>
                                    <td>TIPO</td>
                                    <td>EDITAR</td>
                                    <td>ACTIVA</td>
                                    <td>ELIMINAR</td>
                                </tr>
                            </thead>
                            <tbody id="tblDataEmpresas">
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
                                Detalles de la Bodega
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">
                                    
                                    <div class="form-group">
                                        <label class="negrita text-secondary">Codigo</label>
                                        <input type="text" class="negrita text-danger form-control" id="txtEmpnit">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Bodega</label>
                                        <input type="text" class="negrita text-danger form-control" id="txtEmpnombre">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Tipo</label>
                                        <select class="negrita text-danger form-control" id="cmbTipo">
                                            <option value='BODEGAS'>BODEGAS</option>
                                            <option value='EMPLEADOS'>EMPLEADOS</option>
                                        </select>
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


    document.title = 'GESTION DE BODEGAS';

    document.getElementById('btnNuevo').addEventListener('click',()=>{
        $("#modal_datos").modal('show');

        clean_data();
    })



    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{

        let empnit = document.getElementById('txtEmpnit').value || '';
        let empresa = document.getElementById('txtEmpnombre').value || '';
        let tipo = document.getElementById('cmbTipo').value;
       

        if(empnit==''){F.AvisoError('Indique un codigo de Empresa/Bodega');return;}
        if(empresa==''){F.AvisoError('Indique un nombre de Empresa/Bodega');return;}


        F.Confirmacion('¿Está seguro que desea GUARDAR esta nueva Empresa/Bodega?')
        .then((value)=>{
            if(value==true){

                btnGuardar.disabled = true;
                btnGuardar.innerHTML = `<i class="fal fa-save fa-spin"></i>`;


                    if(document.getElementById('txtEmpnit').disabled==true){
                       //edita
                        GF.edit_empresa(empnit,empresa,tipo)
                        .then(()=>{
                            $("#modal_datos").modal('hide');
                            tbl_empresas();
                            F.Aviso('Empresa/Bodega actualizada exitosamente!!');
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
                        GF.insert_empresa(empnit,empresa,tipo)
                        .then(()=>{
                            $("#modal_datos").modal('hide');
                            tbl_empresas();
                            F.Aviso('Empresa/Bodega creada exitosamente!!');
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



    tbl_empresas();


};

function initView(){

    getView();
    addListeners();

};


function clean_data(){


    document.getElementById('txtEmpnit').disabled = false;

    document.getElementById('txtEmpnit').value ='';
    document.getElementById('txtEmpnombre').value ='';

};

function tbl_empresas(){

    let container = document.getElementById('tblDataEmpresas');
    container.innerHTML = GlobalLoader;

    GF.data_listado_empresas_todas()
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            let idbtnDelete = `btnDelete${r.EMPNIT}`; 
            let idbtnDesactivar = `btnDesactivar${r.EMPNIT}`; 
            
            str += `
            <tr>
                <td>${r.EMPNIT}</td>
                <td>${r.EMPRESA}</td>
                <td>${r.TIPO}</td>
                <td>
                    <button class="btn btn-circle btn-info btn-md hand shadow"
                     onclick="editar_empresa('${r.EMPNIT}','${r.EMPRESA}','${r.TIPO}')">
                        <i class="fal fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-warning btn-md hand shadow"
                    onclick="deshabilitar_empresa('${r.EMPNIT}','${r.HABILITADO}','${idbtnDesactivar}')"
                    id="${idbtnDesactivar}">
                        ${r.HABILITADO}
                    </button>
                </td>
                <td>
                    <button class="btn btn-circle btn-danger btn-md hand shadow"
                    onclick="eliminar_empresa('${r.EMPNIT}','${idbtnDelete}')"
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



function eliminar_empresa(empnit,idbtn){

    let btn = document.getElementById(idbtn);

    F.Confirmacion('¿Está seguro que desea ELIMINAR esta Empresa/Bodega ?')
    .then((value)=>{
        if(value==true){


            btn.disabled = true;
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;

            GF.delete_empresa(empnit)
            .then(()=>{
                F.Aviso('Empresa eliminada exitosamente!!');
                tbl_empresas();
            })
            .catch(()=>{
                F.AvisoError('No se pudo Eliminar');
                btn.disabled = false;
                btn.innerHTML = `<i class="fal fa-trash"></i>`;
            })


        }
    })


};

function deshabilitar_empresa(empnit,st,idbtn){

    let btn = document.getElementById(idbtn);

    let strMsn = '';
    let newSt = ''

    if(st=='SI'){
        strMsn = "¿Está seguro que desea DESACTIVAR esta Empresa/Bodega?"
        newSt = "NO" 
    }else{
        strMsn = "¿Está seguro que desea ACTIVAR esta Empresa/Bodega?"
        newSt = "SI"
    }

    F.Confirmacion(strMsn)
    .then((value)=>{
        if(value==true){

            btn.disabled = true;
            F.showToast('Actualizando...');

            GF.update_empresa_status(empnit,newSt)
            .then(()=>{
                F.Aviso('Empresa/Bodega actualizada exitosamente!!')
                tbl_empresas();
            })
            .catch(()=>{
                F.AvisoError('No se pudo Actualizar');
                 btn.disabled = false;
        
            })


        }
    })

};

function editar_empresa(empnit,empresa,tipo){

    $("#modal_datos").modal('show');

    document.getElementById('txtEmpnit').disabled = true;
    document.getElementById('txtEmpnit').value = empnit;
    document.getElementById('txtEmpnombre').value = empresa;
    document.getElementById('cmbTipo').value = tipo;


};