
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
                ${view.modal_lista_productos() + view.modal_cantidad()}
               
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

                     <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label>Codigo Seleccionado</label>
                                <div class="input-group">
                                    <input type="text" class="form-control negrita text-base" disabled="true" id="txtCodprodS">
                                </div>
                                
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                            <div class="form-group">
                                <label>Producto</label>
                                <div class="input-group">
                                    <input type="text" class="form-control negrita text-base" id="txtDesprodS">
                                    <button class="btn btn-success hand shadow" id="btnNuevoProductoS">
                                        <i class="fal fa-search"></i>
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

            <input type="text" id="txtCodprodS" disabled="true" class="hidden">
            
            
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

                    <h4 class="negrita text-info text-center">Nueva Orden de Entrada</h4>
                    
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

                     <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label>Codigo Seleccionado</label>
                                <div class="input-group">
                                    <input type="text" class="form-control negrita text-base" disabled="true" id="txtCodprodE">
                                </div>
                                
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                            <div class="form-group">
                                <label>Producto</label>
                                <div class="input-group">
                                    <input type="text" class="form-control negrita text-base" id="txtDesprodE">
                                    <button class="btn btn-success hand shadow" id="btnNuevoProductoE">
                                        <i class="fal fa-search"></i>
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

            <input type="text" id="txtCodprodE" disabled="true" class="hidden">
            
            
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
              <div id="modal_productos" 
              class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
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
        },
        modal_cantidad:()=>{
            return `
              <div id="modal_cantidad" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-lg">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Indique la cantidad
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">
                                    
                                    <h4 class="negrita text-base" id="lbDesprod"></h4>
                                    <h5 class="negrita text-danger" id="lbCodprod"></h5>
                                    
                                    <div class="form-group">
                                        <label class="negrita text-secondary">Cantidad</label>
                                        <input type="number" class="negrita text-danger form-control h5" id="txtCantidad">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Costo Unitario</label>
                                        <input type="number" class="negrita text-danger form-control h5" id="txtCosto">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Costo Total</label>
                                        <input type="number" class="negrita text-danger form-control h5" id="txtCostoTotal" disabled="true">
                                    </div>

                                    <br>
                                    <div class="row">
                                        <div class="col-6">
                                            <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                                <i class="fal fa-arrow-left"></i>
                                            </button>
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-success btn-circle btn-xl hand shadow" id="btnAceptarCantidad">
                                                <i class="fal fa-check"></i>
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <input type="text" id="txtTipoEntSal" disabled="true" class="">
                                
                           
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
            tbl_temp_entrada()
        }else{
            document.getElementById('tab-dos').click();
            tbl_temp_salida();
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
  
        tbl_temp_salida();
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
  
        tbl_temp_entrada();

    })
    .catch(()=>{
        document.getElementById('cmbCoddocE').innerHTML = "<option value=''></option>";
        document.getElementById('txtCorrelativoE').value = '0';
    });
    //cargando coddoc entradas



    tbl_movimientos();

    document.getElementById('txtDesprodE').addEventListener('keyup',(e)=>{
        if (e.code === 'Enter') { 
             document.getElementById('btnNuevoProductoE').click();
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            document.getElementById('btnNuevoProductoE').click();
        };
    })
    

    document.getElementById('btnNuevoProductoE').addEventListener('click',()=>{
        
        $('#modal_productos').modal('show');

        let sucursal = document.getElementById('cmbEmpresaE').value;
        let filtro = document.getElementById('txtDesprodE').value || '';

        document.getElementById('txtTipoEntSal').value = 'E';

        tbl_lista_productos(sucursal,filtro,'E');


    });


    document.getElementById('txtDesprodS').addEventListener('keyup',(e)=>{
        if (e.code === 'Enter') { 
             document.getElementById('btnNuevoProductoS').click();
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            document.getElementById('btnNuevoProductoS').click();
        };
    })


    document.getElementById('btnNuevoProductoS').addEventListener('click',()=>{
        
        $('#modal_productos').modal('show');

         let sucursal = document.getElementById('cmbEmpresaS').value;
        let filtro = document.getElementById('txtDesprodS').value || '';

        document.getElementById('txtTipoEntSal').value = 'S';

        tbl_lista_productos(sucursal,filtro,'S');


    });


    document.getElementById('txtCantidad').addEventListener('change',()=>{

        try {
            let cantidad = document.getElementById('txtCantidad').value || '1';
            let costo = document.getElementById('txtCosto').value || '0.01';
            document.getElementById('txtCostoTotal').value = F.setMoneda((cantidad * costo),'');

        } catch (error) {
            document.getElementById('txtCostoTotal').value = '0.01';
        }

    });

    document.getElementById('txtCosto').addEventListener('change',()=>{

        try {
            let cantidad = document.getElementById('txtCantidad').value || '1';
            let costo = document.getElementById('txtCosto').value || '0.01';
            document.getElementById('txtCostoTotal').value = F.setMoneda((cantidad * costo),'');

        } catch (error) {
            document.getElementById('txtCostoTotal').value = '0.01';
        }

    });



    // modal cantidad

    let btnAceptarCantidad = document.getElementById('btnAceptarCantidad');
    btnAceptarCantidad.addEventListener('click',()=>{

        
        let tipoentsal = document.getElementById('txtTipoEntSal').value;
           

        let cantidad = document.getElementById('txtCantidad').value || '1';
        let costo = document.getElementById('txtCosto').value || '0.01';


        F.showToast('Producto agregado a la lista');
    
        let coddoc = document.getElementById('cmbCoddoc' + tipoentsal).value;
        let codprod = document.getElementById('txtCodprod' + tipoentsal).value;
        let desprod = document.getElementById('txtDesprod' + tipoentsal).value;
        let totalcosto = (Number(costo)*Number(cantidad));

            $("#modal_cantidad").modal('hide');

            if(tipoentsal=='E'){
                db_movinv.insert_temp_movinv_entrada(coddoc,codprod,desprod,'UNIDAD',cantidad,costo,totalcosto)
                .then(()=>{
                    tbl_temp_entrada();
                })
                
            }else{
                 db_movinv.insert_temp_movinv_salida(coddoc,codprod,desprod,'UNIDAD',cantidad,costo,totalcosto)
                .then(()=>{
                    tbl_temp_salida();
                })
            }
            
        







    });



    
    // modal cantidad
    

    let btnGuardarE = document.getElementById('btnGuardarE');
    btnGuardarE.addEventListener('click',()=>{

        F.Confirmacion('¿Está seguro que desea Guardar este movimiento?')
        .then((value)=>{
            if(value==true){

                insert_movimiento('E')
                .then(()=>{
                    F.Aviso('Documento guardado exitosamente!!')
                })
                .catch(()=>{
                    F.AvisoError('No se pudo guardar');
                })

            }
        })



    });


    let btnGuardarS = document.getElementById('btnGuardarS');
    btnGuardarS.addEventListener('click',()=>{

        F.Confirmacion('¿Está seguro que desea Guardar este movimiento?')
        .then((value)=>{
            if(value==true){

                insert_movimiento('S')
                .then(()=>{
                    F.Aviso('Documento guardado exitosamente!!')
                })
                .catch(()=>{
                    F.AvisoError('No se pudo guardar');
                })

            }
        })
        
    });


};

function initView(){

    getView();
    addListeners();

};

function insert_movimiento(entsal){

    return new Promise((resolve,reject)=>{

        let sucursal = document.getElementById('cmbEmpresa' + entsal).value;
        let coddoc = document.getElementById('cmbCoddoc' + entsal).value;
        let correlativo = document.getElementById('txtCorrelativo' + entsal).value;
        let mes = 0;
        let anio = 0;
        let fecha = F.devuelveFecha('txtFecha' + entsal);
        let hora = document.getElementById('txtHora' + entsal).value;
        let codproyecto = document.getElementById('cmbProyecto' + entsal).value;
        let codsolicita = document.getElementById('cmbSolicita' + entsal).value;
        let codrecibe = 0;
        let noorden = '';
        let obs = '';


        let json_details = [];

        if(entsal=='S'){db_movinv.select_temp_movinv_salida().then((data)=>{json_details = data}); codrecibe = document.getElementById('cmbRecibe'+ entsal).value;};
        if(entsal=='E'){db_movinv.select_temp_movinv_entrada().then((data)=>{json_details = data})};

        console.log('hasta aqui')
        
        let data = {sucursal:sucursal,
                    coddoc:coddoc,
                    correlativo:correlativo,
                    mes:mes,
                    anio:anio,
                    fecha:fecha,
                    hora:hora,
                    codproyecto:codproyecto,
                    codsolicita:codsolicita,
                    codrecibe:codrecibe,
                    noorden:noorden,
                    obs:obs,
                    json_details: JSON.stringify(json_details)
                }


                axios.post(GlobalUrlCalls + '/general/insert_documento',data)
                .then((response) => {
                    if(response.status.toString()=='200'){
                        let data = response.data;
                        if(data.toString()=="error"){
                            reject();
                        }else{
                            if(Number(data.rowsAffected[0])>0){
                                resolve(data);             
                            }else{
                                reject();
                            } 
                        }       
                    }else{
                        reject();
                    }                   
                }, (_error) => {
                    reject();
                });

    })

};

function clean_data(){

};



function tbl_movimientos(){

    let mes = document.getElementById('cmbMes').value;
    let anio = document.getElementById('cmbAnio').value;
    let movinv = document.getElementById('cmbMovimiento').value;







};



function tbl_lista_productos(sucursal,filtro,entsal){

    let container = document.getElementById('tblDataProductos');
    container.innerHTML = GlobalLoader;
 
    GF.data_lista_productos(sucursal,filtro)
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            str += `
            <tr class="hand"
                onclick="get_producto('${F.limpiarTexto(r.CODPROD)}','${F.limpiarTexto(r.DESPROD)}','${r.COSTO}','${entsal}')">
                <td>${F.limpiarTexto(r.CODPROD)}</td>
                <td>${F.limpiarTexto(r.DESPROD)}</td>
                <td>${r.EXISTENCIA}</td>
                <td>${F.limpiarTexto(r.DESMARCA)}</td>
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
        


        document.getElementById('lbDesprod').innerText = desprod;
        document.getElementById('lbCodprod').innerText = codprod;
        
        document.getElementById('txtCosto').value = costo;
        document.getElementById('txtCantidad').value = 1;

        

        $("#modal_cantidad").modal('show');






};



function tbl_temp_salida(){


    let container = document.getElementById('tblDataSalida');
    container.innerHTML = GlobalLoader;

    let str = '';

    db_movinv.select_temp_movinv_salida()
    .then((data)=>{
        
        data.map((r)=>{
            let idbtn = `btnE${r.ID}`
            str += `
            <tr>
                <td>${r.DESPROD}
                    <br>
                    <small class="negrita text-danger">Cod: ${r.CODPROD}</small>
                </td>
                <td>${r.CANTIDAD}</td>
                <td>${F.setMoneda(r.COSTO,'Q')}</td>
                <td>${F.setMoneda(r.TOTALCOSTO,'Q')}</td>
                <td>
                    <button class="btn btn-danger btn-circle btn-md hand shadow" id="${idbtn}"
                     onclick="delete_temp_salida('${r.ID}','${idbtn}')">
                        <i class="fal fa-trash"></i>
                     </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;

    })



};

function delete_temp_salida(idrow,idbtn){

        F.Confirmacion('¿Está seguro que desea ELIMINAR esta linea?')
        .then((value)=>{
            if(value==true){
                    db_movinv.delete_temp_movinv_salida_id(idrow)
                    .then(()=>{
                        tbl_temp_salida();
                    })
            }
        })

        

};





function tbl_temp_entrada(){

    
    let container = document.getElementById('tblDataEntrada');
    container.innerHTML = GlobalLoader;

    let str = '';

    db_movinv.select_temp_movinv_entrada()
    .then((data)=>{
        
        data.map((r)=>{
            let idbtn = `btnEE${r.ID}`
            str += `
            <tr>
                <td>${r.DESPROD}
                    <br>
                    <small class="negrita text-danger">Cod: ${r.CODPROD}</small>
                </td>
                <td>${r.CANTIDAD}</td>
                <td>${F.setMoneda(r.COSTO,'Q')}</td>
                <td>${F.setMoneda(r.TOTALCOSTO,'Q')}</td>
                <td>
                    <button class="btn btn-danger btn-circle btn-md hand shadow" id="${idbtn}"
                     onclick="delete_temp_entrada('${r.ID}','${idbtn}')">
                        <i class="fal fa-trash"></i>
                     </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;

    })


};

function delete_temp_entrada(idrow,idbtn){

      F.Confirmacion('¿Está seguro que desea ELIMINAR esta linea?')
        .then((value)=>{
            if(value==true){
                    db_movinv.delete_temp_movinv_entrada_id(idrow)
                    .then(()=>{
                        tbl_temp_entrada();
                    })
            }
        })

};



