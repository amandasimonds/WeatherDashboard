console.log("script is here");


//create variables

var searchBar = $("search-bar");


$("#search").on('click', function () {
    event.preventDefault();
    console.log("button was clicked");
    var cityInput = $('#search-input').val();
    // cityInput = cityInput.split(' ');
    // cityInput = cityInput.join('-');
    console.log(cityInput);
  
    var APIKey = "166a433c57516f51dfab1f7edaed8413";

  // Here we are building the URL we need to query the database
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=" + APIKey;
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response.message);
      console.log(queryURL);
  
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
  });


//link to ajax?


//current conditions ajax call


//5 day forecast ajax call


//use local storage for search history ---- make a list of all searched cities

//add a 5 day forecast