// Get DOM elements
const inputText = document.getElementById("inputText");
const shiftInput = document.getElementById("shift");
const output = document.getElementById("output");

// Caesar Cipher Encrypt Function
function caesarCipher(text, shift) {
    return text.replace(/[a-zA-Z]/g, char => {
        const base = char.charCodeAt(0) < 97 ? 65 : 97; // Uppercase or lowercase
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    });
}

// Encrypt Text
function encryptText() {
    const text = inputText.value;
    const shift = parseInt(shiftInput.value);
    const encrypted = caesarCipher(text, shift);
    output.textContent = `Encrypted Text:\n${encrypted}`;
}

// Decrypt Text
function decryptText() {
    const text = inputText.value;
    const shift = parseInt(shiftInput.value);
    const decrypted = caesarCipher(text, 26 - shift); // Decrypt by reversing the shift
    output.textContent = `Decrypted Text:\n${decrypted}`;
}

// Analyze Frequency
function analyzeFrequency() {
    const text = inputText.value.toUpperCase().replace(/[^A-Z]/g, ""); // Remove non-letters
    const frequency = {};
    for (let char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Sort by frequency
    const sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);

    // Display results
    let result = "Letter Frequency:\n";
    sortedFrequency.forEach(([char, count]) => {
        result += `${char}: ${count}\n`;
    });
    output.textContent = result;
}
