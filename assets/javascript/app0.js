
//this is my origional app.js, I took the program in another direction




var correct = 0;
var incorrect = 0;
var outtaTime = 0;



$(document).ready(function game() {
  //start button
  $("#Start").on("click", function () {
    question()

    function question1({

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

      // end of stop watch function
//==========================================================================================================


      //start timer
      start();
      $("#displayQuestion").html("What is the first quesiton?");

      //correct answer button
      $("correct").on("click", function () {
        $("#display").html("Correct");
        question2();
        correct++;
        reset()
      });
      //incorrect answer button
      $("correct").on("click", function () {
        $("#displayQuestion").html("Wrong! The correct answer was *****");
        incorrect++;
        question2();
        reset()
      });

      //15 second timer for each question
      setTimeout(timeUp, 1000 * 15);

      function timeUp() {
        console.log("time is up");
        alert("Time is Up!");
        outtaTime++;
        reset();
        question2();
      }








    }); //question1


  }); //$("#Start").on("click", function () {
}); //$(document).ready(function game() {