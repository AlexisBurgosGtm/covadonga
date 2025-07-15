const DbName = "covadonga_v4";



var tbl_temp_salida = {
    name: 'temp_salida',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        EMPNIT:{dataType: "string"},
        CODDOC:{dataType: "string"},
        CODPROD:{dataType: "string"},
        DESPROD:{dataType: "string"},
        CODMEDIDA:{dataType: "string"},
        CANTIDAD:{dataType: "number"},
        COSTO:{dataType: "number"},
        TOTALCOSTO:{dataType: "number"}
    }
};

var tbl_temp_entrada = {
    name: 'temp_entrada',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        EMPNIT:{dataType: "string"},
        CODDOC:{dataType: "string"},
        CODPROD:{dataType: "string"},
        DESPROD:{dataType: "string"},
        CODMEDIDA:{dataType: "string"},
        CANTIDAD:{dataType: "number"},
        COSTO:{dataType: "number"},
        TOTALCOSTO:{dataType: "number"}
    }
};

var tbl_temp_prestamo = {
    name: 'temp_prestamo',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        EMPNIT:{dataType: "string"},
        CODDOC:{dataType: "string"},
        CODPROD:{dataType: "string"},
        DESPROD:{dataType: "string"},
        CODMEDIDA:{dataType: "string"},
        CANTIDAD:{dataType: "number"},
        COSTO:{dataType: "number"},
        TOTALCOSTO:{dataType: "number"}
    }
};

var tbl_temp_compra = {
    name: 'temp_compra',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        EMPNIT:{dataType: "string"},
        CODDOC:{dataType: "string"},
        CODPROD:{dataType: "string"},
        DESPROD:{dataType: "string"},
        CODMEDIDA:{dataType: "string"},
        CANTIDAD:{dataType: "number"},
        COSTO:{dataType: "number"},
        TOTALCOSTO:{dataType: "number"}
    }
};



var database = {
    name: DbName,
    tables: [tbl_temp_salida, tbl_temp_entrada, tbl_temp_prestamo, tbl_temp_compra]
};
 
// initiate jsstore connection
var connection = new JsStore.Connection();

async function connectDb(){
   
        var isDbCreated = await connection.initDb(database);
        // isDbCreated will be true when database will be initiated for first time
        if(isDbCreated){
            //alert('Db Created & connection is opened');
           
        }
        else{
            //alert('Connection is opened');
          
        }
    
}
//inicia la conexión a la db
connectDb();