const specie = `
type Query {
    specie(id: String) : Specie
    species(limit: Int): [Specie]
}`;

module.exports = specie;