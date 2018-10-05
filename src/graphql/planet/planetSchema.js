module.exports = () => [planet, people, movie, date];

const date = require('../commons/dateSchema');
const people = require('../people/peopleSchema');
const movie = require('../movie/movieSchema');

const planet = `
type Planet {
  id: ID!
  name: String
  rotation_period: String
  orbital_period: String
  diameter: String
  climate: String 
  gravity: String
  terrain: String
  surface_water: String
  population: String
  residents: [People] 
  films: [Movie] 
  created: Date 
  edited: Date
}`;