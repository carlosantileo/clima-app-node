const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//Para ver si estamos recibiendo bien el argumento
//console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(-38.770000, -72.599998)
//     .then(console.log)
//     .catch(console.log);

// Tarea se requiere tener una salida que indique lo siguiente:
// El clima de XXX es de X
// Si no se puede determinar el clima
// No se pudo determinar el clima de XXX

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${ coords.direccion } es de ${ temp }º Grados Celcius. `;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)