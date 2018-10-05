const apiRepository = require('../commons/apiRepository');

exports.find = (baseUrl, id) => {

    if(id) {
        if(Array.isArray(id)) {
            const requestPromises = id.map(path => apiRepository(baseUrl, path));
            return Promise.all(requestPromises)
                .then(response => {return response;})
                .catch(error => error);
        }

        return apiRepository(baseUrl, id)
            .then(response => {return response;})
            .catch(error => error)
    }

    return apiRepository(baseUrl)
        .then(response => response)
        .catch(error => error)
}