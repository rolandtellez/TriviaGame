var startButton = $("<button>").text("Start");

$("#gameplay-area").append(startButton);

var correctAnswers = 0;
var wrongAnswers = 0;
var timeLeft = 15;
var intervalID;


function newGame() {
    correctAnswers = 0;
    wrongAnswers = 0;
    timeLeft = 15;
    $("#gameplay-area").empty();
 
    // timer
    $("<div id='time-left'>Time remaining: 15</div><br>").appendTo("#gameplay-area");
    clearInterval(intervalID);
    intervalID = setInterval(function(){ decrement(); }, 1000);
    setTimeout(function (){
        quote2();}, 
        15000
    );

    // Question 1
    var question1 = $("<p class='question'>").text("I am serious. And don’t call me Shirley.");
    var answers1 = $("<p class='answer-choices'>").append("<input class='answer-1' type='radio' name='answer-1'> Vacation   <input class='answer-1' type='radio' name='answer-1'> Spaceballs   <input class='answer-1' type='radio' name='answer-1' value='correct'> Airplane!   <input class='answer-1' type='radio' name='answer-1'> Caddyshack<br><br>");
    $("#gameplay-area").append(question1);
    $("#gameplay-area").append(answers1);
    $(".answer-1").on("click", function () {
        $("input[name='answer-1']:checked").val();
        console.log(this.value);
    
        if (this.value === 'correct') {
            correctAnswers++;
        } else {
            wrongAnswers++
        };
        console.log(correctAnswers);
        console.log(wrongAnswers);
        quote2();

    })
}


    // Question 2 function
function quote2(){
    timeLeft = 15;
    $("#gameplay-area").empty();

    // timer
    $("<div id='time-left'>Time remaining: 15</div><br>").appendTo("#gameplay-area");
    clearInterval(intervalID);
    intervalID = setInterval(function(){ decrement(); }, 1000);
    clearTimeout();
    setTimeout(function (){
        quote3();}, 
        15000
    );

    var question2 = $("<p class='question'>").text("Snakes. Why’d it have to be snakes?");
    var answers2 = $("<p class='answer-choices'>").append("<input class='answer-2' type='radio' name='answer-2'> The Goonies   <input class='answer-2' type='radio' name='answer-2' value='correct'> Raiders of the Lost Ark   <input class='answer-2' type='radio' name='answer-2'> First Blood   <input class='answer-2' type='radio' name='answer-2'> Snakes on a Plane<br><br>");
    $("#gameplay-area").append(question2);
    $("#gameplay-area").append(answers2);
    $(".answer-2").on("click", function () {
        $("input[name='answer-2']:checked").val();
        console.log(this.value);
    
        if (this.value === 'correct') {
            correctAnswers++;
        } else {
            wrongAnswers++
        };
        console.log(correctAnswers);
        console.log(wrongAnswers);
        quote3();
    })
}


    // Question 3 function
function quote3(){
    timeLeft = 15;
    $("#gameplay-area").empty();

    // timer
    $("<div id='time-left'>Time remaining: 15</div><br>").appendTo("#gameplay-area");
    clearInterval(intervalID);
    intervalID = setInterval(function(){ decrement(); }, 1000);
    clearTimeout();
    setTimeout(function (){
        quote4();}, 
        15000
    );

    var question3 = $("<p class='question'>").text("We came. We saw. We kicked its ass.");
    var answers3 = $("<p class='answer-choices'>").append("<input class='answer-3' type='radio' name='answer-3'> Beverly Hills Cop   <input class='answer-3' type='radio' name='answer-3'> Stripes   <input class='answer-3' type='radio' name='answer-3' value='correct'> Ghostbusters   <input class='answer-3' type='radio' name='answer-3'> Bill and Ted's Excellent Adventure<br><br>");
    $("#gameplay-area").append(question3);
    $("#gameplay-area").append(answers3);
    $(".answer-3").on("click", function () {
        $("input[name='answer-3']:checked").val();
        console.log(this.value);

        if (this.value === 'correct') {
            correctAnswers++;
        } else {
            wrongAnswers++
        };
        console.log(correctAnswers);
        console.log(wrongAnswers);
        quote4();
    })
}


    // Question 4 function
function quote4(){
    timeLeft = 15;
    $("#gameplay-area").empty();

    // timer
    $("<div id='time-left'>Time remaining: 15</div><br>").appendTo("#gameplay-area");
    clearInterval(intervalID);
    intervalID = setInterval(function(){ decrement(); }, 1000);
    clearTimeout();
    setTimeout(function (){
        quote5();}, 
        15000
    );

    var question4 = $("<p class='question'>").text("Don’t mess with the bull, young man. You’ll get the horns.");
    var answers4 = $("<p class='answer-choices'>").append("<input class='answer-4' type='radio' name='answer-4' value='correct'> The Breakfast Club   <input class='answer-4' type='radio' name='answer-4'> Back to the Future   <input class='answer-4' type='radio' name='answer-4'> Fast Times At Ridgemont High   <input class='answer-4' type='radio' name='answer-4'> Better Off Dead<br><br>");
    $("#gameplay-area").append(question4);
    $("#gameplay-area").append(answers4);
    $(".answer-4").on("click", function () {
        $("input[name='answer-4']:checked").val();
        console.log(this.value);

        if (this.value === 'correct') {
            correctAnswers++;
        } else {
            wrongAnswers++
        };
        console.log(correctAnswers);
        console.log(wrongAnswers);
        quote5();
    })
}


    // Question 5 function
function quote5(){
    timeLeft = 15;
    $("#gameplay-area").empty();

    // timer
    $("<div id='time-left'>Time remaining: 15</div><br>").appendTo("#gameplay-area");
    clearInterval(intervalID);
    intervalID = setInterval(function(){ decrement(); }, 1000);
    clearTimeout();
    setTimeout(function (){
        quote6();}, 
        15000
    );

    var question5 = $("<p class='question'>").text("Life moves pretty fast. You don’t stop and look around once in awhile, you could miss it.");
    var answers5 = $("<p class='answer-choices'>").append("<input class='answer-5' type='radio' name='answer-5'> Say Anything   <input class='answer-5' type='radio' name='answer-5'> Weird Science   <input class='answer-5' type='radio' name='answer-5'> Can't Buy Me Love   <input class='answer-5' type='radio' name='answer-5' value='correct'> Ferris Bueller's Day Off<br><br>");
    $("#gameplay-area").append(question5);
    $("#gameplay-area").append(answers5);
    $(".answer-5").on("click", function () {
        $("input[name='answer-5']:checked").val();
        console.log(this.value);

        if (this.value === 'correct') {
            correctAnswers++;
        } else {
            wrongAnswers++
        };
        console.log(correctAnswers);
        console.log(wrongAnswers);
        quote6();
    })
}


    // Question 6 function
function quote6(){
    timeLeft = 15;
    $("#gameplay-area").empty();

    // timer
    $("<div id='time-left'>Time remaining: 15</div><br>").appendTo("#gameplay-area");
    clearInterval(intervalID);
    intervalID = setInterval(function(){ decrement(); }, 1000);
    clearTimeout();
    setTimeout(function (){
        quote7();}, 
        15000
    );

    var question6 = $("<p class='question'>").text("Carpe Diem boys. Seize the day. Make your lives extraordinary.");
    var answers6 = $("<p class='answer-choices'>").append("<input class='answer-6' type='radio' name='answer-6'> Stand By Me   <input class='answer-6' type='radio' name='answer-6' value='correct'> Dead Poets Society   <input class='answer-6' type='radio' name='answer-6'> The Outsiders   <input class='answer-6' type='radio' name='answer-6'> Risky Business<br><br>");
    $("#gameplay-area").append(question6);
    $("#gameplay-area").append(answers6);
    $(".answer-6").on("click", function () {
        $("input[name='answer-6']:checked").val();
        console.log(this.value);

        if (this.value === 'correct') {
            correctAnswers++;
        } else {
            wrongAnswers++
        };
        console.log(correctAnswers);
        console.log(wrongAnswers);
        quote7();
    })
}


    // Quesion 7 function
function quote7(){
    timeLeft = 15;
    $("#gameplay-area").empty();

    // timer
    $("<div id='time-left'>Time remaining: 15</div><br>").appendTo("#gameplay-area");
    clearInterval(intervalID);
    intervalID = setInterval(function(){ decrement(); }, 1000);
    clearTimeout();
    setTimeout(function (){
        endGame();}, 
        15000
    );

    var question7 = $("<p class='question'>").text("I could disappear forever and it wouldn’t make any difference.");
    var answers7 = $("<p class='answer-choices'>").append("<input class='answer-7' type='radio' name='answer-7' value='correct'> Sixteen Candles   <input class='answer-7' type='radio' name='answer-7'> Pretty in Pink   <input class='answer-7' type='radio' name='answer-7'> The Breakfast Club   <input class='answer-7' type='radio' name='answer-7'> Dirty Dancing<br>");
    $("#gameplay-area").append(question7);
    $("#gameplay-area").append(answers7);
    $(".answer-7").on("click", function () {
        $("input[name='answer-7']:checked").val();
        console.log(this.value);

        if (this.value === 'correct') {
            correctAnswers++;
        } else {
            wrongAnswers++
        };
        console.log(correctAnswers);
        console.log(wrongAnswers);
        endGame();
    })
}


    //var quoteArray = [
    //    "I am serious. And don’t call me Shirley",
    //    "Snakes. Why’d it have to be snakes?",
    //    "We came. We saw. We kicked its ass.",
    //    "Don’t mess with the bull, young man. You’ll get the horns.",
    //    "Life moves pretty fast. You don’t stop and look around once in awhile, you could miss it.",
    //    "Carpe Diem boys. Seize the day. Make your lives extraordinary.",
    //    "I could disappear forever and it wouldn’t make any difference.",
    //]

    //for (var q = 0; q < quoteArray.length; q++){
    //   var quotes = $("<p class='questions'>").text(quoteArray[q]);
    //    $("#gameplay-area").append(quotes);
    //}




//}

function decrement() {
    timeLeft--;
    $("#time-left").text("Time remaining: " + timeLeft);
    if (timeLeft === 0) {
        timeLeft = 0;
        clearInterval(intervalID);
    }
};

function endGame() {
    clearInterval(intervalID);
    $("#gameplay-area").empty();
    $("#gameplay-area").append("<p>Total right answers: " + correctAnswers + "</p>");
    $("#gameplay-area").append("<p>Total wrong answers: " + wrongAnswers + "</p>");
    var playAgain = $("<button>").text("Play Again");
    $("#gameplay-area").append(playAgain);
    $(playAgain).on("click", function () {
        newGame();
    });
};

$(startButton).on("click", function () {
    newGame()
});

// to do:
// display questions and answers DONE
// determine correct answers and wrong answers DONE-ish
// increment correct answers and wrong answers and not answered DONE
// set timer and display timer DONE
// clear div when time's up and display total correct, wrong, and unanswered. and new game button DONE

// or:
// after start button...display question 1 and answers and start timer
// determine answer selected...increment right, wrong, or not answered
// clear div and display question 2 when first question answered or timer runs out