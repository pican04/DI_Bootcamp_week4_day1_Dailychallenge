//EXERCICE XP 4


//Add the stock and prices objects to your js file.

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

//Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
const shoppingList =["banana","orange","apple"]



/*Create a function called myBill() that takes no parameters.
The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.*/

function myBill(){
for (const itemoflist of shoppingList){
    const totalstock = stock[itemoflist]
    
    if (totalstock > 0) {
        const price =prices[itemoflist]
        console.log("the price of", itemoflist, "is", price)
        console.log("we have" , stock[itemoflist], "in stock")   
        
        }
        
        else{
            console.log("the are no", itemoflist, "in stock")
     }
}


}


//Call the myBill() function.
myBill()