const Add_Task=document.getElementById('Add-Task')
const Show_task=document.getElementById('Show-Task')
const remove_task=document.getElementById('remove-Task')
const display_task=document.getElementById('display-task')
let value=0

Show_task.addEventListener('click',function(){
    
    if(display_task.style.height=='0px'){
        display_task.style.height='100px'
    }else{
        display_task.style.height='0px'
        
    }
    console.log(display_task.style.height)
})
function getRandomColor(index) {
    const red = Math.floor(Math.sin(index + 1) * 127 + 128);
    const green = Math.floor(Math.sin(index + 2) * 127 + 128);
    const blue = Math.floor(Math.sin(index + 3) * 127 + 128);
    return `rgb(${red}, ${green}, ${blue})`;
}
function loadTasks() {
    fetch('/task/')
    .then(response => response.json())
    .then(task_liste => {
        display_task.innerHTML = '';
        task_liste.forEach((task,i)=> {
            const sub_div1 = document.createElement('div');
            const sub_div=document.createElement('div')
            const link=document.createElement('a')
            const complete_button=document.createElement('div')
            sub_div.classList.add('sub_div')
            complete_button.classList.add('complete_button')
            sub_div1.classList.add('sub_div1')
            sub_div1.style.backgroundColor=getRandomColor(i);
            link.href=''
            sub_div.appendChild(sub_div1)
            sub_div.appendChild(complete_button)
            sub_div1.appendChild(link)
        link.innerHTML= `<p>${task.title}</p>`;
            display_task.appendChild(sub_div);
        });
    });
}
loadTasks()