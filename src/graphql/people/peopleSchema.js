 module.exports = () => [people, planet, movie, specie, vehicle, starship, date];

const date = require('../commons/dateSchema');
const planet = require('../planet/planetSchema');
const movie = require('../movie/movieSchema');
const specie = require('../specie/specieSchema');
const vehicle = require('../vehicle/vehicleSchema');
const starship = require('../starship/starshipSchema');

const people = `
type People {
  id: ID!
  name: String!
  height: String
  mass: String
  hair_color: String
  skin_color: String
  eye_color: String
  birth_year: String
  gender: String
  homeworld: Planet
  films: [Movie]
  species: [Specie]
  vehicles: [Vehicle]
  starships: [Starship]
  created: Date
  edited: Date
}`;