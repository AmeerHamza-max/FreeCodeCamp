// 1. Declare the empty inventory array
let inventory = [];

// 2. Function to find the index of a product (case-insensitive)
function findProductIndex(productName) {
  const searchName = productName.toLowerCase();
  return inventory.findIndex(item => item.name.toLowerCase() === searchName);
}

// 3. Function to add a product or update its quantity
function addProduct(product) {
  const index = findProductIndex(product.name);
  // Ensure we store the name in lowercase as per requirements
  const productNameLower = product.name.toLowerCase();

  if (index !== -1) {
    // Product exists: update quantity
    inventory[index].quantity += product.quantity;
    console.log(`${productNameLower} quantity updated`);
  } else {
    // Product doesn't exist: push new object
    inventory.push({
      name: productNameLower,
      quantity: product.quantity
    });
    console.log(`${productNameLower} added to inventory`);
  }
}

// 4. Function to remove a specific quantity of a product
function removeProduct(productName, quantity) {
  const index = findProductIndex(productName);
  const productNameLower = productName.toLowerCase();

  if (index === -1) {
    console.log(`${productNameLower} not found`);
    return;
  }

  const currentProduct = inventory[index];

  if (currentProduct.quantity < quantity) {
    // Case: Not enough stock
    console.log(`Not enough ${productNameLower} available, remaining pieces: ${currentProduct.quantity}`);
  } else {
    // Case: Perform subtraction
    currentProduct.quantity -= quantity;

    if (currentProduct.quantity === 0) {
      // Remove from array if stock hits zero
      inventory.splice(index, 1);
      console.log(`Remaining ${productNameLower} pieces: 0`);
    } else {
      console.log(`Remaining ${productNameLower} pieces: ${currentProduct.quantity}`);
    }
  }
}