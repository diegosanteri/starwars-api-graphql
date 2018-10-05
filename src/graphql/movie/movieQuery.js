const movie = `
type Query {
    movie(id: String) : Movie
    movies(limit: Int): [Movie]
}`;

module.exports = movie;