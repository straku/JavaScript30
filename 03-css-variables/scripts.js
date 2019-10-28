const inputs = document.querySelectorAll('.controls input');

const spacingInput = document.getElementById('spacing');
const blurInput = document.getElementById('blur');
const colorInput = document.getElementById('base');

function setCSSVariable(name, value) {
  document.documentElement.style.setProperty(name, value);
}

function handleInputChange(event) {
  const {
    name,
    value,
    dataset: { sizing = '' },
  } = event.target;

  setCSSVariable(`--${name}`, `${value}${sizing}`);
}

inputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
});
