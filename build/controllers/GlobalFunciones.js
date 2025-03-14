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
                    }, (_error) => {
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
                }, (_error) => {
                    reject();
                });
            })   
        
        },
        data_clasificaciones_tipo:(tipo)=>{
        
            return new Promise((resolve,reject)=>{
        
                axios.post(GlobalUrlCalls + '/productos/select_clasificaciones_tipo',
                    {
                        sucursal:GlobalEmpnit,
                        tipo:tipo
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
        
        },
        data_clasificaciones_todas:()=>{
        
            return new Promise((resolve,reject)=>{
        
                axios.post(GlobalUrlCalls + '/productos/select_clasificaciones_todas',
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
                }, (_error) => {
                    reject();
                });
            })   
        
        },
        insert_clasificacion:(tipo,descripcion)=>{
        
            return new Promise((resolve,reject)=>{
        
                axios.post(GlobalUrlCalls + '/productos/insert_clasificacion',
                    {
                        sucursal:GlobalEmpnit,
                        tipo:tipo,
                        descripcion:descripcion
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
        
        },
        insert_producto: (codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2)=>{
        
                return new Promise((resolve,reject)=>{
            
                    axios.post(GlobalUrlCalls + '/productos/insert_producto',
                        {
                            sucursal:GlobalEmpnit,
                            codprod:codprod,
                            codprod2:codprod2,
                            desprod:desprod,
                            desprod2:desprod2,
                            uxc:uxc,
                            codmedida:codmedida,
                            costo:costo,
                            precio:precio,
                            codmarca:codmarca,
                            codrubro:codrubro,
                            codrubro2:codrubro2
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
        
        },
        edit_producto: (codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2)=>{
        
            return new Promise((resolve,reject)=>{
        
                axios.post(GlobalUrlCalls + '/productos/edit_producto',
                    {
                        sucursal:GlobalEmpnit,
                        codprod:codprod,
                        codprod2:codprod2,
                        desprod:desprod,
                        desprod2:desprod2,
                        uxc:uxc,
                        codmedida:codmedida,
                        costo:costo,
                        precio:precio,
                        codmarca:codmarca,
                        codrubro:codrubro,
                        codrubro2:codrubro2
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

        },
        delete_producto:(codprod)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/productos/delete_producto',{codprod:codprod})
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
    

    },

};

