var correct = 0;
var incorrect = 0;
var outtaTime = 0;



$(document).ready(function game() {
  //start button
  $("#Start").on("click", function(){ 
    question()
    function question1({
    //need to find a way to display the questions

    //start timer
    start();
    $("#display").html("What is the first quesiton?");

    //correct answer button
    $("correct").on("click", function () {
      $("#display").html("Correct");
      correct++;
    });
    //incorrect answer button
    $("correct").on("click", function () {
      $("#display").html("Wrong! The correct answer was *****");
      incorrect++;
    });

    //15 second timer for each question
    setTimeout(timeUp, 1000 * 15);

    function timeUp() {
      console.log("time is up");
      alert("Time is Up!");
      outtaTime++;
      question2();
    }



    //stopwatch functions for the display
    function start() {
      if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
      }
    }

    function reset() {

      time = 0;

      // DONE: Change the "display" div to "00:00."
      $("#display").text("00:00");

      // DONE: Empty the "laps" div.
      $("#laps").text("");
    }

    function timeConverter(t) {

      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);

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
  });//question1





  
  }); //$("#Start").on("click", function () {
}); //$(document).ready(function game() {