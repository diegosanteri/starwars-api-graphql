const fan = `
type Query {
    fan(id: String) : Fan
    fans(limit: Int): [Fan]
}`;

module.exports = fan;