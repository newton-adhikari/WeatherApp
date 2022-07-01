// require("dotenv").config();
// const request = require("request");
// API_KEY = process.env.OPEN_WEATHER_API;
// const kelvinToCelsius = require("./temp_conversion");

// const GEOCODE_API = process.env.GEOCODE_API;

// // const weatherRequestURL = `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=${API_KEY}`;

// const geoCodeRequestURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/kathmandu.json?access_token=${GEOCODE_API}`;

// // request({url, json: true}, (error, response) => {
// //     console.log(kelvinToCelsius(response.body.main.temp).toFixed(2));
// // })

// // const url = `http://api.openweathermap.org/data/2.5/onecall?lat=30.489772&lon=-99.771335&lang=hi`;
// // request({url, json: true}, (error, response) => {
// //     console.log(response.body);
// // })

// request({url: geoCodeRequestURL, json: true}, (error, response) => {
//     if(error) console.log(error);
//     console.log(response.body.features[0].center);
// })

const getForecast = require("./utils/getForecast");
const getLatLong = require("./utils/getLatLong");
const kelvinToCelsius = require("./temp_conversion");
getLatLong("kathmandu", (error, response) => {
    if(error) return console.log(error);
    const {lat, lon, place} = response;
    console.log(place);
    getForecast({lat, lon}, (error, {temp, description}) => {
        console.log(`the current temperature is ${temp.toFixed(2)}celsius`);
        console.log("The weather condition is ", description);
    })
})