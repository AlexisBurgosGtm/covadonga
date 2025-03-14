
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() }
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           ${view.vista_detalles_producto() + view.modal_clasificaciones()}
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
                <div class="card-body p-2">
                    
                    <div class="row">
                        
                        <div class="col-6">
                            <h4 class="negrita text-danger">Catalogo de productos</h4>
                            <h3 class="negrita text-success">COVADONGA</h3>
                            
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label></label>
                                <select class="negrita form-control" id="cmbStatus">
                                    <option value='SI'>HABILITADOS</option>
                                    <option value='NO'>DESHABILITADOS</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <br>

                    <div class="table-responsive col-12">
                        <table class="table table-hover col-12 h-full" id="tblProductos">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td>CODIGOS</td>
                                    <td>DESCRIPCIONES</td>
                                    <td>UXC</td>
                                    <td>COSTO</td>
                                    <td>PRECIO</td>
                                    <td>MARCA / RUBROS</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataProductos">
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
        modal_clasificaciones:()=>{
            return `
              <div id="modal_clasificaciones" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-base d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Datos de la Nueva Clasificación
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-4">


                                    <div class="from-group">
                                        <label class="negrita text-success">Descripcion</label>
                                        <input type="text" class="form-control negrita" id="txtDesClasificacion">
                                    </div>


                                    <br>

                                    <div class="row">
                                        <div class="col-6">
                                            <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                                <i class="fal fa-arrow-left"></i>
                                            </button>    
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-info btn-circle btn-xl hand shadow" id="btnGuardarClasificacion">
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
        vista_detalles_producto:()=>{
            return `
                            <div class="card card-rounded col-sm-12 col-md-6 col-lg-6 col-lx-6">
                                <div class="card-body p-4">
                                

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-success negrita">CODIGO</label>
                                                <input type="text" class="form-control negrita" id="txtCodprod">
                                            </div>
                                        </div>

                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-success negrita">CODIGO ALTERNO</label>
                                                <input type="text" class="form-control negrita" id="txtCodprod2">
                                            </div>
                                        </div>
                                    </div>

                                    <br>

                                    <div class="form-group">
                                        <label class="text-success negrita">DESCRIPCION</label>
                                        <input type="text" class="form-control negrita" id="txtDesprod">
                                    </div>

                                    <div class="form-group">
                                        <label class="text-success negrita">DESCRIPCION 2</label>
                                        <input type="text" class="form-control negrita" id="txtDesprod2">
                                    </div>

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-success negrita">UNIDADES X CAJA</label>
                                                <input type="number" class="form-control negrita"  id="txtUxc">
                                            </div>
                                        </div>

                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-success negrita">EMPAQUE</label>
                                                <input type="text" class="form-control negrita"  id="txtCodmedida">
                                            </div>
                                        </div>
                                    </div>

                                    <br>

                                      <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-success negrita">COSTO COMPRA</label>
                                                <input type="number" class="form-control negrita"  id="txtCosto">
                                            </div>
                                        </div>

                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-success negrita">PRECIO VENTA</label>
                                                <input type="text" class="form-control negrita"  id="txtPrecio">
                                            </div>
                                        </div>
                                    </div>

                                    <br>

                                    <div class="form-group">
                                        <label class="text-success negrita">MARCA</label>
                                        <div class="input-group">
                                            <select class="form-control negrita" id="cmbMarca">
                                            </select>
                                              <button class="btn btn-success hand" id="btnClasifMarca">
                                                <i class="fal fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="text-success negrita">RUBRO</label>
                                        <div class="input-group">
                                            <select class="form-control negrita" id="cmbRubro">
                                            </select>
                                              <button class="btn btn-success hand" id="btnClasifR1">
                                                <i class="fal fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="text-success negrita">RUBRO 2</label>
                                        <div class="input-group">
                                            <select class="form-control negrita" id="cmbRubro2">
                                            </select>
                                            <button class="btn btn-success hand" id="btnClasifR2">
                                                <i class="fal fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <button class="btn btn-secondary btn-bottom-l btn-xl btn-circle hand shadow" onclick="document.getElementById('tab-uno').click()">
                                <i class="fal fa-arrow-left"></i>
                            </button>

                            <button class="btn btn-info btn-bottom-r btn-xl btn-circle hand shadow" id="btnGuardar">
                                <i class="fal fa-save"></i>
                            </button>


            `
        },
    }

    root.innerHTML = view.body();

};

function addListeners(){


    
            F.slideAnimationTabs();

            

            document.getElementById('btnNuevo').addEventListener('click',()=>{
                
                document.getElementById('txtCodprod').disabled = false;

                document.getElementById('tab-dos').click();
                clean_productos();

            });



            GF.data_clasificaciones_todas()
            .then((data)=>{

                let strMarca = ''; let strR1 = ''; let strR2 = '';

                data.recordset.map((r)=>{
                        switch (r.TIPO) {
                            case 'MARCA':
                                strMarca += `<option value='${r.CODIGO}'>${r.DESCRIPCION}</option>`;
                                break;
                            case 'RUBRO':
                                strR1  += `<option value='${r.CODIGO}'>${r.DESCRIPCION}</option>`;
                                break;
                            case 'RUBRO2':
                                strR2  += `<option value='${r.CODIGO}'>${r.DESCRIPCION}</option>`;
                                break;
                        };
                });

                document.getElementById('cmbMarca').innerHTML = strMarca;
                document.getElementById('cmbRubro').innerHTML = strR1;
                document.getElementById('cmbRubro2').innerHTML = strR2;

            })
            .catch(()=>{

                document.getElementById('cmbMarca').innerHTML = `<option value='0'>-----</option>`;
                document.getElementById('cmbRubro').innerHTML = `<option value='0'>-----</option>`;
                document.getElementById('cmbRubro2').innerHTML = `<option value='0'>-----</option>`;
            
            })



            let btnGuardar = document.getElementById('btnGuardar');
            btnGuardar.addEventListener('click',()=>{

                    let codprod = document.getElementById('txtCodprod').value || '';
                    let codprod2 = document.getElementById('txtCodprod2').value  || codprod;
                    let desprod = document.getElementById('txtDesprod').value  || '';
                    let desprod2 = document.getElementById('txtDesprod2').value  || '';
                    let uxc = document.getElementById('txtUxc').value  || '1';
                    let codmedida = document.getElementById('txtCodmedida').value  || 'UNIDAD';
                    let costo = document.getElementById('txtCosto').value  || '0';
                    let precio = document.getElementById('txtPrecio').value  || '0';
                    let codmarca = document.getElementById('cmbMarca').value;
                    let codrubro = document.getElementById('cmbRubro').value;
                    let codrubro2 = document.getElementById('cmbRubro2').value;

                    if(codprod==''){F.AvisoError('Escriba un código de producto');return;};
                    if(desprod==''){F.AvisoError('Escriba un descripción de producto');return;};
                        
                    
                    if(document.getElementById('txtCodprod').disabled==true){

                        F.Confirmacion('¿Está seguro que desea ACTUALIZAR este producto?')
                        .then((value)=>{

                            if(value==true){

                                btnGuardar.disabled = true;
                                btnGuardar.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                                    GF.edit_producto(codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2)
                                    .then(()=>{

                                        btnGuardar.disabled = false;
                                        btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;

                                            F.Aviso('Producto actualizado exitosamente!!');
                                            document.getElementById('tab-uno').click();

                                            get_tbl_productos();

                                    })
                                    .catch(()=>{

                                        btnGuardar.disabled = false;
                                        btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;

                                        F.AvisoError('No se pudo actualizar este producto');
                                        
                                    })

                            }

                        })
                    
                    }else{

                        F.Confirmacion('¿Está seguro que desea CREAR este producto?')
                        .then((value)=>{

                            if(value==true){

                                btnGuardar.disabled = true;
                                btnGuardar.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                                    GF.insert_producto(codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2)
                                    .then(()=>{

                                        btnGuardar.disabled = false;
                                        btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;


                                            F.Aviso('Producto creado exitosamente!!');
                                            
                                            document.getElementById('tab-uno').click();
                                            
                                            get_tbl_productos();

                                    })
                                    .catch(()=>{

                                        btnGuardar.disabled = false;
                                        btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;


                                        F.AvisoError('No se pudo crear este producto');
                                        
                                    })

                            }

                        })
                        
                    }
                    
                    
                    



            });




            get_tbl_productos();




            document.getElementById('btnClasifMarca').addEventListener('click',()=>{

                selected_clasificacion = 'MARCA';

                document.getElementById('txtDesClasificacion').value = '';

                $("#modal_clasificaciones").modal('show');



            });

            document.getElementById('btnClasifR1').addEventListener('click',()=>{


                selected_clasificacion = 'RUBRO';

                document.getElementById('txtDesClasificacion').value = '';

                $("#modal_clasificaciones").modal('show');



            });

            document.getElementById('btnClasifR2').addEventListener('click',()=>{

                selected_clasificacion = 'RUBRO2';

                document.getElementById('txtDesClasificacion').value = '';
                
                $("#modal_clasificaciones").modal('show');




            });



            let btnGuardarClasificacion = document.getElementById('btnGuardarClasificacion');
            btnGuardarClasificacion.addEventListener('click',()=>{

                let descripcion = document.getElementById('txtDesClasificacion').value || '';
                if(descripcion==''){F.AvisoError('Escriba la descripción de la nueva clasificación');return;}

                F.Confirmacion('¿Está seguro que desea crear este nueva clasificación?')
                .then((value)=>{
                    if(value==true){

                        btnGuardarClasificacion.disabled = true;
                        btnGuardarClasificacion.innerHTML = `<i class="fal fa-save fa-spin"></i>`;


                        GF.insert_clasificacion(selected_clasificacion,descripcion)
                        .then(()=>{

                            btnGuardarClasificacion.disabled = false;
                            btnGuardarClasificacion.innerHTML = `<i class="fal fa-save"></i>`;
                       
                            $("#modal_clasificaciones").modal('hide');

                            get_clasificacion(selected_clasificacion);

                        })
                        .catch(()=>{
                            F.AvisoError('No se creó la clasificación');
                            btnGuardarClasificacion.disabled = false;
                            btnGuardarClasificacion.innerHTML = `<i class="fal fa-save"></i>`;
                       
                        })


                    }
                })



            });



};

function initView(){

    getView();
    addListeners();

};


function get_clasificacion(tipo){

    GF.data_clasificaciones_tipo(tipo)
        .then((data)=>{

            let str = ''; 

            data.recordset.map((r)=>{
                str += `<option value='${r.CODIGO}'>${r.DESCRIPCION}</option>`;
            });

            switch (tipo) {
                case 'MARCA':
                    document.getElementById('cmbMarca').innerHTML = str;
                    break;
                case 'RUBRO':
                    document.getElementById('cmbRubro').innerHTML = str
                    break;
                case 'RUBRO2':
                    document.getElementById('cmbRubro2').innerHTML = str
                    break;
            };

        })
        .catch(()=>{

                switch (tipo) {
                    case 'MARCA':
                        document.getElementById('cmbMarca').innerHTML = '';
                        break;
                    case 'RUBRO':
                        document.getElementById('cmbRubro').innerHTML = '';
                        break;
                    case 'RUBRO2':
                        document.getElementById('cmbRubro2').innerHTML = '';
                        break;
                };
           
        })
};



function clean_productos(){

        document.getElementById('txtCodprod').value ='';
        document.getElementById('txtCodprod2').value ='';
        document.getElementById('txtDesprod').value ='';
        document.getElementById('txtDesprod2').value ='';
        document.getElementById('txtUxc').value ='1';
        document.getElementById('txtCodmedida').value ='';
        document.getElementById('txtCosto').value ='0';
        document.getElementById('txtPrecio').value ='0';

};


function get_data_productos(st){

    return new Promise((resolve,reject)=>{
    
        axios.post(GlobalUrlCalls + '/productos/select_productos',
            {
                sucursal:GlobalEmpnit,
                habilitado:st
            })
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
        }, (error) => {
            reject();
        });
    })   

};

function get_tbl_productos(){

    let container = document.getElementById('tblDataProductos');
    container.innerHTML = GlobalLoader;


    let st = document.getElementById('cmbStatus').value;

    get_data_productos(st)
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{
            let btnE = `btnE${r.CODPROD}`;
            str += `
            <tr>
                <td><b class="text-danger">${r.CODPROD}</b>
                    <br>
                    <small>${r.CODPROD2}</small>
                </td>
                <td>${r.DESPROD}
                    <br>
                    <small>${r.DESPROD2}</small>
                </td>
                <td>${r.UXC}</td>
                <td>${F.setMoneda(r.COSTO,'Q')}</td>
                <td>${F.setMoneda(r.PRECIO,'Q')}</td>
                <td>${r.MARCA}
                    <br>
                    <small class="text-info negrita">${r.RUBRO}</small>
                    <br>
                    <small class="text-secondary negrita">${r.RUBRO2}</small>
                </td>
                <td>
                    <button class="btn btn-md btn-circle btn-info hand shadow"
                    onclick="edit_producto('${r.CODPROD}','${r.CODPROD2}','${r.DESPROD}','${r.DESPROD2}','${r.UXC}','${r.CODMEDIDA}','${r.COSTO}','${r.PRECIO}','${r.CODMARCA}','${r.CODRUBRO}','${r.CODRUBRO2}')"
                    >
                        <i class="fal fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-md btn-circle btn-danger hand shadow"
                    id="${btnE}"
                    onclick="delete_producto('${r.CODPROD}','${btnE}')" >

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


function edit_producto(codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2){

    F.Confirmacion('¿Está seguro que desea EDITAR este producto?')
    .then((value)=>{
        if(value==true){


            document.getElementById('txtCodprod').disabled = true;

            document.getElementById('txtCodprod').value =codprod;
            document.getElementById('txtCodprod2').value =codprod2;
            document.getElementById('txtDesprod').value = desprod;
            document.getElementById('txtDesprod2').value = desprod2;
            document.getElementById('txtUxc').value = uxc;
            document.getElementById('txtCodmedida').value = codmedida;
            document.getElementById('txtCosto').value = costo;
            document.getElementById('txtPrecio').value = precio;
            document.getElementById('cmbMarca').value = codmarca;
            document.getElementById('cmbRubro').value = codrubro;
            document.getElementById('cmbRubro2').value = codrubro2;
    
    
            document.getElementById('tab-dos').click();



        }
    })




};

function delete_producto(codprod,idbtn){

    let btn = document.getElementById(idbtn);

    F.Confirmacion('¿Está seguro que desea ELIMINAR este Producto?')
    .then((value)=>{
        if(value==true){

            btn.disabled = true;
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;

            GF.delete_producto(codprod)
            .then(()=>{

                F.Aviso('Producto eliminado exitosamente!!');

                get_tbl_productos();


            })
            .catch(()=>{
                
                F.AvisoError('No se pudo ELIMINAR, probablemente ya tenga movimientos asociados, DESHABILITELO en su lugar');
                btn.disabled = false;
                btn.innerHTML = `<i class="fal fa-trash"></i>`;

            })


        }
    })


};




