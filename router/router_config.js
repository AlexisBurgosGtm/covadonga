const execute = require('./../connection');
const express = require('express');
const router = express.Router();



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
