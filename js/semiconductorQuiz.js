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
        question: 'The semiconductor memories are organised as __________ dimension(s) of array of memory locations',
        answers:[
            {text:'one dimensional',correct:false},
            {text:'two dimensional',correct:true},
            {text:'three dimensional',correct:false},
            {text:'none',correct:false}
        ],
        explanation :' Explanation: The semiconductor memories are organised as two dimensions of an array which consists of rows and columns.'
    },
    {
        question: 'If the microprocessor has 10 address lines, then the number of memory locations it is able to address is',
        answers:[
            {text:' 512',correct:false},
            {text:'1024',correct:true},
            {text:'2048',correct:false},
            {text:'none',correct:false}
        ],
        explanation :' Explanation:Since for n address lines, the number of memory locations able to address is 2^n.'
    },
    {
        question: 'How many MOSFETs are required for SRAM?',
        answers:[
            {text:'2',correct:false},
            {text:'4',correct:false},
            {text:'6',correct:true},
            {text:'8',correct:false}
        ],
        explanation :' Six MOSFETs are required for a typical SRAM. Each bit of SRAM is stored in four transistors which form two cross-coupled inverters.'
    },
    {
        question: 'Which of the following is an SRAM?',
        answers:[
            {text:'1T-RAM',correct:true},
            {text:'PROM',correct:false},
            {text:'EEPROM',correct:false},
            {text:'EPROM',correct:false}
        ],
        explanation :'1T-RAM is a pseudo-static RAM which is developed by MoSyS, Inc. PROM, EPROM, and EEPROM are non-volatile memories.'
    },
    {
        question: 'Which is the storage element in DRAM?',
        answers:[
            {text:'inductor',correct:false},
            {text:'capacitor',correct:true},
            {text:'resistor',correct:false},
            {text:'mosfet',correct:false}
        ],
        explanation :'DRAM uses a small capacitor whose voltage represents a binary zero which is used as a storage element in DRAM in which a single transistor cell is used to store each bit of data.'
    },
    {
        question: 'How many memory locations can be accessed by 8086?',
        answers:[
            {text:'1 M',correct:true},
            {text:'2 M',correct:false},
            {text:'3 M',correct:false},
            {text:'4 M',correct:false}
        ],
        explanation :'The 8086 processor has a 20-bit address bus, hence it can access a memory of 2^20-1 M locations.'
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
        proceed.innerText = 'Proceed to Next Lesson';
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





 const test = 'Semiconductor';
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
   

