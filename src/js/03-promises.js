import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onBtnSub);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);

};

function onBtnSub(e) {
  e.preventDefult()
}

const FirstDelay = Number(e.currentTargete.elements.delay.value);
const DelayStep = Number(e.currentTarget.elements.step.value);
const Amount = Number(e.currentTarget.elements.amount.value);

