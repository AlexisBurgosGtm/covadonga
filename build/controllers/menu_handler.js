let Menu = {
    verify:(vista)=>{

        if(Number(GlobalNivelUsuario)==0){return false;}

        return PERMISOS.get_permiso(vista,Number(GlobalNivelUsuario));


    },
    login:()=>{         
            GlobalNivelUsuario = 0;
            F.loadScript('../views/view_login.js','root')
            .then(async()=>{
                initView();
            })
    },
    inicio:()=>{         
        
        
        switch (Number(GlobalNivelUsuario)) {
            case 1: //gerente
                Menu.inicio_gerencia();
                break;
            case 2: //bodeguero general
                Menu.traslados();
                break;

            case 3: //bodeguero
                Menu.traslados();        
                break;

            case 4: //contabilidad
                Menu.inicio_contabilidad();
                break;

        }

    },
    salir:()=>{
        F.Confirmacion('¿Está seguro que desea salir?')
        .then((value)=>{
            if(value==true){

                Menu.login();

            }
        })
    },
    inicio_gerencia:()=>{         
        //if(Menu.verify()==true){
            F.loadScript('../views/view_inicio_gerencia.js','root')
            .then(async()=>{
                initView();
            })
        //}else{
            //F.AvisoError('No tiene permitido entrar a esta sección');
        //}
    },
    inicio_contabilidad:()=>{         
        //if(Menu.verify()==true){
            F.loadScript('../views/view_inicio_contabilidad.js','root')
            .then(async()=>{
                initView();
            })
        //}else{
            //F.AvisoError('No tiene permitido entrar a esta sección');
        //}
    },
    productos:()=>{         
        if(Menu.verify('PRODUCTOS')==true){
            F.loadScript('../views/view_productos.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    empresas:()=>{         
        if(Menu.verify('BODEGAS')==true){
            F.loadScript('../views/view_empresas.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    proyectos:()=>{         
        if(Menu.verify('PROYECTOS')==true){
            F.loadScript('../views/view_proyectos.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    inventarios:()=>{         
        if(Menu.verify('INVENTARIOS')==true){
            F.loadScript('../views/view_inventarios.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    documentos:()=>{         
        if(Menu.verify('DOCUMENTOS')==true){
            F.loadScript('../views/view_documentos.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    empleados:()=>{         
        if(Menu.verify('EMPLEADOS')==true){
            F.loadScript('../views/view_empleados.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    nueva_compra:()=>{      

        if(Menu.verify('COMPRAS')==true){
            F.loadScript('../views/view_compra.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    nueva_entrada:()=>{         
        if(Menu.verify('ENTRADA_BODEGA')==true){
            F.loadScript('../views/view_inventario_entrada.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    nueva_salida:()=>{     

    
        if(Menu.verify('TRASLADOS_SALIDA')==true){
            F.loadScript('../views/view_inventario_salida.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    nueva_salida_consumo:()=>{     

    
        if(Menu.verify('SALIDA_CONSUMO')==true){
            F.loadScript('../views/view_inventario_salida_consumo.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    nueva_entrega_prestamo:()=>{  
        

        if(Menu.verify('HERRAMIENTAS')==true){
            F.loadScript('../views/view_inventario_prestamo_herramienta.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    traslados:()=>{  
        
        if(Menu.verify('TRASLADOS_ENTRADA')==true){
            F.loadScript('../views/view_traslados.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    config:()=>{  
        
        if(Menu.verify('CONFIGURACIONES')==true){
            F.loadScript('../views/view_config.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
}