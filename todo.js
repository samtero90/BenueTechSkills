document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const NewTodo = todoInput.value.trim();

        if (NewTodo !== '') {
            const listItem=document.createElement('li');
            listItem.textContent=NewTodo;

            // add a delete button
            const deleteButton=document.createElement('button');
            deleteButton.textContent='Delete';
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);

            todoInput.value='';


            // handle delete Button
            deleteButton.addEventListener('click',()=>{
                todoList.removeChild(listItem);
            })
        }
    })
})