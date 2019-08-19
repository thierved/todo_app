const todoList = document.getElementById('todo-list');

fetch("http://localhost:3000/api/todos", {method: "GET"})
    .then(res => res.json())
    .then(todos => {
        for (const todo of todos) {
            const todoItem = `<li>${todo.name}</li>`;
            todoList.innerHTML += todoItem;
        }
    });