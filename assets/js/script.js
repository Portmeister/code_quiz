var question1 = {question:"Commonly used data types DO NOT include:", answer1:"strings", answer2:"booleans", answer3:"alerts", answer4:"numbers"};
var question2 = {question:"The condition in an if / else statement is enclosed within _____.", answer1:"quotes", answer2:"curly brackets", answer3:"parentheses", answer4:"square brackets"};
var question3 = {question:"Arrays in JavaScript can be used to store _____.", answer1:"numbers and strings", answer2:"other arrays", answer3:"booleans", answer4:"all of the above"};
var question4 = {question:"String values must be enclosed within _____ when being assigned to variables.", answer1:"commas", answer2:"curley brackets", answer3:"quotes", answer4:"parentheses"};
var question5 = {question:"A very useful tool used during development and debugging for printing content to the debugger is", answer1:"JavaScript", answer2:"terminal / bash", answer3:"for loops", answer4:"console.log"};
var timeLeft = 70;

function firstQuestion() {
    document.getElementById("main-page").style.display = "none";
    document.getElementById("first-question").style.display = "block";
    document.getElementById("ask1").innerHTML = question1.question;
    document.getElementById("ask1answer1").innerHTML = question1.answer1;
    document.getElementById("ask1answer2").innerHTML = question1.answer2;
    document.getElementById("ask1answer3").innerHTML = question1.answer3;
    document.getElementById("ask1answer4").innerHTML = question1.answer4;

    var downloadTimer = setInterval(function() {
        timeLeft--;
        document.getElementById("time").textContent = "Time: " + timeLeft;
        if (timeLeft <= 0)
            clearInterval(downloadTimer);
        }, 1000);
}

function secondQuestion() {
    document.getElementById("first-question").style.display = "none";
    document.getElementById("second-question").style.display = "block";
    document.getElementById("ask2").innerHTML = question2.question;
    document.getElementById("ask2answer1").innerHTML = question2.answer1;
    document.getElementById("ask2answer2").innerHTML = question2.answer2;
    document.getElementById("ask2answer3").innerHTML = question2.answer3;
    document.getElementById("ask2answer4").innerHTML = question2.answer4;
}

function thirdQuestion() {
    document.getElementById("second-question").style.display = "none";
    document.getElementById("third-question").style.display = "block";
    document.getElementById("ask3").innerHTML = question3.question;
    document.getElementById("ask3answer1").innerHTML = question3.answer1;
    document.getElementById("ask3answer2").innerHTML = question3.answer2;
    document.getElementById("ask3answer3").innerHTML = question3.answer3;
    document.getElementById("ask3answer4").innerHTML = question3.answer4;
}

function fourthQuestion() {
    document.getElementById("third-question").style.display = "none";
    document.getElementById("fourth-question").style.display = "block";
    document.getElementById("ask4").innerHTML = question4.question;
    document.getElementById("ask4answer1").innerHTML = question4.answer1;
    document.getElementById("ask4answer2").innerHTML = question4.answer2;
    document.getElementById("ask4answer3").innerHTML = question4.answer3;
    document.getElementById("ask4answer4").innerHTML = question4.answer4;
}

function fifthQuestion() {
    document.getElementById("fourth-question").style.display = "none";
    document.getElementById("fifth-question").style.display = "block";
    document.getElementById("ask5").innerHTML = question5.question;
    document.getElementById("ask5answer1").innerHTML = question5.answer1;
    document.getElementById("ask5answer2").innerHTML = question5.answer2;
    document.getElementById("ask5answer3").innerHTML = question5.answer3;
    document.getElementById("ask5answer4").innerHTML = question5.answer4;
}

function highScores() {
    document.getElementById("fifth-question").style.display = "none";
    document.getElementById("high-scores").style.display = "block";
    document.getElementById("score").innerHTML = "Your score is " + timeLeft;
    localStorage.setItem("name", "John Doe");
}

document.getElementById("ask1answer3").addEventListener("click", timeleft -= 10);

/*
document.getElementById("ask1answer1").addEventListener("click", timeLeft - 10);
document.getElementById("ask1answer2").addEventListener("click", timeLeft - 10);
document.getElementById("ask1answer4").addEventListener("click", timeLeft - 10);
*/  