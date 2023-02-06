// 1
// var num = 3;
// for (var i = 1; i <=10; i++){
//     var namta = num * i;
//     console.log("3", "*" , i , "=", namta)
// }

// 2
// var sum = 0
// for (var i = 1; i <= 5; i++){
//     sum = sum + i;
    
// }
// console.log(sum)


// 3
// var num = [2, 4, 6, 5, 1, 9, 10, -2, -1]

// function CountOf(number){
//     var count = 0
//     for (var i = 0; i < number.length; i++){
//         var element = number[i];
//         if (element > 5){
//             count = count +1;
//         }
        
        
//     }
//     return count
// }

// var myCount = CountOf(num);
// console.log(myCount)

// 4
// Option 1
// var name1 = "Reza";
// var name2 = "Islam";

// function biggestName (a , b){
//     if (a.length > b.length){
//         return a.split("").reverse().join("")
//     }
//     else {
//         return b.split("").reverse().join("")
//     }
// }

// var result = biggestName (name1, name2)
// console.log(result)

// 4
// Option 2

// var name1 = "Reza"
// var name2 = "Islam"

// function reverseName (a , b){
//     var aLength = a.length;
//     var bLength = b.length;
//     if (a.length > b.length){
//         var name =""
//         for (var i = a.length-1; i >= 0; i--){
//             var element = a[i]
//             name = name + element
//         }
        
//     }

//     else {
//         var name =""
//         for (var i = b.length-1; i >= 0; i--){
//             var element = b[i] 
//             name = name + element
//         }
//         return name
        
        
//     }
    
// }

// var result = reverseName (name1, name2)
// console.log(result)

// 5
// function radianToDegree(radian){
//     var degree = radian * 57.2958;
//     degree = degree.toFixed(2)
//     return degree
// }

// var myInput = 10;
// var outPut = radianToDegree(myInput);
// console.log(outPut)

// 6
// function fileType (name){
//    var doesExist = name.includes(".js")
//    return doesExist
// }
// var output = fileType("ami.png");
// console.log(output)

//6 another
// function fileType (name){
//     if (name.endsWith(".js")){
//         return true
//     }
//     else{
//         return false
//     }
// }

// var input = fileType("index.png")
// console.log(input)

// 7 
// function isBestFriend (objectOne, ObjectTwo){

// // }

// // var friendSet1 = {name: "Reza", friend: "Islam"}, {name: "Reza", friend: "Islam"}

// function busFare (number){
//     busP = number % 50;
//     console.log(busP)
//     microP = busP % 11;
//     console.log(microP)
//     pBusP = microP
//     console.log(pBusP)
//     microP = microP * 250
//     return microP
// }

// var output = busFare (235)
// console.log(output)

var busCapacity = 50;
var microCapacity = 11;

function busFare (number) {
    var busRemainder = number % busCapacity;
    var microRemainder = busRemainder % microCapacity;
    var publicBusCost = microRemainder * 250
    return publicBusCost
}

var input = busFare (365)
console.log(input)

