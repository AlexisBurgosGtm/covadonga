const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/select_empresas", async(req,res)=>{

        //const {sucursal} = req.body;

        let qry = `
        SELECT  EMPNIT, EMPRESA FROM EMPRESAS;
        `
    
        execute.QueryToken(res,qry,'')

});


router.post("/select_proyectos", async(req,res)=>{

        const {sucursal} = req.body;

        let qry = `
        SELECT PROYECTOS.EMPNIT, EMPRESAS.EMPRESA, 
                PROYECTOS.CODPROYECTO, PROYECTOS.NOMPROYECTO, PROYECTOS.DIRPROYECTO
        FROM PROYECTOS LEFT OUTER JOIN
                EMPRESAS ON PROYECTOS.EMPNIT = EMPRESAS.EMPNIT
        WHERE PROYECTOS.EMPNIT LIKE '${sucursal}';
        `
    
        execute.QueryToken(res,qry,'')

});



router.post("/select_coddoc", async(req,res)=>{

        const {sucursal,tipodoc} = req.body;

        let qry = `
        SELECT  CODDOC, CORRELATIVO 
            FROM TIPODOCUMENTOS
            WHERE TIPODOC='${tipodoc}';
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/select_correlativo", async(req,res)=>{

        const {sucursal,coddoc} = req.body;

        let qry = `
        SELECT  CORRELATIVO 
            FROM TIPODOCUMENTOS
            WHERE CODDOC='${coddoc}';
        `
    
        execute.QueryToken(res,qry,'')

});





module.exports = router;