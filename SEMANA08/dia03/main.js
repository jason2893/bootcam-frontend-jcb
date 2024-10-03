const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const paragraphCount = document.getElementById('paragraphCount');

// Función que cuenta palabras, caracteres y párrafos
const countWordsCharsParagraphs = () => {
    const text = textInput.value.trim();

    // Cuenta de caracteres
    const characters = text.length;

    // Cuenta de palabras
    const words = text === '' ? 0 : text.split(/\s+/).filter(word => word !== '').length;

    // Cuenta de párrafos (dividimos el texto por saltos de línea)
    const paragraphs = text === '' ? 0 : text.split(/\n+/).filter(paragraph => paragraph.trim() !== '').length;

    // Actualizar en la página
    wordCount.textContent = words;
    charCount.textContent = characters;
    paragraphCount.textContent = paragraphs;
};

// Escuchar los cambios en el textarea
textInput.addEventListener('input', countWordsCharsParagraphs);
