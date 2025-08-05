const execute = require('./../connection');
const express = require('express');
const router = express.Router();


// EMPRESAS CONTABILIDAD
router.post("/select_empresas_contabilidad", async(req,res)=>{

        //const {sucursal,tipo,mes,anio} = req.body;

        let qry = `
        SELECT CODEMP,NIT,RAZON_SOCIAL,NOMBRE_COMERCIAL,DIRECCION
        FROM EMPRESAS_CONTA;  
                `
               
        execute.QueryToken(res,qry,'')

});
router.post("/select_documentos_conta", async(req,res)=>{

        const {sucursal,mes,anio} = req.body;

        let qry = `
        SELECT ORDERS.ID, ORDERS.EMPNIT, EMPRESAS_1.EMPRESA, ORDERS.CODDOC, ORDERS.CORRELATIVO, 
                ORDERS.FECHA, ORDERS.HORA, ORDERS.CODPROYECTO, PROYECTOS.NOMPROYECTO, PROYECTOS.DIRPROYECTO, 
                  ISNULL(EMPLEADOS_1.NOMEMP, '') AS SOLICITA, ISNULL(EMPLEADOS.NOMEMP, '') AS RECIBE, 
                  ORDERS.NO_ORDEN, ORDERS.OBS, ORDERS.STATUS, ORDERS.ITEMS, ORDERS.TOTALCOSTO, ISNULL(EMPRESAS.EMPRESA, '') 
                  AS EMPRESA_ORIGEN, ISNULL(ORDERS.FECHA_RECIBE, ORDERS.FECHA) AS FECHA_RECIBE, 
                  ISNULL(ORDERS.FEL_SERIE, '') AS FEL_SERIE, ISNULL(ORDERS.FEL_NUMERO, '') AS FEL_NUMERO, ORDERS.CODEMP, 
                  EMPRESAS_CONTA.NIT AS NIT_CONTA, EMPRESAS_CONTA.RAZON_SOCIAL, EMPRESAS_CONTA.NOMBRE_COMERCIAL, 
                  ORDERS.CODPROV, PROVEEDORES.NIT AS NIT_PROVEEDOR, PROVEEDORES.PROVEEDOR, 
                  PROVEEDORES.DIRECCION AS DIRPROV
        FROM ORDERS LEFT OUTER JOIN
                  PROVEEDORES ON ORDERS.CODPROV = PROVEEDORES.CODPROV LEFT OUTER JOIN
                  EMPRESAS_CONTA ON ORDERS.CODEMP = EMPRESAS_CONTA.CODEMP LEFT OUTER JOIN
                  EMPRESAS ON ORDERS.EMPNIT_RECIBE = EMPRESAS.EMPNIT LEFT OUTER JOIN
                  EMPLEADOS ON ORDERS.CODEMP_RECIBE = EMPLEADOS.CODEMP LEFT OUTER JOIN
                  EMPLEADOS AS EMPLEADOS_1 ON ORDERS.CODEMP_SOLICITA = EMPLEADOS_1.CODEMP LEFT OUTER JOIN
                  PROYECTOS ON ORDERS.CODPROYECTO = PROYECTOS.CODPROYECTO LEFT OUTER JOIN
                  TIPODOCUMENTOS ON ORDERS.CODDOC = TIPODOCUMENTOS.CODDOC LEFT OUTER JOIN
                  EMPRESAS AS EMPRESAS_1 ON ORDERS.EMPNIT = EMPRESAS_1.EMPNIT
        WHERE (ORDERS.MES = ${mes}) AND 
                (ORDERS.ANIO = ${anio}) AND 
                (TIPODOCUMENTOS.TIPODOC IN ('COM')) AND 
                (ORDERS.CODEMP = ${sucursal}) 
                `
    
                //console.log(qry)
               
        execute.QueryToken(res,qry,'')

});

// EMPRESAS CONTABILIDAD




// -----------------------------------
//PROVEEDORES
router.post("/select_proveedores", async(req,res)=>{

        //const {sucursal,tipo,mes,anio} = req.body;

        let qry = `
        SELECT CODPROV,NIT,PROVEEDOR,DIRECCION,TELEFONO
        FROM PROVEEDORES;  `               
        execute.QueryToken(res,qry,'')

});
router.post("/insert_proveedor", async(req,res)=>{

        const {nit,proveedor,direccion,telefono} = req.body;

        let qry = `
        INSERT INTO PROVEEDORES
                (NIT,PROVEEDOR,DIRECCION,TELEFONO)
        SELECT '${nit}' AS NIT, '${proveedor}' AS PROVEEDOR,
                '${direccion}' AS DIRECCION, '${telefono}' AS TELEFONO;  
                `
               
        execute.QueryToken(res,qry,'')

});
router.post("/edit_proveedor", async(req,res)=>{

        const {codprov,nit,proveedor,direccion,telefono} = req.body;

        let qry = `
        UPDATE PROVEEDORES
                SET 
                        NIT='${nit}',
                        PROVEEDOR='${proveedor}',
                        DIRECCION='${direccion}',
                        TELEFONO='${telefono}'
        WHER CODPROV=${codprov};  
                `
               
        execute.QueryToken(res,qry,'')

});
router.post("/delete_proveedor", async(req,res)=>{

        const {codprov} = req.body;

        let qry = `
        DELETE FROM PROVEEDORES WHERE CODPROV=${codprov};  
                `
               
        execute.QueryToken(res,qry,'')

});
router.post("/select_movimientos_proveedor", async(req,res)=>{

        const {codprov} = req.body;

        let qry = `
        SELECT CODDOC,CORRELATIVO FROM ORDERS WHERE CODPROV=${codprov}; `
                       
        execute.QueryToken(res,qry,'')

});

//PROVEEDORES
// -----------------------------------




router.post("/select_traslados_recibidos_pendientes", async(req,res)=>{

        const {sucursal} = req.body;

        let qry = `
                SELECT ORDERS.ID, ORDERS.EMPNIT, EMPRESAS.EMPRESA, ORDERS.CODDOC, ORDERS.CORRELATIVO, ORDERS.FECHA, ORDERS.HORA, ORDERS.CODPROYECTO, PROYECTOS.NOMPROYECTO, PROYECTOS.DIRPROYECTO, 
                  ISNULL(EMPLEADOS_1.NOMEMP, '') AS SOLICITA, ISNULL(EMPLEADOS.NOMEMP, '') AS RECIBE, ORDERS.NO_ORDEN, ORDERS.OBS, ORDERS.STATUS, ORDERS.ITEMS, ORDERS.TOTALCOSTO, ORDERS.EMPNIT_RECIBE, 
                        ORDERS.CODEMP_SOLICITA, 
                        ORDERS.CODEMP_RECIBE
                FROM     ORDERS LEFT OUTER JOIN
                  EMPLEADOS ON ORDERS.CODEMP_RECIBE = EMPLEADOS.CODEMP LEFT OUTER JOIN
                  EMPLEADOS AS EMPLEADOS_1 ON ORDERS.CODEMP_SOLICITA = EMPLEADOS_1.CODEMP LEFT OUTER JOIN
                  PROYECTOS ON ORDERS.CODPROYECTO = PROYECTOS.CODPROYECTO LEFT OUTER JOIN
                  TIPODOCUMENTOS ON ORDERS.CODDOC = TIPODOCUMENTOS.CODDOC LEFT OUTER JOIN
                  EMPRESAS ON ORDERS.EMPNIT = EMPRESAS.EMPNIT
                WHERE  
                        (TIPODOCUMENTOS.TIPODOC='SAL')
	                AND (ORDERS.EMPNIT_RECIBE='${sucursal}')
		        AND (ORDERS.FECHA_RECIBE IS NULL)
                `
    
              
                
        execute.QueryToken(res,qry,'')

});
router.post("/insert_traslado_entrada", async(req,res)=>{

        const {sucursal_origen,coddoc_origen,correlativo_origen,sucursal,
                codemp_recibe,codproyecto,fecha,hora,coddoc,correlativo,totalcosto,items,obs} = req.body;

        let qry_documentos = `
        INSERT INTO ORDERS (
                EMPNIT,CODDOC,CORRELATIVO,MES,ANIO,FECHA,HORA,CODPROYECTO,CODEMP_SOLICITA,
                CODEMP_RECIBE,NO_ORDEN,OBS,STATUS,F_ENTREGA,F_RECIBE,USUARIO,ITEMS,
                        TOTALCOSTO,EMPNIT_RECIBE,FECHA_RECIBE,JSON_DETAILS
                )
                SELECT '${sucursal}' AS EMPNIT,
                        '${coddoc}' AS CODDOC,
                        ${correlativo} AS CORRELATIVO,
                        MONTH('${fecha}') AS MES,
                        YEAR('${fecha}') AS ANIO,
                        '${fecha}' AS FECHA,
                        '${hora}' AS HORA,
                        ${codproyecto} AS CODPROYECTO,
                        0 AS CODEMP_SOLICITA,
                        ${codemp_recibe} AS CODEMP_RECIBE,
                        NO_ORDEN,
                        '${obs}' AS OBS,
                        'O' AS STATUS,
                        '' AS F_ENTREGA,
                        '' AS F_RECIBE,
                        '' AS USUARIO,
                        ITEMS,
                        TOTALCOSTO,
                        '${sucursal}' AS EMPNIT_RECIBE,
                        '${fecha}' AS FECHA_RECIBE,
                        JSON_DETAILS
                FROM ORDERS 
                        WHERE EMPNIT='${sucursal_origen}' AND 
                                CODDOC='${coddoc_origen}' AND 
                                CORRELATIVO=${correlativo_origen};
                `

        let qry_docproductos = `
                INSERT INTO ORDERS_DETAILS (
                        EMPNIT,MES,ANIO,
                        CODDOC,CORRELATIVO,
                        CODPROD,DESPROD,CODMEDIDA,CANTIDAD,
                        COSTO,TOTALCOSTO,CODPROYECTO
                )
                SELECT '${sucursal}' AS EMPNIT,
                        MONTH('${fecha}') AS MES,
                        YEAR('${fecha}') AS ANIO,
                        '${coddoc}' AS CODDOC,
                        ${correlativo} AS CORRELATIVO,
                        CODPROD,DESPROD,CODMEDIDA,CANTIDAD,
                        COSTO,TOTALCOSTO,0 AS CODPROYECTO
                FROM ORDERS_DETAILS
                WHERE EMPNIT='${sucursal_origen}' AND 
                        CODDOC='${coddoc_origen}' AND 
                        CORRELATIVO=${correlativo_origen};
                `
        let qry_update_documento_origen = `
                UPDATE ORDERS SET FECHA_RECIBE='${fecha}'
                WHERE EMPNIT='${sucursal_origen}' AND 
                        CODDOC='${coddoc_origen}' AND 
                        CORRELATIVO=${correlativo_origen};
                `

        let newCorrelativo = Number(correlativo)+1;
        let qry_correlativo = `
                UPDATE TIPODOCUMENTOS SET CORRELATIVO=${newCorrelativo} WHERE CODDOC='${coddoc}';
        `

        let qry = qry_documentos + qry_docproductos + qry_correlativo + qry_update_documento_origen;
    
        execute.QueryToken(res,qry,'')

});





router.post("/select_documentos", async(req,res)=>{

        const {sucursal,tipo,mes,anio} = req.body;

        let qry = `
        SELECT ORDERS.ID, ORDERS.EMPNIT, EMPRESAS_1.EMPRESA, 
                ORDERS.CODDOC, ORDERS.CORRELATIVO, 
                ORDERS.FECHA, ORDERS.HORA, 
                ORDERS.CODPROYECTO, PROYECTOS.NOMPROYECTO, PROYECTOS.DIRPROYECTO, 
                  ISNULL(EMPLEADOS_1.NOMEMP, '') AS SOLICITA, 
                  ISNULL(EMPLEADOS.NOMEMP, '') AS RECIBE,
                   ORDERS.NO_ORDEN, 
                   ORDERS.OBS, 
                   ORDERS.STATUS, 
                   ORDERS.ITEMS, 
                   ORDERS.TOTALCOSTO, 
                  ISNULL(EMPRESAS.EMPRESA,'') AS EMPRESA_ORIGEN, 
                  ISNULL(ORDERS.FECHA_RECIBE, ORDERS.FECHA) AS FECHA_RECIBE,
                  ISNULL(ORDERS.FEL_SERIE,'') AS FEL_SERIE,
                  ISNULL(ORDERS.FEL_NUMERO,'') AS FEL_NUMERO
FROM     ORDERS LEFT OUTER JOIN
                  EMPRESAS ON ORDERS.EMPNIT_RECIBE = EMPRESAS.EMPNIT LEFT OUTER JOIN
                  EMPLEADOS ON ORDERS.CODEMP_RECIBE = EMPLEADOS.CODEMP LEFT OUTER JOIN
                  EMPLEADOS AS EMPLEADOS_1 ON ORDERS.CODEMP_SOLICITA = EMPLEADOS_1.CODEMP LEFT OUTER JOIN
                  PROYECTOS ON ORDERS.CODPROYECTO = PROYECTOS.CODPROYECTO LEFT OUTER JOIN
                  TIPODOCUMENTOS ON ORDERS.CODDOC = TIPODOCUMENTOS.CODDOC LEFT OUTER JOIN
                  EMPRESAS AS EMPRESAS_1 ON ORDERS.EMPNIT = EMPRESAS_1.EMPNIT
        WHERE  (ORDERS.MES = ${mes}) 
                AND (ORDERS.ANIO = ${anio})
                AND (TIPODOCUMENTOS.TIPODOC='${tipo}')  
                `
    
               
        execute.QueryToken(res,qry,'')

});
router.post("/select_detalle_documento", async(req,res)=>{

        const {sucursal,coddoc,correlativo} = req.body;

        let qry = `
        SELECT ORDERS.FECHA, ORDERS.HORA, 
                ORDERS.CODPROYECTO, 
                PROYECTOS.NOMPROYECTO AS PROYECTO, 
                ORDERS.CODEMP_SOLICITA, 
                EMPLEADOS.NOMEMP AS SOLICITA, 
                ORDERS.CODEMP_RECIBE, 
                EMPLEADOS_1.NOMEMP AS RECIBE, 
                ORDERS.NO_ORDEN, 
                ORDERS.OBS, 
                ORDERS_DETAILS.CODPROD, 
                ORDERS_DETAILS.DESPROD, 
                ORDERS_DETAILS.CODMEDIDA, 
                ORDERS_DETAILS.CANTIDAD, 
                ORDERS_DETAILS.COSTO, 
                ORDERS_DETAILS.TOTALCOSTO
        FROM ORDERS_DETAILS RIGHT OUTER JOIN
                PROYECTOS RIGHT OUTER JOIN
                ORDERS LEFT OUTER JOIN
                EMPLEADOS AS EMPLEADOS_1 ON ORDERS.CODEMP_RECIBE = EMPLEADOS_1.CODEMP LEFT OUTER JOIN
                EMPLEADOS ON ORDERS.CODEMP_SOLICITA = EMPLEADOS.CODEMP ON PROYECTOS.CODPROYECTO = ORDERS.CODPROYECTO ON ORDERS_DETAILS.CORRELATIVO = ORDERS.CORRELATIVO AND 
                ORDERS_DETAILS.CODDOC = ORDERS.CODDOC AND ORDERS_DETAILS.EMPNIT = ORDERS.EMPNIT
        WHERE (ORDERS.EMPNIT = '${sucursal}') AND 
                (ORDERS.CODDOC = '${coddoc}') AND 
                (ORDERS.CORRELATIVO = ${correlativo})
                `
    
           
        execute.QueryToken(res,qry,'')

});

router.post("/delete_documento", async(req,res)=>{

        const {sucursal,coddoc,correlativo} = req.body;

        let qry = `
                DELETE FROM ORDERS WHERE EMPNIT='${sucursal}' AND CODDOC='${coddoc}' AND CORRELATIVO=${correlativo};
                DELETE FROM ORDERS_DETAILS WHERE EMPNIT='${sucursal}' AND CODDOC='${coddoc}' AND CORRELATIVO=${correlativo};
                `
    
               
        execute.QueryToken(res,qry,'')

});




router.post("/insert_documento", async(req,res)=>{

        const {sucursal,sucursal_recibe,coddoc,correlativo,mes,anio,fecha,hora,codproyecto,codsolicita,codrecibe,noorden,
                obs,items,totalcosto,entregado,json_details
        } = req.body;


        let qry_documentos = `
                INSERT INTO ORDERS 
                (EMPNIT,CODDOC,CORRELATIVO,MES,ANIO,FECHA,HORA,CODPROYECTO,
                        CODEMP_SOLICITA,CODEMP_RECIBE,NO_ORDEN,OBS,STATUS,
                        ITEMS,TOTALCOSTO,JSON_DETAILS,EMPNIT_RECIBE,ENTREGADO)
                SELECT '${sucursal}' AS EMPNIT,'${coddoc}' AS CODDOC,${correlativo} AS CORRELATIVO,
                MONTH('${fecha}') AS MES, YEAR('${fecha}') AS ANIO,'${fecha}' AS FECHA,
                '${hora}' AS HORA,${codproyecto} AS CODPROYECTO,
                ${codsolicita} AS CODEMP_SOLICITA,${codrecibe} AS CODEMP_RECIBE,
                '${noorden}' AS NO_ORDEN,'${obs}' AS OBS,'O' AS STATUS,
                ${items} AS ITEMS, ${totalcosto} AS TOTALCOSTO,
                '${json_details}' AS JSON_DETAILS, 
                '${sucursal_recibe}' AS EMPNIT_RECIBE,
                '${entregado}' AS ENTREGADO;
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

router.post("/insert_documento_compra", async(req,res)=>{

        const {sucursal,sucursal_recibe,coddoc,correlativo,mes,anio,fecha,hora,codproyecto,codsolicita,codrecibe,noorden,
                obs,items,totalcosto,fel_serie,fel_numero,codempresa_conta,codprov,json_details
        } = req.body;


        let qry_documentos = `
                INSERT INTO ORDERS 
                (EMPNIT,CODDOC,CORRELATIVO,MES,ANIO,FECHA,HORA,CODPROYECTO,
                        CODEMP_SOLICITA,CODEMP_RECIBE,NO_ORDEN,OBS,STATUS,
                        ITEMS,TOTALCOSTO,JSON_DETAILS,EMPNIT_RECIBE,
                        FEL_SERIE,FEL_NUMERO,CODEMP,CODPROV)
                SELECT '${sucursal}' AS EMPNIT,'${coddoc}' AS CODDOC,${correlativo} AS CORRELATIVO,
                MONTH('${fecha}') AS MES, YEAR('${fecha}') AS ANIO,'${fecha}' AS FECHA,
                '${hora}' AS HORA,${codproyecto} AS CODPROYECTO,
                ${codsolicita} AS CODEMP_SOLICITA,${codrecibe} AS CODEMP_RECIBE,
                '${noorden}' AS NO_ORDEN,'${obs}' AS OBS,'O' AS STATUS,
                ${items} AS ITEMS, ${totalcosto} AS TOTALCOSTO,
                '${json_details}' AS JSON_DETAILS, '${sucursal_recibe}' AS EMPNIT_RECIBE,
                '${fel_serie}' AS FEL_SERIE,
                '${fel_numero}' AS FEL_NUMERO,
                ${codempresa_conta} AS CODEMP,
                ${codprov} AS CODPROV;
        `

        let qry_docproductos = qry_docproductos_sql(sucursal,coddoc,correlativo,fecha,json_details);

        let nuevo_correlativo = Number(correlativo)+1;
        let qry_tipodocumentos = `UPDATE TIPODOCUMENTOS SET CORRELATIVO=${nuevo_correlativo} WHERE CODDOC='${coddoc}';`
    
        
        let qry = qry_documentos + qry_docproductos + qry_tipodocumentos;
    

      

        execute.QueryToken(res,qry,'')


});

router.post("/BACKUP_insert_documento_prestamo", async(req,res)=>{

        const {sucursal,sucursal_recibe,coddoc,correlativo,mes,anio,fecha,hora,codproyecto,codsolicita,codrecibe,noorden,
                obs,items,totalcosto,json_details
        } = req.body;


        let qry_documentos = `
                INSERT INTO ORDERS 
                (EMPNIT,CODDOC,CORRELATIVO,MES,ANIO,FECHA,HORA,CODPROYECTO,
                        CODEMP_SOLICITA,CODEMP_RECIBE,NO_ORDEN,OBS,STATUS,
                        ITEMS,TOTALCOSTO,JSON_DETAILS,EMPNIT_RECIBE)
                SELECT '${sucursal}' AS EMPNIT,'${coddoc}' AS CODDOC,${correlativo} AS CORRELATIVO,
                MONTH('${fecha}') AS MES, YEAR('${fecha}') AS ANIO,'${fecha}' AS FECHA,
                '${hora}' AS HORA,${codproyecto} AS CODPROYECTO,
                ${codsolicita} AS CODEMP_SOLICITA,${codrecibe} AS CODEMP_RECIBE,
                '${noorden}' AS NO_ORDEN,'${obs}' AS OBS,'O' AS STATUS,
                ${items} AS ITEMS, ${totalcosto} AS TOTALCOSTO,
                '${json_details}' AS JSON_DETAILS, '${sucursal_recibe}' AS EMPNIT_RECIBE;
        `

        let qry_docproductos = qry_docproductos_sql_prestamo(sucursal,coddoc,correlativo,fecha,codrecibe,json_details);

        let nuevo_correlativo = Number(correlativo)+1;
        let qry_tipodocumentos = `UPDATE TIPODOCUMENTOS SET CORRELATIVO=${nuevo_correlativo} WHERE CODDOC='${coddoc}';`
       
        
        let qry = qry_documentos + qry_docproductos + qry_tipodocumentos;
    
 

        execute.QueryToken(res,qry,'')


});
router.post("/insert_documento_prestamo", async(req,res)=>{

        const {sucursal,sucursal_recibe,coddoc,correlativo,entregado,coddoc_ent,correlativo_ent,mes,anio,fecha,hora,codproyecto,codsolicita,codrecibe,noorden,
                obs,items,totalcosto,json_details
        } = req.body;


        // DOCUMENTO DE SALIDA
        let qry_documentos = `
                INSERT INTO ORDERS 
                (EMPNIT,CODDOC,CORRELATIVO,MES,ANIO,FECHA,HORA,CODPROYECTO,
                        CODEMP_SOLICITA,CODEMP_RECIBE,NO_ORDEN,OBS,STATUS,
                        ITEMS,TOTALCOSTO,JSON_DETAILS,EMPNIT_RECIBE,ENTREGADO)
                SELECT '${sucursal}' AS EMPNIT,'${coddoc}' AS CODDOC,${correlativo} AS CORRELATIVO,
                MONTH('${fecha}') AS MES, YEAR('${fecha}') AS ANIO,'${fecha}' AS FECHA,
                '${hora}' AS HORA,${codproyecto} AS CODPROYECTO,
                ${codsolicita} AS CODEMP_SOLICITA,${codrecibe} AS CODEMP_RECIBE,
                '${noorden}' AS NO_ORDEN,'${obs}' AS OBS,'O' AS STATUS,
                ${items} AS ITEMS, ${totalcosto} AS TOTALCOSTO,
                '${json_details}' AS JSON_DETAILS, '${sucursal_recibe}' AS EMPNIT_RECIBE,'${entregado}' AS ENTREGADO;
        `

        let qry_docproductos = qry_docproductos_sql_prestamo(sucursal,coddoc,correlativo,fecha,codrecibe,json_details);

        let nuevo_correlativo = Number(correlativo)+1;
        let qry_tipodocumentos = `UPDATE TIPODOCUMENTOS SET CORRELATIVO=${nuevo_correlativo} WHERE CODDOC='${coddoc}';`
       
        
        let qry = qry_documentos + qry_docproductos + qry_tipodocumentos;
    
        //DOCUMENTO DE ENTRADA
        let qry_documentos_entrada = `
                INSERT INTO ORDERS 
                (EMPNIT,CODDOC,CORRELATIVO,MES,ANIO,FECHA,HORA,CODPROYECTO,
                        CODEMP_SOLICITA,CODEMP_RECIBE,NO_ORDEN,OBS,STATUS,
                        ITEMS,TOTALCOSTO,JSON_DETAILS,EMPNIT_RECIBE,ENTREGADO)
                SELECT '${sucursal_recibe}' AS EMPNIT,'${coddoc_ent}' AS CODDOC,${correlativo_ent} AS CORRELATIVO,
                MONTH('${fecha}') AS MES, YEAR('${fecha}') AS ANIO,'${fecha}' AS FECHA,
                '${hora}' AS HORA,${codproyecto} AS CODPROYECTO,
                ${codsolicita} AS CODEMP_SOLICITA,${codrecibe} AS CODEMP_RECIBE,
                '${noorden}' AS NO_ORDEN,'${obs}' AS OBS,'O' AS STATUS,
                ${items} AS ITEMS, ${totalcosto} AS TOTALCOSTO,
                '${json_details}' AS JSON_DETAILS, '${sucursal}' AS EMPNIT_RECIBE,'${entregado}' AS ENTREGADO;
        `

        let qry_docproductos_entrada = qry_docproductos_sql_prestamo(sucursal_recibe,coddoc_ent,correlativo_ent,fecha,codrecibe,json_details);

        let nuevo_correlativo_entrada = Number(correlativo_ent)+1;
        let qry_tipodocumentos_entrada = `UPDATE TIPODOCUMENTOS SET CORRELATIVO=${nuevo_correlativo_entrada} WHERE CODDOC='${coddoc_ent}';`
       
        
        let qry_entrada = qry_documentos_entrada + qry_docproductos_entrada + qry_tipodocumentos_entrada;

 

        execute.QueryToken(res,qry+qry_entrada,'')


});

function qry_docproductos_sql_prestamo(sucursal,coddoc,correlativo,fecha,codemp,json){

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




        let qry = `
        SELECT view_invsaldo_productos_empresas.EMPNIT, 
                view_invsaldo_productos_empresas.EMPRESA, 
                view_invsaldo_productos_empresas.CODPROD, 
                view_invsaldo_productos_empresas.DESPROD, 
                view_invsaldo_productos_empresas.COSTO, 
                ISNULL(invsaldo_inventario_sucursales.TOTALUNIDADES, 0) AS EXISTENCIA, 
                ISNULL(invsaldo_inventario_sucursales.TOTALCOSTO, 0) AS TOTALCOSTO, 
                view_invsaldo_productos_empresas.DESMARCA, 
                view_invsaldo_productos_empresas.HABILITADO, 
                view_invsaldo_productos_empresas.TIPO, 
                PRODUCTOS.CODEMP_RESPONSABLE, 
                ISNULL(EMPLEADOS.NOMEMP,'') AS EMPLEADO
        FROM     EMPLEADOS RIGHT OUTER JOIN
                  PRODUCTOS ON EMPLEADOS.CODEMP = PRODUCTOS.CODEMP_RESPONSABLE RIGHT OUTER JOIN
                  view_invsaldo_productos_empresas ON PRODUCTOS.CODPROD = view_invsaldo_productos_empresas.CODPROD LEFT OUTER JOIN
                  invsaldo_inventario_sucursales ON view_invsaldo_productos_empresas.CODPROD = invsaldo_inventario_sucursales.CODPROD 
                  AND view_invsaldo_productos_empresas.EMPNIT = invsaldo_inventario_sucursales.EMPNIT
        WHERE  (view_invsaldo_productos_empresas.TIPO LIKE '%${tipo}%') 
                AND (view_invsaldo_productos_empresas.EMPNIT = '${sucursal}') 
                AND (view_invsaldo_productos_empresas.DESPROD LIKE '%${filtro}%')
        ORDER BY view_invsaldo_productos_empresas.CODPROD
        `
     
        
        execute.QueryToken(res,qry,'')

});






router.post("/select_empresas", async(req,res)=>{

        const {tipo} = req.body;


        let qry = '';

        if(tipo=='EMPLEADOS'){
                qry = `
                SELECT  EMPNIT, EMPRESA, HABILITADO,TIPO 
                        FROM EMPRESAS 
                        WHERE 
                                HABILITADO='SI' AND TIPO='EMPLEADOS';
        `
        }else{
                qry = `
                SELECT  EMPNIT, EMPRESA, HABILITADO 
                        FROM EMPRESAS 
                        WHERE 
                                HABILITADO='SI' AND TIPO='BODEGAS';
                `
        }

        
    
        execute.QueryToken(res,qry,'')

});

router.post("/select_empresas_listado", async(req,res)=>{

        //const {sucursal} = req.body;

        let qry = `
        SELECT  EMPNIT, EMPRESA, HABILITADO, TIPO FROM EMPRESAS;
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/delete_empresa", async(req,res)=>{

        const {sucursal} = req.body;

        let qry = `
        DELETE FROM EMPRESAS WHERE EMPNIT='${sucursal}';
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/update_status_empresa", async(req,res)=>{

        const {sucursal,st} = req.body;

        let qry = `
        UPDATE EMPRESAS SET HABILITADO='${st}' WHERE EMPNIT='${sucursal}';
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/insert_empresa", async(req,res)=>{

        const {sucursal,empresa, tipo} = req.body;

        let qry = `
        INSERT INTO EMPRESAS (EMPNIT,EMPRESA,HABILITADO,TIPO)
        SELECT '${sucursal}' AS EMPNIT, '${empresa}' AS EMPRESA, 
        'SI' AS HABILITADO, '${tipo}' AS TIPO;
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/edit_empresa", async(req,res)=>{

        const {sucursal,empresa,tipo} = req.body;

        let qry = `
        UPDATE EMPRESAS SET EMPRESA='${empresa}', TIPO='${tipo}' 
        WHERE EMPNIT='${sucursal}';
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
        WHERE PROYECTOS.EMPNIT LIKE '${sucursal}' AND PROYECTOS.HABILITADO='SI';
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/select_proyectos_todos", async(req,res)=>{

        //const {sucursal} = req.body;

        let qry = `
        SELECT PROYECTOS.EMPNIT, EMPRESAS.EMPRESA, 
                PROYECTOS.CODPROYECTO, PROYECTOS.NOMPROYECTO, PROYECTOS.DIRPROYECTO, PROYECTOS.HABILITADO
        FROM PROYECTOS LEFT OUTER JOIN
                EMPRESAS ON PROYECTOS.EMPNIT = EMPRESAS.EMPNIT;
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/delete_proyecto", async(req,res)=>{

        const {codigo} = req.body;

        let qry = `
        DELETE FROM PROYECTOS WHERE CODPROYECTO=${codigo};
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/update_status_proyecto", async(req,res)=>{

        const {codigo,st} = req.body;

        let qry = `
        UPDATE PROYECTOS SET HABILITADO='${st}' WHERE CODPROYECTO=${codigo};
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/insert_proyecto", async(req,res)=>{

        const {sucursal,nombre} = req.body;

        let qry = `
        INSERT INTO PROYECTOS (EMPNIT,NOMPROYECTO,HABILITADO)
        SELECT '${sucursal}' AS EMPNIT, '${nombre}' AS NOMPROYECTO, 'SI' AS HABILITADO;
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/edit_proyecto", async(req,res)=>{

        const {sucursal,codigo,nombre} = req.body;

        let qry = `
        UPDATE PROYECTOS 
                SET EMPNIT='${sucursal}',
                        NOMPROYECTO='${nombre}'
        WHERE CODPROYECTO=${codigo};
        `
    
        execute.QueryToken(res,qry,'')

});








router.post("/select_coddoc", async(req,res)=>{

        const {sucursal,tipodoc} = req.body;

        let qry = `
        SELECT  CODDOC, CORRELATIVO 
            FROM TIPODOCUMENTOS
            WHERE TIPODOC='${tipodoc}' AND HABILITADO='SI';
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

