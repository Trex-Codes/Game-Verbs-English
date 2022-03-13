/*var sonido = new Audio("Storm RG_CoolJourney.mp3");

document.addEventListener("mouseover", function(){
    sonido.play()
}); 

*/

var v = document.getElementsByTagName("audio")[0];
var sound = false;
var boton = document.getElementById("btn_audio");
boton.addEventListener("click", function() {
    if (!sound) {
        v.play();
        this.innerHTML = "Pause";
        sound = true;
    } else {
        v.pause();
        this.innerHTML = "Play";
        sound = false;
    }
});
