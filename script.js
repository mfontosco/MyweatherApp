$(document).ready(function(){
    $("#InputValue").on("keyup",function(e){
        var cityname = e.target.value;
        const APIKey ="836882281d5c12af12c86ee47327130b";

        //TO MAKE REQUEST TO THE SERVER
        $.ajax({
            url:`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}`,
        }).done(function(weatherdata){
         //console.log(weatherdata);
         $("#profile").html(`
         <div class="row">
         <div class="card" style="width: 18rem;">
                <img src=" http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${weatherdata.weather[0].description}</h5>
                    <p class="card-text">The temperature at ${cityname} is = ${weatherdata.main.temp}&#8451 and it feels like${weatherdata.main.feels_like} &#8451</p>
                    <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about this place</a>
                </div>
                </div>
         
         </div>
         `)
        })
    })
})