// Inventory Management System
// This project will allow you to manage a list of products in a small shop or warehouse.
// It's an excellent way to practice working with data, functions, and logic in a more structured way.
 
// Core Features
// Add Product: A function to add a new product to the inventory.
let inventory = []
 
function addProduct(id, name, price, quantity){
     const product = {
      id: id,
      name: name,
      price: price,
      quantity: quantity
     }
     inventory.push(product)
    console.log(product)
}
addProduct(1, "Shirt", 23.0, 5)
addProduct(2, "Dresses", 80.0, 15)
addProduct(3, "Shorts", 99.0, 20)
 
 
// Remove Product: A function to remove a product.
function removeProduct(name) {
    for (let index = 0; index < inventory.length; index++) {
        if (inventory[index].name === name) {
            console.log(inventory[index].name + ' has been removed');
            inventory.splice(index, 1);
            return;
        }
    }
  
}


console.log(inventory);
removeProduct("Shorts");
console.log(inventory);
removeProduct("Dresses");
console.log(inventory);

                


    







// Update Stock: A function to increase or decrease the stock of an existing product.
// Generate Report: A function to show a summary of the inventory,
//  including the total number of products, their value, and a list of low-stock items.
 
// Concept Application
// Objects: Each product will be an object with properties like id, name, price, and quantity.
// This is a better way to represent products than using separate variables for each property.
// Arrays: You'll store all the product objects in an array named inventory.
// Functions: You will create a function for each core feature listed above
// (addProduct, removeProduct, updateStock, generateReport). This makes your code modular and reusable.
// For Loop: You will use a for loop to iterate through the inventory array to find a specific product
// , update its quantity, or to generate a report on all products.
// If/Else: Use an if/else statement to check for low stock (e.g., if (product.quantity < 10))
// when generating the report. This allows you to show a warning for items that need to be restocked.
// Comparison and Logical Operators: Use comparison operators (===, <) and logical operators (&&, ||)
// to check for conditions like whether a product exists before updating it, or whether the user's input is valid.
// Boolean: The lowStock status could be a boolean property for each product object, making it
// easier to filter them in your report.
// Scope: The inventory array should be in the global scope so all your functions can access and modify it. Variables used inside the functions will have a local scope, preventing them from clashing with other variables.
 