// quiz section
// questions about what we learned in class

var questions = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "High Transfer Markup Language", "HyperText Making Language", "Hyper Transfer Mode Language"],
    answer: 0
  },
  {
    question: "Which CSS property changes text colour?",
    choices: ["font-color", "text-color", "color", "foreground"],
    answer: 2
  },
  {
    question: "Which HTML tag makes a hyperlink?",
    choices: ["<link>", "<href>", "<url>", "<a>"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    choices: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Syntax", "Cascading Syntax Sheets"],
    answer: 1
  },
  {
    question: "Which js method finds element by id?",
    choices: ["getElement()", "document.querySelector('#id')", "document.getElementById()", "findById()"],
    answer: 2
  },
  {
    question: "Bootstrap rows have how many columns?",
    choices: ["10", "16", "12", "8"],
    answer: 2
  },
  {
    question: "Which tag is used for navigation?",
    choices: ["<menu>", "<nav>", "<navigation>", "<links>"],
    answer: 1
  }
]

var qIndex = 0
var myScore = 0
var attempts = 0
var done = false

function showQuestion() {
  done = false
  var q = questions[qIndex]

  // set the question text
  document.getElementById('qtext').textContent = 'Q' + (qIndex + 1) + ': ' + q.question

  // clear old buttons and make new ones
  var optArea = document.getElementById('qoptions')
  optArea.innerHTML = ''

  for (var i = 0; i < q.choices.length; i++) {
    var btn = document.createElement('button')
    btn.className = 'qbtn'
    btn.textContent = q.choices[i]
    btn.setAttribute('data-idx', i)
    btn.onclick = pickAnswer
    optArea.appendChild(btn)
  }

  document.getElementById('qfeedback').textContent = ''
  document.getElementById('qfeedback').style.color = ''
  document.getElementById('scoreshow').textContent = 'Score: ' + myScore + ' / ' + attempts
}

function pickAnswer(e) {
  if (done) return
  done = true
  attempts++

  var clicked = parseInt(e.target.getAttribute('data-idx'))
  var correctIdx = questions[qIndex].answer

  // show correct answer in green
  var allBtns = document.querySelectorAll('.qbtn')
  allBtns[correctIdx].classList.add('right')

  var fb = document.getElementById('qfeedback')

  if (clicked === correctIdx) {
    myScore++
    fb.textContent = 'Correct!'
    fb.style.color = '#34d399'
  } else {
    e.target.classList.add('wrong')
    fb.textContent = 'Wrong - correct answer is shown in green'
    fb.style.color = '#f87171'
  }

  document.getElementById('scoreshow').textContent = 'Score: ' + myScore + ' / ' + attempts
}

function nextQ() {
  qIndex = (qIndex + 1) % questions.length
  showQuestion()
}

// load first question
showQuestion()