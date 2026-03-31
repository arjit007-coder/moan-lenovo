const laptop = document.getElementById("laptop");

const sounds = [
  document.getElementById("moan1"),
  document.getElementById("moan2"),
  document.getElementById("moan3")
];

// 🔊 Play random sound + effects
function playMoan() {
  // 🛑 stop all sounds first (overlap fix)
  sounds.forEach(s => {
    s.pause();
    s.currentTime = 0;
  });

  // 🎲 pick random sound
  let random = Math.floor(Math.random() * sounds.length);
  let sound = sounds[random];

  sound.play();

  // 💥 SHAKE EFFECT
  laptop.classList.add("shake");
  setTimeout(() => {
    laptop.classList.remove("shake");
  }, 200);

  // 🔍 ZOOM EFFECT
  laptop.style.transform = "scale(1.2)";
  setTimeout(() => {
    laptop.style.transform = "scale(1)";
  }, 200);

  // 🔥 RED FLASH
  document.body.style.background = "red";
  setTimeout(() => {
    document.body.style.background = "black";
  }, 100);
}

// 🔓 SOUND UNLOCK (browser restriction fix)
document.body.addEventListener("click", () => {
  sounds.forEach(sound => {
    sound.play().then(() => {
      sound.pause();
      sound.currentTime = 0;
    }).catch(() => {});
  });
}, { once: true });

// 👆 Click = hit
laptop.addEventListener("click", playMoan);

// ⌨️ Keyboard = hit
document.addEventListener("keydown", playMoan);

// 📳 Mobile shake detection
let lastX = null;

window.addEventListener("devicemotion", (event) => {
  let x = event.accelerationIncludingGravity?.x;

  if (lastX !== null && Math.abs(x - lastX) > 15) {
    playMoan();
  }

  lastX = x;
});
