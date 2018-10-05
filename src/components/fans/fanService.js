var rp = require('request-promise');

const doRequest = (opts) => {
    return new Promise((resolve, reject) => {
        rp(opts)
            .then(body => resolve(body))
            .catch(error => reject(Error('Error has ocorred while fetching data')))
        });
}

exports.findOne = (id) => {
    const opts = {
        uri: `http://localhost:3000/fans/${id}`,
        json: true
    }

    return doRequest(opts)
            .then(response=>response)
            .catch(error => error);
}

exports.findAll = (limit) => {
    const opts = {
        uri: `http://localhost:3000/fans`,
        json: true
    }

    return doRequest(opts)
            .then(response=>response)
            .catch(error => error);
}

exports.createFan = (fan) => {

    fan.created  = new Date();

    const opts = {
        uri: `http://localhost:3000/fans`,
        json: true,
        method: 'POST',
        body: fan
    }

    return doRequest(opts)
            .then(response=>response)
            .catch(error => error);
}