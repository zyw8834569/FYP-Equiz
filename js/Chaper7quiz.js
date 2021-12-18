document.onload = this.onload = function () {
    handleClientLoad()
};
document.onreadystatechange = function () {
    if (this.readyState === 'complete') {
        this.onload()
    }
};
const modal = document.getElementById('modal');
const modalClose = document.getElementById('submit');
const name = document.getElementById('name');
var nameSheet;
var matriSheet;
name.addEventListener('change', checkName);
const matriculation = document.getElementById('matriculation');
matriculation.addEventListener('change', checkMatri);
modalClose.addEventListener('click', () => {
    if (name.value && matriculation.value != "") {
        if (true) {
            modal.style.visibility = "hidden";
            modal.style.opacity = "0"
        }

    } else {
        if (name.value == "") {
            alert('Please fill in your name');
        } else {
            alert('Please fill in matriculation number');
        }
    }
    nameSheet = name.value;
    matriSheet = matriculation.value;

});

function checkName(event) {
    var myName = event.currentTarget;
    var pos = myName.value.search(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
    if (pos != 0) {
        alert("The name you have entered (" + myName.value + ") is not in the correct form. \n" + "Only alphabets and character spaces are allowed. ");
        myName.focus();
        myName.select();
        return false;
    }
}
function checkMatri(event) {
    var matric = event.currentTarget;
    var pos = matric.value.search(/^[U]\d{7}[a-zA-z]$/);
    if (pos != 0) {
        alert("The value you have entered (" + matric.value + ") is not in the correct form. \n" + "Only alphabets and numbers  are allowed. ");
        matric.focus();
        matric.select();
        return false;
    }
}
var score = 0;
const startButton = document.getElementById('start');
startButton.addEventListener('click', start);
const questionContainer = document.getElementById('question-ctn');
const questionElement = document.getElementById('heading');
const explanation = document.getElementById('explanation');
const answerButton = document.getElementById('answer-btn');
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    Next();
})
const proceed = document.getElementById('proceed')
let shuffledQuestions, currentQuestionIndex
const questions = [
    {
        question: 'What are CMOS design rules?',
        answers: [
            { text: 'The physical mask layout of any circuit to be manufactured', correct: false },
            { text: 'Design rules which determine the dimensions of a minimumsize transistor', correct: false },
            { text: 'determine the separation between the nMOS and the pMOS transistor', correct: false },
            { text: 'All of above', correct: true }
        ],
        explanation: 'Explanation: Cmos design rules are need to depend on the circuit design and NMOS and CMOS'
    },
    {
        question: 'What does CMOS stand for engineering?',
        answers: [
            { text: 'metal oxide semiconductor', correct: false },
            { text: 'Complementary metal oxide semiconductor', correct: true },
            { text: 'complementary symmetry metal', correct: false },
            { text: 'oxide semiconductor field', correct: false }
        ],
        explanation: 'Explanation: fabrication process that uses complementary and symmetrical pairs of p-type and n-type MOSFETs.'
    },
    {
        question: 'What is static CMOS design?',
        answers: [
            { text: 'a logic circuit design technique', correct: true },
            { text: 'output is always strongly driven', correct: false },
            { text: 'connected to either VCC or GND', correct: false },
            { text: 'Dynamic CMOS which relies on the temporary storage', correct: false }
        ],
        explanation: 'Explanation: Static CMOS is a logic circuit design technique whereby the output is always strongly driven due to it always being connected to either VCC or GND (except when switching).'
    },
    {
        question: 'Where do we use VLSI?',
        answers: [
            { text: 'CMOS', correct: false },
            { text: 'PMOS', correct: false },
            { text: 'Everywhere', correct: true },
            { text: 'Microprocessors', correct: false }
        ],
        explanation: 'Explanation: VLSI circuits are used everywhere, real applications include microprocessors in a personal computer or workstation, chips in a graphic card.'
    },
    {
        question: 'What is the relation between IC and VLSI design?',
        answers: [
            { text: 'the process of creating an integrated circuit (IC)', correct: true },
            { text: 'Similar relation', correct: false },
            { text: 'No relation', correct: false },
            { text: 'No Correct answer', correct: false }
        ],
        explanation: 'Explanation: VLSI is the process of creating an integrated circuit (IC) by combining thousands of transistors into a single chip.'
    },

]

function start() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    Next();
}

function Next() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    explanation.classList.add('hide');
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerText = answers.text;
        button.classList.add('btn');
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectedAnswer);
        answerButton.appendChild(button);
    })
}


function selectedAnswer(e) {
    const selected = e.target;
    const correct = selected.dataset.correct;
    if (correct) {
        score += 1;
        console.log(score);
    }
    setStatusClass(document.body, correct);
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        proceed.innerText = 'Proceed to Next Lesson';
        proceed.classList.remove('hide');
    }
    explanation.classList.remove('hide');
    explanation.innerText = questions[currentQuestionIndex].explanation;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)

    if (correct) {
        element.classList.add('correct');

    } else {
        element.classList.add('wrong');
    }
}
function clearStatusClass(element) {

    element.classList.remove('wrong');
    element.classList.remove('correct');
}
//Google authentication and Google sheet append

// Client ID and API key from the Developer Console
var CLIENT_ID = '32914721003-o0u60qvlt15n253ol0e6mhscgoj96dfv.apps.googleusercontent.com';
var API_KEY = 'AIzaSyC5vSz12FHK-hY_xWGYW4TUnFYkdZO75jk';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

var authorizeButton = document.getElementById('start');
var submitButton = document.getElementById('proceed');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        //  signoutButton.onclick = handleSignoutClick;
    }, function (error) {
        appendPre(JSON.stringify(error, null, 2));
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {

}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}





const test = 'Chapter7';
const date = new Date().toLocaleString();


function submitResult() {
    var values = [
        [
            // Cell values ...
            nameSheet, matriSheet, test, score, date
        ],
        // Additional rows ...
    ];
    var body = {
        values: values
    };
    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: '1I1KcFQJHvv03wfyJaTmvCYyXjzvlWQZQguYJ5Si5-ho',
        range: 'A:Z',
        valueInputOption: 'USER_ENTERED',
        resource: body
    }).then((response) => {
        var result = response.result;
        console.log(`${result.updatedCells} cells updated.`);
    });
    alert("Your Quiz has been successfully submitted!,Go back to home page");
}


