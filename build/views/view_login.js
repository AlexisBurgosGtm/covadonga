function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.login()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           ${view.usuarios()}
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
        login:()=>{
            return `
            <div class="card card-rounded border-base shadow col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div class="card-body p-4">
                    
                    <div class="text-center form-group">
                        <img src="./favicon.png" width="150px" height="150px">
                    </div>

                    <div class="form-group">
                        <label class="negrita">Usuario</label>
                        <input type="text" class="border-base negrita text-secondary form-control" id="txtU">
                    </div>

                    <div class="form-group">
                        <label class="negrita">Clave</label>
                        <input type="password" class="border-base negrita text-secondary form-control" id="txtP">
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <small class="negrita">${versionapp}</small>
                        </div>
                        <div class="col-6 text-right">
                            <button class="btn btn-info btn-circle hand btn-xl shadow" id="btnLogin">
                                <i class="fal fa-lock"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            `
        },
        usuarios:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-base text-white">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblPedidos">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            `
        },
        modal:()=>{
            return `
              <div id="modal_" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
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
        }
    }

    root.innerHTML = view.body();

};



function addListeners(){

    
    document.title = 'INGRESO DE USUARIOS';

    
    document.getElementById('root_navbar').style = "visibility:hidden";
    
    let btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click',()=>{
        

        let u = document.getElementById('txtU').value || '';
        let p = document.getElementById('txtP').value || '';


        btnLogin.disabled = true;
        btnLogin.innerHTML = `<i class="fal fa-spin fa-unlock"></i>`;

        login(u,p)
        .then((datos)=>{

                datos.recordset.map((r)=>{

                    GlobalEmpnit = r.EMPNIT;
                    GlobalCodUsuario = Number(r.CODIGO);
                    GlobalUsuario = r.USUARIO;
                    GlobalPass = r.CLAVE;
                    GlobalNivelUsuario =Number(r.NIVEL)

                })

                F.showToast('Obteniendo configuraciones generales');

                GF.data_configuraciones()
                .then((data)=>{
                    
                    data_config_general = data.recordset;
                    document.getElementById('root_navbar').style = "visibility:visible";

                    Menu.inicio();
                    
                })
                .catch(()=>{
                    
                    F.AvisoError('No se pudo iniciar, no se lograron obtener las configuraciones de sistema. Intente de nuevo.');

                    btnLogin.disabled = false;
                    btnLogin.innerHTML = `<i class="fal fa-lock"></i>`;
                })

        })
        .catch(()=>{

            F.AvisoError('No se pudo iniciar, verifique si sus datos de ingreso son correctos');

            btnLogin.disabled = false;
            btnLogin.innerHTML = `<i class="fal fa-lock"></i>`;
        })



       
        
    });



};

function initView(){

    getView();
    addListeners();

};


function login(u,p){

    return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/empleados/login',
                    {
                        token:TOKEN,
                        u:u,
                        p:p
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
                }, (_error) => {
                    reject();
                });

    })


};