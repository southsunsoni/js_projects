const questionair=document.getElementById('questionaire');
const reponse1=document.getElementById('reponse1');
const reponse2=document.getElementById('reponse2');
const reponse3=document.getElementById('reponse3');
var list_de_Questions=[];
let Qestion={
    Question_text:'',
    Question_ans1:'',
    Question_an2:'',
    Question_ans3:'',
}
function Question(Question_text,Question_ans1,Question_an2,Question_ans3){
    this.Question_text = Question_text;
    this.Question_ans1=Question_ans1;
    this.Question_an2=Question_an2;
    this.Question_ans3=Question_ans3;
}
let Question1=new Question;
Question1.Question_text='Quelle est ta date de naissance'
Question1.Question_ans1='23/09/1996';
Question1.Question_ans2='08/12/1998';
Question1.Question_ans3='25/12/1994';
let Question2=new Question;
Question2.Question_text='Quelle est ton Nom'
Question2.Question_ans1='Soni tsafack ivan';
Question2.Question_ans2='sonkeng Tsafack Valdez';
Question2.Question_ans3='Fouedjo Kana Joel';
let Question3=new Question;
Question3.Question_text='ou vie tu'
Question3.Question_ans1='Ilmenau';
Question3.Question_ans2='Bremen';
Question3.Question_ans3='Berlin';

list_de_Questions.push(Question1);
list_de_Questions.push(Question2);
list_de_Questions.push(Question3);
element=document.createElement('h1');
element.innerText=list_de_Questions[0].Question_text;
questionair.classList.add("center");
questionair.appendChild(element);
element1=document.createElement('h3');
element1.innerText=list_de_Questions[0].Question_ans1;
reponse1.appendChild(element1);
alert();

