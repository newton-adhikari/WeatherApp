require('dotenv').config("../");
const GEOCODE_API = "pk.eyJ1IjoibmV3dG9uLWFkayIsImEiOiJja3lyZDJ2cnAwYm9wMnhzMDhlNnVtMjR4In0.6dcWw-EpVRTM93nBnNqRyA";
const request = require("request");

const getLatLong = (address, callback) => {
    if(!address) return callback("address missing", undefined);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${GEOCODE_API}`;
    request({url, json: true}, (error, response) => {
        if(error) {
            return callback("unable to connect to server", undefined);
        }
        if(!response.body.features) {
            console.log(response.body);
            return callback("can't find the address", undefined);
        }
        const [lon, lat] = response.body.features[0].center;
        const place = response.body.features[0].place_name;
        callback(undefined, {lat, lon, place});
    })
}

module.exports = getLatLong;