var button = document.getElementById("clickme"),
  count = 0;
  var audio = new Audio("bruh.mp3");
button.onclick = function() {
  count += 1;
  button.innerHTML = "BRUH MOMENT: " + count;
  audio.currentTime = 0;audio.play();
};
