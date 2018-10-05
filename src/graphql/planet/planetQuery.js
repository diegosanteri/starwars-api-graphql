const people = `
type Query {
    planet(id: String) : Planet
    planets(limit: Int): [Planet]
}`;

module.exports = people;