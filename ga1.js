// JSON Assignment:

/* Graded Assessment: Working with JSON Data

Problem:

You are tasked with implementing a product management system. The system will use JSON data for storing information about products. Each product has the following properties:

· id: Unique identifier for the product.

· name: Name of the product.

· category: Category of the product.

· price: Price of the product.

· available: Boolean indicating if the product is in stock.

The tasks below involve reading JSON data, adding new products, updating product information, and filtering products based on certain conditions.


Tasks:

1. Parse the JSON data:

Write a function that reads the JSON data (in the format above) and converts it into a usable data structure. You will need to parse the JSON into a JavaScript object.

2. Add a new product:

Write a function to add a new product to the catalog. This product will have the same structure as the others and should be appended to the products array.

3. Update the price of a product:

Write a function that takes a product ID and a new price and updates the price of the product with the given ID. If the product doesn’t exist, the function should return an error message.

4. Filter products based on availability:

Write a function that returns only the products that are available (i.e., available: true).

5. Filter products by category:

Write a function that takes a category name (e.g., "Electronics") and returns all products in that category. */


const jsonData = [
    {id: 1, name: "helmet", category: "gear", price: 2499, available: true},
    {id: 2, name: "jacket", category: "gear", price: 7899, available: false},
    {id: 3, name: "bike", category: "vehicle", price: 205000, available: true}
];

// 1. Parse the JSON Data
function parseJsonData(data) {
    return data;
}

const products = parseJsonData(jsonData);
console.log("Original Products:", products);

// 2. Add a new product
function addProduct(products, newProduct) {
    products.push(newProduct);
    return products;
}

const newProduct = {id: 4, name: "car", category: "vehicle", price: 902300, available: true};
const updatedProducts = addProduct(products, newProduct);

console.log("All Products including New Product:", updatedProducts);

// 3. Update the price of a product:
function updateProductPrice(products, productId, newPrice) {
    for (let product of products) {
        if (product.id === productId) {
            product.price = newPrice;
            break;
        }
    }
    return products;
}

console.log("All Products with Updated Price:", updatedProductsWithPrice);

const updatedProductsWithPrice = updateProductPrice(updatedProducts, 2, 8000);

// 4. Filter products based on availability:
function filterAvailableProducts(products) {
    let availableProducts = [];
    for (let product of products) {
        if (product.available) {
            availableProducts.push(product);
        }
    }
    return availableProducts;
}

const availableProducts = filterAvailableProducts(updatedProductsWithPrice);

console.log("Available Products:", availableProducts);

// 5. Filter products by category:
function filterProductsByCategory(products, category) {
    let productsInCategory = [];
    for (let product of products) {
        if (product.category === category) {
            productsInCategory.push(product);
        }
    }
    return productsInCategory;
}

const vehicles = filterProductsByCategory(updatedProductsWithPrice, "vehicle");

console.log("Vehicles:", vehicles);
