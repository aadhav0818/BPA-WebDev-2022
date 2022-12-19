const quizData = [
    {
        question: " What is your target price?",
        a: "20,000",
        b: "40,000",
        c: "60,000",
        d: "80,000",
        correct: "d",
    },

    {
        question: " which body styles do you prefer?",
        a: "SUV",
        b: "Sedan",
        c: "Truck",
        d: "Hatchback",
        correct: "b",
    },

    {
        question: "What attributes do you like?",
        a: "Value",
        b: "Safety",
        c: "Comfort",
        d: "Performance",
        correct: "b",
    },

    {
        question: "How many seats would you like",
        a: "2",
        b: "4",
        c: "6",
        d: "7",
        correct: "b",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score= 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d


}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected()
{
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked)
        answer = answerEl.id
    })
    return answer
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})