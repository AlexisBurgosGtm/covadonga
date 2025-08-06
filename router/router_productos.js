const execute = require('./../connection');
const express = require('express');
const router = express.Router();




router.post("/inventario_productos", async(req,res)=>{

        const {sucursal, habilitado,existencia} = req.body;


        let qry = '';

        if(existencia=='SI'){
                qry = `
        
                SELECT view_invsaldo_productos_empresas.EMPNIT, 
                        view_invsaldo_productos_empresas.EMPRESA, 
                        view_invsaldo_productos_empresas.CODPROD, 
                        view_invsaldo_productos_empresas.DESPROD, 
                        productos.COSTO, 
                        productos.CODMEDIDA,
                        ISNULL(invsaldo_inventario_sucursales.TOTALUNIDADES, 0) AS EXISTENCIA, 
                        ISNULL(invsaldo_inventario_sucursales.TOTALCOSTO, 0) AS TOTALCOSTO, 
                        view_invsaldo_productos_empresas.DESMARCA, 
                        view_invsaldo_productos_empresas.HABILITADO, 
                        view_invsaldo_productos_empresas.TIPO
                FROM     EMPLEADOS RIGHT OUTER JOIN
                        PRODUCTOS ON EMPLEADOS.CODEMP = PRODUCTOS.CODEMP_RESPONSABLE RIGHT OUTER JOIN
                        view_invsaldo_productos_empresas ON PRODUCTOS.CODPROD = view_invsaldo_productos_empresas.CODPROD LEFT OUTER JOIN
                        invsaldo_inventario_sucursales ON view_invsaldo_productos_empresas.CODPROD = invsaldo_inventario_sucursales.CODPROD 
                        AND view_invsaldo_productos_empresas.EMPNIT = invsaldo_inventario_sucursales.EMPNIT
                WHERE  (view_invsaldo_productos_empresas.EMPNIT = '${sucursal}')
                        AND (view_invsaldo_productos_empresas.HABILITADO='${habilitado}')
                        AND (ISNULL(invsaldo_inventario_sucursales.TOTALUNIDADES, 0)<>0)
                ORDER BY view_invsaldo_productos_empresas.CODPROD
                `
   
        }else{
        
                qry = `
       
                SELECT view_invsaldo_productos_empresas.EMPNIT, 
                        view_invsaldo_productos_empresas.EMPRESA, 
                        view_invsaldo_productos_empresas.CODPROD, 
                        view_invsaldo_productos_empresas.DESPROD, 
                        productos.COSTO, 
                        productos.CODMEDIDA,
                        ISNULL(invsaldo_inventario_sucursales.TOTALUNIDADES, 0) AS EXISTENCIA, 
                        ISNULL(invsaldo_inventario_sucursales.TOTALCOSTO, 0) AS TOTALCOSTO, 
                        view_invsaldo_productos_empresas.DESMARCA, 
                        view_invsaldo_productos_empresas.HABILITADO, 
                        view_invsaldo_productos_empresas.TIPO
                FROM     EMPLEADOS RIGHT OUTER JOIN
                        PRODUCTOS ON EMPLEADOS.CODEMP = PRODUCTOS.CODEMP_RESPONSABLE RIGHT OUTER JOIN
                        view_invsaldo_productos_empresas ON PRODUCTOS.CODPROD = view_invsaldo_productos_empresas.CODPROD LEFT OUTER JOIN
                        invsaldo_inventario_sucursales ON view_invsaldo_productos_empresas.CODPROD = invsaldo_inventario_sucursales.CODPROD 
                        AND view_invsaldo_productos_empresas.EMPNIT = invsaldo_inventario_sucursales.EMPNIT
                WHERE  (view_invsaldo_productos_empresas.EMPNIT = '${sucursal}')
                        AND (view_invsaldo_productos_empresas.HABILITADO='${habilitado}')
                ORDER BY view_invsaldo_productos_empresas.CODPROD
                `
   
        }

         
        execute.QueryToken(res,qry,'')

});


router.post("/kardex_producto", async(req,res)=>{

        const {sucursal, codprod} = req.body;

        let qry = `
        SELECT ORDERS.EMPNIT, EMPRESAS.EMPRESA, 
                ORDERS.CODDOC, ORDERS.CORRELATIVO, 
                ORDERS.FECHA, ORDERS.HORA, 
                TIPODOCUMENTOS.TIPODOC, 
                TIPODOCUMENTOS.INV, 
                ORDERS_DETAILS.CODPROD, 
                ORDERS_DETAILS.DESPROD, 
                ORDERS_DETAILS.CODMEDIDA, 
                ORDERS_DETAILS.CANTIDAD, 
                ORDERS_DETAILS.COSTO, 
                ORDERS_DETAILS.TOTALCOSTO
        FROM  ORDERS LEFT OUTER JOIN
                  ORDERS_DETAILS ON ORDERS.CORRELATIVO = ORDERS_DETAILS.CORRELATIVO AND 
                  ORDERS.CODDOC = ORDERS_DETAILS.CODDOC AND ORDERS.EMPNIT = ORDERS_DETAILS.EMPNIT LEFT OUTER JOIN
                  EMPRESAS ON ORDERS.EMPNIT = EMPRESAS.EMPNIT LEFT OUTER JOIN
                  TIPODOCUMENTOS ON ORDERS.CODDOC = TIPODOCUMENTOS.CODDOC
WHERE  (ORDERS.EMPNIT LIKE '%${sucursal}%') AND 
        (ORDERS_DETAILS.CODPROD = '${codprod}') AND 
        (ORDERS.STATUS <> 'A')
ORDER BY ORDERS.ID
        `
    
        execute.QueryToken(res,qry,'')

});
router.post("/kardex_producto_herramienta", async(req,res)=>{

        const {sucursal, codprod} = req.body;

        let qry = `
        SELECT ORDERS.EMPNIT, EMPRESAS.EMPRESA, 
                ORDERS.CODDOC, ORDERS.CORRELATIVO, 
                ORDERS.FECHA, ORDERS.HORA,
                ISNULL(ORDERS.ENTREGADO,'') AS ENTREGADO,
                ORDERS.OBS,
                TIPODOCUMENTOS.TIPODOC, 
                TIPODOCUMENTOS.INV, 
                ORDERS_DETAILS.CODPROD, 
                ORDERS_DETAILS.DESPROD, 
                ORDERS_DETAILS.CODMEDIDA, 
                ORDERS_DETAILS.CANTIDAD, 
                ORDERS_DETAILS.COSTO, 
                ORDERS_DETAILS.TOTALCOSTO
        FROM  ORDERS LEFT OUTER JOIN
                  ORDERS_DETAILS ON ORDERS.CORRELATIVO = ORDERS_DETAILS.CORRELATIVO AND 
                  ORDERS.CODDOC = ORDERS_DETAILS.CODDOC AND ORDERS.EMPNIT = ORDERS_DETAILS.EMPNIT LEFT OUTER JOIN
                  EMPRESAS ON ORDERS.EMPNIT = EMPRESAS.EMPNIT LEFT OUTER JOIN
                  TIPODOCUMENTOS ON ORDERS.CODDOC = TIPODOCUMENTOS.CODDOC
WHERE  (ORDERS.EMPNIT LIKE '%${sucursal}%') AND 
        (ORDERS_DETAILS.CODPROD = '${codprod}') AND 
        (ORDERS.STATUS <> 'A')
ORDER BY ORDERS.ID DESC
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/insert_clasificacion", async(req,res)=>{

        const {sucursal, tipo,descripcion} = req.body;

        let qry = `INSERT INTO CLASIFICACIONES (TIPO,DESCRIPCION) VALUES ('${tipo}','${descripcion}');   `
    
        execute.QueryToken(res,qry,'')

});


router.post("/select_clasificaciones_tipo", async(req,res)=>{

        const {sucursal, tipo} = req.body;

        let qry = `SELECT CODIGO,DESCRIPCION
                FROM CLASIFICACIONES
                WHERE TIPO='${tipo}';
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/select_clasificaciones_todas", async(req,res)=>{

        const {sucursal} = req.body;

        let qry = `SELECT TIPO, CODIGO, DESCRIPCION
                FROM CLASIFICACIONES;
        `
    
        execute.QueryToken(res,qry,'')

});


router.post("/select_productos", async(req,res)=>{

        const {token, habilitado} = req.body;

        let qry = `
        SELECT PRODUCTOS.CODPROD, PRODUCTOS.CODPROD2, 
                PRODUCTOS.DESPROD, PRODUCTOS.DESPROD2, 
                PRODUCTOS.UXC, PRODUCTOS.CODMEDIDA, 
                PRODUCTOS.COSTO, PRODUCTOS.PRECIO, 
                PRODUCTOS.CODMARCA, CLASIFICACIONES_1.DESCRIPCION AS MARCA, 
                PRODUCTOS.CODRUBRO, CLASIFICACIONES_2.DESCRIPCION AS RUBRO, 
                PRODUCTOS.CODRUBRO2, CLASIFICACIONES.DESCRIPCION AS RUBRO2,
                PRODUCTOS.TIPO, 
                PRODUCTOS.HABILITADO
        FROM CLASIFICACIONES AS CLASIFICACIONES_1 RIGHT OUTER JOIN
                PRODUCTOS LEFT OUTER JOIN
                CLASIFICACIONES ON PRODUCTOS.CODRUBRO2 = CLASIFICACIONES.CODIGO LEFT OUTER JOIN
                CLASIFICACIONES AS CLASIFICACIONES_2 ON PRODUCTOS.CODRUBRO = CLASIFICACIONES_2.CODIGO 
                ON CLASIFICACIONES_1.CODIGO = PRODUCTOS.CODMARCA
        WHERE PRODUCTOS.HABILITADO='${habilitado}';

        `
    
        execute.QueryToken(res,qry,'')

});
router.post("/select_productos_filtro", async(req,res)=>{

        const {token, habilitado,filtro} = req.body;

        let qry = `
        SELECT PRODUCTOS.CODPROD, PRODUCTOS.CODPROD2, 
                PRODUCTOS.DESPROD, PRODUCTOS.DESPROD2, 
                PRODUCTOS.UXC, PRODUCTOS.CODMEDIDA, 
                PRODUCTOS.COSTO, PRODUCTOS.PRECIO, 
                PRODUCTOS.CODMARCA, CLASIFICACIONES_1.DESCRIPCION AS MARCA, 
                PRODUCTOS.CODRUBRO, CLASIFICACIONES_2.DESCRIPCION AS RUBRO, 
                PRODUCTOS.CODRUBRO2, CLASIFICACIONES.DESCRIPCION AS RUBRO2,
                PRODUCTOS.TIPO, 
                PRODUCTOS.HABILITADO
        FROM CLASIFICACIONES AS CLASIFICACIONES_1 RIGHT OUTER JOIN
                PRODUCTOS LEFT OUTER JOIN
                CLASIFICACIONES ON PRODUCTOS.CODRUBRO2 = CLASIFICACIONES.CODIGO LEFT OUTER JOIN
                CLASIFICACIONES AS CLASIFICACIONES_2 ON PRODUCTOS.CODRUBRO = CLASIFICACIONES_2.CODIGO 
                ON CLASIFICACIONES_1.CODIGO = PRODUCTOS.CODMARCA
        WHERE PRODUCTOS.HABILITADO='${habilitado}'
                AND PRODUCTOS.DESPROD LIKE '%${filtro}%'
        OR      PRODUCTOS.HABILITADO='${habilitado}' AND
                PRODUCTOS.CODPROD='${filtro}';

        `
    
        execute.QueryToken(res,qry,'')

});


router.post("/insert_producto", async(req,res)=>{

        const {codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2,tipo} = req.body;

        let qry = `
       INSERT INTO PRODUCTOS
                (CODPROD,CODPROD2,DESPROD,DESPROD2,UXC,CODMEDIDA,
                COSTO,PRECIO,CODMARCA,CODRUBRO,CODRUBRO2,TIPO,HABILITADO)  
        SELECT '${codprod}' AS CODPROD,
                '${codprod2}' AS CODPROD2,
                '${desprod}' AS DESPROD,
                '${desprod2}' AS DESPROD2,
                ${uxc} AS UXC,
                '${codmedida}' AS CODMEDIDA,
                ${costo} AS COSTO,
                ${precio} AS PRECIO,
                ${codmarca} AS CODMARCA,
                ${codrubro} AS CODRUBRO,
                ${codrubro2} AS CODRUBRO2,
                '${tipo}' AS TIPO,
                'SI' AS HABILITADO;
        `

        
        execute.QueryToken(res,qry,'')

});

router.post("/edit_producto", async(req,res)=>{

        const {codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2,tipo} = req.body;

        let qry = `
        UPDATE PRODUCTOS SET 
                CODPROD2='${codprod2}',
                DESPROD='${desprod}',
                DESPROD2='${desprod2}',
                UXC=${uxc},
                CODMEDIDA='${codmedida}',
                COSTO=${costo},
                PRECIO=${precio},
                CODMARCA=${codmarca},
                CODRUBRO=${codrubro},
                CODRUBRO2=${codrubro2},
                TIPO='${tipo}'
        WHERE CODPROD='${codprod}';
        `

        
        execute.QueryToken(res,qry,'')
        
});


router.post("/delete_producto", async(req,res)=>{

        const{codprod} = req.body;

        let qry = `DELETE FROM PRODUCTOS WHERE CODPROD='${codprod}';`

        execute.QueryToken(res,qry,'');

})

router.post("/update_st_producto", async(req,res)=>{

        const{codprod,st} = req.body;

        let qry = `UPDATE PRODUCTOS
                        SET HABILITADO='${st}'
                        WHERE CODPROD='${codprod}';`

        execute.QueryToken(res,qry,'');

})

router.post("/update_costo_producto", async(req,res)=>{

        const{codprod,costo} = req.body;

        let qry = `UPDATE PRODUCTOS
                        SET COSTO=${costo}
                        WHERE CODPROD='${codprod}';`
               

        execute.QueryToken(res,qry,'');

})




module.exports = router;
