// Problem 1

// function writeSorry(name){
//     for (var i = 0; i<10;i++)
//     console.log("Sorry" , name);
// }

// writeSorry("Reza")

// Problem 2

// function dokanCost(a, b, c){
//     var sum = a + b + c;
//     return sum
// }

// var chal = 500
// var dal = 200
// var tel = 300


// var totalCost = dokanCost(chal, dal, tel)

// console.log(totalCost)

// Problem 3

// function kmToMile (km){
//     var mile = km * 0.62
//     return mile
// }

// var kilometer = 12;
// var result = kmToMile(kilometer)

// console.log(result, "miles")


// Problem 4

// function workOut (workOutName){
//     var bicepWorkOut = ["cabel cross", "bicep"]
//     var chestWorkOut = ["chest fly", "chest press"]
//     var tricepWorkOut = ["tricep", "baym"]

//     if (workOutName == "chest"){
//         return chestWorkOut
//     }
//     else if (workOutName == "bicep"){
//         return bicepWorkOut
//     }

//     else {
//         return tricepWorkOut
//     }
// }

// var workOutPlan = workOut("chest")

// console.log(workOutPlan)

// Problem 5
// var myDays = 25;
// var first1To10Days = 500;
// var second11To20Days = 300;
// var third21ToNDays = 100;

// if (myDays <= 10){
//     var totalCost = myDays * first1To10Days
// }

// else if (myDays <=20 && myDays >10 ){
//     var first10DaysCost = 10*500;
//     var remainingDay =myDays
//     -10;
//     var totalDaysCost = remainingDay*300;
//     var total11To20Cost = first10DaysCost + totalDaysCost;
// }


// else {

// }

// var userName = "reza";
// var userInput = "Reza";

// if (userName.toLocaleLowerCase === userInput.toLocaleLowerCase) {
//     console.log ("valid user")
// }
// else {
//     console.log("Invalid user")
// }

// var intro = "I am Reza Islam"

// console.log(intro.indexOf("Islam"))

// var intro = "I am Reza Islam"
// var parts = intro.substring(2,5)
// console.log(parts)
// var intro = ["I" , "am"]
// var join = intro.join(" ")
// console.log(join)


// var ludo = Math.round(Math.random()*6)
// console.log(ludo)

// function getLowest(numbers){
//     var largest = numbers[0]
//     for (var i = 0; i < numbers.length; i++){
//         var elements = numbers[i];
//         if (elements > largest){
//             largest = elements
//         }
        
//     }
//     return largest
// }

// const heights = [123, 4533, 333, 3322, 534, 553]
// const numberList = getLowest(heights)
// console.log(numberList)

// function getHeighest (numbers){
//     var lowest = numbers[0]
//     for (var i = 0; i < numbers.length; i++){
//         var elements = numbers[i]
//         if (elements < lowest){
//             lowest = elements
//         }
        
//     }
//     return lowest
// }

// const heights = [123, 4533, 333, 3322, 534, 22]
// const numberList = getHeighest(heights)
// console.log(numberList)