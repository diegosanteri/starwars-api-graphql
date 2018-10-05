const fanService = require('../../components/fans/fanService');

module.exports = {
  Query: {
    fan: (obj, {id}) => fanService.findOne(id),
    fans: (obj, {limit}) => fanService.findAll(limit)
  },
  Mutation: {
    addFan: (obj, {fan}) => fanService.createFan(fan)
  }
};