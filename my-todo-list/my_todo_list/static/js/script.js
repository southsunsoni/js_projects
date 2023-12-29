const task_div = document.getElementById('drop-div');
let isDropdown = false;
const disp_task=document.getElementById('displaytask')
const new_task=document.getElementById('Newtask')

function loadTasks() {
    task_div.style.height='0px'
    fetch('/form/')
    .then(response => response.json())
    .then(data => {
        data.forEach(task => {
            const task_sub_div = document.createElement('div');
            task_sub_div.innerHTML = `
                <p>${task.Nom}</p>
                <p>${task.Description}</p>
                <p>${task.slug}</p>
                <p>${task.Date}</p>
            `;
            task_div.appendChild(task_sub_div);
           
        })
        if(task_div.style.height=='0px'){
            task_div.style.height='100px'
            console.log(task_div.style.height)
            return task_div.style.height
        }
    
    
    });
    
    
}
function display() {
        loadTasks()

        task_div.style.height='0px'
        console.log(task_div.style.height='0px')
        
}
console.log(task_div.style.height='0px')
new_task.addEventListener('click',display())

disp_task.addEventListener('click',loadTasks)
