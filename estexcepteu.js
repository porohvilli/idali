let value = "123.456";
let i = 3; // Assume i is the index where '.' (ASCII 46) is found
let c = value.charCodeAt(i); // c will be 46 since value[i] === '.'

let decimal = "."; // Assuming decimal separator is '.'

let valueSuffix = "";

valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;

console.log(valueSuffix); // Outputs "456"
