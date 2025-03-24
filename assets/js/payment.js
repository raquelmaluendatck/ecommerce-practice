const paymentForm = document.getElementById("payment-form");
const getItem = JSON.parse(localStorage.getItem("CartItem"));
const totalAmountValue = getItem.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardNumber = document.querySelector(
    'input[placeholder="Número de Tarjeta"]'
  ).value;
  const expiryDate = document.querySelector(
    'input[placeholder="Fecha de Expiración (MM/AA)"]'
  ).value;
  const cvv = document.querySelector('input[placeholder="CVV"]').value;

  if (!cardNumber || !expiryDate || !cvv) {
    alert("Por favor, rellena todos los campos del formulario");
    return;
  }
  localStorage.removeItem("CartItem");
  window.location.href = "thankyou.html";
});
