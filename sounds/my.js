var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChosenColour;
var userClickedPattern = [];
var started = false;
var level = 0;


  $(document).keydown(function() {
    if (started === false) {
    nextSequence();
    started = true;
    $("h1").text("Level "+level);
    }
  });



$(".btn").click(function() {

  userChosenColour = $(this).attr("id");
  animatePress(userChosenColour);
  playSound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {

  userClickedPattern = [];
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);

  $("h1").text("Level "+level);

  // return randomChosenColour;
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100)
}

function checkAnswer(currentLevel){
  if(currentLevel === 1){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      console.log("correct");

      if (userClickedPattern.length === gamePattern.length){


        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    }else{
      console.log("wrong");
      // started = false;
      // $("h1").text("Press any Key to Start");
    }
  }

}
