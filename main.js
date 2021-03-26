const {cart1, cart2, cart3} = require('./carts.js')
const pricing = [
    {name: 'apple', price: 1.5},
    {name: 'strawberry', price: .5},
    {name: 'banana', price: 2},
    {name: 'orange', price: 3},
    {name: 'blueberry', price: .1},
    {name: 'mango', price: 3.73}
]


function calculateTotal(cart){
        
        // store pricing array
        let itemSubTotals = array[];
        // store cart array
        let fruitCart = array[];

        // iterate through fruitCart
        // array1.forEach(element => console.log(element));
        let cart = fruitCart.length;
        for (i=0; i < basket; i++) {
            const item = cart[i];
            const fruit = pricing
            const itemName = item.name;
            const fruitName = pricing.name;
            const itemQty = item[i].qty;
            if (itemName = fruitName){
                const itemPrice = pricing.
                const itemTotal = item[i].price * itemQty;
                itemSubTotals.push(itemTotal);
            });            
        }

            

        }

        const itemTotal = cart.pricing
            // product of item price * qty as float with two dec places
            // save product in var in array
    // sum all products
    
}

// The lines below will only write to the console if the answer is incorrect
console.assert(calculateTotal(cart1) === '29.50', `Expected "29.50" for cart: received ${calculateTotal(cart1)}`);
console.assert(calculateTotal(cart2) === '25.00', `Expected "25.00" for cart: received ${calculateTotal(cart2)}` );
console.assert(calculateTotal(cart3) === '37.11', `Expected "37.11" for cart: received ${calculateTotal(cart3)}` );