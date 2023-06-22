import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Selecciono elementos del DOM
const textarea = document.querySelector('textarea[name="user-input"]');

const getWordCount = document.querySelector(".caja-verde:nth-child(3)");
const getCharacterCount = document.querySelector(".caja-verde:nth-child(1)");
const getCharacterCountExcludingSpaces = document.querySelector(".caja-verde:nth-child(2)");
const getAverageWordLength = document.querySelector(".caja-verde:nth-child(6)");
const getNumberCount = document.querySelector(".caja-verde:nth-child(4)");
const getNumberSum = document.querySelector(".caja-verde:nth-child(5)");

const button = document.getElementById("reset-button");

//Agrego listeners al botón para retear textarea y métricas

button.addEventListener('click', () => {
  limpiar();
  resetearBotones();
});

//Función para resetear métricas
function resetearBotones() {
  const botones = document.querySelectorAll('.caja-verde');
  botones.forEach((boton) => {
    boton.textContent = ' ';

  });
}

//Función para resetear textarea
function limpiar() {
  textarea.value = "";
  textarea.placeholder = "Escribe o pega un texto aquí...";
}

//Agrego listeners para mostrar los cálculos
textarea.addEventListener('keyup', (event) => {
  const texWordCount = event.target.value;
  const wordCount = analyzer.getWordCount(texWordCount);
  getWordCount.textContent = wordCount;
});

textarea.addEventListener('keyup', (event) => {
  const texCharacterCount = event.target.value;
  const characterCount = analyzer.getCharacterCount(texCharacterCount);
  getCharacterCount.textContent = characterCount;
});

textarea.addEventListener('keyup', (event) => {
  const texCharacterCountExcludingSpaces = event.target.value;
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(texCharacterCountExcludingSpaces);
  getCharacterCountExcludingSpaces.textContent = characterCountExcludingSpaces;
});

textarea.addEventListener('keyup', (event) => {
  const texAverageWordLength = event.target.value;
  const averageWordLength = analyzer.getAverageWordLength(texAverageWordLength);
  getAverageWordLength.textContent = averageWordLength;
});

textarea.addEventListener('keyup', (event) => {
  const texNumberCount = event.target.value;
  const numberCount = analyzer.getNumberCount(texNumberCount);
  getNumberCount.textContent = numberCount;
});

textarea.addEventListener('keyup', (event) => {
  const texNumberSum = event.target.value;
  const numberSum = analyzer.getNumberSum(texNumberSum);
  getNumberSum.textContent = numberSum;
});