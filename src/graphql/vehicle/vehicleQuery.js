const vehicle = `
type Query {
    vehicle(id: String) : Vehicle
    vehicles(limit: Int): [Vehicle]
}`;

module.exports = vehicle;