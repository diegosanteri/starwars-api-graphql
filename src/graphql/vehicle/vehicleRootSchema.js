
const { makeExecutableSchema } = require('apollo-server-express');

const vehicleSchema = require('./vehicleSchema');
const vehicleQuery = require('./vehicleQuery');
 
module.exports = makeExecutableSchema({
    typeDefs: [vehicleSchema, vehicleQuery]
});