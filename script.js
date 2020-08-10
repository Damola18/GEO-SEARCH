// var button = document.querySelector('.button');
// var searchText = document.querySelector('#searchText');
// var place = document.querySelector('#place');
// var temp = document.querySelector('#temp');
// var desc = document.querySelector('#desc');
// var date = document.querySelector('#date');


// button.addEventListener('click', function(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchText.value+'&appid=14e09d5264977022ce3545c1661fccf0')
//     .then(response => response.json())
//     .then(data => console.log(data))

// .catch(err => alert('Input is incorrect, check again!'))
// })

// const api_url = 'http://api.openweathermap.org/data/2.5/weather?q
//=lagos&appid=14e09d5264977022ce3545c1661fccf0';
// fetch(api_url)
//     .then(response => {
//         console.log('i am here', response.json())})
//     .catch( error => {
//         console.log(error);
//     })
// To load the data from the API which will subsequently take some time, 
//there's a need to apply the async() and the await() method 

// Function to capitalize first letter
function capitalizeFirst(){
    var text = doc
}

const requestCity = async (city) =>{
    const api_key = '14e09d5264977022ce3545c1661fccf0';
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${api_key}`;
    // Alternate concatenation method for declaring the query variable
    // const query = '?q='+city+'&appid'+key;

    // Making a fetch call
    const response = await  fetch(apiURL + query);

    // Calling the data
    const data = await response.json();
    return data;
}
// fetch(api)
//     .then((response) => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data); // not nmecessarily needed
//         const { Temperature,Humidity , Rain, Sunshine } = data.currently;
//     })

// function myMap(){
//     // Adding Default Map Location
//     var defaultLocation = {
//         zoom:10,
//         center:{
//             lat:7.3775,
//             lng:3.94709
//         }
//     }
//     // Adding Map reference
//     var map = new google.maps.Map(document.getElementById('defaultLocation'), defaultLocation);

//     // Adding Map marker
//     var marker = new google.maps.Marker({
//         position: {lat:7.3940673, lng:3.780089},
//         map: map
//     });
// }

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

