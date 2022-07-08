const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerBtnEl = document.getElementById('answer-btn')

let shuffledQuestions, currentQuestionIndex 

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

function startGame() {
    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerBtnEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}


function chooseAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [ 
    {
    question: 'Which HTML element holds the JavaScript?',
    answers: [ 
        {text: '<script>', correct: true},
        {text: '<js>', correct: false},
        {text: '<java>', correct: false},
        {text: '<javascript>', correct: false}
        ]
    },
    {
    question: 'Which of these are JavaScript data types?',
    answers: [ 
        {text: 'String', correct: false},
        {text: 'Number', correct: false},
        {text: 'Boolean', correct: false},
        {text: 'All of the Above', correct: true}
        ]
    },

    {
    question: 'Which sybmbols are used for comments in JavaScript?',
    answers: [
        {text: '** and &&', correct: false},
        {text: '// and /*', correct: true},
        {text: '< and !', correct: false},
        {text: '@ and ##', corect: false}
    ]
    },

    {
    question: 'Which of these are looping structures in JavaScript?',
    answers: [
        {text: 'For', correct: false},
        {text: 'While', correct: false},
        {text: 'Do-while', correct: false},
        {text: 'All of the Above', correct: true}
    ]
    },

    {
    question: 'Which of these are scopes in JavaScript?',
    answers: [
        {text: 'Block', correct: false},
        {text: 'Global', correct: false},
        {text: 'Function', correct: false},
        {text: 'All of the Above', correct: true}
    ]
    }
]