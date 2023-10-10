// Objec literals

// We can also store objects in arrays
const sets = [
    {title : 'Sufi set', likes : '30K'},
    {title : 'Bolywood set', likes : '20K'}
]
console.log(sets);

let singer = {
    Name : 'Raman Kapoor',
    age : 32,
    email : 'ramankapoor@singer.com',
    location : 'Mumbai',
    // sets : ['Sufi set', 'Bollywood set'],

    sets : [
        {title : 'Sufi set', likes : '30K'},
    {title : 'Bolywood set', likes : '20K'}
    ],

    Inhouse : function(){
        console.log('Singer in the house');
    },

    Outhouse : function(){
        console.log('Singer is not in house');
    },

    logSets : function(){
        // console.log(this.sets);
        console.log("Raman has two types of sets:");
        let  i = 1;
        this.sets.forEach((sets) => {
            console.log(`${i}.  ${sets.title} ${sets.likes}`);
            i++;
        })
    },

    // logSets : () => {
    //     // console.log(this.sets);
    //     console.log("Raman has two types of sets:");
    //     let  i = 1;
    //     this.sets.forEach((sets) => {
    //         console.log(`${i}.  ${sets}`);
    //         i++;
    //     })
    // }
    // Note : When we use arrow function then methods will not works
    logi : () => {
        console.log(this);
    }
    // when we use arrow functions then this will always points to global window object.
    /// Thats why we cannot use this keyword with arrow functions 
    
};

console.log(singer);
console.log(singer.Name);

singer.age = 35;
console.log(singer.age);

console.log(typeof singer);

// singer.Inhouse();
// singer.Outhouse();

singer.logSets();

singer.logi();

// Inbuilt Objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 3.1;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// To generate a random number
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

/*
    Primitive Types             Reference Types

    - numbers                   - all types of objects
    - strings                   - object literals    
    - booleans                  - arrays
    - null                      - functions
    - undefined                 - dates
    - symbols                   - all other objects
*/