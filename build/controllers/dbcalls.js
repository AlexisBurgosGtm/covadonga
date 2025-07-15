let db_movinv = {
    select_temp_movinv_salida:()=>{

        return new Promise(async(resolve,reject)=>{
            var response = await connection.select({
                from: "temp_salida",                
                order: { by: 'ID', type: 'desc' }
            });
            let datos = JSON.stringify(response);
            

            datos = datos.replace('[','');
            datos = datos.replace(']','');
            let result = '[' + datos + ']';
            let data = JSON.parse(result);
            resolve(data);
        });
    },
    insert_temp_movinv_salida:(coddoc,codprod, desprod,codmedida,cantidad,costo,totalcosto)=>{

        let datos = {
                        CODDOC:coddoc,
                        CODPROD:codprod,
                        DESPROD:desprod,
                        CODMEDIDA:codmedida,
                        CANTIDAD:Number(cantidad),
                        COSTO:Number(costo),
                        TOTALCOSTO:Number(totalcosto)
                    }


         return new Promise((resolve,reject)=>{
            connection.insert({
                into: "temp_salida",
                values: [datos] //you can insert multiple values at a time
            })
            resolve();    
        })

    },
    delete_temp_movinv_salida_id:(id)=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_salida",
                where: {
                    ID: Number(id)
                }
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
    delete_temp_movinv_salida_all:()=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_salida"
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
    select_temp_movinv_entrada:()=>{
      
        return new Promise(async(resolve,reject)=>{
            var response = await connection.select({
                from: "temp_entrada",                
                order: { by: 'ID', type: 'desc' }
            });
            let datos = JSON.stringify(response);
            

            datos = datos.replace('[','');
            datos = datos.replace(']','');
            let result = '[' + datos + ']';
            let data = JSON.parse(result);
            resolve(data);
        });
    },
    insert_temp_movinv_entrada:(coddoc,codprod, desprod,codmedida,cantidad,costo,totalcosto)=>{

        let datos = {
                        CODDOC:coddoc,
                        CODPROD:codprod,
                        DESPROD:desprod,
                        CODMEDIDA:codmedida,
                        CANTIDAD:Number(cantidad),
                        COSTO:Number(costo),
                        TOTALCOSTO:Number(totalcosto)
                    }


         return new Promise((resolve,reject)=>{
            connection.insert({
                into: "temp_entrada",
                values: [datos] //you can insert multiple values at a time
            })
            resolve();    
        })

    },
    delete_temp_movinv_entrada_id:(id)=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_entrada",
                where: {
                    ID: Number(id)
                }
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
    delete_temp_movinv_entrada_all:()=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_entrada"
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
};


let db_prestamo = {
    select_temp_movinv_salida:()=>{

        return new Promise(async(resolve,reject)=>{
            var response = await connection.select({
                from: "temp_prestamo",                
                order: { by: 'ID', type: 'desc' }
            });
            let datos = JSON.stringify(response);
            

            datos = datos.replace('[','');
            datos = datos.replace(']','');
            let result = '[' + datos + ']';
            let data = JSON.parse(result);
            resolve(data);
        });
    },
    insert_temp_movinv_salida:(coddoc,codprod, desprod,codmedida,cantidad,costo,totalcosto)=>{

        let datos = {
                        CODDOC:coddoc,
                        CODPROD:codprod,
                        DESPROD:desprod,
                        CODMEDIDA:codmedida,
                        CANTIDAD:Number(cantidad),
                        COSTO:Number(costo),
                        TOTALCOSTO:Number(totalcosto)
                    }


         return new Promise((resolve,reject)=>{
            connection.insert({
                into: "temp_prestamo",
                values: [datos] //you can insert multiple values at a time
            })
            resolve();    
        })

    },
    delete_temp_movinv_salida_id:(id)=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_prestamo",
                where: {
                    ID: Number(id)
                }
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
    delete_temp_movinv_salida_all:()=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_prestamo"
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
    select_temp_movinv_entrada:()=>{
      
        return new Promise(async(resolve,reject)=>{
            var response = await connection.select({
                from: "temp_prestamo",                
                order: { by: 'ID', type: 'desc' }
            });
            let datos = JSON.stringify(response);
            

            datos = datos.replace('[','');
            datos = datos.replace(']','');
            let result = '[' + datos + ']';
            let data = JSON.parse(result);
            resolve(data);
        });
    },
    insert_temp_movinv_entrada:(coddoc,codprod, desprod,codmedida,cantidad,costo,totalcosto)=>{

        let datos = {
                        CODDOC:coddoc,
                        CODPROD:codprod,
                        DESPROD:desprod,
                        CODMEDIDA:codmedida,
                        CANTIDAD:Number(cantidad),
                        COSTO:Number(costo),
                        TOTALCOSTO:Number(totalcosto)
                    }


         return new Promise((resolve,reject)=>{
            connection.insert({
                into: "temp_prestamo",
                values: [datos] //you can insert multiple values at a time
            })
            resolve();    
        })

    },
    delete_temp_movinv_entrada_id:(id)=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_prestamo",
                where: {
                    ID: Number(id)
                }
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
    delete_temp_movinv_entrada_all:()=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_prestamo"
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
};


let db_compra = {
    select_temp_movinv_salida:()=>{

        return new Promise(async(resolve,reject)=>{
            var response = await connection.select({
                from: "temp_compra",                
                order: { by: 'ID', type: 'desc' }
            });
            let datos = JSON.stringify(response);
            

            datos = datos.replace('[','');
            datos = datos.replace(']','');
            let result = '[' + datos + ']';
            let data = JSON.parse(result);
            resolve(data);
        });
    },
    insert_temp_movinv_salida:(coddoc,codprod, desprod,codmedida,cantidad,costo,totalcosto)=>{

        let datos = {
                        CODDOC:coddoc,
                        CODPROD:codprod,
                        DESPROD:desprod,
                        CODMEDIDA:codmedida,
                        CANTIDAD:Number(cantidad),
                        COSTO:Number(costo),
                        TOTALCOSTO:Number(totalcosto)
                    }


         return new Promise((resolve,reject)=>{
            connection.insert({
                into: "temp_compra",
                values: [datos] //you can insert multiple values at a time
            })
            resolve();    
        })

    },
    delete_temp_movinv_salida_id:(id)=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_compra",
                where: {
                    ID: Number(id)
                }
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
    delete_temp_movinv_salida_all:()=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_compra"
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
    select_temp_movinv_entrada:()=>{
      
        return new Promise(async(resolve,reject)=>{
            var response = await connection.select({
                from: "temp_compra",                
                order: { by: 'ID', type: 'desc' }
            });
            let datos = JSON.stringify(response);
            

            datos = datos.replace('[','');
            datos = datos.replace(']','');
            let result = '[' + datos + ']';
            let data = JSON.parse(result);
            resolve(data);
        });
    },
    insert_temp_movinv_entrada:(coddoc,codprod, desprod,codmedida,cantidad,costo,totalcosto)=>{

        let datos = {
                        CODDOC:coddoc,
                        CODPROD:codprod,
                        DESPROD:desprod,
                        CODMEDIDA:codmedida,
                        CANTIDAD:Number(cantidad),
                        COSTO:Number(costo),
                        TOTALCOSTO:Number(totalcosto)
                    }


         return new Promise((resolve,reject)=>{
            connection.insert({
                into: "temp_compra",
                values: [datos] //you can insert multiple values at a time
            })
            resolve();    
        })

    },
    delete_temp_movinv_entrada_id:(id)=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_compra",
                where: {
                    ID: Number(id)
                }
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
    delete_temp_movinv_entrada_all:()=>{
       
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_compra"
            });
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
};

