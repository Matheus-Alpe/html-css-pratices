const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });

    draggable.addEventListener('dblclick', () => {
        draggable.setAttribute('contenteditable', 'true');
        
    });

    draggable.addEventListener('keypress', e => {
        if(e.keyCode == 13 && draggable.hasAttribute('contenteditable')){
            draggable.removeAttribute('contenteditable');
        }
    });
});

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault(); //para o cursor permitir jogar o objeto dentro do container
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    });
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) return { offset: offset, element: child };
        else return closest;

    }, { offset: Number.NEGATIVE_INFINITY }).element;
}


// ! Ação do botão Novo Container
const btnNovoContainer = document.getElementById('btn-novo-container');
btnNovoContainer.addEventListener('click', () => {
    const novoContainer = document.createElement('div');
    novoContainer.classList.add('container');

    const primeiraDiv = document.querySelectorAll('.container')[0];
    document.body.insertBefore(novoContainer, primeiraDiv);
})