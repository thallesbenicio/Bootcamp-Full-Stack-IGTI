window.addEventListener('load', start);
window.addEventListener('input', handleInput);

var inputRangeR = null;
var inputRangeG = null;
var inputRangeB = null;
var colorRgb = null;

function start() {
  console.log('JS Iniciado!');
}

function handleInput() {
  inputR = document.querySelector('#inputR');
  inputG = document.querySelector('#inputG');
  inputB = document.querySelector('#inputB');

  inputRangeR = document.querySelector('#rangeR');
  inputRangeG = document.querySelector('#rangeG');
  inputRangeB = document.querySelector('#rangeB');
  colorRgb = document.querySelector('.colorRgb');

  inputR.value = inputRangeR.value;
  inputG.value = inputRangeG.value;
  inputB.value = inputRangeB.value;

  colorRgb.style.backgroundColor =
    'RGB(' + inputR.value + ',' + inputG.value + ',' + inputB.value + ')';
}
