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
        data_select_empresas_conta:()=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_empresas_contabilidad')
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
        data_documentos_conta:(sucursal,mes,anio)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_documentos_conta',{sucursal:sucursal,mes:mes,anio:anio})
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
        data_select_proveedores:()=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_proveedores')
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
        insert_proveedor:(nit,proveedor,direccion,telefono)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/insert_proveedor',{
                    nit:nit,
                    proveedor:proveedor,
                    direccion:direccion,
                    telefono:telefono
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
        delete_proveedor:(codprov)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/delete_proveedor',{
                   codprov:codprov
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
        select_movimientos_proveedor:(codprov)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_movimientos_proveedor',{
                   codprov:codprov
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
        update_costo_producto:(codprod,costo)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/productos/update_costo_producto',{
                            codprod:codprod,
                            costo:costo
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
        data_producto_kardex:(codprod,sucursal)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/productos/kardex_producto',{codprod:codprod,sucursal:sucursal})
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
        data_producto_kardex_herramienta:(codprod,sucursal)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/productos/kardex_producto_herramienta',{codprod:codprod,sucursal:sucursal})
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
        data_listado_proyectos_todos:()=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_proyectos_todos')
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
        update_proyecto_status:(codigo,newSt)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/update_status_proyecto', {
                    codigo:codigo,st:newSt})
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
        delete_proyecto:(codigo)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/delete_proyecto', {codigo:codigo})
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
        insert_proyecto:(sucursal,nombre)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/insert_proyecto', {sucursal:sucursal,nombre:nombre})
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
        edit_proyecto:(sucursal,codigo,nombre)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/edit_proyecto', {sucursal:sucursal,codigo:codigo,nombre:nombre})
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
        data_listado_empresas:(tipo)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_empresas',{tipo:tipo})
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
        insert_empresa:(sucursal,nombre,tipo)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/insert_empresa', {
                    sucursal:sucursal,
                    empresa:nombre,
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
        edit_empresa:(sucursal,nombre,tipo)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/edit_empresa', {
                    sucursal:sucursal,
                    empresa:nombre,
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
        data_detalle_documento:(sucursal,coddoc,correlativo)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/select_detalle_documento',{
                                    sucursal:sucursal,
                                    coddoc:coddoc,
                                    correlativo:correlativo
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
        delete_documento:(sucursal,coddoc,correlativo)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/delete_documento', {
                    sucursal:sucursal,
                    coddoc:coddoc,
                    correlativo:correlativo})
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
        insert_traslado_entrada:(sucursal_origen,coddoc_origen,correlativo_origen,sucursal,codemp_recibe,codproyecto,fecha,hora,coddoc,correlativo,obs)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/general/insert_traslado_entrada', {
                    sucursal_origen:sucursal_origen,
                    coddoc_origen:coddoc_origen,
                    correlativo_origen:correlativo_origen,
                    sucursal:sucursal,
                    codemp_recibe:codemp_recibe,
                    codproyecto:codproyecto,
                    fecha:fecha,
                    hora:hora,
                    coddoc:coddoc,
                    correlativo:correlativo,
                    obs:obs
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
        data_select_tipodocumentos:(sucursal)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/config/select_tipodocumentos', {
                    sucursal:sucursal})
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
        insert_tipodocumento:(coddoc,correlativo,descripcion,inv,tipodoc)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/config/insert_tipodocumento', {
                    coddoc:coddoc,
                    correlativo:correlativo,
                    descripcion:descripcion,
                    inv:inv,
                    tipodoc:tipodoc})
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
        edit_tipodocumento:(coddoc,correlativo,descripcion,inv,tipodoc)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/config/edit_tipodocumento', {
                    coddoc:coddoc,
                    correlativo:correlativo,
                    descripcion:descripcion,
                    inv:inv,
                    tipodoc:tipodoc})
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
        delete_tipodocumento:(id)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/config/delete_tipodocumento', {
                    id:id})
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
        update_status_tipodocumento:(id,st)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/config/update_status_tipodocumento', {
                    id:id,st:st})
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
        update_config:(id,valor)=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/config/update_config', {
                    id:id,
                    valor:valor
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
        data_configuraciones:()=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/config/select_config')
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
        data_bi_resumen_inventarios:()=>{

            return new Promise((resolve,reject)=>{

                axios.post(GlobalUrlCalls + '/bi/resumen_inventarios')
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


let PERMISOS = {
    data:()=>{

        let data_permisos = [
            {nivel:1,vista:'TRASLADOS_ENTRADA',autorizado:true},
            {nivel:1,vista:'TRASLADOS_SALIDA',autorizado:true},
            {nivel:1,vista:'ENTRADA_BODEGA',autorizado:true},
            {nivel:1,vista:'SALIDA_CONSUMO',autorizado:true},
            {nivel:1,vista:'HERRAMIENTAS',autorizado:true},
            {nivel:1,vista:'COMPRAS',autorizado:true},
            {nivel:1,vista:'INVENTARIOS',autorizado:true},
            {nivel:1,vista:'DOCUMENTOS',autorizado:true},
            {nivel:1,vista:'PRODUCTOS',autorizado:true},
            {nivel:1,vista:'EMPLEADOS',autorizado:true},
            {nivel:1,vista:'BODEGAS',autorizado:true},
            {nivel:1,vista:'PROYECTOS',autorizado:true},
            {nivel:1,vista:'CONFIGURACIONES',autorizado:true},
            {nivel:2,vista:'TRASLADOS_ENTRADA',autorizado:true},
            {nivel:2,vista:'TRASLADOS_SALIDA',autorizado:true},
            {nivel:2,vista:'ENTRADA_BODEGA',autorizado:true},
            {nivel:2,vista:'SALIDA_CONSUMO',autorizado:true},
            {nivel:2,vista:'HERRAMIENTAS',autorizado:true},
            {nivel:2,vista:'COMPRAS',autorizado:true},
            {nivel:2,vista:'INVENTARIOS',autorizado:true},
            {nivel:2,vista:'DOCUMENTOS',autorizado:true},
            {nivel:2,vista:'PRODUCTOS',autorizado:true},
            {nivel:2,vista:'EMPLEADOS',autorizado:true},
            {nivel:2,vista:'BODEGAS',autorizado:true},
            {nivel:2,vista:'PROYECTOS',autorizado:true},
            {nivel:2,vista:'CONFIGURACIONES',autorizado:false},
            {nivel:3,vista:'TRASLADOS_ENTRADA',autorizado:true},
            {nivel:3,vista:'TRASLADOS_SALIDA',autorizado:true},
            {nivel:3,vista:'ENTRADA_BODEGA',autorizado:true},
            {nivel:3,vista:'SALIDA_CONSUMO',autorizado:true},
            {nivel:3,vista:'HERRAMIENTAS',autorizado:true},
            {nivel:3,vista:'COMPRAS',autorizado:false},
            {nivel:3,vista:'INVENTARIOS',autorizado:true},
            {nivel:3,vista:'DOCUMENTOS',autorizado:false},
            {nivel:3,vista:'PRODUCTOS',autorizado:false},
            {nivel:3,vista:'EMPLEADOS',autorizado:false},
            {nivel:3,vista:'BODEGAS',autorizado:false},
            {nivel:3,vista:'PROYECTOS',autorizado:false},
            {nivel:3,vista:'CONFIGURACIONES',autorizado:false},
            {nivel:4,vista:'TRASLADOS_ENTRADA',autorizado:false},
            {nivel:4,vista:'TRASLADOS_SALIDA',autorizado:false},
            {nivel:4,vista:'ENTRADA_BODEGA',autorizado:false},
            {nivel:4,vista:'SALIDA_CONSUMO',autorizado:false},
            {nivel:4,vista:'HERRAMIENTAS',autorizado:false},
            {nivel:4,vista:'COMPRAS',autorizado:true},
            {nivel:4,vista:'INVENTARIOS',autorizado:true},
            {nivel:4,vista:'DOCUMENTOS',autorizado:true},
            {nivel:4,vista:'PRODUCTOS',autorizado:false},
            {nivel:4,vista:'EMPLEADOS',autorizado:false},
            {nivel:4,vista:'BODEGAS',autorizado:false},
            {nivel:4,vista:'PROYECTOS',autorizado:false},
            {nivel:4,vista:'CONFIGURACIONES',autorizado:false}
        ]

        return data_permisos;

    },
    get_permiso:(vista,nivel)=>{

        let autorizado = false;

         let data_permisos = [
            {nivel:1,vista:'TRASLADOS_ENTRADA',autorizado:true},
            {nivel:1,vista:'TRASLADOS_SALIDA',autorizado:true},
            {nivel:1,vista:'ENTRADA_BODEGA',autorizado:true},
            {nivel:1,vista:'SALIDA_CONSUMO',autorizado:true},
            {nivel:1,vista:'HERRAMIENTAS',autorizado:true},
            {nivel:1,vista:'COMPRAS',autorizado:true},
            {nivel:1,vista:'INVENTARIOS',autorizado:true},
            {nivel:1,vista:'DOCUMENTOS',autorizado:true},
            {nivel:1,vista:'PRODUCTOS',autorizado:true},
            {nivel:1,vista:'EMPLEADOS',autorizado:true},
            {nivel:1,vista:'BODEGAS',autorizado:true},
            {nivel:1,vista:'PROYECTOS',autorizado:true},
            {nivel:1,vista:'CONFIGURACIONES',autorizado:true},
            {nivel:2,vista:'TRASLADOS_ENTRADA',autorizado:true},
            {nivel:2,vista:'TRASLADOS_SALIDA',autorizado:true},
            {nivel:2,vista:'ENTRADA_BODEGA',autorizado:true},
            {nivel:2,vista:'SALIDA_CONSUMO',autorizado:true},
            {nivel:2,vista:'HERRAMIENTAS',autorizado:true},
            {nivel:2,vista:'COMPRAS',autorizado:true},
            {nivel:2,vista:'INVENTARIOS',autorizado:true},
            {nivel:2,vista:'DOCUMENTOS',autorizado:true},
            {nivel:2,vista:'PRODUCTOS',autorizado:true},
            {nivel:2,vista:'EMPLEADOS',autorizado:true},
            {nivel:2,vista:'BODEGAS',autorizado:true},
            {nivel:2,vista:'PROYECTOS',autorizado:true},
            {nivel:2,vista:'CONFIGURACIONES',autorizado:false},
            {nivel:3,vista:'TRASLADOS_ENTRADA',autorizado:true},
            {nivel:3,vista:'TRASLADOS_SALIDA',autorizado:true},
            {nivel:3,vista:'ENTRADA_BODEGA',autorizado:true},
            {nivel:3,vista:'SALIDA_CONSUMO',autorizado:true},
            {nivel:3,vista:'HERRAMIENTAS',autorizado:true},
            {nivel:3,vista:'COMPRAS',autorizado:false},
            {nivel:3,vista:'INVENTARIOS',autorizado:true},
            {nivel:3,vista:'DOCUMENTOS',autorizado:false},
            {nivel:3,vista:'PRODUCTOS',autorizado:false},
            {nivel:3,vista:'EMPLEADOS',autorizado:false},
            {nivel:3,vista:'BODEGAS',autorizado:false},
            {nivel:3,vista:'PROYECTOS',autorizado:false},
            {nivel:3,vista:'CONFIGURACIONES',autorizado:false},
            {nivel:4,vista:'TRASLADOS_ENTRADA',autorizado:false},
            {nivel:4,vista:'TRASLADOS_SALIDA',autorizado:false},
            {nivel:4,vista:'ENTRADA_BODEGA',autorizado:false},
            {nivel:4,vista:'SALIDA_CONSUMO',autorizado:false},
            {nivel:4,vista:'HERRAMIENTAS',autorizado:false},
            {nivel:4,vista:'COMPRAS',autorizado:true},
            {nivel:4,vista:'INVENTARIOS',autorizado:true},
            {nivel:4,vista:'DOCUMENTOS',autorizado:true},
            {nivel:4,vista:'PRODUCTOS',autorizado:false},
            {nivel:4,vista:'EMPLEADOS',autorizado:false},
            {nivel:4,vista:'BODEGAS',autorizado:false},
            {nivel:4,vista:'PROYECTOS',autorizado:false},
            {nivel:4,vista:'CONFIGURACIONES',autorizado:false}
        ]

        data_permisos.map((r)=>{
            if(Number(nivel)==Number(r.nivel)){
                if(vista.toString()==r.vista.toString()){
                    autorizado = r.autorizado;
                }
            }
        });

        return autorizado;

    }
}

