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
    
    const input = gemsToDiamond (100, 5, 1)
    console.log(input)
    