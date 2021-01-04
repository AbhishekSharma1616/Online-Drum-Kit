// detecting mouse click

for(var i = 0;i <document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick(){
var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml);
keyAnimation(buttonInnerHtml);
}

// detecting keyboard press

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  keyAnimation(event.key);
})

// sound function that takes action on mouse click or keyboard press

function makeSound(key){
  switch (key) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
      break;

      case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

      case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

      case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

      case "j":
      var audio = new Audio('sounds/crash.mp3')
      audio.play();
      break;

      case "k":
      var audio = new Audio('sounds/kick-bass.mp3')
      audio.play();
      break;

      case "l":
      var audio = new Audio('sounds/snare.mp3')
      audio.play();
      break;

    default: console.log(key+" keypress detected but no sound is linked to this key")

  }
}

// Key Animation 

function keyAnimation(keyPressed){
  document.querySelector("."+keyPressed).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+keyPressed).classList.remove("pressed");},100);
}
