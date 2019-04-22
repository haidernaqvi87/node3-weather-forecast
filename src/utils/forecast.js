const request = require('request');

const forecast = (lat,long,callback) => {
    const url = 'https://api.darksky.net/forecast/6c81531f21c16365d2c30100aa170c2c/'+lat+','+long;

    request({url:url,json: true}, (error, {body}) =>{
        if(error){
            callback('Unable to connect', undefined);
        }
        else if(body.length === 0){
            callback('Unable to find the forecast', undefined);
        }
        else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
               }
    })
}


module.exports = forecast