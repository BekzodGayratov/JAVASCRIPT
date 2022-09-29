const array = [ Date('21 Dec 2022 14:12:00 UTC')];
const localString = array.toLocaleString('en',{timeZone: 'UTC'});

console.log(localString);