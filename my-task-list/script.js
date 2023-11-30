const Enter=document.getElementById('Enter');
const Display=document.getElementById('Display');
const Delete=document.getElementById('Delete');
const Dropdown=document.getElementById('Dropdown');
const inputfield=document.getElementById('inputfield');
const ul=document.getElementById('ul')
Enter.addEventListener('click',function(){
    /*alert('Enter a task');*/
    console.log(inputfield.value);
    var list=document.createElement('li');
    list.innerText=inputfield.value;
    ul.append(list);

    inputfield.value=""
    });
Display.addEventListener('click',function(){
    /*alert('display task');*/
    if(Dropdown.style.display==='none'){
        Dropdown.style.display='Block';
    }else{
        Dropdown.style.display='none';
    }
});
Delete.addEventListener('click',function(){
    alert('Delete task');
});
