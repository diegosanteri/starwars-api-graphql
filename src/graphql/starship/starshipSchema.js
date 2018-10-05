module.exports = () => [date, starship, planet,movie, specie];

const date = require('../commons/dateSchema');
const planet = require('../planet/planetSchema');
const movie = require('../movie/movieSchema');
const specie = require('../specie/specieSchema');

const starship = `
type Starship {
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
    hyperdrive_rating: String 
    MGLT: String 
    starship_class: String 
    pilots: [People] 
    films: [Movie] 
    created: Date 
    edited: Date 
}`;