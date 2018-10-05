const apiService = require('../../components/commons/apiService');

module.exports = {
  Query: {
    specie: (obj, {id}) => apiService.find('https://swapi.co/api/species', id),
    species: (obj) => apiService.find('https://swapi.co/api/species')
  },
  Specie: {
    homeworld: ({homeworld}) => apiService.find('https://swapi.co/api/planets', homeworld),
    films: ({films}) => apiService.find('https://swapi.co/api/films', films),
    people: ({people}) => apiService.find('https://swapi.co/api/people', people)
  }
};