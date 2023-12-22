const un=document.getElementById('un');
const deux=document.getElementById('deux');
const trois=document.getElementById('trois')
const quatre=document.getElementById('quatre')
const cinq=document.getElementById('cinq')
const inputfield=document.getElementById('inputfield')
Evaluate=''
un.addEventListener('click',function(){
    Evaluate+=1
    inputfield.value=Evaluate
})

deux.addEventListener('click',function(){
    Evaluate+=2
    inputfield.value=Evaluate
})

trois.addEventListener('click',function(){
    Evaluate+=3
    inputfield.value=Evaluate
})

quatre.addEventListener('click',function(){
    Evaluate+=4
    inputfield.value=Evaluate
})

cinq.addEventListener('click',function(){
    Evaluate+=5
    inputfield.value=Evaluate
})
