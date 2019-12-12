/** Function as a variable */
const add = function(a, b) {
    return a + b
}

console.log(add(2,4));

//** Call-Back function  */
function doIf(condition, func) {
    if(condition) {
        func() // This is callback function which is called inside doIf function after the condition is satisfield.
    }
}
  
const x = 1

/**Anonymous Function which passed as an argument, so doIf function is called as heigher Order Function */
doIf(x === 1, function() {
    console.log("x is equal to 1")
})
doIf(x === "Bananas", function() {
    console.log("x is equal to 'Bananas'")
})
var resultVal = doIf(x < 10 && x > 0, function() {
    console.log("x is between 0 and 10")
    return () => { console.log('Sucess!');}
})

console.log(resultVal());

/** We can use  */

/** 1 Traditional Programming to Perform Sqaure Operation */
let numbers = [1, 2, 3, 4, 5]
let numberSquared = []
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    numberSquared.push(element * element);
}
console.log(`Using Traditional way ${numberSquared}`);

// Using Map function we can achive the same thing in cleaner way
const _ = require('lodash');

numberSquared = _.map(numbers, (element) => {
    return element * element;
});

console.log(`Using Map Function ${numberSquared}`);

/** 2 Use filter the array in Traditional way */
let evenNumbers = [];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        evenNumbers.push(element);
    }
}
console.log(evenNumbers);

//** Use filter function to find even numbers */
evenNumbers = _.filter(numbers, (element) => {
    return element % 2 === 0;
});

console.log(evenNumbers);

/** 3 Check if Array Contains even value just return true or false */

numbers = [2, 4, 6, 8, 9];
let arrayContainsEven = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        arrayContainsEven = true;
    }
}

console.log(`The array contains at leat one even field '${arrayContainsEven}'`);


/** This can be simply achieve by some function */

arrayContainsEven = _.some(numbers, (element) => {
    return element % 2 === 0;
});

console.log(`The array contains at leat one even field with some function '${arrayContainsEven}'`);

/** Just check all the elements are even in array */
let arrayIsAllEven = true;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (!(element % 2 === 0)) {
        arrayIsAllEven = false;
    }   
}

console.log(`The array contains all even fields '${arrayIsAllEven}'`);

/** This can be simply achieve by every function */

arrayIsAllEven = _.every(numbers, (element) => { return !(element % 2 === 0); })

console.log(`The array contains all even fields with every function '${arrayIsAllEven}'`);

/** If want to sum up the price of shopping items */

const shoppingItemList = [{
    item: 'Pen',
    price: 10
}, {
    item: 'Notebook',
    price: 25
}, {
    item: 'LunchBox',
    price: 100
}, {
    item: 'SchoolBag',
    price: 500
}]

const sum = _.reduce(shoppingItemList, (acc, curEl) => {
    return acc + curEl.price;
}, 0);

console.log(sum);
