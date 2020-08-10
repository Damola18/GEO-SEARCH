const searchBox = document.querySelector('#searchBox');
const cityValue = document.querySelector('#searchBox input')
const cityName = document.querySelector('.cityHeader h2');
const description = document.querySelector('.description-view');
const weatherCards = document.querySelector('.weather-cards');


updateWeatherSearch = (city) => {
    cityName.textContent = city.name;
    description.innerHTML = `
    <div class="description-view">
            <p id="description">${city.weather[0].description.toUpperCase()}</p>
            <p id="weather-temp">${city.main.temp}<span id="degree-temp">&#8451</span></p>
        </div>
    `;
    weatherCards.innerHTML = `
    <div class="weather-cards">
            <div id="Temperature">
                <span class="iconify" id="iconify" data-icon="fa-solid:temperature-high" data-inline="false"  style="color:red";></span><br>
                <p id="weather-text">Temperature</p>
                <p id="weather-value">${city.main.temp}<span>&#8451</span></p>
            </div>
            <div id="Humidity">
                <span class="iconify" id="iconify" data-icon="mdi:water-percent" data-inline="false" style="color:#5a7ae4";></span><br>
                <p id="weather-text">Humidity</p>
                <p id="weather-value"><span>${city.main.humidity}</span>%</p>
            </div>
            <div id="Wind">
                <span class="iconify" id="iconify" data-icon="uil:wind" data-inline="false" style="color:#81C2EB;"></span><br>
                <p id="weather-text">Wind</p>
                <p id="weather-value">
                <p id="weather-value"><span>${city.wind.speed}</span>mph</p>
            </div>
            <div id="Visibility">
                <span class="iconify" id="iconify" data-icon="tabler:mist" data-inline="false" style="color: #FCC418";></span><br>
                <p id="weather-text">Visibilty</p>
                <p id="weather-value">${city.visibility}<span>km</span></p>
            </div>
        </div>
    `
}
// Adding an event listener to the form
searchBox.addEventListener('submit', e => {
    e.preventDefault();  // This event event method prevents the form from refreshing anytime a request is made
    const citySearch = cityValue.value.trim();
    console.log(citySearch);
    // searchBox.reset(); This clears the inputed text from the searchBox once the output is queried 

    requestCity(citySearch)
        .then((data) =>{
            updateWeatherSearch(data)
        })
        .catch(error => {
            console.log(error)
        })
});