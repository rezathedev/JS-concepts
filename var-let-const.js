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
 
// // isEven(1001)

// function oddEven (number){
//     const remainder = number % 2;
//     if (remainder === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let inputNumber = 144;
// let myNumber = oddEven(inputNumber);


// console.log(myNumber)

function oddEven (number){
    var remainder = number % 2;
    if(remainder === 0){
        return true
    }


    else {
        return false;
    }
}

let myNumber = 1200;
let isOddEven = oddEven(myNumber);

// console.log(isOddEven)

function euroToTaka (amount){
 var totalTaka = amount * 121;
//  console.log(totalTaka)
return totalTaka
}

var myEuro = 100;
var converted = euroToTaka(myEuro);

// console.log (converted);

// function dressCount (a, b, c){
//     var total = a + b + c;
//     return total
// }

// var pant = 100
// var shirt = 10
// var tShirt = 15

// totalDress = dressCount(pant, shirt, tShirt)
// console.log(totalDress)

function isLeapYear (year){
    const remainder = year % 4;
    if (remainder == 0){
        return "Its Leap Year"
    }
    else {
        return "Not Leap Year"
    }
}

var yearCount = 1975
var leapYear = isLeapYear(yearCount)
// console.log(leapYear);



// function getSum (numbers) {
//     sum = 0;
//     for (var i = 0; i < numbers.length; i++){
//         let elements = numbers[i]
//         sum = sum + elements
//     }
//     console.log(sum)
// }

// let myNumbers = [2, 43, 67, 45, 97, 98, 112]
// getSum(myNumbers)


// function getOddSum (numbers){
//     sum = 0;
//     for (var i = 0; i < numbers.length; i++){
//         var elements = numbers[i];
//         var remainder = elements % 2;
//         if (remainder != 0){
//             sum = sum + elements;
            
//         }
        
//     }
//     console.log(sum)
    
// }

// let myNumbers = [2, 43, 67, 45, 97, 98, 112, 11]
// getOddSum(myNumbers)

// var nam1 = 2000;
// var nam2 = 900;
// var nam3 = 800;

// if (nam1 > nam2 && nam1 > nam3) {

//     console.log("Number 1 is the largest")
// }

// else if (nam2 > nam1 && nam2 > nam3){
//     console.log ("Number 2 is the largest")
// }

// else {
//     console.log ("Number 3 is the largest")
// }

// // function factorial(number) {
// //     let result = 1;
// //     for (let i = 1; i <= number; i++){
// //             result = result * i;
// //             console.log(i)
// //     }
// //     return result 
// // }

// // let myFactorialNumber = factorial(7);
// // console.log(myFactorialNumber)


// // function factorial (number){
// //     let result = 1
// //     for (let i = number; i >= 1; i--){
// //     result = result * i;
// //     console.log(i)
// //     }
// // }

// // factorial(9)

// function factorial(number){
//     let result = 1;
//     let i = number;
//     while (i >= 1){
//         // console.log(i)
//         result = result * i;
//         i--;
        
//     }
//     return result
// }

// var num1 = 9
// var outPut = factorial(num1)
//  console.log(outPut)

// for (let i = 10; i >= 1; i--){
//     console.log(i)
// }

// function print(a, b, c){
//     return a+2;
//     return a*b;
//     return b*c+a;
//   }
//   console.log(print(1,2,3));

// var reza = {
//     name: "Reza",
//     age: 30,
//     friends: ["Hero", "Alam", "Shimu", "Saddam"],
//     city: "Berlin",
// }
// for (var i = 0 ; i < reza.friends.length; i++){
//     var elements = reza.friends[i]
//     console.log(elements)
// }

// function sum(a,b){
//     var result = a + b;
//     return result;
// }

// totalSum= sum(100, 200);
// console.log(totalSum)



// Problem 1

function writeSorry(){
    for (var i = 0; i<10;i++)
    console.log("Sorry")
}

writeSorry()