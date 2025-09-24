const me = {
  name: {
    first: 'Brian',
    last: 'Holt',
  },
  location: {
    streetNumber: 500,
    street: 'Fakestreet',
    city: 'Seattle',
    state: 'WA',
    zipCode: 55555,
    country: 'USA',
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  },
};

const test1 = {
  name: {
    first: 'Luis',
    last: 'Lopez',
  },
  location: {
    streetNumber: 100,
    street: 'G',
    city: 'Valencia',
    state: 'Carabobo',
    zipCode: 2010,
    country: 'VE',
  },
};

test1.getAddress = me.getAddress;

// console.log(me.getAddress());

console.log(test1.getAddress());
