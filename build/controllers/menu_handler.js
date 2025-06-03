let Menu = {
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
    inventarios_entradas:()=>{         
        if(Menu.verify()==true){
            F.loadScript('../views/view_inventario_entrada.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    inventarios_salidas:()=>{         
        if(Menu.verify()==true){
            F.loadScript('../views/view_inventario_salidas.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
}