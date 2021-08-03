document.onload=this.onload=function(){
    handleClientLoad()
    };
document.onreadystatechange= function()
    {
        if (this.readyState === 'complete') {
        this.onload()
        }
    };
const modal = document.getElementById('modal');
const modalClose = document.getElementById('submit');
const name = document.getElementById('name');
var nameSheet;
var matriSheet;
name.addEventListener('change',checkName);
const matriculation = document.getElementById('matriculation');
matriculation.addEventListener('change',checkMatri);
modalClose.addEventListener('click',()=>{
    if(name.value && matriculation.value != ""){
        if(true){
            modal.style.visibility="hidden";
            modal.style.opacity = "0"
        }
      
    }else{
       if(name.value == ""){
           alert('Please fill in your name');
       }else{
           alert('Please fill in matriculation number');
       }
    }   
    nameSheet = name.value;
    matriSheet = matriculation.value;
    
});

function checkName(event){
    var myName =event.currentTarget;
    var pos = myName.value.search(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
    if(pos !=0){
        alert("The name you have entered (" + myName.value + ") is not in the correct form. \n"+ "Only alphabets and character spaces are allowed. ");
        myName.focus();
        myName.select();
        return false;
    }
}
function checkMatri(event){
    var matric = event.currentTarget;
    var pos = matric.value.search(/^[U]\d{7}[a-zA-z]$/);
    if(pos !=0){
        alert("The value you have entered (" + matric.value + ") is not in the correct form. \n"+ "Only alphabets and numbers  are allowed. ");
        matric.focus();
        matric.select();
        return false;
    }
}
var score = 0;
const startButton = document.getElementById('start');

startButton.addEventListener('click', start);

const questionContainer = document.getElementById ('question-ctn');

const questionElement = document.getElementById('heading');
const explanation = document.getElementById('explanation');
const answerButton = document.getElementById('answer-btn');

const nextButton = document.getElementById('next');
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++;
    Next();
} )
const proceed = document.getElementById('proceed')
let shuffledQuestions , currentQuestionIndex
const questions = [
    {
        question: 'Which of the following electrical characteristics is not exhibited by an ideal op-amp?',
        answers:[
            {text:'Infinite voltage gain',correct:false},
            {text:'Infinite bandwidth',correct:false},
            {text:'Infinite output resistance',correct:true},
            {text:'Infinite slew rate',correct:false}
        ],
        explanation :'Explanation: An ideal op-amp exhibits zero output resistance so that output can drive an infinite number of other devices.'
    },
    {
        question: 'An ideal op-amp requires infinite bandwidth because',
        answers:[
            {text:' Signals can be amplified without attenuation',correct:true},
            {text:'Output common-mode noise voltage is zero',correct:false},
            {text:'Output voltage occurs simultaneously with input voltage changes',correct:false},
            {text:'Output can drive infinite number of device',correct:false}
        ],
        explanation :'Explanation: An ideal op-amp has infinite bandwidth. Therefore, any frequency signal from 0 to ∞ Hz can be amplified without attenuation.'
    },
    {
        question: 'Regarding the negative feedback amplifier, which of the following statements is wrong?',
        answers:[
            {text:'Widens the separation between 3db frequency',correct:false},
            {text:'Improves gain stability',correct:false},
            {text:'Increases gain – bandwidth product',correct:true},
            {text:'Reduces distortion',correct:false}
        ],
        explanation :'Explanation: The gain-bandwidth product in a negative amplifier remains constant. Reducing the closed loop gain (>=1) increases the feedback factor and increases the bandwidth. Thus the gain bandwidth product remains constant.'
    },
    {
        question: ' Negative feedback in amplifier _____________',
        answers:[
            {text:'Improves the signal-to-noise ratio at input',correct:false},
            {text:'Improves the signal-to-noise ratio at output',correct:false},
            {text:'Does not improve the signal-to-noise ratio at I/O',correct:false},
            {text:'Reduces distortion',correct:true}
        ],
        explanation :'Explanation: Since the negative feedback to any amplifier reduces its overall gain; hence any noise and distortion in the amplifier is also reduced.'
    },
    {
        question: 'Voltage shunt feedback amplifier forms',
        answers:[
            {text:'A negative feedback',correct:true},
            {text:'A positive feedback',correct:false},
            {text:'Both positive and negative',correct:false},
            {text:'None of the mentioned',correct:false}
        ],
        explanation :'Explanation: A voltage shunt feedback amplifier forms a negative feedback because, any increase in the output signal results in a feedback signal into the inverting input causing a decrease in the output signal.'
    },
    {
        question: 'Why the feedback circuit is said to be negative for voltage series feedback amplifier',
        answers:[
            {text:'Feedback voltage is 180 degree out of phase with respect to input voltage',correct:true},
            {text:' Input voltage is 180 degree out of phase with respect to feedback voltage',correct:false},
            {text:'Feedback voltage is in same phase with respect to input voltage',correct:false},
            {text:'Input voltage is in same phase with respect to feedback voltage',correct:false}
        ],
        explanation :'Explanation: Voltage series feedback amplifier have the difference voltage, Vid = Vin-Vf. Therefore, the feedback voltage always opposes the input voltage and is out of phase by 180o with respect to input voltage. Hence, the feedback is said to be negative.'
    },
    {
        question: 'Define the input resistance with feedback for voltage series feedback amplifier?',
        answers:[
            {text:'RIF = (1-AB)',correct:false},
            {text:'RIF = (AB-1)',correct:false},
            {text:'RIF = (1+AB)',correct:true},
            {text:'None of the mentioned',correct:false}
        ],
        explanation :'Explanation: In feedback amplifier, the input resistance of the op-amp with feedback is (1+AB) times that of without feedback.'
    },
]

function start(){
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(()=>Math.random() -0.5);
    currentQuestionIndex = 0;
    Next();
}

function Next(){
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    explanation.classList.add('hide');
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function showQuestion(question){
        questionElement.innerText = question.question;
        question.answers.forEach(answers => {
            const button = document.createElement('button');
            button.innerText = answers.text;
            button.classList.add('btn');
            if(answers.correct){
                button.dataset.correct = answers.correct
            }
            button.addEventListener('click',selectedAnswer);
            answerButton.appendChild(button);
        })
}


function selectedAnswer (e){
    const selected = e.target;
    const correct = selected.dataset.correct;
    if(correct){
        score += 1;
        console.log(score);
    }
    setStatusClass(document.body,correct);
    Array.from(answerButton.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct);
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide');
    }else{
        proceed.innerText = 'Congratulation you have finished all lessons.';
        proceed.classList.remove('hide');
    }
    explanation.classList.remove('hide');
    explanation.innerText = questions[currentQuestionIndex].explanation;
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    
    if(correct){
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}
function clearStatusClass(element){

    element.classList.remove('wrong');
    element.classList.remove('correct');
}

//Google authentication and Google sheet append

 // Client ID and API key from the Developer Console
 var CLIENT_ID = '347108569823-16ajosbbbj1n8bc1vkj5lp429vehm1sg.apps.googleusercontent.com';
 var API_KEY = 'AIzaSyAGHFzpIY_RnTixA82GMXAw3SMMaD_Jh_Q';

 // Array of API discovery doc URLs for APIs used by the quickstart
 var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

 // Authorization scopes required by the API; multiple scopes can be
 // included, separated by spaces.
 var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

 var authorizeButton = document.getElementById('start');
 var submitButton= document.getElementById('proceed');

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
   }, function(error) {
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





 const test = 'Feedback Circuit';
 const date = new Date().toLocaleString();


 function submitResult() {
   var values = [
   [
     // Cell values ...
     nameSheet,matriSheet,test,score,date
   ],
   // Additional rows ...
 ];
 var body = {
   values: values
 };
 gapi.client.sheets.spreadsheets.values.append({
   spreadsheetId: '1Y6M6GkTVlZFPvUy-B5ORNbKZJrEb0bAKwoV7ykklirQ',
   range: 'A:Z',
   valueInputOption: 'USER_ENTERED',
   resource: body
 }).then((response) => {
   var result = response.result;
   console.log(`${result.updatedCells} cells updated.`);
 });

 }
   
