const searchBox = document.querySelector('#searchBox');
const cityValue = document.querySelector('#searchBox input')
const cityName = document.querySelector('.cityHeader h2');
const description = document.querySelector('.description-view');
const weatherCards = document.querySelector('.weather-cards');


updateWeatherSearch = (city) => {
    console.log(city);
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
                <p style="font-size:16px; font-weight:bold;">${city.main.temp}<span>&#8451</span></p>
            </div>
            <div id="Humidity">
                <span class="iconify" id="iconify" data-icon="mdi:water-percent" data-inline="false" style="color:#5a7ae4";></span><br>
                <p id="weather-text">Humidity</p>
                <p style="font-weight:bold;"><span>${city.main.humidity}</span>%</p>
            </div>
            <div id="Wind">
                <span class="iconify" id="iconify" data-icon="uil:wind" data-inline="false" style="color:#81C2EB;"></span><br>
                <p id="weather-text">Wind</p>
                <p style="font-weight:bold;">
                <p style="font-weight:bold;">
                    <ul>
                        <li><h5 id="speed">${city.wind.speed}</h5><span>mph</span></li>
                        <li>/</li>
                        <li><h5 id="deg">${city.wind.deg}</h5><span style="font-weight: bold; font-size:24px;">&deg</span></li>
                    </ul>
                </p>
                </p>
            </div>
            <div id="Visibility">
                <span class="iconify" id="iconify" data-icon="tabler:mist" data-inline="false" style="color: #FCC418";></span><br>
                <p id="weather-text">Visibilty</p>
                <p style="font-weight:bold;">${city.visibility}<span>km</span></p>
            </div>
        </div>
    `
}
// Adding an event listener to the form
searchBox.addEventListener('submit', e => {
    e.preventDefault();  // This event event method prevents the form from refreshing anytime a request is made
    const citySearch = cityValue.value.trim();
    console.log(citySearch);
    searchBox.reset();

    requestCity(citySearch)
        .then((data) =>{
            updateWeatherSearch(data)
        })
        .catch(error => {
            console.log(error)
        })
});