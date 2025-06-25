const form = document.getElementById('expenseForm');
const list = document.getElementById('expenseItems');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const desc = document.getElementById('desc').value;
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;

  const item = document.createElement('li');
  item.textContent = `${desc} - ₹${amount} [${category}]`;

  list.appendChild(item);

  // Clear form
  form.reset();
});
