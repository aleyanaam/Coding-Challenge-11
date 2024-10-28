const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');


//Calculates the total price when the product or the quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

//Handles the order submission
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});
