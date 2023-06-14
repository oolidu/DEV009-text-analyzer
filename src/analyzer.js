const analyzer = {  
  getWordCount: (text) => {
    const palabras = text.trim().split(/\b[^s\d]+\b/);
    return palabras.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCount: (text) => {
    return text.length
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => {
    const sinespaciosText = text.replace(/\W/g, '').trim();
    return sinespaciosText.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => { 
    const palabras = text.split (' ');
    const totalPalabras = palabras.length;

    let longitudTotal = 0;
    for (let i = 0; i< totalPalabras; i++) {
      longitudTotal += palabras[i].trim().length;
    }

    const longitudMedia = longitudTotal/totalPalabras;
    return longitudMedia; 
    //reutilizar trim, split (' '), lenth,    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberCount: (text)  => {
    const numeros = text.match (/\d+/g);
    if (numeros) {
      return numeros.length;    }
    else {
      return 0;
      } 
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberSum: (text) => {
    const numeros = text.match (/\d+/g);
    if (numeros) {
      const sum = numeros.reduce((acc,num)=> acc + Number(num), 0);
      return sum;}
      else {
        return 0;
      } 
        //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
  
};

export default analyzer;
