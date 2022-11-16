import Notiflix from 'notiflix';


const form = document.querySelector('.form');
form.addEventListener('submit', onForm);



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onForm(e) {
  e.preventDefault()


  const delayValue = Number(e.currentTarget.delay.value);
  const stepValue = Number(e.currentTarget.step.value);
  const amountValue = Number(e.currentTarget.amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayValue += stepValue
  }

};