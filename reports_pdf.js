const execute = require('./connection');


let PDF = {
    config_eliminar_archivos:()=>{
        return new Promise((resolve, reject) => {
            
                const directory = `./PDF`

                const fs = require("fs");
                const path = require("path");
    

                fs.readdir(directory, (err, files) => {
                    if (err) throw err;

                    for (const file of files) {
                    fs.unlink(path.join(directory, file), (err) => {
                        if (err) throw err;
                    });
                    }
                });

                resolve();
        })

    },
    prestamo_herramienta:(coddoc,correlativo)=>{

        return new Promise((resolve,reject)=>{

        
                const PDFDocument = require('pdfkit');
                const fs = require('fs');

                // Crea una nueva instancia de PDFDocument
                const doc = new PDFDocument({size: 'LETTER'});

                // Define la ruta del archivo PDF que quieres reemplazar
                const filePath = `./PDF/prestamo_herramienta_${coddoc}_${correlativo}.pdf`;

                // Crea un flujo de escritura para el archivo
                const writeStream = fs.createWriteStream(filePath);

                // Canaliza la salida del documento PDF al flujo de escritura
                doc.pipe(writeStream);

                //------------------------------------------------
                // Contenido al documento
                //------------------------------------------------
                let qry = `SELECT 
                                CONVERT(VARCHAR(10), ORDERS.FECHA, 103) AS FECHA, 
                                ORDERS.HORA, 
                                PROYECTOS.NOMPROYECTO AS PROYECTO, 
                                ORDERS.ENTREGADO, 
                                ORDERS_DETAILS.CODPROD, 
                                ORDERS_DETAILS.DESPROD, 
                                ORDERS_DETAILS.CANTIDAD, 
                                ORDERS_DETAILS.COSTO, 
                                EMPLEADOS.NOMEMP AS EMPLEADO_RECIBE
                            FROM  ORDERS LEFT OUTER JOIN
                            PROYECTOS ON ORDERS.CODPROYECTO = PROYECTOS.CODPROYECTO LEFT OUTER JOIN
                            EMPLEADOS ON ORDERS.CODEMP_RECIBE = EMPLEADOS.CODEMP LEFT OUTER JOIN
                            ORDERS_DETAILS ON ORDERS.CORRELATIVO = ORDERS_DETAILS.CORRELATIVO AND ORDERS.CODDOC = ORDERS_DETAILS.CODDOC AND ORDERS.EMPNIT = ORDERS_DETAILS.EMPNIT
                            WHERE  (ORDERS.CODDOC = '${coddoc}') AND 
                                (ORDERS.CORRELATIVO = ${correlativo});`;

                execute.QueryData(qry)
                .then((datos)=>{

            

                    let tbl_data = [];
                    let fecha = ''; let hora = '';
                    let persona_recibe = '';
                    let persona_cargo = '';
                    let proyecto = '';
                    let varTotal = 0;

                    tbl_data.push(['EQUIPO PRESTADO','CANTIDAD','VALOR UN.','ESTADO RECIBE']);

                    datos.recordset.map((r)=>{
                            tbl_data.push([r.DESPROD, r.CANTIDAD.toString(), setMoneda(r.COSTO,'Q'),'']);
                            fecha = r.FECHA.toString();
                            hora = r.HORA.toString();
                            persona_recibe = r.ENTREGADO;
                            persona_cargo = r.EMPLEADO_RECIBE;
                            proyecto = r.PROYECTO;
                            varTotal+=(Number(r.COSTO)*Number(r.CANTIDAD))
                    });
                
                    console.log(fecha);
                
                    doc
                        .fontSize(13)
                        .text('Bodega COVADONGA', 100,50, {align: 'center'})
                        .image('./favicon.png', 500,30, {
                            fit: [50, 50],
                            align: 'right',
                            valign: 'right'
                        })
                        .fontSize(10)
                        .text('Finca Covandonga, Nuevo San Carlos, Retalhuleu', {align: 'center'})
                        .text('ORDEN DE PRÉSTAMO DE EQUIPO A TRABAJADORES', {align: 'center'});
                       
                    doc
                        .fontSize(9)
                        .text(`Fecha de Préstamo:  ${fecha} (Hora: ${hora})`,70,130)
                        .text(`Documento sistema:  ${coddoc}-${correlativo}`,350,130)
                        .text(`Persona que recibe: \n${persona_recibe}`,70,150)
                        .text(`Persona a Cargo: \n${persona_cargo}`,350,150)
                        .text(`Área de uso:________________________________`,70,190)
                        .text(`Proyecto: \n${proyecto}`,350,190);

                    doc.fontSize(10);    
                    doc.text('',70,240);

                    doc.table({
                            data: tbl_data
                        });
                    doc
                        .moveDown()
                        .moveDown()
                        .moveDown()
                        .moveDown();
                    doc
                        .fontSize(10)
                        .text('El usuario deberá responder por cualquier daño o pérdida parcial o total, será su responsabilidad devolver',{align:'justify'})
                        .text('el equipo de trabajo o dispositivo en buenas condiciones dentro del horario establecido de servicio.',{align:'justify'})
                        .moveDown()
                        .text(`Si no lo devolviera en el estado, en tiempo y forma, el usuario deberá el monto total de: ${setMoneda(varTotal,'Q')}`,{align:'justify'})
                        .text('Fecha Estimada de Entrega: _______________________________',{align:'left'});
                    
                    doc
                        .fontSize(10)
                        .text('__________________________________',70,685)
                        .text('Nombre y Firma Autorizada',70,700)
                        .text('__________________________________',350,685)
                        .text('Nombre y Firma de quien Recibe',350,700,{align:'center'});
                   
                                            

                    //------------------------------------------------
                    // Contenido al documento
                    //------------------------------------------------

                    // Finaliza el documento y el flujo
                    doc.end();

                    // Maneja el evento 'finish' para confirmar que el archivo se ha guardado
                    writeStream.on('finish', () => {
                        console.log(`Archivo PDF reemplazado en: ${filePath}`);
                        resolve();
                    });

                    // Maneja errores en la escritura del archivo
                    writeStream.on('error', (err) => {
                        console.error('Error al guardar el archivo:', err);
                        reject();
                    });

                    
                })
                .catch(()=>{
                    reject();
                })     
           
        })
            

    },
    compra:(coddoc,correlativo)=>{

        return new Promise((resolve,reject)=>{

        
                const PDFDocument = require('pdfkit');
                const fs = require('fs');

                // Crea una nueva instancia de PDFDocument
                const doc = new PDFDocument({size: 'LETTER'});

                // Define la ruta del archivo PDF que quieres reemplazar
                const filePath = `./PDF/compra_${coddoc}_${correlativo}.pdf`;

                // Crea un flujo de escritura para el archivo
                const writeStream = fs.createWriteStream(filePath);

                // Canaliza la salida del documento PDF al flujo de escritura
                doc.pipe(writeStream);

                //------------------------------------------------
                // Contenido al documento
                //------------------------------------------------
                let qry = `
                SELECT 
                    CONVERT(VARCHAR(10), ORDERS.FECHA, 103) AS FECHA, 
                    ORDERS.HORA, 
                    PROYECTOS.NOMPROYECTO AS PROYECTO, 
		            CONCAT(ISNULL(ORDERS.FEL_SERIE, ''), ' - ', ISNULL(ORDERS.FEL_NUMERO, ''))  AS FACTURA_FEL, 
                    ORDERS_DETAILS.CODPROD, 
                    ORDERS_DETAILS.DESPROD, 
                    ORDERS_DETAILS.CANTIDAD, 
                    ORDERS_DETAILS.COSTO, 
                    ORDERS_DETAILS.TOTALCOSTO, 
                    EMPLEADOS.NOMEMP AS EMPLEADO_RECIBE, 
                    PROVEEDORES.PROVEEDOR, 
                    EMPRESAS_CONTA.NIT, 
                    EMPRESAS_CONTA.RAZON_SOCIAL
                FROM  ORDERS LEFT OUTER JOIN
                        EMPRESAS_CONTA ON ORDERS.CODEMP = EMPRESAS_CONTA.CODEMP LEFT OUTER JOIN
                        PROVEEDORES ON ORDERS.CODPROV = PROVEEDORES.CODPROV LEFT OUTER JOIN
                        PROYECTOS ON ORDERS.CODPROYECTO = PROYECTOS.CODPROYECTO LEFT OUTER JOIN
                        EMPLEADOS ON ORDERS.CODEMP_RECIBE = EMPLEADOS.CODEMP LEFT OUTER JOIN
                        ORDERS_DETAILS ON ORDERS.CORRELATIVO = ORDERS_DETAILS.CORRELATIVO AND ORDERS.CODDOC = ORDERS_DETAILS.CODDOC 
                        AND ORDERS.EMPNIT = ORDERS_DETAILS.EMPNIT
                WHERE  (ORDERS.CODDOC = '${coddoc}') AND 
                                (ORDERS.CORRELATIVO = ${correlativo});`;

                execute.QueryData(qry)
                .then((datos)=>{

            

                    let tbl_data = [];
                    let fecha = ''; let hora = '';
                    let factura_fel = '';
                    let persona_cargo = '';
                    let proyecto = '';
                    let nitemp =''; let empresa='';
                    let varTotal = 0;

                    tbl_data.push(['PRODUCTO','CANTIDAD','COSTO','IMPORTE']);

                    datos.recordset.map((r)=>{
                            tbl_data.push([r.DESPROD, r.CANTIDAD.toString(), setMoneda(r.COSTO,'Q'),setMoneda(r.TOTALCOSTO,'Q')]);
                           
                            fecha = r.FECHA.toString();
                            hora = r.HORA.toString();
                            factura_fel = r.FACTURA_FEL;
                            persona_cargo = r.PROVEEDOR;
                            proyecto = r.PROYECTO;
                            nitemp = r.NIT;
                            empresa = r.RAZON_SOCIAL;
                            varTotal+=Number(r.TOTALCOSTO)
                    });
                
                  
                
                    doc
                        .fontSize(13)
                        .text('Oficina COVADONGA', 100,50, {align: 'center'})
                        .image('./favicon.png', 500,30, {
                            fit: [50, 50],
                            align: 'right',
                            valign: 'right'
                        })
                        .fontSize(10)
                        .text('Finca Covandonga, Nuevo San Carlos, Retalhuleu', {align: 'center'})
                        .text('REGISTRO DE COMPRA', {align: 'center'})
                        .text(`Empresa: ${nitemp} - ${empresa}`, {align: 'center'});
                       
                    doc
                        .fontSize(9)
                        .text(`Fecha:  ${fecha} (Hora: ${hora})`,70,130)
                        .text(`Documento sistema:  ${coddoc}-${correlativo}`,350,130)
                        .text(`Proveedor: \n${persona_cargo}`,70,150)
                        .text(`Factura Proveedor: \n${factura_fel}`,350,150)
                    
                    doc.fontSize(10);    
                    doc.text('',70,240);

                    doc.table({
                            data: tbl_data
                        });
                    doc
                        .moveDown()
                        .moveDown()
                        .moveDown()
                        .moveDown();
                    doc
                        .fontSize(11)
                        .text(`Total Compra: ${setMoneda(varTotal,'Q')}`,{align:'right'});
                       
                    
                    doc
                        .fontSize(10)
                        .text('__________________________________',70,685)
                        .text('Nombre y Firma Autorizada',70,700)
                        .text('__________________________________',350,685)
                        .text('Nombre y Firma de quien Recibe',350,700,{align:'center'});
                   
                                            

                    //------------------------------------------------
                    // Contenido al documento
                    //------------------------------------------------

                    // Finaliza el documento y el flujo
                    doc.end();

                    // Maneja el evento 'finish' para confirmar que el archivo se ha guardado
                    writeStream.on('finish', () => {
                        console.log(`Archivo PDF reemplazado en: ${filePath}`);
                        resolve();
                    });

                    // Maneja errores en la escritura del archivo
                    writeStream.on('error', (err) => {
                        console.error('Error al guardar el archivo:', err);
                        reject();
                    });

                    
                })
                .catch(()=>{
                    reject();
                })     
           
        })
            

    },
    entrada_bodega:(coddoc,correlativo)=>{

        return new Promise((resolve,reject)=>{

        
                const PDFDocument = require('pdfkit');
                const fs = require('fs');

                // Crea una nueva instancia de PDFDocument
                const doc = new PDFDocument({size: 'LETTER'});

                // Define la ruta del archivo PDF que quieres reemplazar
                const filePath = `./PDF/entrada_bodega_${coddoc}_${correlativo}.pdf`;

                // Crea un flujo de escritura para el archivo
                const writeStream = fs.createWriteStream(filePath);

                // Canaliza la salida del documento PDF al flujo de escritura
                doc.pipe(writeStream);

                //------------------------------------------------
                // Contenido al documento
                //------------------------------------------------
                let qry = `
                SELECT 
                    CONVERT(VARCHAR(10), ORDERS.FECHA, 103) AS FECHA, 
                    ORDERS.HORA, 
                    PROYECTOS.NOMPROYECTO AS PROYECTO, 
                    CONCAT(ISNULL(ORDERS.FEL_SERIE, ''), ' - ', ISNULL(ORDERS.FEL_NUMERO, '')) AS FACTURA_FEL,
                    ORDERS_DETAILS.CODPROD, 
                    ORDERS_DETAILS.DESPROD, 
                    ORDERS_DETAILS.CANTIDAD, 
                    ORDERS_DETAILS.COSTO, 
                    ORDERS_DETAILS.TOTALCOSTO, 
                    EMPLEADOS.NOMEMP AS EMPLEADO_RECIBE, 
                    PROVEEDORES.PROVEEDOR, 
                    ISNULL(ORDERS.ENTREGADO, '') AS ENTREGADO, 
                    EMPRESAS.EMPRESA
                FROM ORDERS LEFT OUTER JOIN
                        EMPRESAS ON ORDERS.EMPNIT = EMPRESAS.EMPNIT LEFT OUTER JOIN
                        PROVEEDORES ON ORDERS.CODPROV = PROVEEDORES.CODPROV LEFT OUTER JOIN
                        PROYECTOS ON ORDERS.CODPROYECTO = PROYECTOS.CODPROYECTO LEFT OUTER JOIN
                        EMPLEADOS ON ORDERS.CODEMP_RECIBE = EMPLEADOS.CODEMP LEFT OUTER JOIN
                        ORDERS_DETAILS ON ORDERS.CORRELATIVO = ORDERS_DETAILS.CORRELATIVO AND ORDERS.CODDOC = ORDERS_DETAILS.CODDOC AND ORDERS.EMPNIT = ORDERS_DETAILS.EMPNIT
                WHERE (ORDERS.CODDOC = '${coddoc}') AND 
                    (ORDERS.CORRELATIVO = ${correlativo});`;

                execute.QueryData(qry)
                .then((datos)=>{

            

                    let tbl_data = [];
                    let fecha = ''; let hora = '';
                    let factura_fel = '';
                    let persona_cargo = '';
                    let empleado_recibe = '';
                    let proyecto = '';
                    let bodega = '';
                    let varTotal = 0;

                    tbl_data.push(['PRODUCTO','CANTIDAD','COSTO','IMPORTE']);

                    datos.recordset.map((r)=>{
                            tbl_data.push([r.DESPROD, r.CANTIDAD.toString(), setMoneda(r.COSTO,'Q'),setMoneda(r.TOTALCOSTO,'Q')]);
                           
                            fecha = r.FECHA.toString();
                            hora = r.HORA.toString();
                            factura_fel = r.FACTURA_FEL;
                            persona_cargo = r.PROVEEDOR;
                            proyecto = r.PROYECTO;
                            empleado_recibe = r.EMPLEADO_RECIBE;
                            bodega = r.EMPRESA;
                            varTotal+=Number(r.TOTALCOSTO)
                    });
                
                  
                
                    doc
                        .fontSize(13)
                        .text('Oficina COVADONGA', 100,50, {align: 'center'})
                        .image('./favicon.png', 500,30, {
                            fit: [50, 50],
                            align: 'right',
                            valign: 'right'
                        })
                        .fontSize(10)
                        .text('Finca Covandonga, Nuevo San Carlos, Retalhuleu', {align: 'center'})
                        .text('ENTRADA DE PRODUCTO A BODEGA', {align: 'center'})
                        .text(`BODEGA: ${bodega}`, {align: 'center'});
                       
                    doc
                        .fontSize(9)
                        .text(`Fecha:  ${fecha} (Hora: ${hora})`,70,130)
                        .text(`Documento sistema:  ${coddoc}-${correlativo}`,350,130)
                        .text(`Proyecto/Area: \n${proyecto}`,70,150)
                        .text(`Empleado recibe: \n${empleado_recibe}`,350,150)
                    
                    doc.fontSize(10);    
                    doc.text('',70,240);

                    doc.table({
                            data: tbl_data
                        });
                    doc
                        .moveDown()
                        .moveDown()
                        .moveDown()
                        .moveDown();
                    doc
                        .fontSize(11)
                        .text(`Total: ${setMoneda(varTotal,'Q')}`,{align:'right'});
                       
                    
                    doc
                        .fontSize(10)
                        .text('__________________________________',70,685)
                        .text('Nombre y Firma Autorizada',70,700)
                        .text('__________________________________',350,685)
                        .text('Nombre y Firma de quien Recibe',350,700,{align:'center'});
                   
                                            

                    //------------------------------------------------
                    // Contenido al documento
                    //------------------------------------------------

                    // Finaliza el documento y el flujo
                    doc.end();

                    // Maneja el evento 'finish' para confirmar que el archivo se ha guardado
                    writeStream.on('finish', () => {
                        console.log(`Archivo PDF reemplazado en: ${filePath}`);
                        resolve();
                    });

                    // Maneja errores en la escritura del archivo
                    writeStream.on('error', (err) => {
                        console.error('Error al guardar el archivo:', err);
                        reject();
                    });

                    
                })
                .catch(()=>{
                    reject();
                })     
           
        })
            

    },
};



function setMoneda(num,signo){
    
          num = num.toString().replace(/\$|\,/g, '');
          if (isNaN(num)) num = "0";
          let sign = (num == (num = Math.abs(num)));
          num = Math.floor(num * 100 + 0.50000000001);
          let cents = num % 100;
          num = Math.floor(num / 100).toString();
          if (cents < 10) cents = "0" + cents;
          for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
              num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
          let resultado = ((((sign) ? '' : '-') + signo + ' ' + num + ((cents == "00") ? '' : '.' + cents)).toString());
          
          if(resultado.includes('.')){}else{resultado = resultado + ".00"}
          
          return resultado;
};






module.exports = PDF;

