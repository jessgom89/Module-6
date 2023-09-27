var searchbtn=document.getElementById("searchbtn")
var cityinput=document.getElementById("cityinput")
var apikey="c0b2f96884c0eff35a14ffda16daabfd"
var dashboard=document.getElementById("dashboard")
searchbtn.addEventListener("click",search)
function search(){
displayweather(cityinput.value)    
}
function displayweather(cityname)
{
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=imperial`
    fetch(url)
    .then(function(responce){
        return responce.json()
    })
    .then(function(currentdata){
        console.log(currentdata)
        dashboard.innerHTML=`
        <h4  class=" fw-bold">${currentdata.name} (${dayjs.unix(currentdata.dt).format("MM/DD/YYYY")})
                        <img src="https://openweathermap.org/img/wn/${currentdata.weather[0].icon}@2x.png" alt="">
                        <p class="card-text">  <p class="card-text">
                        </p>Temp ${currentdata.main.temp}°F

                        </p>gi
                        <p>
                            Wind: ${currentdata.wind.speed} MPH
                        </p>

                        <p>

                            Humidity:${currentdata.main.humidity}% 
                        </p>
                        <p>
                        </p>


             
        `


    })
    url=`https:/api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${apikey}&units=imperial`
    fetch(url)
    .then(function(responce){
        return responce.json()
    })
    .then(function(fiveday){
        console.log(fiveday)
    })
}
