function getKeyedElements(selector) {
  const audioElements = Array.from(document.querySelectorAll(selector));
  let result = {};
  for (const element of audioElements) {
    const key = element.getAttribute('data-key');
    result[key] = element;
  }
  return result;
}

const keys = getKeyedElements('.key');
const sounds = getKeyedElements('audio');

function playSound(pressedKey) {
  const sound = sounds[pressedKey];

  if (!sound) return;

  const key = keys[pressedKey];
  key.classList.add('playing');

  sound.currentTime = 0;
  sound.play();
}

for (const [key, element] of Object.entries(keys)) {
  element.addEventListener('transitionend', e => {
    if (e.propertyName !== 'transform') return;
    element.classList.remove('playing');
  });
}

document.addEventListener('keydown', event => {
  const pressedKey = event.keyCode;
  playSound(pressedKey);
});
