
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                             ${view.movimiento_entrada_productos()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           ${view.movimiento_entrada_encabezado()}
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
                ${view.modal_lista_productos() + view.modal_cantidad() + view.modal_proveedores()}
               
            `
        },
        movimiento_entrada_productos: ()=>{
            return `
            <div class="card card-rounded col-12">
                <div class="card-body p-4">

                    <div class="row">
                        <div class="col-6">
                            
                            <div class="form-group">
                                <label class="negrita text-secondary">Bodega Entrada</label>
                                <select class="form-control negrita" id="cmbEmpresa">
                                </select>
                            </div>

                        </div>
                        <div class="col-6">
                            <h2 class="text-left negrita text-base">Nueva Compra</h2>
                            <h5 class="negrita text-danger" id="lbItems"></h5>
                        </div>
                    </div>
                    <br>

                    <div class="row">

                     <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label>Codigo Seleccionado</label>
                                <div class="input-group">
                                    <input type="text" class="form-control negrita text-base" disabled="true" id="txtCodprod">
                                </div>
                                
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                            <div class="form-group">
                                <label>Producto</label>
                                <div class="input-group">
                                    <input type="text" 
                                    class="form-control negrita text-base" 
                                    id="txtDesprod"
                                    placeholder="Escriba para buscar...">
                                    <button class="btn btn-success hand shadow" id="btnNuevoProducto">
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
                            <tbody id="tblDataMovimiento"></tbody>

                        </table>
                    </div>

                </div>
            </div>

            <input type="text" id="txtCodprod" disabled="true" class="hidden">
            
            
        
            <button class="btn btn-success btn-xl btn-circle btn-bottom-r hand shadow"
            onclick="document.getElementById('tab-dos').click()">
                <i class="fal fa-arrow-right"></i>
            </button>

            
            `
        },
        movimiento_entrada_encabezado: ()=>{
            return `
         
            <div class="card card-rounded col-12">
                <div class="card-body p-4" style="font-size:90%">

                   
                    <h4 class="negrita text-info text-center">Datos finales</h4>
                    <br>
                    
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">

                           

                                <div class="form-group">
                                    <label class="negrita text-secondary">Empresa Contable</label>
                                    <select class="form-control negrita" id="cmbEmpresaContable">
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label class="negrita text-base">Documento FEL SAT</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control negrita border-info" id="txtFELSerie" placeholder="SERIE FEL">
                                        <input type="text" class="form-control negrita border-info" id="txtFELNumero" placeholder="NUMERO FEL">  
                                    </div>                               
                                </div>
                              
                                <div class="form-group">
                                    <label class="negrita text-secondary">Proveedor</label>
                                    <div class="input-group">
                                        <select class="form-control negrita" id="cmbProveedor">
                                        </select>
                                        <button class="btn btn-md btn-success hand" id="btnNuevoProveedor">
                                            <i class="fal fa-plus"></i>
                                        </button>
                                    </div>
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
                                <label class="negrita text-secondary">Proyecto / Area</label>
                                <select class="form-control negrita" id="cmbProyectos">
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="negrita text-secondary">Persona que Solicita</label>
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

                            <br><br>
                            <div class="form-group">
                                <button class="btn btn-danger hand shadow col-12" id="btnCargarCostos">
                                    <i class="fal fa-download"></i>&nbsp Cargar Costos
                                </button>
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
                                                    <td>TIPO</td>
                                                    <td>CODIGO</td>
                                                    <td>PRODUCTO</td>
                                                    <td>EXISTENCIA</td>
                                                    <td>COSTO</td>
                                                    <td>MARCA</td>
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

                            <input type="text" id="txtTipoEntSal" disabled="true" class="hidden">
                                
                           
                        </div>
                    
                    </div>
                </div>
            </div>
            `
        },
        modal_proveedores:()=>{
            return `
              <div id="modal_proveedores" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Crear Nuevo Proveedor
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">
                                    
                                    <div class="row">
                                        <div class="col-6">
                                                <div class="form-group">
                                                    <label class="negrita text-secondary">NIT</label>
                                                    <input type="text" class="negrita text-secondary form-control" id="txtProvNit">
                                                </div>
                                        </div>
                                        <div class="col-6">
                                                <div class="form-group">
                                                    <label class="negrita text-secondary">Telefono</label>
                                                    <input type="text" class="negrita text-secondary form-control" id="txtProvTelefono">
                                                </div>
                                        </div>
                                    </div>
                                    <br>
                                    

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Proveedor</label>
                                        <input type="text" class="negrita text-secondary form-control" id="txtProvNombre">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-secondary">Direccion</label>
                                        <input type="text" class="negrita text-secondary form-control" id="txtProvDireccion">
                                    </div>

                                    <div class="row">
                                        <div class="col-6">
                                            <button class="btn btn-secondary btn-md hand shadow"
                                            data-dismiss="modal">
                                                <i class="fal fa-arrow-left"></i>Cancelar
                                            </button>
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-info btn-md hand shadow" id="btnGuardarProveedor">
                                                <i class="fal fa-save"></i>Guardar
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <br>
                            <div class="card card-rounded">
                                <div class="card-body p-4">
                                    <div class="table-responsive">
                                        <table class="table  h-full col-12">
                                            <thead class="bg-base text-white">
                                                <tr>
                                                    <td>NIT</td>
                                                    <td>PROVEEDOR</td>
                                                    <td>DIRECCION</td>
                                                    <td>TELEFONO</td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody id="tblDataProveedores"></tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>

                            <input type="number" id="txtProvCodigo" disabled="true" class="hidden">
                                
                           
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


    
    document.title = 'COMPRAS';

    F.slideAnimationTabs();


    document.getElementById('txtFecha').value = F.getFecha();

   setInterval(() => {
    
        try {
            document.getElementById('txtHora').value = F.getHora();
        } catch (error) {
            
        }
    
   }, 1000);


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
        cargar_proyectos();
    })
    .catch(()=>{
       document.getElementById('cmbEmpresa').innerHTML = "<option value=''>No se cargaron las empresas</option>";

    });
    //cargando empresas

    document.getElementById('cmbEmpresa').addEventListener('change',()=>{
        cargar_proyectos();
    });


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


    
    GF.data_select_empresas_conta()
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{
            str += `
                <option value='${r.CODEMP}'>${r.NIT}-${r.RAZON_SOCIAL}</option>
            `
        })
        document.getElementById('cmbEmpresaContable').innerHTML = str;
    })
    .catch(()=>{
         document.getElementById('cmbEmpresaContable').innerHTML = "<option value='0'>SIN EMPRESA</option>";
    })



    listeners_provedores();


   

     //cargando coddoc entradas
    GF.data_coddoc('%','COM')
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



    document.getElementById('txtDesprod').addEventListener('keyup',(e)=>{
        if (e.code === 'Enter') { 
             document.getElementById('btnNuevoProducto').click();
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            document.getElementById('btnNuevoProducto').click();
        };
    })
    

    document.getElementById('btnNuevoProducto').addEventListener('click',()=>{
        
        $('#modal_productos').modal('show');

        let sucursal = document.getElementById('cmbEmpresa').value;
        let filtro = document.getElementById('txtDesprod').value || '';

        document.getElementById('txtTipoEntSal').value = 'E';

        tbl_lista_productos(sucursal,filtro,'E');

        document.getElementById('txtDesprod').value = '';

    });


    document.getElementById('txtCantidad').addEventListener('input',()=>{

            get_total_costo();

    });

    document.getElementById('txtCosto').addEventListener('input',()=>{

           get_total_costo();

    });



    // modal cantidad

    let btnAceptarCantidad = document.getElementById('btnAceptarCantidad');
    btnAceptarCantidad.addEventListener('click',()=>{

        
        let tipoentsal = document.getElementById('txtTipoEntSal').value;
           

        let cantidad = document.getElementById('txtCantidad').value || '1';
        let costo = document.getElementById('txtCosto').value || '0.01';


        F.showToast('Producto agregado a la lista');
    
        let coddoc = document.getElementById('cmbCoddoc').value;
        let codprod = document.getElementById('txtCodprod').value;
        let desprod = document.getElementById('txtDesprod').value;
        let totalcosto = (Number(costo)*Number(cantidad));

            $("#modal_cantidad").modal('hide');
       
                db_compra.insert_temp_movinv_entrada(coddoc,codprod,desprod,'UNIDAD',cantidad,costo,totalcosto)
                .then(()=>{
                    tbl_temp_entrada();
                })


    });



    
    // modal cantidad
    
    tbl_temp_entrada();
    

    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{

        F.Confirmacion('¿Está seguro que desea Guardar este movimiento?')
        .then((value)=>{
            if(value==true){

              
                btnGuardar.disabled = true;
                btnGuardar.innerHTML = `<i class="fal fa-spin fa-save"></i>`;

                let serie = document.getElementById('txtFELSerie').value || document.getElementById('cmbCoddoc').value;
                let numero = document.getElementById('txtFELNumero').value || document.getElementById('txtCorrelativo').value;

                F.showToast('Verificando Serie FEL');

                GF.verify_serie_compra(serie,numero)
                .then(()=>{

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
                        
                })
                .catch(()=>{
                    F.AvisoError('Este numero de factura FEL ya existe, por favor, verifique');
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;

                })
                
                

            }
        })



    });




    let btnCargarCostos = document.getElementById('btnCargarCostos');
    btnCargarCostos.addEventListener('click',()=>{

        F.Confirmacion('¿Está seguro que desea CARGAR LOS NUEVOS COSTOS?')
        .then((value)=>{
            if(value==true){

                btnCargarCostos.disabled = true;
                
                F.showToast('Actualizando costos....');

                db_compra.select_temp_movinv_entrada()
                .then((data)=>{
                    
                    data.map((r)=>{
                        GF.update_costo_producto(r.CODPROD,r.COSTO)
                        .then(()=>{
                            F.showToast(`Actualizado: ${r.DESPROD}`);
                        })
                        .catch(()=>{
                            F.showToast(`No se actualizo ${r.DESPROD}`);
                        })
                    
                    })

                    F.Aviso('Actualizacion de Costos finalizada');
                    
                    btnCargarCostos.disabled = false;
                
                })



            }
        })

    });
  


};



function listeners_provedores(){
    
    



    let btnNuevoProveedor = document.getElementById('btnNuevoProveedor');
    btnNuevoProveedor.addEventListener('click',()=>{

        $("#modal_proveedores").modal('show');

        document.getElementById('txtProvNit').value = '';
        document.getElementById('txtProvNombre').value = '';
        document.getElementById('txtProvDireccion').value = '';
        document.getElementById('txtProvTelefono').value = '';
        

    });


    let btnGuardarProveedor = document.getElementById('btnGuardarProveedor');
    btnGuardarProveedor.addEventListener('click',()=>{

            let nit = document.getElementById('txtProvNit').value || '';
            let proveedor = document.getElementById('txtProvNombre').value || '';
            let direccion = document.getElementById('txtProvDireccion').value || 'CIUDAD';
            let telefono = document.getElementById('txtProvTelefono').value = '';


            if(nit==''){F.AvisoError('Indique el numero de NIT');return;};
            if(proveedor==''){F.AvisoError('Indique el nombre');return;};

            GF.insert_proveedor(nit,proveedor,direccion,telefono)
            .then(()=>{
                F.Aviso('Proveedor creado exitosamente!');
                tbl_proveedores();
                
                document.getElementById('txtProvNit').value = '';
                document.getElementById('txtProvNombre').value = '';
                document.getElementById('txtProvDireccion').value = '';
                document.getElementById('txtProvTelefono').value = '';
            })
            .catch(()=>{
                F.AvisoError('No se pudo agregar');  
            })

            
    });



    tbl_proveedores();

};

function tbl_proveedores(){
     GF.data_select_proveedores()
    .then((data)=>{

        let str = '';
        let tbl = '';

        data.recordset.map((r)=>{
            let idBtnEliminar = `btnEliminar${r.CODPROV}`;
            str += `
                <option value='${r.CODPROV}'>${r.NIT}-${r.PROVEEDOR}</option>
            `;
            tbl += `
            <tr>
                <td>${r.NIT}</td>
                <td>${r.PROVEEDOR}</td>
                <td>${r.DIRECCION}</td>
                <td>${r.TELEFONO}</td>
                <td>
                    <button class="btn btn-md btn-circle btn-danger hand shadow"
                    id="${idBtnEliminar}"
                    onclick="eliminar_proveedor('${r.CODPROV}','${idBtnEliminar}')">
                        <i class="fal fa-trash"></i>
                    </button>
                </td>
            </tr>
            `
        })
        document.getElementById('cmbProveedor').innerHTML = str;
        document.getElementById('tblDataProveedores').innerHTML = tbl;

    })
    .catch(()=>{
         document.getElementById('cmbProveedor').innerHTML = "<option value='0'>SIN PROVEEDOR</option>";
        document.getElementById('tblDataProveedores').innerHTML = 'No se cargaron datos...';
    })
};

function eliminar_proveedor(codprov,idbtn){

    let btn = document.getElementById(idbtn);

    F.Confirmacion('¿Está seguro que desea ELIMINAR este proveedor?')
    .then((value)=>{
        if(value==true){

            btn.disabled = true;
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;
            
            F.showToast('Verificando movimientos...');

            GF.select_movimientos_proveedor(codprov)
            .then(()=>{
                //tiene movimientos, por ende no se elimina
                F.AvisoError('Este proveedor tiene movimientos, no se puede ELIMINAR');
                btn.disabled = false;
                btn.innerHTML = `<i class="fal fa-trash"></i>`;

            })
            .catch(()=>{
                //no tiene movimientos, se puede eliminar
                F.showToast('Eliminando Proveedor...');

                GF.delete_proveedor(codprov)
                .then(()=>{
                    F.Aviso('Proveedor eliminado exitosamente!!');
                    tbl_proveedores();
                })
                .catch(()=>{
                    F.AvisoError('No se pudo ELIMINAR');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fal fa-trash"></i>`;
                })

            })



        }
    })


};

function get_total_costo(){
     try {
                let cantidad = Number(document.getElementById('txtCantidad').value) || 1;
                let costo = Number(document.getElementById('txtCosto').value) || 0.01;
                let totalcosto = Number(cantidad) * Number(costo);
                console.log(totalcosto)
                document.getElementById('txtCostoTotal').value = totalcosto;

            } catch (error) {
                console.log(error)
                document.getElementById('txtCostoTotal').value = '0.01';
            }
};


function cargar_proyectos(){

    let sucursal = document.getElementById('cmbEmpresa').value;
     //cargando proyectos
    GF.data_listado_proyectos(sucursal)
    .then((data)=>{
        
        let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value='${r.CODPROYECTO}'>${r.NOMPROYECTO}</option>
            `
        })
         document.getElementById('cmbProyectos').innerHTML = str;

    })
    .catch(()=>{
        document.getElementById('cmbProyectos').innerHTML = "<option value=''>No se cargaron los proyectos</option>";

    });
    
};

function initView(){

    getView();
    addListeners();

};

function insert_movimiento(entsal){

    return new Promise((resolve,reject)=>{

         let json_details;

        let sucursal = document.getElementById('cmbEmpresa').value;
        let coddoc = document.getElementById('cmbCoddoc').value;
        let correlativo = document.getElementById('txtCorrelativo').value;
        let mes = 0;
        let anio = 0;
        let fecha = F.devuelveFecha('txtFecha');
        let hora = document.getElementById('txtHora').value;
      
        let codproyecto = document.getElementById('cmbProyectos').value;
        //let codsolicita = document.getElementById('cmbSolicita').value;
        let codsolicita = document.getElementById('cmbRecibe').value;
        let codrecibe = 0;
        let noorden = '';
        let obs = F.limpiarTexto(document.getElementById('txtObs').value);

        let fel_serie = document.getElementById('txtFELSerie').value || '';
        let fel_numero = document.getElementById('txtFELNumero').value || '';
        let codempresa_conta = document.getElementById('cmbEmpresaContable').value
        let codprov = document.getElementById('cmbProveedor').value

        let items = 0; let varTotalCosto = 0;

 
        db_compra.select_temp_movinv_entrada()
        .then((data)=>{

            data.map((r)=>{
                varTotalCosto += Number(r.TOTALCOSTO);
                items +=1;
            })

            if(Number(items)==0){
                F.AvisoError('Agregue un producto al menos');
                reject();
                
            }else{

                json_details = data;

                let datos = {sucursal:sucursal,
                    sucursal_recibe:sucursal,
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
                    items:items,
                    totalcosto:varTotalCosto,
                    fel_serie:fel_serie,
                    fel_numero:fel_numero,
                    codempresa_conta:codempresa_conta,
                    codprov:codprov,
                    json_details: JSON.stringify(json_details)
                }

                axios.post(GlobalUrlCalls + '/general/insert_documento_compra',datos)
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


            }

        });
       

        //if(entsal=='S'){db_compra.select_temp_movinv_salida().then((data)=>{json_details = data}); codrecibe = document.getElementById('cmbRecibe'+ entsal).value;};
    })

};

function clean_data(){


    document.getElementById('txtFELSerie').value = '';
    document.getElementById('txtFELNumero').value = '';

    document.getElementById('txtObs').value = '';


    db_compra.delete_temp_movinv_entrada_all()
    .then(()=>{
        tbl_temp_entrada();
    })


    GF.data_correlativo('%',document.getElementById('cmbCoddoc').value)
    .then((data)=>{document.getElementById('txtCorrelativo').value=data})
    .catch((data)=>{document.getElementById('txtCorrelativo').value=data})

    document.getElementById('tab-uno').click();


};






function tbl_lista_productos(sucursal,filtro,entsal){

    let container = document.getElementById('tblDataProductos');
    container.innerHTML = GlobalLoader;
 
    GF.data_lista_productos(sucursal,filtro,'%')
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            str += `
            <tr class="hand"
                onclick="get_producto('${F.limpiarTexto(r.CODPROD)}','${F.limpiarTexto(r.DESPROD)}','${r.COSTO}','${entsal}')">
                <td class="negrita text-info">${r.TIPO}</td>
                <td>${F.limpiarTexto(r.CODPROD)}</td>
                <td>${F.limpiarTexto(r.DESPROD)}</td>
                <td>${r.EXISTENCIA}</td>
                <td>${F.setMoneda(r.COSTO,'Q')}</td>
                <td>${F.limpiarTexto(r.DESMARCA)}</td>
                
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


        document.getElementById('txtCodprod').value = codprod;
        document.getElementById('txtDesprod').value = desprod;
        


        document.getElementById('lbDesprod').innerText = desprod;
        document.getElementById('lbCodprod').innerText = codprod;
        
        document.getElementById('txtCosto').value = costo;
        document.getElementById('txtCantidad').value = 1;

        get_total_costo();

        $("#modal_cantidad").modal('show');


};





function tbl_temp_entrada(){

    
    let container = document.getElementById('tblDataMovimiento');
    container.innerHTML = GlobalLoader;

    let str = '';
    
    let varTotal = 0;
    let varItem = 0;

    db_compra.select_temp_movinv_entrada()
    .then((data)=>{
        
        data.map((r)=>{
            
            varTotal += Number(r.TOTALCOSTO);
            varItem += 1;

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
        document.getElementById('lbTotalCosto').innerText = F.setMoneda(varTotal,'Q');
        document.getElementById('lbItems').innerText = `items: ${varItem}`

    })


};

function delete_temp_entrada(idrow,idbtn){

      F.Confirmacion('¿Está seguro que desea ELIMINAR esta linea?')
        .then((value)=>{
            if(value==true){
                    db_compra.delete_temp_movinv_entrada_id(idrow)
                    .then(()=>{
                        tbl_temp_entrada();
                    })
            }
        })

};



