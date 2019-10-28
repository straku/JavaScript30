const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setRotation(element, degrees) {
  // disable animation for cases when rotation changes from 360 to 0 degrees
  if (degrees === 0) {
    element.style['transition-duration'] = '0s';
  } else {
    element.style['transition-duration'] = '';
  }

  element.style.transform = `rotate(${degrees + 90}deg)`;
}

function setTime() {
  const time = new Date();
  setRotation(hourHand, (time.getHours() / 12) * 360);
  setRotation(minHand, (time.getMinutes() / 60) * 360);
  setRotation(secondHand, (time.getSeconds() / 60) * 360);
}

setInterval(setTime, 1000);
