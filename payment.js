const paymentForm = document.getElementById('payment-form');
const getItem = JSON.parse(localStorage.getItem('CartItem'));
const totalAmountValue = getItem.reduce((total, item) => total + (item.price * item.quantity), 0);

paymentForm.addEventListener('submit', (event) => {
event.preventDefault();

localStorage.removeItem('CartItem');
window.location.href = 'thankyou.html';
});