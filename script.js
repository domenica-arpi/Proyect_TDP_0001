document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');
    const showPendingButton = document.getElementById('showPending');
    const showCompletedButton = document.getElementById('showCompleted');
    const showAllButton = document.getElementById('showAll');

    let tasks = [];

    function addTask() {
        const taskText = taskInput.value;
        if (taskText.trim() === '') {
            return;
        }

        const task = {
            text: taskText,
            completed: false,
        };

        tasks.push(task);
        updateLists();
        taskInput.value = '';
    }

    function updateLists() {
        todoList.innerHTML = '';
        completedList.innerHTML = '';

        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = task.text;

            const toggleButton = document.createElement('button');
            toggleButton.textContent = task.completed ? 'Desmarcar' : 'Marcar';

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';

            toggleButton.addEventListener('click', () => {
                task.completed = !task.completed;
                updateLists();
            });

            deleteButton.addEventListener('click', () => {
                tasks.splice(index, 1);
                updateLists();
            });

            if (task.completed) {
                completedList.appendChild(listItem);
                listItem.appendChild(deleteButton);
            } else {
                todoList.appendChild(listItem);
                listItem.appendChild(toggleButton);
                listItem.appendChild(deleteButton);
            }
        });
    }

    addTaskButton.addEventListener('click', addTask);
    showPendingButton.addEventListener('click', () => {
        todoList.style.display = 'block';
        completedList.style.display = 'none';
    });

    showCompletedButton.addEventListener('click', () => {
        todoList.style.display = 'none';
        completedList.style.display = 'block';
    });

    showAllButton.addEventListener('click', () => {
        todoList.style.display = 'block';
        completedList.style.display = 'block';
    });
});

