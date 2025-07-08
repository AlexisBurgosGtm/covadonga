
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
                           ${view.vista_datos_entrada()}
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

                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            
                            <h3 class="negrita text-danger">TRASLADOS DESDE OTRAS BODEGAS</h3>
                            <h5 class="">Pendientes de verificar</h5>

                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            
                            <div class="form-group">
                                <label class="negrita text-secondary">Empresa / Bodega (Entrada)</label>
                                <select class="form-control negrita" id="cmbEmpresaLista">
                                </select>                              
                            </div>

                        </div>
                    
                    </div>
                    <br>

                    <div class="table-responsive col-12">
                        <table class="table table-hover col-12 h-full" id="tblTraslados">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>DOCUMENTO</td>
                                    <td>DESDE (ORIGEN)</td>
                                    <td>ITEMS</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataTraslados">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            `
        },
        vista_datos_entrada:()=>{
            return `
         
            <div class="card card-rounded col-12">
                <div class="card-body p-4" style="font-size:90%">

                   
                    <h4 class="negrita text-info text-center">Datos finales</h4>
                    <br>
                    
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">

                            <div class="form-group">
                                <label class="negrita text-secondary">Empresa / Bodega</label>
                                <select class="form-control negrita" id="cmbEmpresa" disabled="true">
                                </select>

                              
                            </div>

                            <div class="form-group">
                              

                                <label class="negrita text-secondary">Proyecto / Area</label>
                                <select class="form-control negrita" id="cmbProyectos">
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="negrita text-secondary">Documento sistema</label>
                                <div class="input-group">
                                    <select class="form-control negrita" id="cmbCoddoc">
                                    <input type="text" class="form-control negrita" id="txtCorrelativo" disabled="true">
                                </div>                               
                            </div>

                            <div class="form-group">
                                <label class="negrita text-secondary">Observaciones</label>
                                <textarea rows="4" class="form-control negrita" id="txtObs"></textarea>                               
                            </div>

                          

                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        
                            <div class="form-group">

                                <label class="negrita text-secondary">Persona que Recibe</label>
                                <select class="form-control negrita"  id="cmbRecibe">
                                </select>

                                
                            </div>

                            <div class="form-group">
                                <label class="negrita text-secondary">Fecha y Hora del Despacho</label>
                                <div class="input-group">
                                    <input type="date" class="form-control negrita" id="txtFecha">
                                    <input type="text" class="form-control negrita" id="txtHora" disabled="true">
                                </div>
                                
                            </div>

                            <div class="form-group">

                                <label class="negrita text-secondary">Total Costo</label>
                                <h1 class="negrita text-danger" id="lbTotalCosto"></h1>
                                
                                
                            </div>

                        
                        </div>
                    </div>

                </div>
            </div>


          
            
            <button class="btn btn-secondary btn-xl btn-circle btn-bottom-l hand shadow" 
            onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-arrow-left"></i>
            </button>

            <button class="btn btn-info btn-xl btn-circle btn-bottom-r hand shadow" id="btnGuardar">
                <i class="fal fa-save"></i>
            </button>
          
            `
        },
        modal_datos_entrada:()=>{
            return `
              <div id="modal_datos_entrada" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                DATOS PARA GENERAR LA NUEVA ENTRADA A BODEGA
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">







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
        document.getElementById('cmbEmpresaLista').innerHTML = str;
        get_listado();
    })
    .catch(()=>{
        document.getElementById('cmbEmpresa').innerHTML = "<option value=''>No se cargaron las empresas</option>";
        document.getElementById('cmbEmpresaLista').innerHTML = "<option value=''>No se cargaron las empresas</option>";
    });
    //cargando empresas



    document.getElementById('cmbEmpresaLista').addEventListener('change',()=>{
        get_listado();
    })



    listeners_finalizar();




};

function initView(){

    getView();
    addListeners();

};

function listeners_finalizar(){
    
    document.getElementById('txtFecha').value = F.getFecha();

   setInterval(() => {
        document.getElementById('txtHora').value = F.getHora();
   }, 1000);



    //carga de empleados
    GF.data_listado_empleados('%')
    .then((data)=>{

         let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value='${r.CODEMP}'>${r.NOMEMP} (<small class="negrita">${r.EMPRESA}</small>)</option>`
        })
        document.getElementById('cmbRecibe').innerHTML = str;
  
    })
    .catch(()=>{
         document.getElementById('cmbRecibe').innerHTML = "<option value=''>SN</option>";
      })
    //carga de empleados


     //cargando proyectos
    GF.data_listado_proyectos('%')
    .then((data)=>{
        
        let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value='${r.CODPROYECTO}'>${r.NOMPROYECTO} (${r.EMPRESA})</option>
            `
        })
         document.getElementById('cmbProyectos').innerHTML = str;

    })
    .catch(()=>{
        document.getElementById('cmbProyectos').innerHTML = "<option value=''>No se cargaron las empresas</option>";

    });
    //cargando empresas



   

     //cargando coddoc entradas
    GF.data_coddoc('%','ENT')
    .then((data)=>{
        
        let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value='${r.CODDOC}'>${r.CODDOC}</option>
            `
        })
        document.getElementById('cmbCoddoc').innerHTML = str;
        GF.data_correlativo('%',document.getElementById('cmbCoddoc').value)
        .then((data)=>{document.getElementById('txtCorrelativo').value=data})
        .catch((data)=>{document.getElementById('txtCorrelativo').value=data})
  
        

    })
    .catch(()=>{
        document.getElementById('cmbCoddoc').innerHTML = "<option value=''></option>";
        document.getElementById('txtCorrelativo').value = '0';
    });
    //cargando coddoc entradas



    
    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{

        F.Confirmacion('¿Está seguro que desea Guardar este movimiento?')
        .then((value)=>{
            if(value==true){

              
                btnGuardar.disabled = true;
                btnGuardar.innerHTML = `<i class="fal fa-spin fa-save"></i>`;
                
                insert_movimiento('')
                .then(()=>{
                    
                    F.Aviso('Documento guardado exitosamente!!');
                    
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                    
                    clean_data();
                    
                })
                .catch(()=>{
                    
                    F.AvisoError('No se pudo guardar');

                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;

                })

            }
        })



    });


};


function get_listado(){

    let sucursal = document.getElementById('cmbEmpresaLista').value;
    let container = document.getElementById('tblDataTraslados');
    container.innerHTML = GlobalLoader;

    GF.data_traslados_recibidos_pendientes(sucursal)
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            let idBtnGen = `btngen${r.ID}`
            str += `
            <tr>
                <td>${F.convertDateNormal(r.FECHA)}</td>
                <td>${r.CODDOC}-${r.CORRELATIVO}</td>
                <td>${r.EMPRESA}</td>
                <td>${r.ITEMS}</td>
                <td>
                    <button id="${idBtnGen}" 
                        class="btn btn-md btn-info hand shadow" 
                        onclick="generar_entrada('${r.EMPNIT}','${r.CODDOC}','${r.CORRELATIVO}','${r.EMPNIT_RECIBE}')">
                        <i class="fal fa-download"></i>Generar Entrada
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




function generar_entrada(sucursal_salida,coddoc,correlativo,sucursal_recibe){

    document.getElementById('tab-dos').click();


    document.getElementById('cmbEmpresa').value = sucursal_recibe;

    


        


        

    return;
    
    $("#modal_datos_entrada").modal('show');

    F.Confirmacion('¿Está seguro que desea GENERAR esta ENTRADA DE BODEGA?')
    .then((value)=>{
        if(value==true){

        }
    })



};