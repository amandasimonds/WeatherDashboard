// console.log("script is here");


//moment.js variables
var m = moment();
var currentDate = m.format("MMM Do YYYY");

console.log(m);
console.log(currentDate);

//current date header
$("#current-date").text(currentDate);


$("#search").on('click', function () {
    event.preventDefault();
    // console.log("button was clicked");

    var cityInput = $('#search-input').val();
    // cityInput = cityInput.split(' ');
    // cityInput = cityInput.join('-');
    console.log(cityInput);

    //display city searched in current weather display
    $("#current-city").text(cityInput + " |  ");

    //create urls for openweather api
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=" + APIKey;
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityInput + "&cnt=5&units=imperial&appid=" + APIKey;


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

    var responseString = JSON.stringify(response);

      console.log("response: " + responseString);
      console.log("current weather: " + queryURL);
      console.log("temperature: " + response.main.temp);
      console.log("humidity: " + response.main.humidity);

      //transfer content to html
      $(".temp").text("Temperature: " + response.main.temp);
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".uv-index").text("UV Index: " );

      //append city search to history list under search bar
      var citySearchHistory = "<button>" + cityInput + "</button>";
    $(".list-group").append("<li class= 'list-group-item'>" + citySearchHistory + "</li>");


    //   var weatherImg = response.message;
    //     var weatherImg = $('<img>');
    //     weatherImg.attr('src', imagesrc)
    //     $('#weather-image').append(weatherImg);
    });

    $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function (response) {

        var responseString = JSON.stringify(response);
  
        console.log("response 2: " + responseString);
        console.log("forecast URL: " + queryURL2);
        console.log("temperature day 1: " + response.list[0].temp.day);
        console.log("humidity day 1: " + response.list[0].humidity);

        console.log("temperature day 2: " + response.list[1].temp.day);
        console.log("humidity day 2: " + response.list[1].humidity);

      });
  });


//5 day forecast ajax call


//use local storage for search history ---- make a list of all searched cities

//add a 5 day forecast