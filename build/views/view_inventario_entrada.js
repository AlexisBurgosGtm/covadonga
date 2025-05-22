
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
                ${view.modal_lista_productos()}
               
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
                <div class="card-body p-4" style="font-size:90%">

                    <h4 class="negrita text-danger text-center">Nueva Orden de Salida</h4>
                    
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">

                            <div class="form-group">
                                <label class="negrita text-secondary">Empresa</label>
                                <select class="form-control negrita" id="cmbEmpresaS">
                                </select>

                                <label class="negrita text-secondary">Proyecto / Area</label>
                                <select class="form-control negrita" id="cmbProyectoS">
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="negrita text-secondary">Documento sistema</label>
                                <div class="input-group">
                                    <select class="form-control negrita" id="cmbCoddocS">
                                    <input type="text" class="form-control negrita" id="txtCorrelativoS" disabled="true">
                                </div>                               
                            </div>

                          

                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        
                            <div class="form-group">

                                <label class="negrita text-secondary">Persona que Recibe</label>
                                <select class="form-control negrita"  id="cmbRecibeS">
                                </select>

                                 <label class="negrita text-secondary">Persona que Solicita</label>
                                <select class="form-control negrita"  id="cmbSolicitaS">
                                </select>

                            </div>

                            <div class="form-group">
                                <label class="negrita text-secondary">Fecha y Hora del Despacho</label>
                                <div class="input-group">
                                    <input type="date" class="form-control negrita" id="txtFechaS">
                                    <input type="text" class="form-control negrita" id="txtHoraS" disabled="true">
                                </div>
                                
                            </div>

                        
                        </div>
                    </div>

                </div>
            </div>


            <br>
            <div class="card card-rounded col-12">
                <div class="card-body p-4">

                    <div class="row">

                        <div class="col-sm-12 col-md-5 col-lg-5 col-xl-5">
                            <div class="form-group">
                                <label>Producto</label>
                                <div class="input-group">
                                    <input type="text" class="form-control negrita text-base" disabled="true" id="txtDesprodS">
                                    <button class="btn btn-success hand shadow" id="btnNuevoProductoS">
                                        <i class="fal fa-plus"></i>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div class="form-group">
                                <label>Cantidad</label>
                                <input type="number" class="form-control negrita text-danger" id="txtCantidadS">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label>Costo</label>
                                <div class="input-group">
                                    <input type="number" class="form-control negrita text-base" disabled="true"  id="txtCostoS">
                                    <button class="btn btn-info hand shadow"  id="btnAgregarProductoS">
                                        <i class="fal fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            
            <br>

            <div class="card card-rounded col-12">
                <div class="card-body p-4">

                    <div class="table-responsive">
                        <table class="table table-bordered h-full col-12">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>PRODUCTO</td>
                                    <td>CANTIDAD</td>
                                    <td>COSTO</td>
                                    <td>SUBTOTAL</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataSalida"></tbody>

                        </table>
                    </div>

                </div>
            </div>

            <input type="text" id="txtCodprodS" disabled="true">
            
            
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
                <div class="card-body p-4" style="font-size:90%">

                    <h4 class="negrita text-danger text-center">Nueva Orden de Entrada</h4>
                    
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">

                            <div class="form-group">
                                <label class="negrita text-secondary">Empresa</label>
                                <select class="form-control negrita" id="cmbEmpresaE">
                                </select>

                                <label class="negrita text-secondary">Proyecto / Area</label>
                                <select class="form-control negrita" id="cmbProyectoE">
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="negrita text-secondary">Documento sistema</label>
                                <div class="input-group">
                                    <select class="form-control negrita" id="cmbCoddocE">
                                    <input type="text" class="form-control negrita" id="txtCorrelativoE" disabled="true">
                                </div>                               
                            </div>

                          

                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        
                            <div class="form-group">

                                <label class="negrita text-secondary">Persona que Recibe</label>
                                <select class="form-control negrita"  id="cmbRecibeE">
                                </select>
                               

                            </div>

                            <div class="form-group">
                                <label class="negrita text-secondary">Fecha y Hora del Despacho</label>
                                <div class="input-group">
                                    <input type="date" class="form-control negrita" id="txtFechaE">
                                    <input type="text" class="form-control negrita" id="txtHoraE" disabled="true">
                                </div>
                                
                            </div>

                        
                        </div>
                    </div>

                </div>
            </div>


            <br>
            <div class="card card-rounded col-12">
                <div class="card-body p-4">

                    <div class="row">

                        <div class="col-sm-12 col-md-5 col-lg-5 col-xl-5">
                            <div class="form-group">
                                <label>Producto</label>
                                <div class="input-group">
                                    <input type="text" class="form-control negrita text-base" disabled="true" id="txtDesprodE">
                                    <button class="btn btn-success hand shadow" id="btnNuevoProductoE">
                                        <i class="fal fa-plus"></i>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div class="form-group">
                                <label>Cantidad</label>
                                <input type="number" class="form-control negrita text-danger" id="txtCantidadE">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label>Costo</label>
                                <div class="input-group">
                                    <input type="number" class="form-control negrita text-base" disabled="true" id="txtCostoE">
                                    <button class="btn btn-info hand shadow"  id="btnAgregarProductoE">
                                        <i class="fal fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            
            <br>

            <div class="card card-rounded col-12">
                <div class="card-body p-4">

                    <div class="table-responsive">
                        <table class="table table-bordered h-full col-12">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>PRODUCTO</td>
                                    <td>CANTIDAD</td>
                                    <td>COSTO</td>
                                    <td>SUBTOTAL</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataEntrada"></tbody>

                        </table>
                    </div>

                </div>
            </div>
            
            <input type="text" id="txtCodprodE" disabled="true">
            
            <button class="btn btn-secondary btn-xl btn-circle btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-arrow-left"></i>
            </button>

            <button class="btn btn-info btn-xl btn-circle btn-bottom-r hand shadow" id="btnGuardarE">
                <i class="fal fa-save"></i>
            </button>
            `
        },
        modal_lista_productos:()=>{
            return `
              <div id="modal_productos" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Seleccione un Producto
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">
                                    
                                    <div class="table-responsive">
                                        
                                        <div class="form-group">
                                            <input type="text" class="negrita text-base border-warning form-control" 
                                                id="txtBuscarProducto" 
                                                oninput="F.FiltrarTabla('tblProductos','txtBuscarProducto')"
                                                placeholder="Escriba para filtrar...."
                                            >
                                        </div>

                                        <table class="table table-bordered h-full col-12" id="tblProductos">
                                            <thead class="bg-secondary text-white">
                                                <tr>
                                                    <td>CODIGO</td>
                                                    <td>PRODUCTO</td>
                                                    <td>EXISTENCIA</td>
                                                    <td>MARCA</td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody id="tblDataProductos"></tbody>
                                        </table>
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


    //cargando empresas
    GF.data_listado_empresas()
    .then((data)=>{
        
        let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value='${r.EMPNIT}'>${r.EMPRESA}</option>
            `
        })
        document.getElementById('cmbEmpresaS').innerHTML = str;
        document.getElementById('cmbEmpresaE').innerHTML = str;

    })
    .catch(()=>{
        document.getElementById('cmbEmpresaS').innerHTML = "<option value=''>No se cargaron las empresas</option>";
        document.getElementById('cmbEmpresaE').innerHTML = "<option value=''>No se cargaron las empresas</option>";

    });
    //cargando empresas


    //carga de empleados
    GF.data_listado_empleados('%')
    .then((data)=>{

         let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value='${r.CODEMP}'>${r.NOMEMP} (<small class="negrita">${r.EMPRESA}</small>)</option>`
        })
        document.getElementById('cmbRecibeS').innerHTML = str;
        document.getElementById('cmbSolicitaS').innerHTML = str;
        document.getElementById('cmbRecibeE').innerHTML = str;
        //document.getElementById('cmbSolicitaE').innerHTML = str;

    })
    .catch(()=>{
        document.getElementById('cmbRecibeS').innerHTML = "<option value=''>SN</option>";
        document.getElementById('cmbSolicitaS').innerHTML = "<option value=''>SN</option>";
        document.getElementById('cmbRecibeE').innerHTML = "<option value=''>SN</option>";
        //document.getElementById('cmbSolicitaE').innerHTML = "<option value=''>SN</option>";
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
        document.getElementById('cmbProyectoS').innerHTML = str;
        document.getElementById('cmbProyectoE').innerHTML = str;

    })
    .catch(()=>{
        document.getElementById('cmbProyectoS').innerHTML = "<option value=''>No se cargaron las empresas</option>";
        document.getElementById('cmbProyectoE').innerHTML = "<option value=''>No se cargaron las empresas</option>";

    });
    //cargando empresas



    //cargando coddoc salidas
    GF.data_coddoc('%','SAL')
    .then((data)=>{
        
        let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value='${r.CODDOC}'>${r.CODDOC}</option>
            `
        })
        document.getElementById('cmbCoddocS').innerHTML = str;
        
        GF.data_correlativo('%',document.getElementById('cmbCoddocS').value)
        .then((data)=>{document.getElementById('txtCorrelativoS').value=data})
        .catch((data)=>{document.getElementById('txtCorrelativoS').value=data})
  
    })
    .catch(()=>{
        document.getElementById('cmbCoddocS').innerHTML = "<option value=''></option>";
        document.getElementById('txtCorrelativoS').value = '0';
    });
    //cargando coddoc salidas



     //cargando coddoc entradas
    GF.data_coddoc('%','ENT')
    .then((data)=>{
        
        let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value='${r.CODDOC}'>${r.CODDOC}</option>
            `
        })
        document.getElementById('cmbCoddocE').innerHTML = str;
        GF.data_correlativo('%',document.getElementById('cmbCoddocE').value)
        .then((data)=>{document.getElementById('txtCorrelativoE').value=data})
        .catch((data)=>{document.getElementById('txtCorrelativoE').value=data})
  
    })
    .catch(()=>{
        document.getElementById('cmbCoddocE').innerHTML = "<option value=''></option>";
        document.getElementById('txtCorrelativoE').value = '0';
    });
    //cargando coddoc entradas



    tbl_movimientos();



    document.getElementById('btnNuevoProductoE').addEventListener('click',()=>{
        
        $('#modal_productos').modal('show');

        let sucursal = document.getElementById('cmbEmpresaE').value;

        tbl_lista_productos(sucursal,'E');


    });

    document.getElementById('btnNuevoProductoS').addEventListener('click',()=>{
        
        $('#modal_productos').modal('show');

         let sucursal = document.getElementById('cmbEmpresaS').value;

        tbl_lista_productos(sucursal,'S');


    });


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



function tbl_lista_productos(sucursal,entsal){

    let container = document.getElementById('tblDataProductos');
    container.innerHTML = GlobalLoader;
 
    GF.data_lista_productos(sucursal)
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            str += `
            <tr class="hand"
                onclick="get_producto('${r.CODPROD}','${r.DESPROD}','${r.COSTO}','${entsal}')">
                <td>${r.CODPROD}</td>
                <td>${r.DESPROD}</td>
                <td>${r.EXISTENCIA}</td>
                <td>${r.DESMARCA}</td>
                <td></td>
            </tr>
            `
        })
        container.innerHTML = str;


    })
    .catch(()=>{

        container.innerHTML = 'No se cargaron datos...';

    })


};

function get_producto(codprod,desprod,costo,entsal){


    document.getElementById('txtCodprod' + entsal).value = codprod;
    document.getElementById('txtDesprod' + entsal).value = desprod;
    document.getElementById('txtCosto' + entsal).value = costo;
    
    document.getElementById('txtCantidad' + entsal).value = 1;

    
    $('#modal_productos').modal('hide');



};