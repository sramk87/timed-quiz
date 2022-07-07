const startBtn = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerBtnEl = document.getElementById('answer-btn')

startBtn.addEventListener('click', startGame)

function startGame () {
    console.log('Begin')
    startBtn.classslist.add('hide')
    questionContainerEl.classList.remove('hide')
    setNextQuestion ()

}

function nextQuestion () {


}

function chooseAnswer () {

}

const questions = [ 
    {
    question: 'Which HTML element holds the JavaScript?',
    answers: [ 
        {text: '<script>', correct: true},
        {text: '<js>', correct: false},
        {text: '<java>', correct: false},
        {text: '<javascript>', correct: false}
        ],

    question: 'Which of these are JavaScript data types?',
    answers: [ 
        {text: 'String', correct: false},
        {text: 'Number', correct: false},
        {text: 'Boolean', correct: false},
        {text: 'All of the Above', correct: true}
        ],
    }
]