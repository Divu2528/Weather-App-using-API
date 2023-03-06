const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a4531a533',                 //update key 
        'X-RapidAPI-Host': 'weati.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
          //  cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
    }
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        getWeather(city.value)
    })

    getWeather("Delhi")


// For Bangalore

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        temp_bangalore.innerHTML = response.temp
        max_temp_bangalore.innerHTML = response.max_temp
        min_temp_bangalore.innerHTML = response.min_temp
        cloud_pct_bangalore.innerHTML = response.cloud_pct
        feels_like_bangalore.innerHTML = response.feels_like
        humidity_bangalore.innerHTML = response.humidity
        sunrise_bangalore.innerHTML = response.sunrise
        sunset_bangalore.innerHTML = response.sunset
        wind_speed_bangalore.innerHTML = response.wind_speed
        wind_degrees_bangalore.innerHTML = response.wind_degrees
        

    })
    .catch(err => console.error(err));

// For Mumbai

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        temp_mumbai.innerHTML = response.temp
        max_temp_mumbai.innerHTML = response.max_temp
        min_temp_mumbai.innerHTML = response.min_temp
        cloud_pct_mumbai.innerHTML = response.cloud_pct
        feels_like_mumbai.innerHTML = response.feels_like
        humidity_mumbai.innerHTML = response.humidity
        sunrise_mumbai.innerHTML = response.sunrise
        sunset_mumbai.innerHTML = response.sunset
        wind_speed_mumbai.innerHTML = response.wind_speed
        wind_degrees_mumbai.innerHTML = response.wind_degrees
        
    })
    .catch(err => console.error(err));


// For Kolkata

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        
        temp_kolkata.innerHTML = response.temp
        min_temp_kolkata.innerHTML = response.min_temp
        max_temp_kolkata.innerHTML = response.max_temp
        cloud_pct_kolkata.innerHTML = response.cloud_pct
        feels_like_kolkata.innerHTML = response.feels_like
        humidity_kolkata.innerHTML = response.humidity
        sunrise_kolkata.innerHTML = response.sunrise
        sunset_kolkata.innerHTML = response.sunset
        wind_speed_kolkata.innerHTML = response.wind_speed
        wind_degrees_kolkata.innerHTML = response.wind_degrees

    })
    .catch(err => console.error(err));


    //for chennai

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

       
        temp_chennai.innerHTML = response.temp
        max_temp_chennai.innerHTML = response.max_temp
        min_temp_chennai.innerHTML = response.min_temp
        cloud_pct_chennai.innerHTML = response.cloud_pct
        feels_like_chennai.innerHTML = response.feels_like
        humidity_chennai.innerHTML = response.humidity
        sunrise_chennai.innerHTML = response.sunrise
        sunset_chennai.innerHTML = response.sunset
        wind_speed_chennai.innerHTML = response.wind_speed
        wind_degrees_chennai.innerHTML = response.wind_degrees

    })
    .catch(err => console.error(err));
