

for (var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var buttonclick=this.innerHTML;
  keyFinder(buttonclick);
  animations(buttonclick);
});
}
document.addEventListener("keydown",function(event){
  var keyy=event.key;
  keyFinder(keyy);
  animations(keyy)
});


function keyFinder(keyclick){
  switch (keyclick) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "k":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "l":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
    default:console.log(keyclick)

  }
};

function animations(eventkey)
{
  animClass=document.querySelector("."+eventkey).classList.toggle("pressed");
  setTimeout(timee,100)
  function timee(){
    document.querySelector("."+eventkey).classList.toggle("pressed")
  }
}
