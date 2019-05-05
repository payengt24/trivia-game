$(document).ready(function () {

    var questions = [{
            q: 'How many colors are there in a rainbow?',
            answers: [7, 10, 5, 12],
            correctAnswer: 7
        },
        {
            q: 'What do you call a time span of one thousand years?',
            answers: ['Millennium', 'Century', 'Decade', 'Myrietes'],
            correctAnswer: 'Millennium'
        },{
            q: 'How many degrees are found in a circle?',
            answers: [360, 180, 50, 100],
            correctAnswer: 360
        },{
            q: 'How many squares are there on a chess board?',
            answers: [64, 65, 120, 30],
            correctAnswer: 64
        },{
            q: 'What sort of creature did St George allegedly slay?',
            answers: ['Dragon', 'Snake', 'Mermaid', 'Wolf'],
            correctAnswer: 'Dragon'
        },
    ]

//=====Global Variable=====
var timer = 60;
var clockRunning = false
var intervalId;
var correct = 0;
var incorrect = 0;

//======cache===========
var timeContent = $('.timerContent');
var questionDisplay = $('.questionsContent');
var buttonDone = $('.buttonDone');
var result = $('.result')

result.hide()

var startGame = function () {

    $("#startButton").remove();

    if (!clockRunning) {

        buttonDone.empty()
        timeContent.empty();
        questionDisplay.empty();
        buttonDone.show();
        timeContent.show();
        questionDisplay.show();
         correct = 0;
        incorrect = 0;
        timeContent.append(" <h1 id='timeRemaining'>Time Remaining: <span id='time'>00:60</span></h1>");
        timer = 60;
        intervalId = setInterval(count, 1000)
        clockRunning = true
        for (let i = 0; i < questions.length; i++) {
            questionDisplay.append('<h2>' + questions[i].q + '</h2>')
            for(let j = 0; j < questions[i].answers.length; j++){
                questionDisplay.append('<input class="radioBtn" type="radio" name=' + i + ' value= ' + questions[i].answers[j] + '>' + questions[i].answers[j] +'</input>')
            }
        }
        
        buttonDone.append('<button type="button" class="btn btn-info" id="done">Done</button>')
        
    }
}

buttonDone.on('click', function () {

    stopTime();
    buttonDone.hide();
    timeContent.hide();
    questionDisplay.hide();
    clockRunning = false;



    $.each($('input[name="0"]:checked'), function (){
        if ($(this).val() == questions[0].correctAnswer) {
            correct++;
          }
          else {
            incorrect++;
          }
    })

    $.each($('input[name="1"]:checked'), function (){
        if ($(this).val() == questions[1].correctAnswer) {
            correct++;
          }
          else {
            incorrect++;
          }
    })

    $.each($('input[name="2"]:checked'), function (){
        if ($(this).val() == questions[2].correctAnswer) {
            correct++;
          }
          else {
            incorrect++;
          }
    })

    $.each($('input[name="3"]:checked'), function (){
        if ($(this).val() == questions[3].correctAnswer) {
            correct++;
          }
          else {
            incorrect++;
          }
    })

    $.each($('input[name="4"]:checked'), function (){
        if ($(this).val() == questions[4].correctAnswer) {
            correct++;
          }
          else {
            incorrect++;
          }
    })

    $('#correct').text(correct);
    $('#incorrect').text(incorrect);
    $('#unanswered').text(questions.length - (correct + incorrect));

    result.show()

})

var stopTime = function () {
    clearInterval(intervalId);
    clockRunning = false;
    timeContent.hide();
    questionDisplay.hide();
    buttonDone.hide();
    result.show()
}

var count = function () {
    timer--;
    var displayTime = timeConverter(timer)
    $('#time').text(displayTime)

    if (timer === 0) {
        stopTime();
        timeContent.hide();  
    }

}

var timeConverter = function (timer) {
    var minutes = Math.floor(timer / 60);
    var seconds = timer - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}


$('#startButton').on('click', function () {
    $(this).hide();
    timeContent.show();
    startGame()

})

$('#playAgain').on('click', function () {
    result.hide();

    startGame()
})

})