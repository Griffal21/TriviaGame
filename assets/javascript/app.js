var correct = 0;
var incorrect = 0;
var outtaTime = 0;


//These functions hide and display the individual question, start block, and recap block

function hideQuestion1() {
  var q1 = document.getElementById("question1");
  if (q1.style.display === "none") {
    q1.style.display = "block";
  } else {
    q1.style.display = "none";
  }
};

function hideQuestion2() {
  var q2 = document.getElementById("question2");
  if (q2.style.display === "none") {
    q2.style.display = "block";
  } else {
    q2.style.display = "none";
  }
};

function hideQuestion3() {
  var q3 = document.getElementById("question3");
  if (q3.style.display === "none") {
    q3.style.display = "block";
  } else {
    q3.style.display = "none";
  }
};

function hideQuestion4() {
  var q4 = document.getElementById("question4");
  if (q4.style.display === "none") {
    q4.style.display = "block";
  } else {
    q4.style.display = "none";
  }
};

function hideStart() {
  var st = document.getElementById("start");
  if (st.style.display === "none") {
    st.style.display = "block";
  } else {
    st.style.display = "none";
  }
}

function hideRecap() {
  var re = document.getElementById("recap");
  if (re.style.display === "none") {
    re.style.display = "block";
  } else {
    re.style.display = "none";
  }
}

//these variables are going to be used for the timeout functions to clear the timeouts
var w;
var x;
var y;
var z;

//this function is supposed to be called when the page loads, it hides the questions and leaves the start block displayed
$(document).ready(function start() {
  hideQuestion1();
  hideQuestion2();
  hideQuestion3();
  hideQuestion4();
  hideRecap();

  //this function is supposed to be called when the start button is clicked, it hides the start block and displays the first question
  $("#Start").on("click", function Q1func() {
    hideStart(); //hide start box
    hideQuestion1(); //display question 1
    startTimer();
    w = setTimeout(OuttaTime1, 30000);
  });

  $("#Correct1").on("click", function Q1Correct() {
    alert("Correct!")
    correct++;
    resetTimer();
    Q2func();
    clearTimeout(w);
  });

  $("#inCorrect10").on("click", function Q1inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    Q2func();
    clearTimeout(w);
  });

  $("#inCorrect11").on("click", function Q1inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    Q2func();
    clearTimeout(w);
  });

  $("#inCorrect12").on("click", function Q1inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    Q2func();
    clearTimeout(w);
  });
  

  function Q2func() {
    hideQuestion1(); //hide question 1
    hideQuestion2(); //display question 2
    startTimer();
    x = setTimeout(OuttaTime2, 30000);
  };

  $("#Correct2").on("click", function Q2Correct() {
    alert("Correct!")
    correct++;
    resetTimer();
    Q3func();
    clearTimeout(x);
  });

  $("#inCorrect20").on("click", function Q2inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    Q3func();
    clearTimeout(x);
  });

  $("#inCorrect21").on("click", function Q1inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    Q3func();
    clearTimeout(x);
  });

  $("#inCorrect22").on("click", function Q1inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    Q3func();
    clearTimeout(x);
  });

  function Q3func() {
    hideQuestion2(); //hide question 2
    hideQuestion3(); //display question 3
    startTimer();
    y = setTimeout(OuttaTime3, 30000);
  };

  $("#Correct3").on("click", function Q3Correct() {
    alert("Correct!")
    correct++;
    resetTimer();
    Q4func();
    clearTimeout(y);
  });

  $("#inCorrect30").on("click", function Q3inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    Q4func();
    clearTimeout(y);
  });

  $("#inCorrect31").on("click", function Q1inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    Q4func();
    clearTimeout(y);
  });

  $("#inCorrect32").on("click", function Q1inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    Q4func();
    clearTimeout(y);
  });

  function Q4func() {
    hideQuestion3(); //hide question 3
    hideQuestion4(); //display question 4
    startTimer();
    z = setTimeout(OuttaTime4, 30000);
  };

  $("#Correct4").on("click", function Q4Correct() {
    alert("Correct!")
    correct++;
    resetTimer();
    recapFunc();
    clearTimeout(z);
  });

  $("#inCorrect40").on("click", function Q4inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    recapFunc();
    clearTimeout(z);
  });

  $("#inCorrect41").on("click", function Q1inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    recapFunc();
    clearTimeout(z);
  });

  $("#inCorrect42").on("click", function Q1inCorrect() {
    alert("Incorrect!")
    incorrect++;
    resetTimer();
    recapFunc();
    clearTimeout(z);
  });

  function recapFunc() {
    hideQuestion4();
    hideRecap();
    $("#recapCorr").html("You answered " + correct + " questions Correctly!");
    $("#recapinCorr").html("You answered " + incorrect + " questions Incorrectly!");
    $("#outta").html("You ran outta time " + outtaTime + " times!");
  };

  
  //These are the functions to display the next question when time runs out
  function OuttaTime1() {
    alert ("You Ran Outta Time!");
    outtaTime++;
    resetTimer();
    Q2func();
  }
  
  function OuttaTime2() {
    alert ("You Ran Outta Time!");
    outtaTime++;
    resetTimer();
    Q3func();
  }
  
  function OuttaTime3() {
    alert ("You Ran Outta Time!");
    outtaTime++;
    resetTimer();
    Q4func();
  }
  
  function OuttaTime4() {
    alert ("You Ran Outta Time!");
    outtaTime++;
    resetTimer();
    recapFunc();
  }

  //function used to start timer for each question
function startTimer() {
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}

//fucntion used to stop the timer for each question
function stopTimer() {
  clearInterval(intervalId);
  clockRunning = false;
}

//this is taken from the stopwatch program.  It will reset the displayed time for each question.
var intervalId;
var clockRunning = false;
var time = 0;

//this will display the timer for each question
function resetTimer() {
  time = 0;
  $("#displayTime").text("00:00");
}

function count() {
  time++;

  var converted = timeConverter(time);
  console.log(converted);

  $(".displayTime").text(converted);
}


//this is taken from the stopwatch program.  It will display the time in a readable format.
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

}); //function start()
