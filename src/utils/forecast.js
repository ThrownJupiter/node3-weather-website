const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/322ff758e091af7c2bccc3eeffe8bd99/' + latitude +","+ longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. The high today is ' + body.daily.data[0].temperatureHigh + 'F with a low of ' + body.daily.data[0].temperatureLow + 'F. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast