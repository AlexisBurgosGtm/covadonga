let Menu = {
    verify:()=>{
        if(Number(GlobalNivelUsuario)==0){return false;}
        return true;
    },
    pendiente:()=>{
        
        if(Number(GlobalNivelUsuario)==0){return false;}
        
        F.AvisoError("Función no disponible");

        return true;
        
    },
    salidaMenu:()=>{
        $("#modal_menu").modal('hide');
    },
    inicio_admin:()=>{         
        if(Menu.verify()==true){
            Menu.salidaMenu();
            F.loadScript('../views/menu/menu.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            F.AvisoError('No tiene permitido entrar a esta sección');
        }
    }
}