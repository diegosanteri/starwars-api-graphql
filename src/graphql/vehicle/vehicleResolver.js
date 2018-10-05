const apiService = require('../../components/commons/apiService');

module.exports = {
  Query: {
    vehicles: (obj, {id}) => apiService.find('https://swapi.co/api/vehicles', id),
    vehicles: (obj) => apiService.find('https://swapi.co/api/vehicles')
  },
  Vehicle: {
    films: ({films}) => apiService.find('https://swapi.co/api/films', films),
    pilots: ({people}) => apiService.find('https://swapi.co/api/people', people)
  }
};