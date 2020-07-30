var button = document.querySelector('#searchButton');
var searchText = document.querySelector('#searchText');
var place = document.querySelector('#place');
var temp = document.querySelector('#temp');
var desc = document.querySelector('#desc');
var date = document.querySelector('#date');

fetch('https://api.openweathermap.org/data/2.5/weather?q='+place.value+'&appid=14e09d5264977022ce3545c1661fccf0')
    .then(response => response.json())
    .then(data => console.log(data))

.catch(err => alert('Wrong City Name!'))






// const Temperature = document.getElementById('Temperature');
// const Humidiity = document.getElementById('Humidity');
// const Rain = document.getElementById('Rain');
// const Sunshine = document.getElementById('Sunshine');

// let Temperature = document.querySelector("#Temperature");
// let Humidity = document.querySelector("#Humidity");
// let Rain = document.querySelector("#Rain");
// let Sunshine = document.querySelector("#Sunshine");

// const proxy = "";// await  proxy
// const api = ""; // await api

// fetch(api)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data); // not nmecessarily needed
//         const { Temperature,Humidity , Rain, Sunshine } = data.currently;
//     })