// Get DOM elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task when Enter key is pressed
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Add new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        return;
    }

    // Create task item
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    // Create task text
    const taskTextElement = document.createElement('span');
    taskTextElement.className = 'task-text';
    taskTextElement.textContent = taskText;
    
    // Create task actions container
    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';
    
    // Create complete button
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = () => toggleTask(taskItem);
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(taskItem);
    
    // Append elements
    taskActions.appendChild(completeBtn);
    taskActions.appendChild(deleteBtn);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(taskActions);
    
    // Add to list
    taskList.appendChild(taskItem);
    
    // Clear input
    taskInput.value = '';
}

// Toggle task completion
function toggleTask(taskItem) {
    taskItem.classList.toggle('completed');
    const completeBtn = taskItem.querySelector('.complete-btn');
    
    if (taskItem.classList.contains('completed')) {
        completeBtn.textContent = 'Unmark';
        // Move to end of list
        taskList.appendChild(taskItem);
    } else {
        completeBtn.textContent = 'Complete';
        // Move to beginning of list
        taskList.insertBefore(taskItem, taskList.firstChild);
    }
}

// Delete task
function deleteTask(taskItem) {
    taskItem.remove();
} 