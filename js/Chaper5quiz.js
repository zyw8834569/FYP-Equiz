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
        question: 'What is static CMOS?',
        answers: [
            { text: 'Logic circuit', correct: false },
            { text: 'It always being connected to either VCC', correct: false },
            { text: 'it always being connected to either VCC or GND', correct: false },
            { text: 'logic circuit design technique whereby the output is always strongly driven', correct: true }
        ],
        explanation: 'Explanation: due to it always being connected to either VCC or GND (except when switching).'
    },
    {
        question: 'What is Dynamic CMOS?',
        answers: [
            { text: 'Logic circuit', correct: false },
            { text: 'It always being connected to either VCC', correct: false },
            { text: 'It always being connected to either VCC or GND', correct: false },
            { text: 'Relies on the temporary storage of signal using various load capacitances', correct: true }
        ],
        explanation: 'Explanation: Dynamic CMOS logic circuits are mostly used in VLSI chips. It provides highest performance compared to different logic families like TTL, ECL.'
    },
    {
        question: 'A static CMOS circuit is composed of two networks?',
        answers: [
            { text: 'pull-up network (PUN)', correct: false },
            { text: 'pull-down network (PDN)', correct: false },
            { text: 'pull-down network (PDN) & pull-up network (PUN)', correct: true },
            { text: 'Not in the list', correct: false }
        ],
        explanation: 'Explanation: (PUN) is set of PMOS transistors connected between Vcc and the output line.(PDN) is set of NMOS transistors connected between GND and the output line'
    },
    {
        question: 'What makes dynamic CMOS circuits faster than static CMOS circuit?',
        answers: [
            { text: 'load per fan-in', correct: true },
            { text: 'Capacitance', correct: false },
            { text: 'Resistor', correct: false },
            { text: 'Diode', correct: false }
        ],
        explanation: 'Explanation: load per fan-in, the load capacitance for the circuit is substantially lower than for static CMOS.'
    },
    {
        question: 'Which is used in dynamic CMOS logic?',
        answers: [
            { text: 'four phase clock', correct: true },
            { text: 'one phase clock', correct: false },
            { text: 'two phase clock', correct: false },
            { text: 'three phase clock', correct: false }
        ],
        explanation: 'Explanation: In dynamic CMOS logic, four phase clock is used in which actual signals are used to derive the clocks. '
    },
    {
        question: 'What are the advantages of dynamic CMOS circuits compared to static CMOS circuits?',
        answers: [
            { text: 'transistors required here are less (N+2)', correct: false },
            { text: 'a ratio less circuit as in case of Static', correct: false },
            { text: 'static power loss is very less in a dynamic logic circuit', correct: false },
            { text: 'All of above', correct: true }
        ],
        explanation: 'Explanation: Static CMOS circuits use complementary nMOS pulldown and pMOS pullup networks to implement logic gates or logic functions in integrated circuits.'
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





const test = 'Chapter5';
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


