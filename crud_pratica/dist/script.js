
const todoValue = document.querySelector("input[name='todo']")
const ulTodoList = document.querySelector(".todo--list");


document.querySelector('[data-add]').addEventListener('click', () => {
    createTodoElement()
})



function createTodoElement() {
    if(todoValue.value.match(/^\s*$/)) return false;

    //elements
    const liTodo = document.createElement("li");
    ulTodoList.insertAdjacentElement("beforeend", liTodo);
    liTodo.innerHTML = `
        <input type="checkbox" name="todo-item" id="item"/>
        <span class="to-do" contenteditable="true">${todoValue.value}</span>
        <sub onclick="removeTodoElement()">x</sub>
    `
    //sentando o valor pra vazio novamente
    todoValue.value = "";
}

function removeTodoElement() {
    event.currentTarget.parentElement.remove();
}