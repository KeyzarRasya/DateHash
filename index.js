const DHash = require('./hashing')

const Hash = new DHash();

Hash.hashing("Keyzar")
console.log(Hash.hash)
console.log(Hash.isEqual("Keyzar", Hash.hash))