

function get_conf_token(token){

		//token = empresa que manda la solicitud (puede cambiarse entre empresas)
		//let config = [];



		
		let config = {
			user: process.env.DB_USER,
			password: process.env.DB_PWD,
			server: process.env.DB_HOST, 
			database: process.env.DB_DB,
			pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000},
			options: {
    			encrypt: false, // for azure
    			trustServerCertificate: true // change to true for local dev / self-signed certs
  			}
		};

	

		return config;
		

}



const sql = require('mssql');

let execute = {
	QueryToken : (res,sqlqry,token)=>{	
		
		let config = get_conf_token(token);

		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					console.log(err.message);
					res.send('error')
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
			  res.send('error');
		  })
		} catch (error) {
			console.log(error);
		  res.send('error')   
		  sql.close();
		}
	}
}



module.exports = execute;

