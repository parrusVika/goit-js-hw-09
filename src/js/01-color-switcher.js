const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


startBtn.addEventListener('click', onColorBody);
stopBtn.addEventListener('click', onStopColorBody)

let intervalId = null

function onColorBody() {
    startBtn.setAttribute('disabled', true);
    intervalId = setInterval(() => {

        document.body.style.backgroundColor = getRandomHexColor();

    }, 1000)

};

function onStopColorBody() {
    clearInterval(intervalId);
    startBtn.removeAttribute('disabled');

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




