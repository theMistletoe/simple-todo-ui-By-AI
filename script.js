document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-todo');
    const newTodoTitle = document.getElementById('new-todo-title');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function() {
        const title = newTodoTitle.value.trim();
        if (title) {
            addTodo(title);
            newTodoTitle.value = '';
        }
    });

    function addTodo(title) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTodo);

        const span = document.createElement('span');
        span.textContent = title;

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        todoList.appendChild(listItem);
    }

    function toggleTodo(event) {
        const listItem = event.target.parentElement;
        if (event.target.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    }
});
