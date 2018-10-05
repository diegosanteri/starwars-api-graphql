var rp = require('request-promise');

const fillId = require('../commons/fillId');
const getIdFromUrl = require('./getIdFromUrl');

const validURL = (str) =>  {
    const res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
  }

const createRequestPath = ({id = undefined, baseUrl}) => {
    if(id) {
        id = validURL(id) ? getIdFromUrl(id) : id;
        return `${baseUrl}/${id}?format=json`
    }
    return `${baseUrl}?format=json`;
}

module.exports = (baseUrl, id) => {
    const url = createRequestPath({baseUrl, id});

    const opts = {
        uri: url,
        json: true
    }

    return new Promise((resolve, reject) => {
        rp(opts)
            .then(body => resolve(fillId(body.results || body)))
            .catch(error => reject(Error('Error has ocorred while fetching data')))
        });
}