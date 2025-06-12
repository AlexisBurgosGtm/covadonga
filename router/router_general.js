const execute = require('./../connection');
const express = require('express');
const router = express.Router();




router.post("/select_documentos", async(req,res)=>{

        const {sucursal,tipo,mes,anio} = req.body;

        let qry = `
        SELECT ORDERS.EMPNIT, EMPRESAS.EMPRESA, 
                ORDERS.CODDOC, ORDERS.CORRELATIVO, 
                ORDERS.FECHA, ORDERS.HORA, 
                ORDERS.CODPROYECTO, PROYECTOS.NOMPROYECTO, PROYECTOS.DIRPROYECTO, 
                  ISNULL(EMPLEADOS_1.NOMEMP,'') AS SOLICITA, 
				  ISNULL(EMPLEADOS.NOMEMP,'') AS RECIBE, 
                                  ORDERS.NO_ORDEN, ORDERS.OBS, 
                                  ORDERS.STATUS,
                                  ORDERS.ITEMS,
                                  ORDERS.TOTALCOSTO
        FROM     ORDERS LEFT OUTER JOIN
                        EMPLEADOS ON ORDERS.CODEMP_RECIBE = EMPLEADOS.CODEMP LEFT OUTER JOIN
                        EMPLEADOS AS EMPLEADOS_1 ON ORDERS.CODEMP_SOLICITA = EMPLEADOS_1.CODEMP LEFT OUTER JOIN
                        PROYECTOS ON ORDERS.CODPROYECTO = PROYECTOS.CODPROYECTO LEFT OUTER JOIN
                        TIPODOCUMENTOS ON ORDERS.CODDOC = TIPODOCUMENTOS.CODDOC LEFT OUTER JOIN
                        EMPRESAS ON ORDERS.EMPNIT = EMPRESAS.EMPNIT
        WHERE  (ORDERS.MES = ${mes}) 
                AND (ORDERS.ANIO = ${anio})
                AND (TIPODOCUMENTOS.TIPODOC='${tipo}')  
                `
    
                console.log(qry)
                
        execute.QueryToken(res,qry,'')

});




router.post("/insert_documento", async(req,res)=>{

        const {sucursal,coddoc,correlativo,mes,anio,fecha,hora,codproyecto,codsolicita,codrecibe,noorden,
                obs,items,totalcosto,json_details
        } = req.body;


        let qry_documentos = `
                INSERT INTO ORDERS 
                (EMPNIT,CODDOC,CORRELATIVO,MES,ANIO,FECHA,HORA,CODPROYECTO,
                        CODEMP_SOLICITA,CODEMP_RECIBE,NO_ORDEN,OBS,STATUS,
                        ITEMS,TOTALCOSTO,JSON_DETAILS)
                SELECT '${sucursal}' AS EMPNIT,'${coddoc}' AS CODDOC,${correlativo} AS CORRELATIVO,
                MONTH('${fecha}') AS MES, YEAR('${fecha}') AS ANIO,'${fecha}' AS FECHA,
                '${hora}' AS HORA,${codproyecto} AS CODPROYECTO,
                ${codsolicita} AS CODEMP_SOLICITA,${codrecibe} AS CODEMP_RECIBE,
                '${noorden}' AS NO_ORDEN,'${obs}' AS OBS,'O' AS STATUS,
                ${items} AS ITEMS, ${totalcosto} AS TOTALCOSTO,
                '${json_details}' AS JSON_DETAILS;
        `

        let qry_docproductos = qry_docproductos_sql(sucursal,coddoc,correlativo,fecha,json_details);

        let nuevo_correlativo = Number(correlativo)+1;
        let qry_tipodocumentos = `UPDATE TIPODOCUMENTOS SET CORRELATIVO=${nuevo_correlativo} WHERE CODDOC='${coddoc}';`
    
        
        let qry = qry_documentos + qry_docproductos + qry_tipodocumentos;
    
 

        execute.QueryToken(res,qry,'')


});


function qry_docproductos_sql(sucursal,coddoc,correlativo,fecha,json){

        let strQry = '';

        let data = JSON.parse(json)
        data.map((r)=>{
                strQry += `
                INSERT INTO ORDERS_DETAILS
                        (EMPNIT,MES,ANIO,CODDOC,CORRELATIVO,CODPROD,DESPROD,CODMEDIDA,
                        CANTIDAD,COSTO,TOTALCOSTO,CODPROYECTO)
                SELECT '${sucursal}' AS EMPNIT,
                        MONTH('${fecha}') AS MES,
                        YEAR('${fecha}') AS ANIO, 
                        '${coddoc}' AS CODDOC, 
                        ${correlativo} AS CORRELATIVO,
                        '${r.CODPROD}' AS CODPROD,
                        '${r.DESPROD}' AS DESPROD,
                        '${r.CODMEDIDA}' CODMEDIDA,
                        ${r.CANTIDAD} CANTIDAD,
                        ${r.COSTO} COSTO,
                        ${r.TOTALCOSTO} TOTALCOSTO,
                        0 AS CODPROYECTO;
                `
        })

        return strQry;

};


router.post("/listado_productos", async(req,res)=>{

        const {sucursal,filtro,tipo} = req.body;

        let qryX= `
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
        AND PRODUCTOS.TIPO='${tipo}'
        ORDER BY PRODUCTOS.CODPROD
        `

        let qry = `
        SELECT view_invsaldo_productos_empresas.EMPNIT, 
                view_invsaldo_productos_empresas.EMPRESA, 
                view_invsaldo_productos_empresas.CODPROD, 
                view_invsaldo_productos_empresas.DESPROD,
                view_invsaldo_productos_empresas.COSTO, 
                ISNULL(invsaldo_inventario_sucursales.TOTALUNIDADES, 0) AS EXISTENCIA, ISNULL(invsaldo_inventario_sucursales.TOTALCOSTO, 0) AS TOTALCOSTO, view_invsaldo_productos_empresas.DESMARCA, 
                view_invsaldo_productos_empresas.HABILITADO
        FROM    view_invsaldo_productos_empresas LEFT OUTER JOIN
                invsaldo_inventario_sucursales ON view_invsaldo_productos_empresas.CODPROD = invsaldo_inventario_sucursales.CODPROD AND view_invsaldo_productos_empresas.EMPNIT = invsaldo_inventario_sucursales.EMPNIT
        WHERE  (view_invsaldo_productos_empresas.TIPO = '${tipo}') 
                AND (view_invsaldo_productos_empresas.EMPNIT = '${sucursal}') 
                AND (view_invsaldo_productos_empresas.DESPROD LIKE '%${filtro}%')
        ORDER BY view_invsaldo_productos_empresas.CODPROD
        `

        console.log(qry)
        
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