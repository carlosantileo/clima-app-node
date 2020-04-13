const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=d7a31c1e7f06a3e8269d6864dbbd3cd4&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}