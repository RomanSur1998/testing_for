const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Функция для форматирования времени в формат "hh:mm:ss"
const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

// Функция для обновления таймера на странице
const updateTimerDisplay = (seconds) => {
  timerEl.textContent = formatTime(seconds);
};

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let remainingSeconds = seconds;

    // Обновляем таймер каждую секунду
    const intervalId = setInterval(() => {
      remainingSeconds--;
      updateTimerDisplay(remainingSeconds);

      if (remainingSeconds === 0) {
        clearInterval(intervalId); // Очищаем интервал после завершения анимации
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
