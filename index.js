alert("WARNING:THE AUDIO IS VERY LOUD PLEASE REDUCE VOLUME IF YOU DO NOT WANT TO BECOME DEAF\n AND DO NOT PRESS W MULTIPLE TIMES IT WILL BE VERY VERY NOSIY AND LOUD.\nP.S.Once check console log when u press/click on w.")



for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function clicked() {
        var key=this.innerHTML;
        sound(key);
        buttonAnimation(key);
    });
    document.addEventListener("keyup",function(event){
       sound(event.key);
       buttonAnimation(event.key);
    });
}
function sound(key){
    switch (key) {
        case 'w':
            console.log("Sorry had to do it ͡° ͜ʖ ͡°.")
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(key);
    }
}

function buttonAnimation(key) {
var activeButton=document.querySelector("."+key);
if(key==="w"){
    activeButton.classList.add("pressed2");
    setTimeout(function() {
        activeButton.classList.remove("pressed2");
      }, 3000);

}
else{
activeButton.classList.add("pressed");
setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);}



}