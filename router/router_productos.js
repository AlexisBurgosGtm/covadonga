const execute = require('./../connection');
const express = require('express');
const router = express.Router();



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


router.post("/insert_producto", async(req,res)=>{

        const {codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2} = req.body;

        let qry = `
       INSERT INTO PRODUCTOS
                (CODPROD,CODPROD2,DESPROD,DESPROD2,UXC,CODMEDIDA,
                COSTO,PRECIO,CODMARCA,CODRUBRO,CODRUBRO2,HABILITADO)  
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
                'SI' AS HABILITADO;
        `

        
        execute.QueryToken(res,qry,'')

});

router.post("/edit_producto", async(req,res)=>{

        const {codprod,codprod2,desprod,desprod2,uxc,codmedida,costo,precio,codmarca,codrubro,codrubro2} = req.body;

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
                CODRUBRO2=${codrubro2}
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




module.exports = router;
