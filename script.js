// console.log("script is here");

$( document ).ready(function() {

//moment.js
var m = moment();
var currentDate = m.format("MM/DD/YY");

//date math
var dayOneForecast = m.add(1, 'day').format('MM/DD/YY');
var dayTwoForecast = m.add(1, 'days').format('MM/DD/YY');
var dayThreeForecast = m.add(1, 'days').format('MM/DD/YY');
var dayFourForecast = m.add(1, 'days').format('MM/DD/YY');
var dayFiveForecast = m.add(1, 'days').format('MM/DD/YY');

// console.log(m);
// console.log(currentDate);
// console.log("day one date" + dayOneForecast);

//current date header
$("#current-date").text(currentDate);

//add 5 day forecast dates
$("#day-1").text(dayOneForecast);
$("#day-2").text(dayTwoForecast);
$("#day-3").text(dayThreeForecast);
$("#day-4").text(dayFourForecast);
$("#day-5").text(dayFiveForecast);

var cityInput = $('#search-input').val();

    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=" + APIKey;
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityInput + "&cnt=5&units=imperial&appid=" + APIKey;
$("#search").on('click', function () {
    event.preventDefault();
    // console.log("button was clicked");

    //get search input
    var cityInput = $('#search-input').val();
    console.log(cityInput);

    //display city searched in current weather display
    $("#current-city").text(cityInput + " |  ");

    //create urls for openweather api
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=" + APIKey;
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityInput + "&cnt=5&units=imperial&appid=" + APIKey;

    //current weather ajax call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

        console.log(queryURL);

    // var responseString = JSON.stringify(response);
    var cityLon = response.coord.lon;
    var cityLat = response.coord.lat;

    console.log("city lat: " + cityLat);
    console.log("city lon: " + cityLon);

    //   console.log("response: " + responseString);
    //   console.log("current weather: " + queryURL);
    //   console.log("temperature: " + response.main.temp);
    //   console.log("humidity: " + response.main.humidity);

    //UV Index API Call
    var UVIndexURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLon;
    $.ajax({
        url: UVIndexURL,
        method: "GET"
      }).then(function (response) {
          console.log(response);
          console.log(UVIndexURL);
          console.log("UV Index: " + response.value)

          $(".uv-index").text("UV Index: " + response.value);

      });

      //transfer content to html
      $(".temp").text("Temperature: " + response.main.temp);
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);

    //   get weather icon
    var weatherIcon = response.weather[0].icon;
      var weatherImgSrc = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
      var weatherImg = $('<img>');
      weatherImg.attr('src', weatherImgSrc);
      $('#weather-image').append(weatherImg);
      $("#weather-img img").attr("src", weatherImgSrc);
    //   $("#weather-image").empty();

      //set item to local storage
      localStorage.setItem("city search", cityInput);
      var citySearchStore = localStorage.getItem("city search");

      // city history to local storage.
function storeCity(cityInput) {
    var currentCity = $('<li>').text(cityInput);
    currentCity.attr({type: 'button', class:'storeCity', name:cityInput});
    $('#cities').append(currentCity);
    localStorage.setItem(cityInput, cityInput);
};

storeCity(city);

      //append city search to history list under search bar
      var citySearchHistory = "<button id='stored-search'>" + citySearchStore + "</button>";
    $(".list-group").append("<li class= 'list-group-item'>" + citySearchHistory + "</li>");

    });

    //5 day forecast ajax call
    $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function (response) {

        // var responseString = JSON.stringify(response);
  
        // console.log("response 2: " + responseString);
        // console.log("forecast URL: " + queryURL2);
        // console.log("temperature day 1: " + response.list[0].temp.day);
        // console.log("humidity day 1: " + response.list[0].humidity);

        // console.log("temperature day 2: " + response.list[1].temp.day);
        // console.log("humidity day 2: " + response.list[1].humidity);
        console.log(response.list[0].weather[0].icon);

        //transfer content to html
      $(".temp5-1").text("Temp: " + response.list[0].temp.day);
      $(".humidity5-1").text("Humidity: " + response.list[0].humidity);
      $(".temp5-2").text("Temp: " + response.list[1].temp.day);
      $(".humidity5-2").text("Humidity: " + response.list[1].humidity);
      $(".temp5-3").text("Temp: " + response.list[2].temp.day);
      $(".humidity5-3").text("Humidity: " + response.list[2].humidity);
      $(".temp5-4").text("Temp: " + response.list[3].temp.day);
      $(".humidity5-4").text("Humidity: " + response.list[3].humidity);
      $(".temp5-5").text("Temp: " + response.list[4].temp.day);
      $(".humidity5-5").text("Humidity: " + response.list[4].humidity);

      //   get weather icon
    var weatherIcon51 = response.list[0].weather[0].icon;
    var weatherImgSrc51 = "http://openweathermap.org/img/wn/" + weatherIcon51 + "@2x.png"
    var weatherImg51 = $('<img>');
    weatherImg51.attr('src', weatherImgSrc51);
    $('#image5-1').append(weatherImg51);
    // $("#weather-img img").attr("src", weatherImgSrc51);

    var weatherIcon52 = response.list[1].weather[0].icon;
    var weatherImgSrc52 = "http://openweathermap.org/img/wn/" + weatherIcon52 + "@2x.png"
    var weatherImg52 = $('<img>');
    weatherImg52.attr('src', weatherImgSrc52);
    $('#image5-2').append(weatherImg52);

    var weatherIcon53 = response.list[2].weather[0].icon;
    var weatherImgSrc53 = "http://openweathermap.org/img/wn/" + weatherIcon53 + "@2x.png"
    var weatherImg53 = $('<img>');
    weatherImg53.attr('src', weatherImgSrc53);
    $('#image5-3').append(weatherImg53);

    var weatherIcon54 = response.list[3].weather[0].icon;
    var weatherImgSrc54 = "http://openweathermap.org/img/wn/" + weatherIcon54 + "@2x.png"
    var weatherImg54 = $('<img>');
    weatherImg54.attr('src', weatherImgSrc54);
    $('#image5-4').append(weatherImg54);

    var weatherIcon55 = response.list[4].weather[0].icon;
    var weatherImgSrc55 = "http://openweathermap.org/img/wn/" + weatherIcon55 + "@2x.png"
    var weatherImg55 = $('<img>');
    weatherImg55.attr('src', weatherImgSrc55);
    $('#image5-5').append(weatherImg55);

      });
  });

});