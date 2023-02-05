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

//var heights = [123, 4533, 333, 3322, 534, 553]
//var numberList = getLowest(heights)
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

//var heights = [123, 4533, 333, 3322, 534, 22]
//var numberList = getHeighest(heights)
// console.log(numberList)

// var name1 = "Farzana "
// var name2 = "Akter"

// var fullName = name1 + name2
// console.log(fullName)

// var num1 = 2000
// var num2 = 1000
// var num3 = 500

// if (num1 > num2 && num1 > num3){
//     console.log ("Number 1 is largest")
// }

// else if (num2 > num1 && num2 > num3){
//     console.log ("Number 2 is largest")
// }

// else {
//     console.log("Number 3 is largest")
// }



//var fibo = [0,1];
// for (let i = 2; i < 5; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo)

// function add(a, b){
//     return a + b;
//   }
//   console.log(add("adam" + "eve"))

// var names = ["reza", "islam", "shimu", "reza", "saddam", "islam"]
// function removeDupli(names){
//     var uniqueNames = [];
// for (let i = 0; i < names.length; i++){
//     var name = names[i];
//     if (uniqueNames.includes(name) === false){
//         uniqueNames.push(name);
//     }
// }
// return uniqueNames
// }

// var singleNames = removeDupli(names)
// console.log(singleNames)

// function woodCalculator (chairWoodReq, tableWoodReq, bedWoodReq){
// var perChair = 3;
// var perTable = 10;
// var perBed = 20;

// var totalChair = perChair * chairWoodReq;
// var totalTable = perTable * tableWoodReq;
// var totalBed = perBed * bedWoodReq;

// var totalWood = totalChair + totalTable + totalBed
//     return totalWood
// }

// var total = woodCalculator(5, 2, 1)
// console.log (total)

// const phonesArr = [
//     {name: "Samsung", camera: 32, price: 52000, color: "Black"},
//     {name: "Iphone", camera: 20, price: 100000, color: "Black"},
//     {name: "Oppo", camera: 52, price: 20000, color: "Black"},
//     {name: "Vivo", camera: 322, price: 25000, color: "Black"},
//     {name: "Walton", camera: 75, price: 66000, color: "Black"},
// ]

// function bestCameraPhone (phones){
//     let bestCamera = phonesArr[0]
// for (let i = 0; i < phonesArr.length; i++){
//     const phone = phonesArr[i]

//     if (bestCamera.camera < phone.camera){
//         bestCamera = phone
//     }
    
// }
// return bestCamera
// }


// const mySelection = bestCameraPhone(phonesArr)
// console.log(mySelection)

var cart = [
    {item1: "shoe", price: 1200},
    {item2: "pant", price: 600},
    {item3: "t-shirt", price: 100} 
]
function totalSum(items) {
    var sum = 0;
for (let i = 0; i< cart.length; i++){
    var item = cart[i];
    sum = sum + item.price  
}

return sum
}

totalPrice = totalSum(cart)
console.log(totalPrice)