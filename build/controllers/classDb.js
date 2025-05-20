const DbName = "covadonga_v1";



var tbl_tempventas = {
    name: 'tempventa',
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
    tables: [tbl_tempventas]
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