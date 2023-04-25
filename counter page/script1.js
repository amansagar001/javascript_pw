// Get HTML elements by their IDs
const countEl = document.getElementById('count');
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0;

// Add event listeners to the buttons
addBtn.addEventListener('click', () => {
  count++;
  countEl.innerText = count;
});

subBtn.addEventListener('click', () => {
  count--;
  countEl.innerText = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.innerText = count;
});
