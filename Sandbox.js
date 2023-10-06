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
let re = fullName.toLowerCase();
console.log(re);

// Common String methods

let res = Email.lastIndexOf('n');
console.log(res);

res = Email.slice(2, 5);
console.log(res);

res = Email.substring(2, 5);
console.log(res);

res = Email.replace('n' , 'w');
console.log(res);

// Javascript on numbers

let radius = 10;
let pi = 3.14;

// console.log(radius, pi);

// math operators - +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10 - 3)**2;

// console.log(result);

// shorthands
let likes = 10;

// likes = likes + 1;
// likes++;

// likes = likes + 10;
// likes += 10;

// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

let result = 'the blog has ' + likes + ' likes.';
console.log(result);

// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const like = 30;

// concatenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + like + ' likes';
// console.log(result);

// template string way

// let result = `The blog called ${title} by ${author} has ${like} likes`;
// console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(html);

// arrays

let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];

// array length
// console.log(ninjas.length);

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
let ans = ninjas.push('ken');
let ans1 = ninjas.pop();

console.log(ans);
console.log(ninjas);

// null & undefined
let Age = null;

console.log(Age, Age + 3, `the age is ${Age}`);

// booleans & comparisons
// console.log(true, false, 'true', 'false');

// methods can return booleans
// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// let result = names.includes('luigi');

// console.log(result);

// comparison operators
age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let Name = 'shaun';

console.log(Name == 'shaun');
console.log(Name == 'Shaun');
console.log(Name > 'crystal');
console.log(Name > 'Shaun');
console.log(Name > 'Crystal');

age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// type conversion
// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean(0);
// let result = Boolean('0');
result = Boolean('');

console.log(result, typeof result);