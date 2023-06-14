import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Selecciono elementos
const textarea = document.querySelector('textarea[name="user-input"]');

const getWordCount = document.querySelector(".caja-verde");
const getCharacterCount = document.querySelector(".caja-verde");
const getCharacterCountExcludingSpaces = document.querySelector(".caja-verde");
const getAverageWordLength = document.querySelector(".caja-verde");
const getNumberCount = document.querySelector(".caja-verde");
const getNumberSum = document.querySelector(".caja-verde"); 

const button = document.getElementById("reset-button");

//Agrego listeners

button.addEventListener('click', limpiar);

function limpiar() {
    textarea.value = " ";
}

textarea.addEventListener('keyup', (event) => {
    const texWordCount = event.target.value;
    const wordCount = analyzer.getWordCount(texWordCount);
    getWordCount.textContent = wordCount;
  });

  textarea.addEventListener('keyup', (event) => {
    const texCharacterCount = event.target.value;
    const characterCount = analyzer.getCharacterCount(texCharacterCount);
    getCharacterCount.textContent = CharacterCount;
  });