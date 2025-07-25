
function getView(){
    let view = {
        body:()=>{
            return `
                
                ${view.frag_parametros()}

                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_datos_documento() + view.modal_editar_documento()}
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
        frag_parametros:()=>{
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
            `
        },
        vista_listado:()=>{
            return `
           
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
                <div class="card-body p-2">

                    <h3 class="negrita text-base">Generales</h3>
                    
                    <table class="table table-bordered h-full">
                        <tbody>
                            <tr>
                                <td>
                                    <label class="negrita text-base">¿Permite movimientos sin existencia?</label>
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
                                    <label class="negrita text-base">¿Permite ver el costo en documentos (Solo aplica a Nivel 3)?</label>
                                </td>
                                <td>
                                    <select class="form-control negrita text-danger" id="cmbCosto">
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

                    <div class="form-group">
                        <input type="text" class="form-control border-base negrita text-base"
                        placeholder="Escriba para buscar..."
                        id="txtBuscarDoc"
                        oninput="F.FiltrarTabla('tblTipodocumentos','txtBuscarDoc')">
                    </div>

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
                <div class="modal-dialog modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Datos del Documento
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">

                                    <div class="form-group">
                                        <label class="negrita text-base">Descripcion</label>
                                        <input type="text" class="form-control" id="txtDescripcion">
                                    </div>

                                    <br>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-base">Serie Documento</label>
                                                <input type="text" class="form-control" id="txtCoddoc">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-base">Correlativo</label>
                                                <input type="number" class="form-control" id="txtCorrelativo" value="1">
                                            </div>
                                        </div>
                                    </div>                                    
                                    

                                    <br>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-base">Tipo Documento</label>
                                                <select class="form-control" id="cmbTipodoc">
                                                    <option value='ENT'>ENTRADA A BODEGA</option>
                                                    <option value='CON'>SALIDA POR CONSUMO</option>
                                                    <option value='SAL'>TRASLADOS A OTRA BODEGA</option>
                                                    <option value='COM'>COMPRAS</option>
                                                    <option value='PRS'>PRESTAMO DE HERRAMIENTA</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-base">Tipo inventario</label>
                                                <select class="form-control" id="cmbInv">
                                                    <option value='1'>ENTRADA</option>
                                                    <option value='-1'>SALIDA</option>
                                                    <option value='0'>NEUTRO</option>
                                                </select>
                                            </div>
                                        </div>
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

                                </div>
                            </div>

                                
                           

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        },
        modal_editar_documento:()=>{
            return `
              <div id="modal_editar_documento" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="dropdown-header bg-info d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Editar Documento
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">

                                    <div class="form-group">
                                        <label class="negrita text-base">Descripcion</label>
                                        <input type="text" class="form-control" id="txtDescripcionE">
                                    </div>

                                    <br>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-base">Serie Documento</label>
                                                <input type="text" class="form-control" id="txtCoddocE" disabled="true">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-base">Correlativo</label>
                                                <input type="number" class="form-control" id="txtCorrelativoE" value="1">
                                            </div>
                                        </div>
                                    </div>                                    
                                    

                                    <br>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-base">Tipo Documento</label>
                                                <select class="form-control" id="cmbTipodocE">
                                                    <option value='ENT'>ENTRADA</option>
                                                    <option value='SAL'>SALIDA</option>
                                                    <option value='COM'>COMPRA</option>
                                                    <option value='PRS'>PRESTAMO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-base">Tipo inventario</label>
                                                <select class="form-control" id="cmbInvE">
                                                    <option value='1'>ENTRADA</option>
                                                    <option value='-1'>SALIDA</option>
                                                    <option value='0'>NEUTRO</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <br>

                                    <div class="row">
                                        <div class="col-6">
                                            <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                                <i class="fal fa-arrow-left"></i>
                                            </button>
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-info btn-circle btn-xl hand shadow" id="btnGuardarE">
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
        },
    }

    root.innerHTML = view.body();

};

function addListeners(){


    
    document.title = 'CONFIGURACIONES';

    F.slideAnimationTabs();

    document.getElementById('cmbExistencia').value = get_config(1);

    document.getElementById('cmbCosto').value = get_config(2);

    document.getElementById('cmbExistencia').addEventListener('change',()=>{

            document.getElementById('cmbExistencia').disabled = true;
            F.showToast('Actualizando...');

            let valor = document.getElementById('cmbExistencia').value;
            GF.update_config('1',valor)
            .then(()=>{
                F.showToast('Valor actualizado exitosamente!!');
                document.getElementById('cmbExistencia').disabled = false;
            })
            .catch(()=>{
                F.AvisoError('No se pudo actualizar');
                document.getElementById('cmbExistencia').disabled = false;
            })

    })


    document.getElementById('cmbCosto').addEventListener('change',()=>{

            document.getElementById('cmbCosto').disabled = true;
            F.showToast('Actualizando...');

            let valor = document.getElementById('cmbCosto').value;
            GF.update_config('2',valor)
            .then(()=>{
                F.showToast('Valor actualizado exitosamente!!');
                document.getElementById('cmbCosto').disabled = false;
            })
            .catch(()=>{
                F.AvisoError('No se pudo actualizar');
                document.getElementById('cmbCosto').disabled = false;
            })

    })


    tbl_tipodocumentos();


    let btnNuevoDocumento = document.getElementById('btnNuevoDocumento');
    btnNuevoDocumento.addEventListener('click',()=>{

        clean_data();

        $("#modal_datos_documento").modal('show');



    });



    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{

        F.Confirmacion('¿Está seguro que desea GUARDAR este documento?')
        .then((value)=>{
            if(value==true){

                    let coddoc = document.getElementById('txtCoddoc').value || '';
                    let correlativo = document.getElementById('txtCorrelativo').value || '1';
                    let descripcion = document.getElementById('txtDescripcion').value || '';
                    let tipodoc = document.getElementById('cmbTipodoc').value;
                    let inv = document.getElementById('cmbInv').value;

                    if(coddoc==''){F.AvisoError('Indique la serie del documento');return;};
                    if(descripcion==''){F.AvisoError('Indique la descripcion del documento');return;};
                    
                    btnGuardar.disabled=true;
                    btnGuardar.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                    GF.insert_tipodocumento(coddoc,correlativo,descripcion,inv,tipodoc)
                    .then(()=>{
                        F.Aviso('Documento creado exitosamente!!');

                        btnGuardar.disabled=false;
                        btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;

                          $("#modal_datos_documento").modal('hide');


                        tbl_tipodocumentos();
                    })
                    .catch(()=>{
                        F.AvisoError('No se pudo guardar');
                        btnGuardar.disabled=false;
                        btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                    })


            }
        })

    });



    let btnGuardarE = document.getElementById('btnGuardarE');
    btnGuardarE.addEventListener('click',()=>{

        F.Confirmacion('¿Está seguro que desea ACTUALIZAR este documento?')
        .then((value)=>{
            if(value==true){

                    let coddoc = document.getElementById('txtCoddocE').value || '';
                    let correlativo = document.getElementById('txtCorrelativoE').value || '1';
                    let descripcion = document.getElementById('txtDescripcionE').value || '';
                    let tipodoc = document.getElementById('cmbTipodocE').value;
                    let inv = document.getElementById('cmbInvE').value;

                    if(coddoc==''){F.AvisoError('Indique la serie del documento');return;};
                    if(descripcion==''){F.AvisoError('Indique la descripcion del documento');return;};
                    
                    btnGuardarE.disabled = true;
                    btnGuardarE.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                    GF.edit_tipodocumento(coddoc,correlativo,descripcion,inv,tipodoc)
                    .then(()=>{
                        F.Aviso('Documento actualizado exitosamente!!');
                            $("#modal_editar_documento").modal('hide');

                            btnGuardarE.disabled=false;
                            btnGuardarE.innerHTML = `<i class="fal fa-save"></i>`;

                        tbl_tipodocumentos();
                    })
                    .catch(()=>{
                        F.AvisoError('No se pudo actualizar');
                        btnGuardarE.disabled=false;
                        btnGuardarE.innerHTML = `<i class="fal fa-save"></i>`;
                    })


            }
        })

    });




};

function initView(){

    getView();
    addListeners();

};



function clean_data(){

    document.getElementById('txtCoddoc').value = '';
    document.getElementById('txtDescripcion').value = '';
    document.getElementById('txtCorrelativo').value = '1';
    

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
                        <button class="btn btn-md btn-info btn-circle hand shadow" 
                        onclick="edit_documento('${r.CODDOC}','${r.DESCRIPCION}','${r.CORRELATIVO}','${r.TIPODOC}','${r.INV}')">
                            <i class="fal fa-edit"></i>
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

function edit_documento(coddoc,descripcion,correlativo,tipodoc,tipoinv){

    $("#modal_editar_documento").modal('show');

    document.getElementById('txtCoddocE').value = coddoc;
    document.getElementById('txtDescripcionE').value = descripcion;
    document.getElementById('txtCorrelativoE').value = correlativo;
    document.getElementById('cmbTipodocE').value = tipodoc;
    document.getElementById('cmbInvE').value = tipoinv;
    


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