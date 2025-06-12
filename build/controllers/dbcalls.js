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
}



// --------------------------------
// COMPRAS
// --------------------------------

let db_compra = {
    gettempDocproductos_pos:(usuario)=>{
    
        return new Promise(async(resolve,reject)=>{
            var response = await connection.select({
                from: "temp_compras",
                order: { by: 'ID', type: 'asc' }
            })
            if(Number(response.length)>0){
                resolve(response);
            }else{
                reject('No hay productos agregados');
            }
        })
        
    },
    selectTempVentasPOS:(sucursal)=>{

        return new Promise(async(resolve,reject)=>{
            var response = await connection.select({
                from: "temp_compras",
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
    insertTempVentasPOS:(datos)=>{
        return new Promise((resolve,reject)=>{
            connection.insert({
                into: "temp_compras",
                values: [datos] //you can insert multiple values at a time
            })
            resolve();    
        }) 
    
    },
    deleteItemVentaPOS:(id)=>{
        console.log('eliminar id: ' + id.toString())
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_compras",
                where: {
                    ID: Number(id)
                }
            });
            console.log(rowsDeleted);
            if(rowsDeleted>0){resolve()}else{reject()}
        })            
    },
    selectDataRowVentaPOS:(id,nuevacantidad,nuevoprecio,descuento)=>{
    
        let costo = 0; let precio = 0; let equivale =0; let exento=0; let cantidad= nuevacantidad;
        
        return new Promise(async(resolve,reject)=>{
            var response = await connection.select({
                from: "temp_compras",
                where: {
                        ID: Number(id)
                    }
            });
            console.log(response);
    
            response.map((rows)=>{
                costo = rows.COSTO;
                precio = nuevoprecio; //rows.PRECIO;
                equivale = rows.EQUIVALE;
                exento = rows.EXENTO;
            });
            let totalcosto = Number(costo) * Number(cantidad);
            let totalprecio = Number(precio) * Number(cantidad);
            let totalexento = Number(exento) * Number(cantidad);
            let totalunidades = Number(equivale) * Number(cantidad);
            //actualiza la fila
            let updatedrow = await connection.update({
                in: "temp_compras",
                set: {
                    CANTIDAD:Number(nuevacantidad),
                    TOTALUNIDADES:Number(totalunidades),
                    TOTALCOSTO:Number(totalcosto),
                    PRECIO:Number(nuevoprecio),
                    TOTALPRECIO:Number(totalprecio),
                    EXENTO:totalexento,
                    DESCUENTO:Number(descuento)
                },
                where: {
                    ID: Number(id)
                }
            })
            console.log(updatedrow);
            if(updatedrow>0){
                resolve();
            }else{
                reject();
            }
    
        });
    },
    deleteTempVenta_pos:(usuario)=>{
        return new Promise(async(resolve,reject)=>{
            var rowsDeleted = await connection.remove({
                from: "temp_compras"
            });
            if(rowsDeleted>0){resolve()}else{resolve()}
        })            
    }
}

// --------------------------------
// COMPRAS
// --------------------------------