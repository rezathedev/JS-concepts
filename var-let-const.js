let age = 11;
age = 12;

const countryName = "Bangladesh";


// console.log (age, countryName);

let height = 84;

let heightFeet = height/12;

// console.log(heightFeet)

function inchToFeet(inches){
    const feet = inches / 12
    return feet;
}

const dadaInch = 144;
const dadaFeet = inchToFeet(dadaInch);

// console.log(dadaFeet);

function mileToKm (miles){
    const km = miles * 1.6;
    return km;
}

let mileNumber = 188
const calculator = mileToKm(mileNumber)

// console.log (calculator)

// function oddEven (number){
//     if number % 2 == 0;
//     return true;
// }

// let myNumber = 12
// let isEven = oddEven(myNumber);

// console.log(isEven)

// function isEven (number){
//     const remainder = number % 2;
//     // console.log(remainder);
//     if (remainder === 0){
//         console.log ("I am Even");
//     }
//     else {
//         console.log ("I am odd");
//     }
// }
 
// isEven(1001)

function oddEven (number){
    const remainder = number % 2;
    if (remainder === 0){
        return true;
    }
    else {
        return false;
    }
}
let inputNumber = 144;
let myNumber = oddEven(inputNumber);


console.log(myNumber)