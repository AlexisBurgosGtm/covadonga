function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.listado()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           ${view.detalles()}
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
        listado:()=>{
            return `
             <div class="card card-rounded col-12 border-primary">
                <div class="card-body p-4">                    

                    <div class="row">    
                        <div class="col-6">
                            <h4 class="negrita text-danger">Listado de Empleados</h4>
                            <h3 class="negrita text-success">COVADONGA</h3>
                            
                        </div>
                        <div class="col-6">
                            <div class="form-group hidden">
                                <label></label>
                                <select class="negrita form-control" id="cmbStatus">
                                    <option value='SI'>HABILITADOS</option>
                                    <option value='NO'>DESHABILITADOS</option>
                                </select>
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
                            <label class="negrita">Escriba para filtrar...</label>
                            <input type="text" class="negrita text-secondary form-control" id="txtBuscar" placeholder="Escriba para filtrar..."
                            oninput="F.FiltrarTabla('tblEmpleados','txtBuscar')">
                        </div>

                        <table class="table table-responsive table-hover col-12" id="tblEmpleados">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>EMPRESA/BODEGA</td>
                                    <td>PUESTO</td>
                                    <td>NOMBRE</td>
                                    <td>TELEFONO</td>
                                    <td>USUARIO / CLAVE</td>
                                    <td>ACTIVO</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataEmpleados">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button class="btn btn-circle btn-xl btn-success hand shadow btn-bottom-r" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button>
            `
        },
        detalles:()=>{
            return `
            <div class="card card-rounded col-sm-12 col-lg-6 col-xl-6 col-md-8 border-primary">
                <div class="card-body p-6">                    

                    <div class="form-group">
                        <label class="negrita text-base">Empresa / Bodega</label>
                        <select class="form-control" id="cmbEmpresa">
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="negrita text-base">Puesto / Nivel</label>
                        <select class="form-control" id="cmbPuesto">
                            <option value='1'>GERENTE (Nivel 1)</option>
                            <option value='2'>BODEGUERO (Nivel 2)</option>
                            <option value='3'>OPERADOR BODEGA (Nivel 3)</option>
                            <option value='4'>CONTABILIDAD (Nivel 4)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="negrita text-base">Nombre</label>
                        <input type="text" class="form-control" id="txtNombre">
                    </div>

                    <div class="form-group">
                        <label class="negrita text-base">Telefono</label>
                        <input type="number" class="form-control" id="txtTelefono">
                    </div>

                    <div class="form-group">
                        <label class="negrita text-base">DPI</label>
                        <input type="text" class="form-control" id="txtDpi">
                    </div>

                    <h4 class="negrita text-danger">Datos de Acceso al sistema</h4>
                    <small class="negrita">Deje en blanco para evitar el acceso</small>
                    <br>

                    <div class="form-group">
                        <label class="negrita text-base">Usuario</label>
                        <input type="text" class="form-control" id="txtUsuario">
                    </div>
                    <div class="form-group">
                        <label class="negrita text-base">Clave</label>
                        <input type="text" class="form-control" id="txtClave">
                    </div>

                     <input type="text" disabled="true"  class="hidden form-control" id="txtCodigo">
            
                </div>
            </div>

            <button class="btn btn-circle btn-xl btn-secondary hand shadow btn-bottom-l"
            onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-arrow-left"></i>
            </button>

            <button class="btn btn-circle btn-xl btn-info hand shadow btn-bottom-r" id="btnGuardar">
                <i class="fal fa-save"></i>
            </button>
            `
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

    
    document.title = 'GESTION DE EMPLEADOS';

        
        F.slideAnimationTabs();


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
            document.getElementById('cmbEmpresa').innerHTML = "<option value='0'>No se cargaron las empresas</option>";
        });
        //cargando empresas
        


        document.getElementById('btnNuevo').addEventListener('click',()=>{
            document.getElementById('tab-dos').click();
            clean_data();
        });




        tbl_empleados();


        let btnGuardar = document.getElementById('btnGuardar');
        btnGuardar.addEventListener('click',()=>{


            let codigo = document.getElementById('txtCodigo').value || '';

            let empnit = document.getElementById('cmbEmpresa').value;
            let codpuesto = document.getElementById('cmbPuesto').value;
            let nombre = document.getElementById('txtNombre').value || '';
            let telefono = document.getElementById('txtTelefono').value || '';
            let dpi = document.getElementById('txtDpi').value || '';
            let usuario = document.getElementById('txtUsuario').value || '';
            let clave = document.getElementById('txtClave').value || '';

            if(nombre==''){F.AvisoError('Escriba un nombre de empleado');return;}
    
            if(codigo==''){

                //insertar un empleado nuevo
                F.Confirmacion(`¿Está seguro que desea CREAR ESTE NUEVO Empleado?`)
                .then((value)=>{
                    if(value==true){

                        btnGuardar.disabled=true;btnGuardar.innerHTML=`<i class="fal fa-save fa-spin"></i>`;
                        
                        GF.insert_empleado(empnit,codpuesto,nombre,telefono,dpi,usuario,clave)
                        .then(()=>{
                            F.Aviso('Empleado creado exitosamente!!');
                            btnGuardar.disabled=false;btnGuardar.innerHTML=`<i class="fal fa-save"></i>`;
                            document.getElementById('tab-uno').click();
                            tbl_empleados();
                        })
                        .catch(()=>{
                            F.AvisoError('No se pudo crear este empleado');
                            btnGuardar.disabled=false;btnGuardar.innerHTML=`<i class="fal fa-save"></i>`;
                        })

                    }
                })

            }else{

                F.Confirmacion(`¿Está seguro que desea EDITAR este Empleado?`)
                .then((value)=>{
                    if(value==true){

                         btnGuardar.disabled=true;btnGuardar.innerHTML=`<i class="fal fa-save fa-spin"></i>`;

                        GF.edit_empleado(codigo,empnit,codpuesto,nombre,telefono,dpi,usuario,clave)
                        .then(()=>{
                            F.Aviso('Empleado actualizado exitosamente!!');
                            document.getElementById('tab-uno').click();
                            btnGuardar.disabled=false;btnGuardar.innerHTML=`<i class="fal fa-save"></i>`;

                            tbl_empleados();
                        })
                        .catch(()=>{
                            F.AvisoError('No se pudo actualizar este empleado');
                            btnGuardar.disabled=false;btnGuardar.innerHTML=`<i class="fal fa-save"></i>`;
                        })

                    }
                })

            }
            


          


            //editar datos


        });



};

function initView(){

    getView();
    addListeners();

};



function clean_data(){

    document.getElementById('txtCodigo').value = '';

    document.getElementById('txtNombre').value = '';
    document.getElementById('txtTelefono').value = '';
    document.getElementById('txtDpi').value = '';
    document.getElementById('txtUsuario').value = '';
    document.getElementById('txtClave').value = '';

};

function tbl_empleados(){

    let container = document.getElementById('tblDataEmpleados');
    container.innerHTML = GlobalLoader;


    GF.data_listado_empleados(GlobalEmpnit)
    .then((data)=>{
        let str = '';

        data.recordset.map((r)=>{
            let strClassHabilitado = ''; if(r.HABILITADO=='SI'){strClassHabilitado='btn-success'}else{strClassHabilitado='btn-danger'}
            let btnHab = `btnH${r.CODEMP}`;
            let btnDel = `btnDel${r.CODEMP}`
            str += `
                <tr>
                    <td>${r.EMPRESA}</td>
                    <td>${r.DESPUESTO}</td>
                    <td>${r.NOMEMP}</td>
                    <td>${r.TELEFONO}</td>
                    <td>${r.USUARIO}
                        <br>
                        <small class="negrita text-danger">${r.CLAVE}</small>
                    </td>
                    <td>
                        <button class="btn ${strClassHabilitado} btn-circle btn-md hand shadow"
                        id="${btnHab}"
                        onclick="update_status_empleado('${r.CODEMP}','${r.HABILITADO}','${btnHab}')"
                        >
                            <i class="fal fa-sync"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-info btn-md btn-circle hand shadow"
                        onclick="editar_empleado('${r.CODEMP}','${r.EMPNIT}','${r.CODPUESTO}','${r.NOMEMP}','${r.TELEFONO}','${r.DPI}','${r.USUARIO}','${r.CLAVE}')">
                            <i class="fal fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-circle btn-md hand shadow"
                        id="${btnDel}"
                        onclick="eliminar_empleado('${r.CODEMP}','${btnDel}')"
                        >
                            <i class="fal fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        })
        container.innerHTML = str;

    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos....';
    })


};



function update_status_empleado(codemp,st,idbtn){


    let strMsn = ''; let stStatus = '';
    if(st=='SI'){
        strMsn = `¿Está seguro que desea DESHABILITAR a este Empleado?`;
        stStatus = 'NO';
    }else{
        strMsn = `¿Está seguro que desea HABILITAR a este Empleado?`;
        stStatus = 'SI';
    }


    let btn = document.getElementById(idbtn);


    F.Confirmacion(strMsn)
    .then((value)=>{
        if(value==true){

            btn.disabled = true; btn.innerHTML = `<i class="fal fa-spin fa-sync"></i>`;

            GF.update_st_empleado(codemp,stStatus)
            .then(()=>{
                F.Aviso('Empleado actualizado exitosamente!!');
                tbl_empleados();
            })
            .catch(()=>{
                F.AvisoError('No se pudo actualizar');
                btn.disabled = false; btn.innerHTML = `<i class="fal fa-sync"></i>`;
            })


        }
    })

};

function eliminar_empleado(codemp,idbtn){

    let btn = document.getElementById(idbtn);

    F.Confirmacion('¿Está seguro que desea ELIMINAR este Empleado?')
    .then((value)=>{
        if(value==true){

            btn.disabled=true;btn.innerHTML=`<i class="fal fa-spin fa-trash"></i>`;

            GF.delete_empleado(codemp)
            .then(()=>{
                F.Aviso('Empleado eliminado exitosamente!!');
                tbl_empleados();
            })
            .catch(()=>{
                F.AvisoError('No se pudo eliminar este Empleado');
                btn.disabled=false;btn.innerHTML=`<i class="fal fa-trash"></i>`;
            })

        }
    })

};

function editar_empleado(codigo,empnit,codpuesto,nombre,telefono,dpi,usuario,clave){

    F.Confirmacion('¿Está seguro que desea EDITAR a este Empleado?')
    .then((value)=>{
        if(value==true){

            document.getElementById('tab-dos').click();

            document.getElementById('txtCodigo').value = codigo;
            document.getElementById('cmbEmpresa').value = empnit;
            document.getElementById('cmbPuesto').value = codpuesto;
            document.getElementById('txtNombre').value = nombre;
            document.getElementById('txtTelefono').value = telefono;
            document.getElementById('txtDpi').value = dpi;
            document.getElementById('txtUsuario').value = usuario;
            document.getElementById('txtClave').value = clave;

        }
    })

    
   

};

