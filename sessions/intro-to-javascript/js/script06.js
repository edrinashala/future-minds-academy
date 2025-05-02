const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');
const exit_quiz = document.querySelector('.exit_quiz');
const continue_btn = document.querySelector('#continue_btn');
const quiz_box = document.querySelector('.quiz_box');
const timer_sec = document.querySelector('.timer_sec');
const que_text = document.querySelector('.que_text');
const option_list = document.querySelector('.option_list');
const time_line = document.querySelector('.time_line');
const next_btn = document.querySelector('.next_btn');

let countTime = 15;
let timerLine = 0;
let currentQ = 0;
let timerInt;

start_btn.addEventListener('click', ()=>{
    info_box.classList.add('activeInfo');
    start_btn.style.display = "none";
});
exit_quiz.addEventListener('click', ()=>{
    info_box.classList.remove('activeInfo');
    start_btn.style.display = "block";
});
continue_btn.addEventListener('click', ()=>{
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');
    loadQuiz();
    loadQuestion(0);
});

next_btn.addEventListener('click', ()=>{
    if(currentQ < questions.length-1){
        currentQ++;
        loadQuestion(currentQ);
    }
});

function loadQuiz(){
    timerInt = setInterval(()=>{
        if(countTime!=0){ 
            countTime--; 
            timerLine +=37;
            timer_sec.textContent = countTime;
            time_line.style.width = timerLine + "px";
        }else { 
            clearInterval(timerInt); 
        }
    }, 1000);
}

function loadQuestion(q){
    que_text.textContent = questions[q].question;
    let holdOptions = questions[q].options;

    option_list.innerHTML = '';
    for(let i=0; i<holdOptions.length; i++){
        option_list.innerHTML +=`
            <div class="option" onclick="selectOpt(this)"><span>${holdOptions[i]}</span></div>
        `;
    }
}

function selectOpt(o){
    disableOpt();
    if(o.textContent === questions[currentQ].answer){
        o.classList.add('correct');
    }
    else {
        o.classList.add('incorrect');
    }
    clearInterval(timerInt);
}

function disableOpt(){
    let allopt = option_list.children;
    for(let i=0; i<allopt.length; i++){
        allopt[i].classList.add('disabled');
    }
}