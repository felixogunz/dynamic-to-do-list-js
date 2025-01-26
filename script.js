document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task to the list
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if the task input is not empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Add click event listener to remove button
    removeButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    // Append remove button to list item
    listItem.appendChild(removeButton);

    // Append list item to task list
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = '';
  }

  // Add event listeners to button and input field
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Add a task initially (optional)
  addTask(); // This will add a default task on page load
});
