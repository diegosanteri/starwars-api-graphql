const getIdFromUrl = require('./getIdFromUrl');
module.exports = (object) => {
    if(Array.isArray(object)) {
        return object.map(obj => {
            obj.id = getIdFromUrl(obj.url);
            return obj;
        })
    }

    object.id = getIdFromUrl(object.url);

    return object;
}