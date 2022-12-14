const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const questionText = document.getElementById('questionimage')
const answerButtonsElement = document.getElementById('answer-buttons')
const img = document.querySelector("img")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  questionText.getAttribute(imagem = img)
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
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
    question: 'Esse tu??te do ex senador Magno Malta cont??m um exemplo de Fake news?', 
    imagem: "imagens/magnomaltavacinacao.png",
    answers: [
      { text: 'Sim, discursos emocionais s??o uma estrat??gia de persuas??o e propaga????o das Fake news', correct: true },
      { text: 'N??o, o entusiasmo em seu discurso ?? uma forma de demonstrar como o problema ?? real', correct: false }
    ]
  },
  {
    question: 'Este tu??te de Ricardo Barros cont??m um exemplo de Fake news?',
    imagem: 'imagens/ricardobarrosovotoaudit??vel.png',
    answers: [
      { text: 'N??o, mas o autor pode ter raz??o em rela????o aos votos audit??veis', correct: false },
      { text: 'N??o, o voto audit??vel realmente pode aumentar o n??vel de seguran??a das elei????es', correct: false },
      { text: 'Sim, a distor????o ou m?? representa????o de um problema s??o formas de espalhar noticias falsas', correct: true },
  
    ]
  },
  {
    question: 'Esta reportagem de "O sensacionalista" seria considerado como uma Fake news?',
    imagem: 'imagens/ricardobarrosovotoaudit??vel.png',
    answers: [
      { text: 'Sim e a divulga????o desse material foi maliciosa', correct: false },
      { text: '?? possivel dizer que sim, mas a inten????o n??o ?? maliciosa', correct: true },
      { text: 'N??o, v??rios canais como "o sensacionalista" usam de "fake news falsas" para efeito de humor', correct: true },
    ]
  },
  {
    question: 'Esta reportagem da Folha de S??o Paulo sobre En??as Carneiro cont??m alguma Fake News? ',
    imagem: 'imagens/ricardobarrosovotoaudit??vel.png',
    answers: [
      { text: 'N??o, En??as realmente superestimava o valor do Ni??bio', correct: true },
      { text: 'Sim, o Ni??bio e o quartzo brasileiros, ao contr??rio do que pensava En??as, n??o t??m tanto valor', correct: true },
      { text: 'N??o, a privatiza????o da Vale do Rio Doce realmente era critic??vel e acabou gerando problemas para os brasileiros', correct: true },
      { text: 'Sim e n??o... um texto pode ter partes verdadeiras e ainda propagar informa????es falsas', correct: true }
    ]
  },
  {
    question: 'Estas caracter??sticas sobre o signo de ??ries do site "personare.com" contam como fake news? ',
    imagem: 'imagens/ricardobarrosovotoaudit??vel.png',
    answers: [
      { text: 'Sim, o site propaga conceitos n??o cient??ficos e espalha desinforma????o', correct: false },
      { text: 'N??o, e tudo que a reportagem disse ?? verdadeiro', correct: false },
      { text: 'N??o, apesar de n??o ter base cient??fica, o texto n??o aparenta intecionalidade maliciosa', correct: true },
      { text: 'N??o exatamente, mas publicam material n??o cient??fico para explorar um p??blico desinformado', correct: true}

    ]
  }
]
