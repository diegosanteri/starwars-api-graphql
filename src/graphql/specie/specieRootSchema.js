
const { makeExecutableSchema } = require('apollo-server-express');

const specieSchema = require('./specieSchema');
const specieQuery = require('./specieQuery');
 
module.exports = makeExecutableSchema({
    typeDefs: [specieSchema, specieQuery]
});