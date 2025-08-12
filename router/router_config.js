const execute = require('./../connection');
const express = require('express');
const router = express.Router();


router.post("/corregir_correlativo", async(req,res)=>{

        const {coddoc} = req.body;


        let qry = `
                UPDATE TIPODOCUMENTOS
                        SET TIPODOCUMENTOS.CORRELATIVO=(SELECT TOP 1 (CORRELATIVO+1) AS CORRELATIVO 
                                FROM ORDERS 
                                WHERE CODDOC='${coddoc}' ORDER BY ID DESC)
			WHERE TIPODOCUMENTOS.CODDOC='${coddoc}'

                `
    
        execute.QueryToken(res,qry,'')

});


router.post("/select_config", async(req,res)=>{

        //const {id,valor} = req.body;


        let qry = `
                SELECT ID, VALOR FROM CONFIG ORDER BY ID;
                `
    
        execute.QueryToken(res,qry,'')

});


router.post("/update_config", async(req,res)=>{

        const {id,valor} = req.body;


        let qry = `
                UPDATE CONFIG SET VALOR='${valor}' WHERE ID=${id};
        `
    
        execute.QueryToken(res,qry,'')

});



router.post("/select_tipodocumentos", async(req,res)=>{

        //const {} = req.body;


        let qry = `
        SELECT ID,CODDOC, CORRELATIVO, DESCRIPCION, INV, OPER, TIPODOC, HABILITADO
            FROM TIPODOCUMENTOS
            ORDER BY TIPODOC
        `
    
        execute.QueryToken(res,qry,'')

});


router.post("/insert_tipodocumento", async(req,res)=>{

        const {coddoc,correlativo,descripcion,inv,tipodoc} = req.body;


        let qry = `
        INSERT TIPODOCUMENTOS
                (CODDOC, CORRELATIVO, DESCRIPCION, INV, OPER, TIPODOC, HABILITADO)
        SELECT '${coddoc}' AS CODDOC, ${correlativo} AS CORRELATIVO, 
                '${descripcion}' AS DESCRIPCION, ${inv} AS INV, 
                0 AS OPER, '${tipodoc}' AS TIPODOC, 
                'SI' AS HABILITADO;
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/edit_tipodocumento", async(req,res)=>{

        const {coddoc,correlativo,descripcion,inv,tipodoc} = req.body;


        let qry = `
        UPDATE TIPODOCUMENTOS
                SET CORRELATIVO=${correlativo},
                    DESCRIPCION='${descripcion}',
                    TIPODOC='${tipodoc}',
                    INV=${inv}
                WHERE CODDOC='${coddoc}';
                `
    
        execute.QueryToken(res,qry,'')

});

router.post("/update_status_tipodocumento", async(req,res)=>{

        const {id,st} = req.body;


        let qry = `
                UPDATE TIPODOCUMENTOS
                        SET HABILITADO='${st}'
                WHERE ID=${id};
        `
    
        execute.QueryToken(res,qry,'')

});

router.post("/delete_tipodocumento", async(req,res)=>{

        const {id} = req.body;


        let qry = `
            DELETE FROM TIPODOCUMENTOS WHERE ID=${id};
        `
    
        execute.QueryToken(res,qry,'')

});












module.exports = router;
