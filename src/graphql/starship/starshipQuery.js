const starship = `
type Query {
    starship(id: String) : Starship
    starships(limit: Int): [Starship]
}`;

module.exports = starship;