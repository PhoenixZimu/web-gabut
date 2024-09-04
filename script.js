document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Handle form submission
    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the task text
        const taskText = todoInput.value;

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        // Toggle completed class on click
        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        // Add the delete button to the list item
        listItem.appendChild(deleteButton);

        // Add the list item to the list
        todoList.appendChild(listItem);

        // Clear the input
        todoInput.value = '';
    });
});
