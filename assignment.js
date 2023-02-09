function mindGame(number){
//this function takes a number as input and multiply it by 3 then add 10, then devide by two and finally substracts 5 from it.
    if (typeof number != "number"){
        return "please give Number as input"
    }
    const result = (((number * 3) + 10)/2)-5;
    return result
}

// const input = mindGame (50);
// console.log(input)


function evenOdd(string){
// this function takes a string and returns even or odd based on the total count of characters of the string.
    if (typeof string != "string"){
        return "please give String as input"
    }
   const totalCharacter = string.length;
    if (totalCharacter % 2 == 0){
        return "even"
    }
    else {
        return "odd"
    }
}
// const input = evenOdd ("Batch7");
// console.log(input)


function isLGSeven(number){
// this function takes a number as input and calculate difference of it from seven and returns the difference if the returned value is less than seven else it returns input * 2.
        if (typeof number != "number"){
            return "please give Number as input"
        }
        const difference = number - 7
        if (difference < 7){
            return difference
        }
        else {
            return number * 2
        }
    }
    
 // const input = isLGSeven(-15)
// console.log(input)


function findingBadData(numbers){
// this function takes an array of numbers and returs the count of bad data (negative numbers) of it.
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if (typeof element != "number"){
            return "please give Number as input"
        }
        if (element < 0){
            count = count + 1;
            
        }
    }
    return count
}


// const numbers = [1, 3, 5, -2, -5, 0, -10, -20]
// const input = findingBadData(numbers)
// console.log(input)


function gemsToDiamond (num1, num2, num3){
// this function takes three numbers as input and gives the total number of diamonds. If the output is greater than 2000 it substracts 2000 from the return else it returns total number of diamonds.
    if (typeof num1 != "number" || typeof num2 != "number" || typeof num3 != "number" ){
        return "please give Number as input"
    }
    const friendOneDiamond = num1 * 21;
    const friendTwoDiamond = num2 * 32;
    const friendThreeDiamond = num3 * 43;
    const totalDiamond = friendOneDiamond + friendTwoDiamond + friendThreeDiamond
    if (totalDiamond > 2000){
        return totalDiamond - 2000
    }
    else {
        return totalDiamond
    }
}

// const input = gemsToDiamond (100, 5, 1)
// console.log(input)
