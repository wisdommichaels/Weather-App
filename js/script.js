// firstly create a function that will carry the Api of which i call it the apiKey
const apiKey = "a5277a670215173962c7d3ae19ba1757";

// secondly i have to call out my element i will work with on this project with 
// the getElement and quereySelector method in Dom
const weatherDataEl = document.getElementById("weather-data");

const cityData = document.getElementById("city");

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const cityValue = cityData.value;
    
    // console.log(cityValue);
   
    getWeatherData(cityValue)
});


async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);

        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json()
        // console.log(data);

        const temperature = Math.round(data.main.temp)

        const description = data.weather[0].description

        const icon = data.weather[0].icon

        const details = [
            `feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}`,
            `Wind Speed: ${data.wind.speed}`,
        ]

        weatherDataEl.querySelector(
            ".icon"
        ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;    
    
        weatherDataEl.querySelector(
            "temperature").textContent = `${temperature}°C`;

    } catch (error) {
        // function (!respons.ok)
        console.log(error)
    }
} 