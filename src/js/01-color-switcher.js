function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    const containerEl = document.querySelector('body');
    const startBtn = document.querySelector('[data-start]');
    const stopBtn = document.querySelector('[data-stop]');

    let timerId = null;

startBtn.addEventListener("click", () => {
    stopBtn.disabled = false;
    timerId = setInterval(() => {
    containerEl.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
    }, 1000);
});


stopBtn.addEventListener("click", () => {
    startBtn.disabled = false;
    clearInterval(timerId);
    stopBtn.disabled = true;
    
});