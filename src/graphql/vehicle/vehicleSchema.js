module.exports = () => [date, vehicle, people, movie];

const date = require('../commons/dateSchema');
const people = require('../people/peopleSchema');
const movie = require('../movie/movieSchema');

const vehicle = `
type Vehicle {
  id: ID!
  name: String 
  model: String 
  manufacturer: String 
  cost_in_credits: String 
  length: String 
  max_atmosphering_speed: String 
  crew: String 
  passengers: String 
  cargo_capacity: String 
  consumables: String 
  vehicle_class: String 
  pilots: [People] 
  films: [Movie] 
  created: Date
  edited: Date 
}`;