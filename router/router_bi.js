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


router.post("/resumen_empresas_conta", async(req,res)=>{

        const {mes,anio} = req.body;


        let qry = `
                SELECT ORDERS.CODEMP, 
                    EMPRESAS_CONTA.NIT, 
                    EMPRESAS_CONTA.RAZON_SOCIAL, 
                    EMPRESAS_CONTA.NOMBRE_COMERCIAL, 
                    SUM(ORDERS.TOTALCOSTO) AS TOTALCOSTO
                FROM ORDERS LEFT OUTER JOIN
                    TIPODOCUMENTOS ON ORDERS.CODDOC = TIPODOCUMENTOS.CODDOC LEFT OUTER JOIN
                    EMPRESAS_CONTA ON ORDERS.CODEMP = EMPRESAS_CONTA.CODEMP
                WHERE  (ORDERS.STATUS <> 'A') AND 
                    (TIPODOCUMENTOS.TIPODOC IN ('COM')) AND 
                    (ORDERS.MES = ${mes}) AND 
                    (ORDERS.ANIO = ${anio})
                GROUP BY ORDERS.CODEMP, EMPRESAS_CONTA.NIT, EMPRESAS_CONTA.RAZON_SOCIAL, EMPRESAS_CONTA.NOMBRE_COMERCIAL
                HAVING (NOT (EMPRESAS_CONTA.NIT IS NULL))
                `;
    
        execute.QueryToken(res,qry,'')
        

});







module.exports = router;
