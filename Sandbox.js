// Function Declaration
// function greet(){
//   console.log('Hello, there');
// }

// function expression
const speak = function(){
  console.log('Good Day!')
};


speak();

// greet();

// javascript can hoist functions but it cannot hoist function expressions
// Hoistng : Hoisting means we can call the functions first even its definition is wtritten below  in the code

// Functions  expression arguments & parameters
const func = function(name, time){
  console.log(`Good ${time}, ${name}!`);
};

func('Rahul', 'Morning');

// Returning value
const calcArea = function(radius){
  return 3.14 * radius ** 2;
};

let area = calcArea(5);
console.log(area);

const calcVol = function(radius){
  return 3.14*radius**3;
}

let vol = calcVol(5);
console.log(vol);

// Arrow Function
const calculateArea = (radius) => {
  return 3.14 * radius ** 2;
}

console.log(calculateArea(5));

// practice arrow function

// const greet = function(){
//   return 'Hello world!';
// }

const greet = () => 'Hello World!';

console.log(greet());

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i]*tax; 
//   }
//   return total;
// };

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i]*tax; 
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));

const naam = 'shaun';

// functions
const res = () => naam;
console.log(res());

/// methods
let resultOne = naam.toUpperCase();
console.log(resultOne);

// Callbacks & foreach
// We can also pass function as a arguement in a function in that case the function we pass in is called a callback function.

const myFunc = (callBackFunc) => {
  // do something
  let value = 50;
  callBackFunc(value);
};

myFunc(function(value){
  // do something
  console.log(value);
})

//OR

// myFunc((value) => {
//   // do something
//   console.log(value);
// })

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach(function(person, index){
  // do something
  console.log(index, person);
})

// OR

// people.forEach((person, index) => {
//   // do something
//   console.log(index, person);
// })

// or 
// we can define callback function outide function calling and use it in calling

const logPerson = (person, index) => {
  console.log(`${index} - Hello ${person}`);
}

people.forEach(logPerson);