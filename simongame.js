var buttonColors=["red","green","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];
var pressCount=1;
var level=0;

//generating random sequence

function nextSequence()
{
  userClickedPattern.length=0;
  level++;
  $("h1").text("Level "+level);
  var randomNumber= Math.floor(Math.random()*3)+1;
  var randomColor=buttonColors[randomNumber];
  gamePattern.push(randomColor);
  console.log(gamePattern);

  $("#"+randomColor).addClass("pressed");
  setTimeout(function(){$("#"+randomColor).removeClass("pressed");},"200");
  playSound(randomColor);
}

//button clicks

$(".btn").click(function(){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  $(this).addClass("pressed");
  setTimeout(function(){$("#"+userChosenColor).removeClass("pressed");},"200");
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);//???????

});

//playing sounds
function playSound(name)
{
  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
}

//starting the game
$(document).keypress(function()
{
  if(pressCount===1){
    nextSequence();

  }
  pressCount=0;//flag variable
});

//comparing sequences

function checkAnswer(currentLevel){
  //correct answer
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]) //???????
  {
    console.log("success");
    if(userClickedPattern.length===gamePattern.length) //user has finished clicking the buttons
    {
      setTimeout(function(){nextSequence();},"1000");

    }
  }
  //game-over
  else {
    startOver();
  }
}

function startOver()
{
  playSound("wrong");
  console.log("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },"250");
  $("h1").text("Game Over, Press Any Key To Restart");
  pressCount=1;
  gamePattern.length=0;
  userClickedPattern.length=0;
  level=0;
}
