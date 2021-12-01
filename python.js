var quiz = [


    {
    question: "1.	Who developed Python Programming Language?",
    a: "Wick van Rossum",
    b:"Rasmus Lerdorf",
    c:" Guido van Rossum",
    d: "Niene Stom",
      ans:"c"
    } ,
    {
     question : "2. Which type of Programming does Python support?",
    a: "object-oriented programming",
    b:" structured programming",
    c: "functional programming",
    d:" all of the mentioned",
      ans:"ans1"
    },
    {
    question :"  3.Is Python case sensitive when dealing with identifiers?",
    a:"no",
    b:"yes",
    c: "machine dependent",
    d: "none of the mentioned",
    ans:"ans2"
    },
    {
      question : "4. Which of the following is the correct extension of the Python file?",
    a: ".python",
    b: ".pl",
    c: ".py",
    d: ".p",
      ans:"c"
    },
    {
    question :"5. Is Python code compiled or interpreted?",
    a:" Python code is both compiled and interpreted",
    b: "Python code is neither compiled nor interpreted",
    c:" Python code is only compiled",
    d: "Python code is only interpreted",
     ans:"ans4"
    },
    {
    question :"6.All keywords in Python are in _",
    a:" Capitalized",
    b: "lower case",
    c:" UPPER CASE",
    d:" None of the mentioned",
    ans:"ans2"
    },
    {
    question : "7. What will be the value of the following Python expression?4 + 3 % 5",
    a:" 7",
    b: "2",
    c:" 4",
    d:" 1",
    ans:"ans2"
    },
    {
    
    question :"8.Which of the following is used to define a block of code in Python language?",
    a: "Indentation",
    b:" Key",
    c: "Brackets",
    d:"All of the mentioned",
     ans:"ans1"
    },
    
    {
    question :"9. Which keyword is used for function in Python language?",
    a: "Function",
    b: "Def",
    c: "Fun",
    d: "Define",
    ans:"ans1"
    },
    {
    question :"10. Which of the following character is used to give single-line comments in Python?",
    a:" //",
    b:" #",
    c:" !",
    d: "/*",
    ans:"ans2"
    }
 ]






 var question = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2")
var option3 = document.querySelector("#option3")
var option4 = document.querySelector("#option4")

var submit = document.querySelector("#submit");
var answers = document.querySelectorAll(".answer")

var showScore = document.querySelector("#showScore")



var questionCount = 0;
var score = 0;
const loadQuestions = () => {
    let questionList = quiz[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestions();

const getCheckedAnswer = () => {
    let answer;
    answers.forEach(( curAnsEle) =>{
        if(curAnsEle.checked){
            answer = curAnsEle.id;
             
        }
    } )
    return answer;

}





submit.addEventListener("click",() =>{
    const checkedAnswer = getCheckedAnswer();
    
    if(checkedAnswer === quiz[questionCount].ans){
        score++;
    }
                                                                             
    questionCount++;
    if(questionCount < quiz.length){
        loadQuestions()               
    }
    else{
        showScore.innerHTML =  " you have scored" + " " + score + " /" + quiz.length;
        document.querySelector("#showScore").style.display = "block";
        
    }
})