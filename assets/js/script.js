var searchbtn=document.getElementById("searchbtn")
var cityinput=document.getElementById("cityinput")
var apikey="c0b2f96884c0eff35a14ffda16daabfd"
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
    })
}
