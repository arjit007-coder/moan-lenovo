const laptop = document.getElementById("laptop");

const sounds = [
  document.getElementById("moan1"),
  document.getElementById("moan2"),
  document.getElementById("moan3")
];

// 🔊 Play random sound
function playMoan() {
  let random = Math.floor(Math.random() * sounds.length);
  let sound = sounds[random];

  sound.currentTime = 0;
  sound.play();

  // 💥 shake effect
  laptop.classList.add("shake");
  setTimeout(() => {
    laptop.classList.remove("shake");
  }, 300);
}

// 🔓 SOUND UNLOCK (IMPORTANT)
document.body.addEventListener("click", () => {
  sounds.forEach(sound => {
    sound.play().then(() => {
      sound.pause();
      sound.currentTime = 0;
    });
  });
}, { once: true });

// 👆 Click = hit
laptop.addEventListener("click", playMoan);

// ⌨️ Keyboard = hit
document.addEventListener("keydown", playMoan);

// 📳 Mobile shake detection
let lastX = null;

window.addEventListener("devicemotion", (event) => {
  let x = event.accelerationIncludingGravity.x;

  if (lastX !== null && Math.abs(x - lastX) > 15) {
    playMoan();
  }

  lastX = x;
});
