const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/listado_productos", async(req,res)=>{

        const {sucursal} = req.body;

        let qry = `
        SELECT  EMPRESAS.EMPNIT, 
                EMPRESAS.EMPRESA, 
                PRODUCTOS.CODPROD, 
                PRODUCTOS.DESPROD,
                ISNULL(PRODUCTOS.COSTO,0) AS COSTO, 
                ISNULL(invsaldo_inventario_sucursales.TOTALUNIDADES, 0) AS EXISTENCIA, 
                ISNULL(invsaldo_inventario_sucursales.TOTALCOSTO, 0) AS TOTALCOSTO, 
                CLASIFICACIONES.DESCRIPCION AS DESMARCA
        FROM CLASIFICACIONES RIGHT OUTER JOIN
                PRODUCTOS ON CLASIFICACIONES.CODIGO = PRODUCTOS.CODMARCA CROSS JOIN
                EMPRESAS LEFT OUTER JOIN
                invsaldo_inventario_sucursales ON EMPRESAS.EMPNIT = invsaldo_inventario_sucursales.EMPNIT
        WHERE EMPRESAS.EMPNIT='${sucursal}'
        ORDER BY PRODUCTOS.CODPROD
        `
    
        execute.QueryToken(res,qry,'')

});


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