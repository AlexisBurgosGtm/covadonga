let GF = {
    fcn_load_navbar: (menu,idNavbar,idContainer)=>{

        
        let container = document.getElementById(idContainer);
        container.style = "visibility:visible";
        
        let strMenu = ''
        
        switch (menu) {
            case 'DIGITADOR':
               strMenu = botones_menu.inicio_digitador();
                break;
            case 'VENDEDOR':
                strMenu = botones_menu.inicio_vendedor();
                break;
            default:
                strMenu = '';
                break;
        }

        container.innerHTML = strMenu;
        

        $('#' + idNavbar).navigation({ 
            accordion: true,
            animate: 'easeOutExpo',
            speed: 200,
            closedSign: '+',
            openedSign: '-',
            initClass: 'js-nav-built'
        });

    },
    get_data_config:()=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/config/config_generales')
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
    

    },
    login_empleado:(sucursal,u,p)=>{
    
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/empleados/empleados_login',
                {
                    sucursal:sucursal,
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
            }, (error) => {
                reject();
            });
        })   
    
    },
    get_data_qry:(url,data)=>{
        return new Promise((resolve,reject)=>{

            axios.post(GlobalUrlCalls + url, data)
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
    
    },
    verify_codprod:(codprod)=>{
    
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/productos/verify_codprod',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    codprod:codprod
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
    
    },
    verify_serie_compra_fel:(serie,numero)=>{
    
        return new Promise((resolve,reject)=>{
    
            if(serie==''){reject();return};
            
            axios.post(GlobalUrlCalls + '/compras/verify_factura_compra_fel',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    seriefac:serie,
                    numerofac:numero
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
    
    },
    get_data_buscar_producto(filtro){
    
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/productos/listado',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    habilitado:'SI',
                    filtro:filtro
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
        
    
    }
};

