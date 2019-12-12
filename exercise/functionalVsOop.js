const _ = require('lodash');

// Object Oriented Programming 
class person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    getOlder() {
        this.age += 1;
    }
}

// Function Programming
const personObject = {
    name: 'Priyank',
    age: 29,
}

function increateAge(perObject) {
  const copyObj = _.cloneDeep(perObject);
  copyObj.age += 1;
  return copyObj;
}

// Actual Object does not mutate the state of function
console.log(personObject);

// increased Age 
console.log(increateAge(personObject));

// Again Check the defined object
console.log(personObject);

/** Other Example */
/** Object Oriented Programming */
class Food {
    constructor(type) {
        this.type = type;
    }

    transFormToUpperCase() {
        return this.type.toUpperCase();
    }
}

let pizza = new Food('pizza');
console.log(pizza.transFormToUpperCase());

/** Functional Programming */
let transFormToUpperCase = (type) => {
    return type.toUpperCase();
}

let theFood = transFormToUpperCase('burger');
console.log(theFood); 