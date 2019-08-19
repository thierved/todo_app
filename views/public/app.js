const todoList = document.getElementById('todo-list');
const input = document.getElementById('input');

fetch("http://localhost:3000/api/todos", {method: "GET"})
    .then(res => res.json())
    .then(todos => {
        for (const todo of todos) {
            postTodo(todo);   
        }
    });

input.addEventListener('keypress', e => {
    if(e.keyCode === 13) {
        const todo = input.value;
        (async () => {
            const rawResponse = await fetch('http://localhost:3000/api/todos', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({"name": todo})
            });
            const newTodo = await rawResponse.json();
            postTodo(newTodo);
        })();
    
    }
});

function postTodo(todo) {
    const todoItem = `<li>${todo.name}</li>`;
    todoList.innerHTML += todoItem;
}