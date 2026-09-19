
//cache del ultimo listado, evita mandar textos con comillas dentro del onclick.
//va con var: la vista se vuelve a ejecutar en cada navegacion y let/const
//tronarian por redeclaracion.
var dataEmpresasConta = [];

function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_datos()}
                        </div>
                    </div>
                </div>
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-4">

                    <h3 class="negrita text-danger">Empresas de Contabilidad</h3>

                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="form-group">
                                <label class="negrita">Escriba para filtrar...</label>
                                <input type="text" class="negrita text-secondary form-control" id="txtBuscarEmpConta"
                                placeholder="NIT, razon social, nombre comercial..."
                                oninput="F.FiltrarTabla('tblEmpresasConta','txtBuscarEmpConta')">
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive col-12">
                        <table class="table table-hover col-12 h-full" id="tblEmpresasConta">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>CODIGO</td>
                                    <td>NIT</td>
                                    <td>RAZON SOCIAL</td>
                                    <td>NOMBRE COMERCIAL</td>
                                    <td>DIRECCION</td>
                                    <td>DOCS</td>
                                    <td>EDITAR</td>
                                    <td>ELIMINAR</td>
                                </tr>
                            </thead>
                            <tbody id="tblDataEmpresasConta">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button class="btn btn-circle btn-xl btn-verde btn-bottom-r hand shadow" id="btnNuevo" title="Nueva empresa">
                <i class="fal fa-plus"></i>
            </button>

            `
        },
        modal_datos:()=>{
            return `
              <div id="modal_datos_conta" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="lbTituloModalConta">
                                Detalles de la Empresa
                            </h4>
                        </div>
                        <div class="modal-body p-4">

                            <div class="card card-rounded">
                                <div class="card-body p-4">

                                    <div class="form-group" id="divCodemp">
                                        <label class="negrita text-secondary">Codigo</label>
                                        <input type="text" class="negrita text-danger form-control" id="txtCodemp" disabled>
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-secondary">NIT</label>
                                        <input type="text" maxlength="50" class="negrita text-danger form-control" id="txtNit">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Razon Social</label>
                                        <input type="text" maxlength="350" class="negrita text-danger form-control" id="txtRazonSocial">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Nombre Comercial</label>
                                        <input type="text" maxlength="350" class="negrita text-danger form-control" id="txtNombreComercial">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Direccion</label>
                                        <textarea maxlength="500" class="negrita text-danger form-control" id="txtDireccion" rows="2"></textarea>
                                    </div>

                                    <br>
                                    <div class="row">
                                        <div class="col-6">
                                            <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal" title="Regresar">
                                                <i class="fal fa-arrow-left"></i>
                                            </button>
                                        </div>
                                        <div class="col-6 text-right">
                                            <button class="btn btn-verde btn-circle btn-xl hand shadow" id="btnGuardar" title="Guardar">
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

    document.title = 'EMPRESAS DE CONTABILIDAD';

    document.getElementById('btnNuevo').addEventListener('click',()=>{
        clean_data_conta();
        $("#modal_datos_conta").modal('show');
    })


    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{

        let codemp = document.getElementById('txtCodemp').value || '';
        let nit = document.getElementById('txtNit').value.trim();
        let razon_social = document.getElementById('txtRazonSocial').value.trim();
        let nombre_comercial = document.getElementById('txtNombreComercial').value.trim();
        let direccion = document.getElementById('txtDireccion').value.trim();

        if(nit==''){F.AvisoError('Indique el NIT de la empresa');return;}
        if(razon_social==''){F.AvisoError('Indique la Razon Social');return;}

        let esEdicion = (codemp!='');

        let msn = esEdicion
                  ? '¿Está seguro que desea ACTUALIZAR esta Empresa?'
                  : '¿Está seguro que desea GUARDAR esta nueva Empresa?';

        F.Confirmacion(msn)
        .then((value)=>{
            if(value==true){

                btnGuardar.disabled = true;
                btnGuardar.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                if(esEdicion){
                    //edita
                    GF.edit_empresa_conta(codemp,nit,razon_social,nombre_comercial,direccion)
                    .then(()=>{
                        $("#modal_datos_conta").modal('hide');
                        tbl_empresas_conta();
                        F.Aviso('Empresa actualizada exitosamente!!');
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
                    GF.insert_empresa_conta(nit,razon_social,nombre_comercial,direccion)
                    .then(()=>{
                        $("#modal_datos_conta").modal('hide');
                        tbl_empresas_conta();
                        F.Aviso('Empresa creada exitosamente!!');
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


    tbl_empresas_conta();

};

function initView(){

    getView();
    addListeners();

};


function clean_data_conta(){

    document.getElementById('lbTituloModalConta').innerText = 'Nueva Empresa';

    //en alta no se muestra el codigo, lo genera la base de datos
    document.getElementById('divCodemp').classList.add('d-none');

    document.getElementById('txtCodemp').value = '';
    document.getElementById('txtNit').value = '';
    document.getElementById('txtRazonSocial').value = '';
    document.getElementById('txtNombreComercial').value = '';
    document.getElementById('txtDireccion').value = '';

};


function tbl_empresas_conta(){

    let container = document.getElementById('tblDataEmpresasConta');
    container.innerHTML = GlobalLoader;

    GF.data_listado_empresas_conta()
    .then((data)=>{

        dataEmpresasConta = data.recordset || [];

        if(dataEmpresasConta.length==0){
            container.innerHTML = `
            <tr><td colspan="8" class="text-center text-muted p-4">
                No hay empresas registradas, presione el botón + para agregar una.
            </td></tr>`;
            return;
        }

        let str = '';
        dataEmpresasConta.map((r)=>{

            let idbtnDelete = `btnDeleteConta${r.CODEMP}`;
            let docs = Number(r.DOCS);

            //con documentos asociados no se permite borrar, quedarian huerfanos
            let btnEliminar = (docs>0)
                ? `<button class="btn btn-circle btn-secondary btn-md" disabled
                    title="No se puede eliminar: tiene ${docs} documento(s) asociado(s)">
                        <i class="fal fa-lock"></i>
                   </button>`
                : `<button class="btn btn-circle btn-danger btn-md hand shadow"
                    onclick="eliminar_empresa_conta(${r.CODEMP},'${idbtnDelete}')"
                    id="${idbtnDelete}" title="Eliminar">
                        <i class="fal fa-trash"></i>
                   </button>`;

            str += `
            <tr>
                <td>${r.CODEMP}</td>
                <td>${F.escapeHtml(r.NIT)}</td>
                <td>${F.escapeHtml(r.RAZON_SOCIAL)}</td>
                <td>${F.escapeHtml(r.NOMBRE_COMERCIAL)}</td>
                <td>${F.escapeHtml(r.DIRECCION)}</td>
                <td>${docs}</td>
                <td>
                    <button class="btn btn-circle btn-info btn-md hand shadow"
                     onclick="editar_empresa_conta(${r.CODEMP})" title="Editar">
                        <i class="fal fa-edit"></i>
                    </button>
                </td>
                <td>${btnEliminar}</td>
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = `<tr><td colspan="8">No se cargaron datos...</td></tr>`;
    })

};


function editar_empresa_conta(codemp){

    let r = dataEmpresasConta.find((x)=> Number(x.CODEMP)==Number(codemp));

    if(r==undefined){F.AvisoError('No se encontró la empresa');return;}

    document.getElementById('lbTituloModalConta').innerText = 'Editar Empresa';

    document.getElementById('divCodemp').classList.remove('d-none');

    document.getElementById('txtCodemp').value = r.CODEMP;
    document.getElementById('txtNit').value = r.NIT;
    document.getElementById('txtRazonSocial').value = r.RAZON_SOCIAL;
    document.getElementById('txtNombreComercial').value = r.NOMBRE_COMERCIAL;
    document.getElementById('txtDireccion').value = r.DIRECCION;

    $("#modal_datos_conta").modal('show');

};


function eliminar_empresa_conta(codemp,idbtn){

    let btn = document.getElementById(idbtn);

    F.Confirmacion('¿Está seguro que desea ELIMINAR esta Empresa?')
    .then((value)=>{
        if(value==true){

            btn.disabled = true;
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;

            GF.delete_empresa_conta(codemp)
            .then((resultado)=>{

                if(resultado=='en_uso'){
                    F.AvisoError('No se puede eliminar: la empresa ya tiene documentos asociados');
                    tbl_empresas_conta();
                    return;
                }

                F.Aviso('Empresa eliminada exitosamente!!');
                tbl_empresas_conta();
            })
            .catch(()=>{
                F.AvisoError('No se pudo Eliminar');
                btn.disabled = false;
                btn.innerHTML = `<i class="fal fa-trash"></i>`;
            })

        }
    })

};
