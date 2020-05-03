gamePattern=[];
userPattern=[];
highscore=[0];
colors=["red","blue","yellow","green"]
started=false;
level=0;

$("body").keydown(function(){
if(!started){
  $("h1").text("Level "+level);
  newColor();
  started=true;

}
});




function newColor(){
  userPattern=[];
  level++;
  $("h1").text("Level "+ level);
  randomGen=Math.floor(Math.random()*4);
  randomColor=colors[randomGen];
  $("."+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  gamePattern.push(randomColor);
  console.log(gamePattern)
  audioMaker(randomColor);
}


$(".btn").click(function(){
chosenColor= $(this).attr("id");
userPattern.push(chosenColor);
console.log(userPattern);
audioMaker(chosenColor);
$("."+chosenColor).addClass("pressed")
  setTimeout(function(){
      $("."+chosenColor).removeClass("pressed")
    },100);
checkPattern(userPattern.length-1);
});


function checkPattern(currentlevel){
  if(userPattern[currentlevel]===gamePattern[currentlevel]){
    if(userPattern.length===gamePattern.length){
      setTimeout(function(){
        newColor();
      },1000);
    }
  }
  else{
    $("body").addClass("game-over");
    audioMaker("wrong");
    $("h1").text();
    setTimeout(function(){
      $("body").removeClass("game-over");
      $("h1").text( "Press a key to continue");
    },500);
   $("h1").text("Highscore "+Math.max.apply(Math,highscore));
startOver();
}
}

function startOver(){
  highscore.push(level);
  userPattern=[];
  gamePattern=[];
  started=false;
  level=0;
}



function audioMaker(color){
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();
}
