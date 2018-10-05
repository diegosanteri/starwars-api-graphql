const { ApolloServer, mergeSchemas } = require('apollo-server-express');

const peopleRootSchema = require ('./graphql/people/peopleRootSchema');
const planetRootSchema = require ('./graphql/planet/planetRootSchema');
const specieRootSchema = require ('./graphql/specie/specieRootSchema');
const movieRootSchema = require('./graphql/movie/movieRootSchema');
const starshipRootSchema = require('./graphql/starship/starshipRootSchema');
const vehicleRootSchema = require('./graphql/vehicle/vehicleRootSchema');
const fanRootSchema = require('./graphql/fan/fanRootSchema');

const peopleResolver = require('./graphql/people/peopleResolver');
const planetResolver = require('./graphql/planet/planetResolver');
const specieResolver = require('./graphql/specie/specieResolver');
const movieResolver = require('./graphql/movie/movieResolver');
const starshipResolver = require('./graphql/starship/starshipResolver');
const vehicleResolver = require('./graphql/vehicle/vehicleResolver');
const fanResolver = require('./graphql/fan/fanResolver');

module.exports = new ApolloServer({  
  schema: mergeSchemas({
    schemas: [      
      planetRootSchema,
      peopleRootSchema,
      specieRootSchema,
      movieRootSchema,
      starshipRootSchema,
      vehicleRootSchema,
      fanRootSchema
    ],
    resolvers: [peopleResolver, planetResolver,specieResolver, movieResolver, starshipResolver, vehicleResolver, fanResolver],
  })
});