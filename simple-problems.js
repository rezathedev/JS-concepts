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