const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/insert_documento", async(req,res)=>{

        const {sucursal,coddoc,correlativo,mes,anio,fecha,hora,codproyecto,codsolicita,codrecibe,noorden,
                obs,json_details
        } = req.body;

        let qry = `
       INSERT INTO ORDERS 
        (EMPNIT,CODDOC,CORRELATIVO,MES,ANIO,FECHA,HORA,CODPROYECTO,
                CODEMP_SOLICITA,CODEMP_RECIBE,NO_ORDEN,OBS,STATUS,JSON_DETAILS)
        SELECT '${sucursal}' AS EMPNIT,'${coddoc}' AS CODDOC,${correlativo} AS CORRELATIVO,
        ${mes} AS MES,${anio} AS ANIO,'${fecha}' AS FECHA,
        '${hora}' AS HORA,${codproyecto} AS CODPROYECTO,
        ${codsolicita} AS CODEMP_SOLICITA,${codrecibe} AS CODEMP_RECIBE,
        '${noorden}' AS NO_ORDEN,'${obs}' AS OBS,'O' AS STATUS,'${json_details}' AS JSON_DETAILS
        `
    
        execute.QueryToken(res,qry,'')

});


router.post("/listado_productos", async(req,res)=>{

        const {sucursal,filtro} = req.body;

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
        WHERE EMPRESAS.EMPNIT='${sucursal}' AND PRODUCTOS.DESPROD LIKE '%${filtro}%'
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