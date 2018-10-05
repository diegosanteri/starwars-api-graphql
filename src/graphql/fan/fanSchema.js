module.exports = () => [fan, date];

const date = require('../commons/dateSchema');

const fan = `
type Fan {
    id: ID!
    name: String
    email: String
    created: Date 
}`;