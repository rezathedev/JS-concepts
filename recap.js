// 1. variables
var age = 30;
var myName = "Reza";

//math operations + - * /

//shorthand += -= *= /=
// ++ --

//2. Aarry 

var friends = ["Reza", "Shimu", "Saddam", "Islam"]

var myThirdFriend = friends[2];

friends[2] = "Hello"

// 3. Conditionals > < <= >= == !=

if(friends.length < 2) {
    // console.log ("I dont have friends")
}
else {
    // console.log ("I have many friends")
}

//4. loop

var roll = 0;

while (roll <= 5){
    // console.log ("I am the king");
    roll++;
}

for (var i = 0; i < 5; i++){
    var friend = friends[i]
    // console.log(friend);
}

// 5. function

function inchToFeet(inches){
    const feet = inches / 12
    return feet;
}

const dadaInch = 144;
const dadaFeet = inchToFeet(dadaInch);

console.log(dadaFeet);

// 6. Object 

var Reza = {
    name: "Reza",
    age = 30,
    color = "brown"
}