const array = [1, 3, 3, 3, 5, 3, 7, 3];

const even = (element) => element % 2 === 0;

console.log(array.some(even));