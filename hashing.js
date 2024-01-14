

class DHash {
  constructor() {
    this.hash;
    this.raw;
  }

  hashing(raw) {
    const data = new Date().getMilliseconds();
    let hashed = "";
    let ascii = [];
    for (let i = 0; i < raw.length; i++) {
      ascii.push(raw.charCodeAt(i) + data);
    }
    const numHashed = ascii.map((asc) => this.rangeAscii(asc));
    numHashed.forEach((num) => {
      hashed += String.fromCharCode(num);
    });
    this.hash = {hashed, hashKey: data}
    return { hashed, hashKey: data };
  }

  isEqual(raw, objek) {
    const { hashed, hashKey } = objek;
    const data = hashKey;
    let comparison = "";
    let ascii = [];
    for (let i = 0; i < raw.length; i++) {
      ascii.push(raw.charCodeAt(i) + data);
    }
    const numHashed = ascii.map((asc) => this.rangeAscii(asc));
    numHashed.forEach((num) => {
      comparison += String.fromCharCode(num);
    });
    if (comparison !== hashed) {
      return false;
    }
    return true;
  }

  rangeAscii(num) {
    if (num > 126) {
      return this.rangeAscii(num / 2);
    } else if (num < 32) {
      return this.rangeAscii(num * 1.5);
    } else {
      return num;
    }
  }
}

module.exports = DHash;
