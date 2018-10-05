const apiService = require('../../components/commons/apiService');

module.exports = {
  Query: {
    planet: (obj, {id}) => apiService.find('https://swapi.co/api/planets', id),
    planets: (obj) => apiService.find('https://swapi.co/api/planets')
  },
  Planet: {
    residents: ({residents}) => apiService.find('https://swapi.co/api/people', residents),
    films: ({films}) => apiService.find('https://swapi.co/api/films', films)
  }
};