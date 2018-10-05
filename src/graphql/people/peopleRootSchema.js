
const { makeExecutableSchema } = require('apollo-server-express');

const peopleSchema = require('./peopleSchema');
const peopleQuery = require('./peopleQuery');
 
module.exports = makeExecutableSchema({
    typeDefs: [peopleSchema, peopleQuery]
});