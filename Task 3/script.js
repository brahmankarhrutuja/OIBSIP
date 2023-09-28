document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsiusInput');
    const convertButton = document.getElementById('convertButton');
    const resultText = document.getElementById('resultText');
    const resultValue = document.getElementById('resultValue'); 
     convertButton.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);
         if (!isNaN(celsius)) {
              const fahrenheit = (celsius * 9/5) + 32;
              resultText.textContent = `${celsius} Celsius is equal to `;
          resultValue.textContent = `${fahrenheit.toFixed(2)} Fahrenheit`;
              } else {
            resultText.textContent = 'Please enter a valid number.';
            resultValue.textContent = '';
        }
    });
});
