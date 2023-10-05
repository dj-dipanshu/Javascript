//alert("Hello World");

let age = 25;
let year  = 2023;

console.log(age , year);

age = 30;
console.log(age);

const points = 100;
// this will give an error because constant varriable cannot be overriden
// points = 99;
console.log(points);

// Strings
console.log('Hello World');

let Email = 'mario@ninja.com';
console.log(Email);

// string concatenation
let firstName = 'Rahul';
let lastName = 'Kapoor';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// getting string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

// Common String methods

let res = Email.lastIndexOf('n');
console.log(res);

res = Email.slice(2, 5);
console.log(res);

res = Email.substring(2, 5);
console.log(res);

res = Email.replace('n' , 'w');
console.log(res);