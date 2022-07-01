require("dotenv").config();
const OPEN_WEATHER_API = `7e7bf14a2d1f7f1eb69024a2d3ef2563`;
const request = require("request");

const getForecast = ({lat, lon}, callback) => {
    if(!lat || !lon) callback("missing latitude or longitude", undefined);
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts,daily&appid=${OPEN_WEATHER_API}`;    
    
    request({url, json: true}, (error, response) => {
        if(error) callback("network error, check your connection", undefined)
        if(response.body.cod) callback(response.body.message,  undefined);
        const {description} = response.body.current.weather[0];
        const {temp} = response.body.current
        callback(undefined, {temp, description});
    })
}

module.exports = getForecast;