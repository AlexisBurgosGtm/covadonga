
// Detiene el servidor buscando el proceso que este escuchando el puerto.
// Se usa con: npm stop

try {
  process.loadEnvFile()
} catch (error) {

};

const { execSync } = require('child_process');

//mismo puerto que resuelve server.js
const PORT = process.env.PORT || 8800;

const esWindows = (process.platform === 'win32');


function correr(cmd){
    try {
        return execSync(cmd, {encoding:'utf8', stdio:['ignore','pipe','ignore']});
    } catch (error) {
        //el comando devuelve codigo !=0 cuando no encuentra nada
        return '';
    }
};


function pids_escuchando(){

    if(esWindows){
        //en netstat la ultima columna es el PID; solo interesan las lineas LISTENING
        return correr('netstat -ano')
                .split(/\r?\n/)
                .filter((l)=> l.includes('LISTENING') && new RegExp(`[:.]${PORT}\\s`).test(l))
                .map((l)=> l.trim().split(/\s+/).pop());
    }

    return correr(`lsof -ti tcp:${PORT} -sTCP:LISTEN`).split(/\r?\n/);

};


function nombre_proceso(pid){

    if(!esWindows){return correr(`ps -p ${pid} -o comm=`).trim();}

    let linea = correr(`tasklist /FI "PID eq ${pid}" /NH /FO CSV`).trim();

    return linea.startsWith('"') ? linea.split('","')[0].replace('"','') : '';

};


let pids = [...new Set(pids_escuchando().filter((p)=> p && p !== '0'))];

if(pids.length === 0){
    console.log(`No hay ningun proceso escuchando en el puerto ${PORT}.`);
    process.exit(0);
}

pids.forEach((pid)=>{

    let nombre = nombre_proceso(pid);

    //evita matar por error algo ajeno que este ocupando el puerto
    if(nombre && !/^node(\.exe)?$/i.test(nombre)){
        console.log(`El puerto ${PORT} lo ocupa "${nombre}" (PID ${pid}), que no es node. No se detuvo.`);
        process.exitCode = 1;
        return;
    }

    try {

        if(esWindows){
            execSync(`taskkill /PID ${pid} /T /F`, {stdio:'ignore'});
        }else{
            process.kill(Number(pid), 'SIGTERM');
        }

        console.log(`Servidor detenido (PID ${pid}, puerto ${PORT}).`);

    } catch (error) {
        console.log(`No se pudo detener el PID ${pid}: ${error.message}`);
        process.exitCode = 1;
    }

});
