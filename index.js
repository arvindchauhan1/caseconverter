// Function to toggle between light and dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save user preference in local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Apply styles based on mode
    applyStyles(isDarkMode);
}

// Function to apply styles based on mode
function applyStyles(isDarkMode) {
    // Select the theme based on the mode
    const theme = isDarkMode ? 'dark' : 'light';

    // Apply styles to elements
    document.documentElement.setAttribute('data-theme', theme);
}

// Check if user preference for dark mode is stored in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply initial styles based on mode
applyStyles(isDarkMode);

// Add event listener to mode switch
const modeSwitch = document.getElementById('mode-switch');
modeSwitch.addEventListener('change', toggleDarkMode);

// Rest of the functions remain the same...



// Function to undo changes in the input textarea
function undoChanges() {
    let inputText = localStorage.getItem('inputText');
    document.getElementById('input-text').value = inputText;
}

// Function to save input text to local storage
function saveText() {
    let inputText = document.getElementById('input-text').value;
    localStorage.setItem('inputText', inputText);
}


// Function to convert text to sentence case
function convertToSentenceCase(text) {
    return text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
        return c.toUpperCase();
    });
}

// Function to convert text to title case
function convertToTitleCase(text) {
    return text.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Function to convert text to lower case
function convertToLowercase(text) {
    return text.toLowerCase();
}

// Function to convert text to upper case
function convertToUppercase(text) {
    return text.toUpperCase();
}

// Function to convert text to snake case
function convertToSnakeCase(text) {
    return text.replace(/\s+/g, '_').toLowerCase();
}

// Function to convert text to dot case
function convertToDotCase(text) {
    return text.replace(/\s+/g, '.').toLowerCase();
}

// Function to convert text to hyphen case
function convertToHyphenCase(text) {
    return text.replace(/\s+/g, '-').toLowerCase();
}

// Function to remove specified character from text
function removeCharacter(character) {
    let inputText = document.getElementById('input-text').value;
    // Escaping the dot character in the regular expression
    let regex = new RegExp(character.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    let outputText = inputText.replace(regex, '');
    document.getElementById('output-text').value = outputText;
}


// Function to remove extra spaces from text
function removeExtraSpaces() {
    let inputText = document.getElementById('input-text').value;
    let outputText = inputText.replace(/\s+/g, ' ');
    document.getElementById('output-text').value = outputText;
}

// Function to remove all spaces from text
function removeAllSpaces() {
    let inputText = document.getElementById('input-text').value;
    let outputText = inputText.replace(/\s+/g, '');
    document.getElementById('output-text').value = outputText;
}

// Function to remove newline characters from text
function removeEnter() {
    let inputText = document.getElementById('input-text').value;
    let outputText = inputText.replace(/(\r\n|\n|\r)/gm, ' ');
    document.getElementById('output-text').value = outputText;
}

// Function to clear the textareas
function clearText() {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').value = '';
}

// Function to copy text from output textarea
function copyText() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
}

// Function to find and replace text
function findAndReplace() {
    let findText = document.getElementById('find-input').value;
    let replaceText = document.getElementById('replace-input').value;
    let inputText = document.getElementById('input-text').value;
    let regex = new RegExp(findText, 'g');
    let outputText = inputText.replace(regex, replaceText);
    document.getElementById('output-text').value = outputText;
}

// Function to apply changes made in output textarea back to input textarea
function applyChanges() {
    let outputText = document.getElementById('output-text').value;
    document.getElementById('input-text').value = outputText;
}

// Function to convert text based on selected option
function convertText(option) {
    let inputText = document.getElementById('input-text').value;
    let outputText = '';

    switch (option) {
        case 'sentenceCase':
            outputText = convertToSentenceCase(inputText);
            break;
        case 'titleCase':
            outputText = convertToTitleCase(inputText);
            break;
        case 'lowerCase':
            outputText = convertToLowercase(inputText);
            break;
        case 'upperCase':
            outputText = convertToUppercase(inputText);
            break;
        case 'snakeCase':
            outputText = convertToSnakeCase(inputText);
            break;
        case 'dotCase':
            outputText = convertToDotCase(inputText);
            break;
        case 'hyphenCase':
            outputText = convertToHyphenCase(inputText);
            break;
    }

    document.getElementById('output-text').value = outputText;
}
