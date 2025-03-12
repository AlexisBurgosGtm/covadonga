
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
                           ${view.vista_detalles_producto()}
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
                    <h3 class="negrita text-danger">Catalogo de productos</h3>
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
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                TITULO
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">

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
        vista_detalles_producto:()=>{
            return `
                            <div class="card card-rounded">
                                <div class="card-body p-4">
                                

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-base negrita">CODIGO</label>
                                                <input type="text" class="form-control negrita">
                                            </div>
                                        </div>

                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-base negrita">CODIGO ALTERNO</label>
                                                <input type="text" class="form-control negrita">
                                            </div>
                                        </div>
                                    </div>

                                    <br>

                                    <div class="form-group">
                                        <label class="text-base negrita">DESCRIPCION</label>
                                        <input type="text" class="form-control negrita">
                                    </div>

                                    <div class="form-group">
                                        <label class="text-base negrita">DESCRIPCION 2</label>
                                        <input type="text" class="form-control negrita">
                                    </div>

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-base negrita">UNIDADES X CAJA</label>
                                                <input type="number" class="form-control negrita">
                                            </div>
                                        </div>

                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-base negrita">EMPAQUE</label>
                                                <input type="text" class="form-control negrita">
                                            </div>
                                        </div>
                                    </div>

                                    <br>

                                      <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-base negrita">COSTO COMPRA</label>
                                                <input type="number" class="form-control negrita">
                                            </div>
                                        </div>

                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="text-base negrita">PRECIO VENTA</label>
                                                <input type="text" class="form-control negrita">
                                            </div>
                                        </div>
                                    </div>

                                    <br>

                                    <div class="form-group">
                                        <label class="text-base negrita">MARCA</label>
                                        <select class="form-control negrita">
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label class="text-base negrita">RUBRO</label>
                                        <select class="form-control negrita">
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label class="text-base negrita">RUBRO 2</label>
                                        <select class="form-control negrita">
                                        </select>
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
            
            document.getElementById('tab-dos').click();

            clean_productos();


        });







};

function initView(){

    getView();
    addListeners();

};


function clean_productos(){



};

function get_data_productos(){

    return new Promise((resolve,reject)=>{
    
        axios.post(GlobalUrlCalls + '/productos/select_productos',
            {
                sucursal:GlobalEmpnit
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


    get_data_productos()
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{
            str += `
            <tr>
                <td><b class="text-danger">${r.CODPROD}</b>
                    <br>
                    <small>${r.CODPROD2}</small>
                </td>
                <td>${r.DESCRIPCION}}
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
                    <button class="btn btn-md btn-circle btn-info hand shadow">
                        <i class="fal fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-md btn-circle btn-danger hand shadow">
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




