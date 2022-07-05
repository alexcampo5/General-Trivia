//THIS IS THE API URL TEMPLATE: https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
//This is how you check if a box is checked: document.getElementById("checkbox-id").checked = true;

//Gathering all of the necessary variables from the DOM:

let gkBox = document.querySelector('#medium-gk-checkbox')
let sportsBox = document.querySelector('#medium-sports-checkbox')
let geoBox = document.querySelector('#medium-geo-checkbox')
let questionArea = document.querySelector('.question-list')
let mediumStartButton = document.querySelector('#medium-start')

//function that determines category

let getCategory = () => {
  if (sportsBox.checked == true) {
    return '21'
  } else if (gkBox.checked == true) {
    return '9'
  } else if (geoBox.checked == true) {
    return '22'
  }
}

//map works displaying on the same page, but throws error when trying to open map on trivia.html. Need to figure out how to connect the two HTML pages

const mapQuestions = (questions) => {
  questions.map((currentQuestion) => {
    let questionText = currentQuestion.question
    let questionHeader = document.createElement('h3')
    questionHeader.innerText = questionText
    questionArea.appendChild(questionHeader)
  })
}

//This makes the appropriate API call for difficulty and topic

mediumStartButton.addEventListener('click', async function () {
  let category = getCategory()
  let response = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=medium&type=multiple`
  )
  let questionsArray = response.data.results
  console.log(questionsArray)

  //mapQuestions(questionsArray)
})
