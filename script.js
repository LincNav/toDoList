const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const task = input.value.trim();

  if (task !== '') {
    addTask(task);
    input.value = '';
  }
});

// Function to add a new task
function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox">
    <span>${task}</span>
    <button>Delete</button>
  `;
  todoList.appendChild(li);
  
  // Event listener for delete button
  const deleteButton = li.querySelector('button');
  deleteButton.addEventListener('click', function() {
    li.remove();
  });
}

// Get the current date
const currentDate = new Date();

// Format the date as desired (e.g., "June 5, 2023")
const formattedDate = currentDate.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

// Set the formatted date to the footer element
document.getElementById('current-date').textContent = formattedDate;
