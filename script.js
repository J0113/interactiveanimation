// Video player als variable intellen
var pyr = document.getElementById("player");

// Video starten (Chrome die start niet als er niet eerst pause wordt gecalled)
pyr.pause();
pyr.play();

// Check of de video aan het spelen is
if (pyr.paused) {
  console.log("Error autoplay");
  launch_notifi();
}

// Video is klaar met spelen.
pyr.addEventListener('ended', function(){
    console.log("Done!");
    replaybtn();
});

// Wissel tussen de knoppen en de video
function replaybtn() {
  if (pyr.style.display === "none") {
    pyr.style.display = "inline-block";
    pyr.play();
  } else {
    pyr.style.display = "none";
  }
  var x = document.getElementById("buttons");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

// Notificatie
function launch_notifi() {
    var x = document.getElementById("notifi")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
