let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(milliseconds) {
  let hours = Math.floor(milliseconds / 3600000); // 1 hour = 3,600,000 ms
  let minutes = Math.floor((milliseconds % 3600000) / 60000); // 1 minute = 60,000 ms
  let seconds = Math.floor((milliseconds % 60000) / 1000); // 1 second = 1,000 ms
  let ms = Math.floor(milliseconds % 1000); // Milliseconds

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10); // Update every 10ms for smoother milliseconds display
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize buttons
stopButton.disabled = true;