const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/select_listado", async(req,res)=>{

        const {sucursal} = req.body;

        let qry = `
        SELECT  EMPLEADOS.CODEMP, 
                EMPLEADOS.EMPNIT, 
                EMPRESAS.EMPRESA, 
                EMPLEADOS.NOMEMP, 
                EMPLEADOS.TELEFONO,
                EMPLEADOS.PUESTO
        FROM  EMPLEADOS LEFT OUTER JOIN
                EMPRESAS ON EMPLEADOS.EMPNIT = EMPRESAS.EMPNIT
        `
    
        execute.QueryToken(res,qry,'')

});








module.exports = router;
