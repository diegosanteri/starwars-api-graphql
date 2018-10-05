const apiService = require('../../components/commons/apiService');

module.exports = {
  Query: {
    movie: (obj, {id}) => apiService.find('https://swapi.co/api/movies', id),
    movies: (obj) => apiService.find('https://swapi.co/api/movies')
  },
  Movie: {
    characters: ({characters}) => apiService.find('https://swapi.co/api/people', characters),
    planets: ({planets}) => apiService.find('https://swapi.co/api/planets', planets),
    starships: ({starships}) => apiService.find('https://swapi.co/api/starships', starships),
    species: ({species}) => apiService.find('https://swapi.co/api/species', species),
    vehicles: ({vehicles}) => apiService.find('https://swapi.co/api/vehicles', vehicles)    
  }
};