module.exports = () => [movie, people, planet, starship, vehicle, specie, date];

const date = require('../commons/dateSchema');
const people = require('../people/peopleSchema');
const planet = require('../planet/planetSchema');
const starship = require('../starship/starshipSchema');
const vehicle = require('../vehicle/vehicleSchema');
const specie = require('../specie/specieSchema');

const movie = `
type Movie {
    id: ID!
    title: String
    episode_id: String 
    opening_crawl: String
    director: String 
    producer: String 
    characters: [People] 
    planets: [Planet] 
    starships: [Starship] 
    vehicles: [Vehicle] 
    species: [Specie]
    release_date: String
    created: Date 
    edited: Date 
}`;