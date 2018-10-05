var rp = require('request-promise');

const baseUrl = "http://localhost:4001/fans";

const doRequest = (opts) => {
    return new Promise((resolve, reject) => {
        rp(opts)
            .then(body => resolve(body))
            .catch(error => reject(Error('Error has ocorred while fetching data')))
        });
}

exports.findOne = (id) => {
    const opts = {
        uri: `${baseUrl}/${id}`,
        json: true
    }

    return doRequest(opts)
            .then(response=>response)
            .catch(error => error);
}

exports.findAll = (limit) => {
    const opts = {
        uri: baseUrl,
        json: true
    }

    return doRequest(opts)
            .then(response=>response)
            .catch(error => error);
}

exports.createFan = (fan) => {

    fan.created  = new Date();

    const opts = {
        uri: baseUrl,
        json: true,
        method: 'POST',
        body: fan
    }

    return doRequest(opts)
            .then(response=>response)
            .catch(error => error);
}