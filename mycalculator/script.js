const un=document.getElementById('un');
const deux=document.getElementById('deux');
const trois=document.getElementById('trois');
const quatre=document.getElementById('quatre');
const cinq=document.getElementById('cinq');
const six=document.getElementById('six');
const sept=document.getElementById('sept');
const euight=document.getElementById('euight');
const neuf=document.getElementById('neuf');
const zero=document.getElementById('zero');
const plus=document.getElementById('plus');
const moin=document.getElementById('moin');
const multiple=document.getElementById('multiple');
const divide=document.getElementById('divide');
const input=document.getElementById('input');
const clear =document.getElementById('clear');
const equal=document.getElementById('equal');
var accumulator='';
un.addEventListener('click',function(){
    accumulator+=1
    input.value=accumulator;

})
deux.addEventListener('click',function(){
    accumulator+=2;
    input.value=accumulator;

})
trois.addEventListener('click',function(){
    accumulator+=3;
    input.value=accumulator;

})
quatre.addEventListener('click',function(){
    accumulator+=4;
    input.value=accumulator;

})
cinq.addEventListener('click',function(){
    accumulator+=5;
    input.value=accumulator;

})
six.addEventListener('click',function(){
    accumulator+=6;
    input.value=accumulator;

})
sept.addEventListener('click',function(){
    accumulator+=7;
    input.value=accumulator;

})
euight.addEventListener('click',function(){
    accumulator+=8;
    input.value=accumulator;

})
neuf.addEventListener('click',function(){
    accumulator+=9;
    input.value=accumulator;

})
zero.addEventListener('click',function(){
    accumulator+=0;
    input.value=accumulator;

})
plus.addEventListener('click',function(){
    accumulator+='+'
    input.value=accumulator;

})
moin.addEventListener('click',function(){
    accumulator+='-'
    input.value=accumulator;

})
function addoperator(operator){
    accumulator+=operator
    input.value=accumulator;
}
clear.addEventListener('click',function(){
    accumulator="";
    input.value=accumulator;
})
equal.addEventListener('click',function(){
    try{
        const result=eval(accumulator);
        input.value=result;
        accumulator=result.toString();
    }catch(error){
        input.value='erreur'
        accumulator='';
    }
})