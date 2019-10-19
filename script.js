// console.log("script is here");


//create variables

var searchBar = $("search-bar");


$("#search").on('click', function () {
    event.preventDefault();
    // console.log("button was clicked");

    var cityInput = $('#search-input').val();
    // cityInput = cityInput.split(' ');
    // cityInput = cityInput.join('-');
    console.log(cityInput);
  
    $(".list-group").append("<li class= 'list-group-item'>" + cityInput + "</li>");

    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=" + APIKey;
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityInput + "&cnt=5&units=imperial&appid=" + APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      console.log("response: " + response);
      console.log("current weather: " + queryURL);
      console.log("temperature: " + response.main.temp);
      console.log("humidity: " + response.main.humidity);
    //   console.log("wind speed: " + response.main.wind.speed);
      
  
    //   var weatherImg = response.message;
  
    //     var weatherImg = $('<img>');
    //     weatherImg.attr('src', imagesrc)
    //     $('#weather-image').append(weatherImg);

    // // Transfer content to HTML
    // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    // $(".wind").text("Wind Speed: " + response.wind.speed);
    // $(".humidity").text("Humidity: " + response.main.humidity);
    // $(".temp").text("Temperature (F) " + response.main.temp);

    // // Log the data in the console as well
    // console.log("Wind Speed: " + response.wind.speed);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temperature (F): " + response.main.temp);
    });

    $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function (response) {
  
        console.log("response 2: " + response);
        console.log("forecast URL: " + queryURL2);
        console.log("temperature: " + response.list[0].temp.day);
        console.log("humidity: " + response.list[0].humidity);
        console.log("temperature: " + response.list[0].temp.day);
        console.log("humidity: " + response.list[0].humidity);

      });
  });


//link to ajax?


//current conditions ajax call


//5 day forecast ajax call


//use local storage for search history ---- make a list of all searched cities

//add a 5 day forecast