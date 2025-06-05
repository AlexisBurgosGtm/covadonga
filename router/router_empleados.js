const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/login", async(req,res)=>{

        const {usuario,clave} = req.body;

        let qry = `
        SELECT EMPNIT, USUARIO, CLAVE
        FROM EMPLEADOS
        WHERE   USUARIO<>'' 
                AND CLAVE<>''
                AND USUARIO='${usuario}'
                AND CLAVE='${clave}';
        `
    
        execute.QueryToken(res,qry,'')

});


router.post("/select_listado", async(req,res)=>{

        const {sucursal} = req.body;

        let qry = `
        SELECT 
                EMPLEADOS.CODEMP, 
                EMPLEADOS.EMPNIT, 
                EMPRESAS.EMPRESA, 
                EMPLEADOS.NOMEMP, 
                EMPLEADOS.TELEFONO,
                EMPLEADOS.HABILITADO,
                EMPLEADOS.CODPUESTO, 
                EMPLEADOS_PUESTOS.DESPUESTO,
                EMPLEADOS.USUARIO, EMPLEADOS.CLAVE
        FROM    EMPLEADOS LEFT OUTER JOIN
                EMPLEADOS_PUESTOS ON EMPLEADOS.CODPUESTO = EMPLEADOS_PUESTOS.CODPUESTO LEFT OUTER JOIN
                EMPRESAS ON EMPLEADOS.EMPNIT = EMPRESAS.EMPNIT
        ORDER BY EMPLEADOS.EMPNIT, EMPLEADOS.NOMEMP, EMPLEADOS.HABILITADO DESC
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/insert_empleado", async(req,res)=>{

        const {sucursal,dpi,nombre,telefono,codpuesto,usuario,clave} = req.body;

        let qry = `
        INSERT INTO EMPLEADOS
        (EMPNIT,DPI,NOMEMP,TELEFONO,CODPUESTO,HABILITADO,USUARIO,CLAVE)
        SELECT
        '${sucursal}' AS EMPNIT,'${dpi}' AS DPI,
        '${nombre}' AS NOMEMP,'${telefono}' AS TELEFONO,${codpuesto} AS CODPUESTO,
        'SI' AS HABILITADO,
        '${usuario}' AS USUARIO,'${clave}' AS CLAVE;
        `
    
        execute.QueryToken(res,qry,'')

});


router.post("/edit_empleado", async(req,res)=>{

        const {codigo,sucursal,dpi,nombre,telefono,codpuesto,usuario,clave} = req.body;

        let qry = `
        UPDATE EMPLEADOS
                SET
                        EMPNIT='${sucursal}',
                        CODPUESTO=${codpuesto},
                        DPI='${dpi}',
                        NOMEMP='${nombre}',
                        TELEFONO='${telefono}',
                        USUARIO='${usuario}',
                        CLAVE='${clave}'
                WHERE CODEMP=${codigo};
        `
    
        execute.QueryToken(res,qry,'')

});


router.post("/update_st_empleado", async(req,res)=>{

        const {codemp,st} = req.body;

        let qry = `
        UPDATE EMPLEADOS
                SET HABILITADO='${st}'
                WHERE CODEMP=${codemp};
        `
    
        execute.QueryToken(res,qry,'')

});


router.post("/delete_empleado", async(req,res)=>{

        const {codigo} = req.body;

        let qry = `
        DELETE FROM EMPLEADOS 
                WHERE CODEMP=${codigo};
        `
    
        execute.QueryToken(res,qry,'')

});







module.exports = router;
