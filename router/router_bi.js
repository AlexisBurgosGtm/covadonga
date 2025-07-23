const execute = require('./../connection');
const express = require('express');
const router = express.Router();


router.post("/", async(req,res)=>{

        //const {id,valor} = req.body;


        let qry = `
                
                `;
    
        execute.QueryToken(res,qry,'')

});








module.exports = router;
