// Event listener for "Buy Now" buttons
document.querySelectorAll(".buy-now").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = button.dataset.price;
    addToCart(name, price);
  });
});

// Initialize cart and update count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  if (document.getElementById("cart-items")) {
    displayCart();
  }
});

const cart = JSON.parse(localStorage.getItem("cart-items")) || [];

const updateCartCount = () => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector(".cart-count").textContent = totalItems;
};

const addToCart = (name, price) => {
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price: parseFloat(price), quantity: 1 });
  }

  localStorage.setItem("cart-items", JSON.stringify(cart));
  updateCartCount();
  alert(`${name} has been added to your cart!`);
};

const removeFromCart = (name, quantity = 1) => {
  const itemIndex = cart.findIndex((item) => item.name === name);

  if (itemIndex > -1) {
    const cartItem = cart[itemIndex];
    const newQuantity = cartItem.quantity - quantity;

    if (newQuantity > 0) {
      // Update quantity in existing item
      cartItem.quantity = newQuantity;
    } else {
      // Remove item if quantity reaches 0
      cart.splice(itemIndex, 1);
    }

    localStorage.setItem("cart-items", JSON.stringify(cart));
    updateCartCount();
    displayCart(); // Call to update cart display directly
    alert(`${name} quantity has been updated to ${newQuantity > 0 ? newQuantity : 0}.`);
  } else {
    alert(`${name} is not in the cart.`);
  }
};

const displayCart = () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  let total = 0;
  cartItemsContainer.innerHTML = ""; // Clear current items

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceElement.textContent = "$0.00";
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map((item) => {
      total += item.price * item.quantity;
      return `
        <div class="cart-item">
          <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
          <button class="remove-item" data-name="${item.name}">Remove</button>
        </div>
      `;
    })
    .join("");

  totalPriceElement.textContent = `$${total.toFixed(2)}`;
  // Attach remove event listeners after cart is displayed
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", () => removeFromCart(button.dataset.name));
  });
};

// Event listener for "Clear Cart" button
document.addEventListener("DOMContentLoaded", function() {
  const clearCart = document.querySelector(".clear-cart");
  if (clearCart) {
    clearCart.addEventListener("click", clear_Cart);
  }
});

function clear_Cart() {
  if (cart) {
    cart.length = 0;
  } else {
    console.error("Cart array is undefined.");
  }

  localStorage.removeItem("cart-items");

  try {
    updateCartCount();
    displayCart();
  } catch (error) {
    console.error("Error updating cart: ", error);
  }

  alert("Your cart has been cleared.");

  if (confirm("Do you want to continue shopping?")) {
    window.location.href = "jewlery_web.html";
  } else {
    alert("Thank you for visiting.");
  }
}