var socket = io();

//socket.emit('notificacion','SALIDA','NUEVA SALIDA')

socket.on('notificacion', function(tipo,msn){
  
      try {
         F.showToast(msn);
          
      } catch (error) {
       
      }
      
});


