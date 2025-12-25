var apikey="8f044cf51536b45c0edc0d29242ca1ad";
var apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchBox=document.querySelector(".search input");
var searchBtn=document.querySelector(".search button");
var weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city) {
        var response= await fetch(apiurl + city + `&appid=${apikey}`);
        var data= await response.json();

        console.log(data);

        document.querySelector(".city") .innerHTML=data.name;
        document.querySelector(".temp") .innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity") .innerHTML=data.main.humidity + "%";
        document.querySelector(".wind") .innerHTML=data.wind.speed + "km/h";

    }

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})

