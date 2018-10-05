
const { makeExecutableSchema } = require('apollo-server-express');

const fanSchema = require('./fanSchema');
const fanInput = require('./fanInput');
const fanQuery = require('./fanQuery');
const fanMutation = require('./fanMutation');
 
module.exports = makeExecutableSchema({
    typeDefs: [fanSchema, fanInput, fanQuery, fanMutation]
});