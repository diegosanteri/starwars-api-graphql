
const { makeExecutableSchema } = require('apollo-server-express');

const movieSchema = require('./movieSchema');
const movieQuery = require('./movieQuery');
 
module.exports = makeExecutableSchema({
    typeDefs: [movieSchema, movieQuery]
});