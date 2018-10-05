module.exports = () => [specie, movie, people, planet, date];

const date = require('../commons/dateSchema');
const people = require('../people/peopleSchema');
const planet = require('../planet/planetSchema');
const movie = require('../movie/movieSchema');

const specie = `
type Specie {
    id: ID!
    name: String 
    classification: String 
    designation: String 
    average_height: String 
    skin_colors: String 
    hair_colors: String 
    eye_colors: String
    average_lifespan: String 
    homeworld: Planet
    language: String 
    people: [People] 
    films: [Movie] 
    created: Date
    edited: Date 
}`;