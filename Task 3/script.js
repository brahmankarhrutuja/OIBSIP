document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsiusInput');
    const convertButton = document.getElementById('convertButton');
    const resultText = document.getElementById('resultText');
    const resultValue = document.getElementById('resultValue');
     convertButton.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);
