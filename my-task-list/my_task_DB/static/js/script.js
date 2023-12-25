const Enter=document.getElementById('Enter');
const Display=document.getElementById('Display');
const Delete=document.getElementById('Delete');
const Dropdown=document.getElementById('Dropdown');
const inputfield=document.getElementById('inputfield');
const ul=document.getElementById('ul')
const Arrow=document.getElementById('Arrow')
function Enter_function(){
list=document.createElement('li');
div=document.createElement('div')
div.innerText='X'
div.style.position="relative"
div.style.height="0px"
div.style.top="-25px"
div.style.left="160px"
div.style.color="blue"
div.style.cursor="pointer"
list.style.listStyleType='none'
var text=document.createTextNode(inputfield.value)
list.appendChild(text)
list.appendChild(div)
ul.append(list);
inputfield.value=""
div.addEventListener('click',function(e){
    list=e.target.closest('li')
    if(list){
        list.remove()
    }
    
})
}
Enter.addEventListener('click',Enter_function)
Arrow.addEventListener('click',function(){
    if(Dropdown.style.height=="0px"){
        Dropdown.style.height="Auto";
    }else{
        Dropdown.style.height="0px"
    }
})
Delete.addEventListener('click',function(){
    child=ul.lastElementChild;
    while (child){
        ul.removeChild(child);
        child=ul.lastElementChild;
    }
})
