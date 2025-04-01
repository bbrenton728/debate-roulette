// Countdown timer (basic version)
let timeLeft = 600; // 10 minutes in seconds
const timerElement = document.querySelector('.timer');

const countdown = setInterval(() => {
  timeLeft--;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  if (timeLeft <= 0) {
    clearInterval(countdown);
    alert("Time's up! Audience is voting now.");
  }
}, 1000);