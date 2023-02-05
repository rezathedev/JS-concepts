/*
Add sum of total price in cart
*/
// var cart = [
//     {item1: "shoe", price: 1200},
//     {item2: "pant", price: 600},
//     {item3: "t-shirt", price: 100} 
// ]
// function totalSum(items) {
//     var sum = 0;
// for (let i = 0; i< cart.length; i++){
//     var item = cart[i];
//     sum = sum + item.price  
// }

// return sum
// }

// totalPrice = totalSum(cart)
// console.log(totalPrice)



/*
to sum total price by quantity
*/

// var cart = [
//     {item1: "shoe", price: 1200, quantity: 2},
//     {item2: "pant", price: 600, quantity: 4},
//     {item3: "t-shirt", price: 100, quantity: 5} 
// ]
// function totalSum(items) {
//     var sum = 0;
// for (let i = 0; i< cart.length; i++){
//     var item = cart[i];
//     var itemTotal = item.quantity * item.price
//     sum = sum + itemTotal 
// }

// return sum
// }

// totalPrice = totalSum(cart)
// console.log(totalPrice)


/*
Discounted price calculation
*/

// First 100 ticket price per ticket 100
// 101-200 ticekt price per ticekt 90
// 200+ ticekt per ticekt price 70

var first100Price = 100;
var second200Price = 90;
var restPrice = 70;

function ticketPrice (ticket) {
    if (ticket <= 100){
        var totalTicketPrice = first100Price * ticket
        return totalTicketPrice
    }
    

    else if (ticket <=200) {
        var ticketQuantity = ticket - 100
         var first100P = 100 * first100Price
         var restTicketPrice = 90 * ticketQuantity
         var totalTicketPrice = restTicketPrice + first100P
         return totalTicketPrice
    }

    else {
        var ticketQuantity = ticket - 200;
        var first100P = 100 * first100Price;
        var second200P = 100 * second200Price;
        var restTicketPrice = ticketQuantity * restPrice;
        var totalTicketPrice =  first100P + second200P + restTicketPrice
        return totalTicketPrice
    }
    
}
    

var price = ticketPrice(12000) 
console.log(price)