let Menu = {
    pendiente:()=>{
        F.Aviso('Opcion en construccion');
    },
    verify:()=>{
        if(Number(GlobalNivelUsuario)==0){return false;}
        return true;
    },
    login:()=>{         
            GlobalNivelUsuario = 0;
            F.loadScript('../views/view_login.js','root')
            .then(async()=>{
                initView();
            })
    },
    inicio:()=>{         
        if(Menu.verify()==true){
            F.loadScript('../views/view_inicio.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
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
    productos:()=>{         
        if(Menu.verify()==true){
            F.loadScript('../views/view_productos.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    empresas:()=>{         
        if(Menu.verify()==true){
            F.loadScript('../views/view_empresas.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    documentos:()=>{         
        if(Menu.verify()==true){
            F.loadScript('../views/view_documentos.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    empleados:()=>{         
        if(Menu.verify()==true){
            F.loadScript('../views/view_empleados.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    nueva_compra:()=>{      
          F.Aviso('Opcion en construccion');return;

        if(Menu.verify()==true){
            F.loadScript('../views/view_compra.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    nueva_entrada:()=>{         
        if(Menu.verify()==true){
            F.loadScript('../views/view_inventario_entrada.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    nueva_salida:()=>{     

    
        if(Menu.verify()==true){
            F.loadScript('../views/view_inventario_salida.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    nueva_entrega_prestamo:()=>{  
        
        F.Aviso('Opcion en construccion');return;

        if(Menu.verify()==true){
            F.loadScript('../views/view_inventario_prestamo.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    traslados:()=>{  
        
        if(Menu.verify()==true){
            F.loadScript('../views/view_traslados.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
}