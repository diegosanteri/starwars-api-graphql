const apiService = require('../../components/commons/apiService');

module.exports = {
  Query: {
    person: (obj, {id}) => apiService.find('https://swapi.co/api/people', id),
    people: (obj) => apiService.find('https://swapi.co/api/people')
  },
  People: {
    homeworld: ({homeworld}) => apiService.find('https://swapi.co/api/planets', homeworld),
    films: ({films}) => apiService.find('https://swapi.co/api/films', films),
    species: ({species}) => apiService.find('https://swapi.co/api/species', species),
    vehicles: ({vehicles}) => apiService.find('https://swapi.co/api/vehicles', vehicles),
    starships: ({starships}) => apiService.find('https://swapi.co/api/starships', starships),
  }
};