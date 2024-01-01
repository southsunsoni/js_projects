/*
// JavaScript
const disp_task = document.getElementById('displaytask');
const task_div = document.getElementById('drop-div');

function loadTasks() {
    // Simulating fetching tasks data
    const data = [
        { Nom: "Task 1", Description: "Description 1", slug: "task-1", Date: "2023-01-01" },
        { Nom: "Task 2", Description: "Description 2", slug: "task-2", Date: "2023-01-02" },
        // Add more tasks as needed
    ];

    data.forEach(task => {
        const task_sub_div = document.createElement('div');
        task_sub_div.innerHTML = `
            <p>${task.Nom}</p>
            <p>${task.Description}</p>
            <p>${task.slug}</p>
            <p>${task.Date}</p>
        `;
        task_div.appendChild(task_sub_div);
    });
}

function toggleHeight() {
    task_div.classList.toggle('show');
}

disp_task.addEventListener('click', toggleHeight);
loadTasks(); // Load tasks initially
*/
document.addEventListener('DOMContentLoaded', function() {
    const disp_task = document.getElementById('displaytask');
    const task_div = document.getElementById('drop-div');

    disp_task.addEventListener('click', function() {
        if (task_div.style.display === 'none' || task_div.style.display === '') {
            task_div.style.display = 'block';
        } else {
            task_div.style.display = 'none';
        }
    });
});






