const people = `
type Query {
    person(id: String) : People
    people(limit: Int): [People]
}`;

module.exports = people;