document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '90cb9809424045876ffc5bf56328b23c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const humidity = data.main.humidity;
            document.getElementById('weather').innerHTML = `
                <h2>Temperature in ${city}: ${temperature}°C</h2>
                <p>Weather: ${weatherDescription}</p>
                <p>Humidity: ${humidity}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = `<p style="color: darkred;">${error.message}</p>`;
        });
});