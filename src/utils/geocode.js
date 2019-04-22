const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaGFpZGVybmFxdmk4NyIsImEiOiJjanVyNGoyazYzcnFuNDlucWZyaGQ4aGt0In0.QXq9VoYFiEDHE9A3YssIxw&limit=1';

    request({url: url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect', undefined);
        }
        else if(body.features.length === 0){
            callback('Unable to find the location', undefined);
        }else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode