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