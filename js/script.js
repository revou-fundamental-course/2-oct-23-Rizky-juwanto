// js/script.js
document.getElementById('temp-converter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const temperatureInput = document.getElementById('temperature');
    const currentUnit = temperatureInput.getAttribute('data-unit');
    const temperatureValue = parseFloat(temperatureInput.value);
    
    if (!isNaN(temperatureValue)) {
        let temperatureCelsius, temperatureFahrenheit;
        let explanationText = '';

        if (currentUnit === 'C') {
            // Konversi dari Celsius ke Fahrenheit
            temperatureFahrenheit = (temperatureValue * 9/5) + 32;
            explanationText = `
                Perhitungan Konversi:
                (${temperatureValue}°C × 9/5) + 32 = ${temperatureFahrenheit.toFixed(2)}°F
                
                Penjelasan:
                1. Mulai dengan suhu dalam Celsius (${temperatureValue}°C).
                2. Kalikan dengan 9/5 untuk mengonversi ke Fahrenheit.
                3. Tambahkan 32 ke hasilnya untuk mendapatkan suhu akhir dalam Fahrenheit.
                
                Oleh karena itu, ${temperatureValue}°C setara dengan ${temperatureFahrenheit.toFixed(2)}°F.
            `;
        } else if (currentUnit === 'F') {
            // Konversi dari Fahrenheit ke Celsius
            temperatureCelsius = (temperatureValue - 32) * 5/9;
            explanationText = `
                Perhitungan Konversi:
                (${temperatureValue}°F - 32) × 5/9 = ${temperatureCelsius.toFixed(2)}°C
                
                Penjelasan:
                1. Mulai dengan suhu dalam Fahrenheit (${temperatureValue}°F).
                2. Kurangkan 32 dari suhu dalam Fahrenheit.
                3. Kalikan hasilnya dengan 5/9 untuk mengonversi ke Celsius.
                
                Oleh karena itu, ${temperatureValue}°F setara dengan ${temperatureCelsius.toFixed(2)}°C.
            `;
        }

        if (currentUnit === 'C') {
            document.getElementById('conversion-result').textContent = `${temperatureValue}°C = ${temperatureFahrenheit.toFixed(2)}°F`;
        } else if (currentUnit === 'F') {
            document.getElementById('conversion-result').textContent = `${temperatureValue}°F = ${temperatureCelsius.toFixed(2)}°C`;
        }

        document.getElementById('explanation').innerHTML = explanationText;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Mohon masukkan suhu yang valid.');
    }
});

// Tambahkan event listener untuk tombol reset
document.getElementById('temp-converter-form').addEventListener('reset', function () {
    document.getElementById('result').style.display = 'none';
    document.getElementById('explanation').innerHTML = '';
});

// Tambahkan event listener untuk tombol switch
document.getElementById('switch-button').addEventListener('click', function () {
    const temperatureInput = document.getElementById('temperature');
    const currentUnit = temperatureInput.getAttribute('data-unit');
    temperatureInput.setAttribute('data-unit', currentUnit === 'C' ? 'F' : 'C');
    temperatureInput.value = '';
    document.getElementById('conversion-result').textContent = '';
    document.getElementById('explanation').innerHTML = '';
    
    // Perbarui label berdasarkan unit suhu yang ditampilkan
    if (currentUnit === 'C') {
        document.querySelector('label[for="temperature"]').textContent = 'Masukkan Suhu (°F):';
    } else {
        document.querySelector('label[for="temperature"]').textContent = 'Masukkan Suhu (°C):';
    }
});
