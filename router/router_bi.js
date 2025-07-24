const execute = require('./../connection');
const express = require('express');
const router = express.Router();


router.post("/resumen_inventarios", async(req,res)=>{

        //const {id,valor} = req.body;


        let qry = `
            SELECT EMPNIT, EMPRESA, 
                SUM(TOTALCOSTO) AS TOTALCOSTO, 
                COUNT(CODPROD) AS CONTEO
            FROM  view_invsaldo_resumen
            GROUP BY EMPNIT, EMPRESA
                `;
    
        execute.QueryToken(res,qry,'')
        

});








module.exports = router;
