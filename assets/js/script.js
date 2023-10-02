var searchbtn=document.getElementById("searchbtn")
var cityinput=document.getElementById("cityinput")
var apikey="c0b2f96884c0eff35a14ffda16daabfd"
var dashboard=document.getElementById("dashboard")
var fivedaysection=document.getElementById("fivedaysection")
searchbtn.addEventListener("click",search)
var citylist=document.getElementById("citylist")
var cityarray=[]
function displaycity(){
if(localStorage.getItem("cityarray")){
    cityarray=JSON.parse(localStorage.getItem("cityarray"))
    citylist.innerHTML=""
    for (let i = 0; i < cityarray.length; i++) {
      citylist.innerHTML+=cityarray[i]  
        
    }
}
}
displaycity()
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
        if(cityarray.includes(currentdata.name)===false){
            cityarray.push(currentdata.name)
            localStorage.setItem("cityarray",JSON.stringify(cityarray))
        }
        dashboard.innerHTML=`
        <h4  class=" fw-bold">${currentdata.name} (${dayjs.unix(currentdata.dt).format("MM/DD/YYYY")})
                        <img src="https://openweathermap.org/img/wn/${currentdata.weather[0].icon}@2x.png" alt="">
                        <p class="card-text">  <p class="card-text">
                        </p>Temp ${currentdata.main.temp}°F

                        </p>
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
        var fivedayarray =fiveday.list 
        fivedaysection.innerHTML=""
        for (let i = 3; i < fivedayarray.length; i=i+8) {
            fivedaysection.innerHTML+=`
            <div class="col-sm-2 mb-3 mb-sm-0">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${dayjs.unix(fivedayarray[i].dt).format("MM/DD/YYYY")}</h5>
                    <img src="https://openweathermap.org/img/wn/${fivedayarray[i].weather[0].icon}@2x.png" alt="">
                    <p class="card-text"> Temp ${fivedayarray[i].main.temp}°F

                    </p>
                    <p>
                        Wind: ${fivedayarray[i].wind.speed} MPH
                    </p>

                    <p>

                        Humidity:${fivedayarray[i].humidity} %
                    </p>
                    <p>

                    </p>

                </div>
            </div>
        </div>

            `
         
            
        }
        
    })
}
