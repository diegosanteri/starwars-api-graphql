
const { makeExecutableSchema } = require('apollo-server-express');

const planetSchema = require('./planetSchema');
const planetQuery = require('./planetQuery');
 
module.exports = makeExecutableSchema({
    typeDefs: [planetSchema, planetQuery]
});