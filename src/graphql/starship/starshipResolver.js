const apiService = require('../../components/commons/apiService');

module.exports = {
  Query: {
    starship: (obj, {id}) => apiService.find('https://swapi.co/api/starships', id),
    starships: (obj) => apiService.find('https://swapi.co/api/starships')
  },
  Starship: {
    films: ({films}) => apiService.find('https://swapi.co/api/films', films),
    pilots: ({people}) => apiService.find('https://swapi.co/api/people', people)
  }
};