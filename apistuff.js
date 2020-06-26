const myAge = 24;

if (myAge < 30) {
    console.log('I am under 30.');
} else {
    console.log('I am older than 30');
}



// Write a function that accepts string as an argument and if the string is less than 4 charecters return one message, if it is greater than 12 return another message otherwise return a final message about being accepted.


const lessThan = (yourString) => {
    if (yourString.length < 4) {
        return 'Your string length is shorter than 4 characters';
    } else if (yourString.length > 12) {
        return 'Your string length is greater than 12 characters';
    } else {
        return 'You\'ve been accepted woohoo';
    }
}
console.log(lessThan('no'));



// Write a function that accepts an argument named tempature. Have at least 6 ranges of tempature that represents a html valid color. Return the color based on the argument supplied when calling the function.
// Use Switch. (hint do a google search for 'switch(true)' )


let ranges = (temperature) => {
    switch (true) {
        case temperature == 'blue':
            return 'blue';
        case temperature == 'red':
            return 'red';
        case temperature == 'yellow':
            return 'yellow';
        case temperature == 'green':
            return 'green';
        case temperature == 'black':
            return 'black';
        case temperature == 'white':
            return 'white';
        default:
            return 'none';
    }
}

console.log(ranges('blue'));


function calcThis(num1, num2) {
    return num1 * num2;
}
console.log(calcThis(5, 5))


const calcAge = (birthYear) => {
    let now = 2020;
    return now - birthYear;
}
console.log(calcAge);

const oldEnough = (age) => {
    age >= 18 ? console.log(`Older than 18 you are ${age} years old`) :
        console.log(`Younger than 18 you are ${age} years old.`);
}

oldEnough(24);

// At the beginning of the ternary operator section, you have the question youre asking, next is the (if thats true then return this value) and lastly, the (if thats false return this value here).
10 > 5 ? console.log('ten is greater than five') : console.log('five is greater than 10');

let randomNum = Math.floor(Math.random() * 20) + 1;
randomNum % 2 === 0 ? console.log(`${randomNum} is even`) : console.log(`${randomNum} is not even`);

const buttons = document.querySelector('button');
buttons.addEventListener(onclick, () => {
    buttons.classList.toggle('clickAnimation');
})

const divs = document.querySelector('div');
divs.addEventListener(onscroll, () => {
    divs.classList.toggle('appear');
})


const arrayOfCharacters = [];
// You are seeing if each object has a name, creating a separate object of them with the key value pair of name : char.name, and then pushing that object to a specific array. 
const searchThrough = swapi.map((char) => {
    if (char.find(name) || char.name.length > 0) {
        arrayOfCharacters.push({
            name: char.name
        });
        console.log(arrayOfCharacters);
    }
})

const arrayOfCharactersOver50Kilograms = [];

const searchThrough2 = swapi.map((char) => {
    if (char.weight > 50) {
        arrayOfCharactersOver50Kilograms.push({
            name: char.name
        });
        console.log(arrayOfCharactersOver50Kilograms);
    }
})


const objOf = {
    name: null,
    starship: null
}

const hasStarship = () => {
    let hasOne = swapiChar.map(function (char) {
        if (char.find(starship) > 0) {

        }
    })
    Object.assign({}, objOf);
}

// Madlib
// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

let madlib = (name, subject) => {
    return `${name}\'s favorite subject in school is ${subject}.`
}

console.log(madlib('christian', 'coding'));

// Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20% fair -> 15% bad -> 10%

// Tip Calculator 2
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

let tipCalc = (bill, service) => {

    switch (true) {
        case service == 'good':
            tip = .2;
            break;
        case service == 'fair':
            tip = .15;
            break;
        case service == 'bad':
            tip = .1;
            break;
        default:
            return 'no tip added';
    }
    let tipAmount = bill * tip;
    let final = tipAmount + bill;
    return final;
}

console.log(tipCalc(30, 'good'));


// Print Numbers
// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:


let printNumbers = (start, stop) => {
    for (let i = start; i < stop; i++) {
        console.log(i);
    }
}
printNumbers(5, 20);

let printNumbers2 = (starting, stopping) => {
    while (starting < stopping) {
        console.log(starting);
        starting++;
    }
}
printNumbers2(1, 10);


// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

let printBanner = (word) => {
    var dash = '-';
    var dash2 = '-'
    while (word.length > dash.length && word.length > dash2.length) {
        dash += '-';
        dash2 += '-';
        if (dash.length == word.length && dash2.length == word.length) {
            break;
        }
    }
    return `            ${dash}
           -${word}-
            ${dash2}
    `
}

console.log(printBanner('yeah buddy'));


// Just the positives
// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

let positiveNumbers = (yourArr) => {
    let positives = [];
    for (let num = 0; num < yourArr.length; num++) {
        if (yourArr[num] > 0) {
            positives.push(yourArr[num]);
            console.log(positives);
        }
    }

}

console.log(positiveNumbers([0, 5, 2, 4]));


// This is how you would join two objects the dots...
const joinUs = (obj1, obj2) => {
    const obj3 = {
        ...obj1,
        ...obj2
    };
    console.log(obj3);
}



// Write a function that will return the KEYS of an object as an array and have the array SORTed in alphebetical order.

// This will return an array of keys from the specified object and after that it will then have the sort method run on it and will return a sorted array. Remember to always include your methods after whatever it is you want the method to be run on. 
const sorted = (yourObject) => {
    console.log(Object.keys(yourObject).sort());
}

sorted(christian);


// Object/////////////////////////////////////////////////////////////////////

let sample = {
    name: null,
    hero: null
}


const christian = Object.assign({}, sample);
christian.age = 24;
christian.hero = true;
christian.name = 'Christian';
console.log(christian)

// Write a function that will recieve a sentance as a string and return another string of only the letters that MATCH the requirement of being upper case JOINed together.
// Hint you will be using a string method and an array method.

const findThem = (sentence) => {
    const regex = /[A-Z]/g;
    const foundThem = sentence.match(regex);
    console.log(foundThem);
}

findThem('This is cool. Wow');