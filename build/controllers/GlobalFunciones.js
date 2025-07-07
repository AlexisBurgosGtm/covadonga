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
        insert_producto: (tipo,codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2)=>{
        
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
                            codrubro2:codrubro2,
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
        edit_producto: (tipo,codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2)=>{
        
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
                        codrubro2:codrubro2,
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
        update_st_producto:(codprod,st)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/productos/update_st_producto',{codprod:codprod,st:st})
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
        data_coddoc:(sucursal,tipodoc)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_coddoc',{sucursal:sucursal,tipodoc:tipodoc})
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
        data_correlativo:(sucursal,coddoc)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_correlativo',{sucursal:sucursal,coddoc:coddoc})
                .then((response) => {
                    if(response.status.toString()=='200'){
                        let data = response.data;
                        if(data.toString()=="error"){
                            reject(0);
                        }else{
                            if(Number(data.rowsAffected[0])>0){
                                let correlativo = '0';
                                data.recordset.map((r)=>{
                                    correlativo = r.CORRELATIVO;
                                })
                                resolve(correlativo);             
                            }else{
                                reject(0);
                            } 
                        }       
                    }else{
                        reject(0);
                    }                   
                }, (_error) => {
                    console.log(_error)
                    reject(0);
                });
            }) 
    

        },
        data_listado_proyectos:(sucursal)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_proyectos',{sucursal:sucursal})
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
        data_listado_empresas:()=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_empresas')
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
        data_listado_empresas_todas:()=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_empresas_listado')
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
        delete_empresa:(sucursal)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/delete_empresa', {sucursal:sucursal})
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
        update_empresa_status:(sucursal,newSt)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/update_status_empresa', {
                    sucursal:sucursal,st:newSt})
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
        insert_empresa:(sucursal,nombre)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/insert_empresa', {sucursal:sucursal,empresa:nombre})
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
        edit_empresa:(sucursal,nombre)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/edit_empresa', {sucursal:sucursal,empresa:nombre})
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
        data_lista_productos:(sucursal,filtro,tipo)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/listado_productos',{sucursal:sucursal,filtro:filtro,tipo:tipo})
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
        insert_empleado:(empnit,codpuesto,nombre,telefono,dpi,usuario,clave)=>{
        
            return new Promise((resolve,reject)=>{
        
                axios.post(GlobalUrlCalls + '/empleados/insert_empleado',
                    {
                        sucursal:empnit,
                        codpuesto:codpuesto,
                        nombre:nombre,
                        telefono:telefono,
                        dpi:dpi,
                        usuario:usuario,
                        clave:clave
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
        edit_empleado:(codigo,empnit,codpuesto,nombre,telefono,dpi,usuario,clave)=>{
        
            return new Promise((resolve,reject)=>{
        
                axios.post(GlobalUrlCalls + '/empleados/edit_empleado',
                    {
                        codigo:codigo,
                        sucursal:empnit,
                        codpuesto:codpuesto,
                        nombre:nombre,
                        telefono:telefono,
                        dpi:dpi,
                        usuario:usuario,
                        clave:clave
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
        data_listado_empleados:(sucursal)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/empleados/select_listado',{sucursal:sucursal})
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
        update_st_empleado:(codemp,st)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/empleados/update_st_empleado',{codemp:codemp,st:st})
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
        delete_empleado:(codemp)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/empleados/delete_empleado', {codigo:codemp})
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
        data_documentos:(sucursal,tipo,mes,anio)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_documentos',{sucursal:sucursal,tipo:tipo,mes:mes,anio:anio})
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
        data_traslados_recibidos_pendientes:(sucursal)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_traslados_recibidos_pendientes',{
                    sucursal:sucursal
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
};

