const questions = [
    {
       question: "Which is the largest animal in the world?",
       answers: [
           { text: "Shark", correct: false},
           { text: "Blue whale", correct: true},
           { text: "Elephant", correct: false},
           { text: "Giraffe", correct: false},
       ]
    },
    {
        question: "Which is the smallest in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Sri Lanka", correct: false}, 
        ]  
    }, 
    {
        question: "Which is the largest desert in the world?",
        answers: [
           { text: "Kalahari", correct: false},
           { text: "Gobi", correct: false},
           { text: "Sahara", correct: false},
           { text: "Antarctica", correct: true}, 
        ]  
    },
    {
       question: "Which is the smallest continent in the world?",
       answers: [
           { text: "Asia", correct: false},
           { text: "Australia", correct: true},
           { text: "Arctic", correct: false},
           { text: "Africa", correct: false}, 
       ]  
    }    
];

const questionElement = document.getElementById("question");  
const answerButton = document.getElementById("answer-buttons");  
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}  

function resetState(){
    nextButton.style.display = "none"; // Hide next button initially
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"; // Show next button after answering
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();




// const questions = [
//     {
//        question: "which is largest animal in the world?",
//        answers: [
//            { text: "shark", correct: false},
//            { text: "Blue whale", correct: true},
//            { text: "Elephant", correct: false},
//            { text: "Giraffe", correct: false},
//        ]
//     },
//     {
//         question: "which is smallest in the world",
//         answers: [
//             { text: "Vatican City", correct: true},
//             { text: "Bhutan", correct: false},
//             { text: "Nepal", correct: false},
//             { text: "Shri Lanka", correct: false}, 
//         ]  
//     }, 
//     {
//         question: "which is largest desert in the world",
//         answers: [
//            { text: "Kalahari", correct: false},
//            { text: "Gobi", correct: false},
//            { text: "Sahara", correct: false},
//            { text: "Antarctica", correct: true}, 
//     ]  
// },
// {
//        question: "which is the smallest continent in the world",
//        answers: [
//            { text: "Asia", correct: false},
//            { text: "Australia", correct: true},
//            { text: "Arctic", correct: false},
//            { text: "Africa", correct: false}, 
//        ]  
//     }    
// ];

// const questionElement = document.getElementById("question");  
// const answerButton = document.getElementById("answer-buttons");  
// const nextButton = document.getElementById("next-btn"); 

// let currentQuestionIndex = 0;
// let score = 0;


// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion(){
//     resetState();
//     let currentQuestion = questions [currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click, selectAnswer");
//     });
// }  


// function resetState(){
//     nextButton.style.display = "none";
//     while(answerButton.firstChild){
//         answerButton.removeChild(answerButton.firstChild);
//     }
// }

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButton.children).forEach(button => {
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }

// function showScore(){
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "play Again";
//     nextButton.style.display = "block";
// }


// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click", () => {
//     if(currentQuestionIndex < questions.length){
//        handleNextButton();
//         }else{
        
//     }
// });

// startQuiz();
// ////////////////////////////////////////////CORRECTIONS

// const questions = [ 
//     {
//        question: "Which is the largest animal in the world?",
//        answers: [
//            { text: "Shark", correct: false},
//            { text: "Blue whale", correct: true},
//            { text: "Elephant", correct: false},
//            { text: "Giraffe", correct: false},
//        ]
//     },
//     {
//         question: "Which is the smallest country in the world?",
//         answers: [
//             { text: "Vatican City", correct: true},
//             { text: "Bhutan", correct: false},
//             { text: "Nepal", correct: false},
//             { text: "Sri Lanka", correct: false}, 
//         ]  
//     }, 
//     {
//         question: "Which is the largest desert in the world?",
//         answers: [
//            { text: "Kalahari", correct: false},
//            { text: "Gobi", correct: false},  // Gobi is the second largest, not the largest
//            { text: "Sahara", correct: false},
//            { text: "Antarctica", correct: true},  // Antarctica is the largest desert
//         ]  
//     },
//     {
//        question: "Which is the smallest continent in the world?",
//        answers: [
//            { text: "Asia", correct: false},
//            { text: "Australia", correct: true},
//            { text: "Arctic", correct: false},
//            { text: "Africa", correct: false}, 
//        ]  
//     }    
// ];

// const questionElement = document.getElementById("question");  // Fixed typo
// const answerButton = document.getElementById("answer-buttons");  // Fixed typo
// const nextButton = document.getElementById("next-btn");  // Fixed typo

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);  // Fixed typo
//     });
// }  

// function resetState(){
//     nextButton.style.display = "none";
//     while(answerButton.firstChild){  // Fixed typo
//         answerButton.removeChild(answerButton.firstChild);  // Fixed typo
//     }
// }

// startQuiz();

   