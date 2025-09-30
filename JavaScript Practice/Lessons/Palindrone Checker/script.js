document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const checkBtn = document.getElementById('checkBtn');
    const resultDiv = document.getElementById('result');

    checkBtn.addEventListener('click', function () {
        const text = inputText.value;
        const cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversedText = cleanedText.split('').reverse().join('');
        if (cleanedText && cleanedText === reversedText) {
            resultDiv.textContent = `"${text}" is a palindrome.`;
        } else {
            resultDiv.textContent = `"${text}" is not a palindrome.`;
        }
    });
});