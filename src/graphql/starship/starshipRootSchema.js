
const { makeExecutableSchema } = require('apollo-server-express');

const starshipSchema = require('./starshipSchema');
const starshipQuery = require('./starshipQuery');
 
module.exports = makeExecutableSchema({
    typeDefs: [starshipSchema, starshipQuery]
});