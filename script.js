const laptop = document.getElementById("laptop");

const sounds = [
  document.getElementById("moan1"),
  document.getElementById("moan2")
];

function playMoan() {
  let random = Math.floor(Math.random() * sounds.length);
  sounds[random].currentTime = 0;
  sounds[random].play();
}

// Click = hit
laptop.addEventListener("click", playMoan);

// Keyboard = hit
document.addEventListener("keydown", playMoan);

// Mobile shake detection
let lastX = null;

window.addEventListener("devicemotion", (event) => {
  let x = event.accelerationIncludingGravity.x;

  if (lastX !== null && Math.abs(x - lastX) > 15) {
    playMoan();
  }

  lastX = x;
});