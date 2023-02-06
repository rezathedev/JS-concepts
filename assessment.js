// 1
// var name = "Reza";
// var age = 31;
// var isSingle = true;

//2
// const country = "Germany";
// let city = "Berlin";
// city = "Hamburg";

// console.log(country, city)

// 3
// let num1 = 20;
// let num2 = 10;
// let sum = num1 + num2;
// console.log (sum)
// let substract = num1 - num2;
// console.log(substract)
// let multiplication = num1 * num2;
// console.log(multiplication)
// let division = num1 / num2;
// console.log(division)
// let remainder = num1 % num2
// console.log(remainder)

// 4
// let number1 = 20;
// let number2 = 100;

// if (number1 > number2){
//     console.log("Number 1 is bigger")
// }

// else if (number1 < number2){
//     console.log("Number 1 is smaller")
// }

// else if (number1 == number2){
//     console.log("Both numbers are equal")
// }

// else if (number1 >= number1) {
//     console.log("Number 1 is greter than or equal to number 2")
// }

// else if (number1 <= number2) {
//     console.log("Number 1 is less than or equal to number 2")
// }

// // 5
// let num1 = 70;
// let num2 = 50;
// let num3 = 30;

// if (num1 > num2 && num1 > num3){
//     console.log("Number 1 is biggest")
// }

// else if (num2 > num1 || num3 > num1 ) {
//     console.log("Number 1 is not the biggest")
// }

// 6
// let num1 = 70;
// let num2 = 50;
// let num3 = 30;

// if (num1 > num2 && num1 > num3){
//     console.log("Number 1 is biggest")
// }

// else if (num2 > num1 || num3 > num1 ) {
//     console.log("Number 1 is not the biggest")
// }

// 7

// var num = 7

// while (num <= 19){
//     console.log(num);
//     num+=2;
// }

// 8

// var friends = ["Reza", "Islam", "Shimu", "Saddam"]
// console.log (friends.length)

// friends.push("Md", "Mister")
// console.log(friends)

// friends.pop()
// console.log(friends)

// 9

// var age = [2, 3, 5, 33, 45, 45, 43, 22, 88]

// for (let i = 0; i < age.length; i++){
//     let element = age[i]
//     console.log(element)
// }

// 10
// var age = [2, 3, 5, 33, 45, 45, 43, 22, 88, 100]

// for (let i = 0; i < age.length; i++){
//     var element = age[i]
//     if (element > 80){
//         console.log(element)
//     }
// }

// 11
// function multiple(a, b ,c){
//     var result = a * b * c;
//     return result;
// }

// var output = multiple(12, 11, 10);
// console.log(output)

// 12
// var student = {
//     name: "Reza",
//     age: 31,
//     height: 176,
//     weight: 90,
//     id: 786
// }

// student.weight = 70;
// console.log(student)

// Problem 1
// function feetToInch(feet){
//     var converted = feet * 12
//     return converted
// }

// var inches = feetToInch(12);
// console.log (inches)

// Problem 2
// function centimeterToMeter(centemeter){
//     var converted = centemeter / 100
//     return converted
// }

// var meter = centimeterToMeter(200);
// console.log(meter)

// Problem 3
// function paperRequirements (a, b, c){
//     var book1Page = a * pageRequired1
//     var book2Page = b * pageRequired2
//     var book3Page = c * pageRequired3
//     var totalPage = book1Page + book2Page + book3Page;
//     return totalPage
// }

// pageRequired1 = 100;
// pageRequired2 = 200;
// pageRequired3 = 300;

// var pageRequired = paperRequirements(2, 3, 5)
// console.log(pageRequired)

// Problem 4

// var bestFriend = ["Reza", "Islam", "Mohammad", "Md", "Saddam", "Shimu"]

// function largestFriend (names){
//     var largest = names[0]
//     for (let i = 0; i <names.length; i++){
//         friend = names[i]
//         if (friend.length > largest.length){
//             largest = friend
//         }
       
//     }
//     return largest
// }


// var FriendName = largestFriend (bestFriend);
// console.log(FriendName)

// Problem 5

var myNumbers = [1, 3, 5, 6, 7, -1, 9, 10]

function findPositive(numbers){
    var positiveNumbers = []
    for (var i = 0; i < numbers.length; i++){
        var element = numbers[i]
        console.log(element)
        if (element >= 0){
            if (element < 0){
                break;
            }
            positiveNumbers.push(element)
            
        }
        
    }
    return positiveNumbers
}

var finalArray = findPositive(myNumbers)
console.log(finalArray)

