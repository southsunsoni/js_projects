const Add_Task=document.getElementById('Add-Task')
const Show_task=document.getElementById('Show-Task')
const remove_task=document.getElementById('remove-Task')
const display_task=document.getElementById('display-task')

function Show_Task(){
    if(display_task.style.height=='100px'){
        display_task.style.height='0px'
    }else{
        display_task.style.height='100px'
    }
}
Show_task.addEventListener('click',Show_Task)