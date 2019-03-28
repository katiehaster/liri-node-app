require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// everything you type into the console is an array
var input = process.argv;
var search = process.argv[2];

// this negates need for for loop below - but see if the for loop will work first
var entry = input.slice(3).join(" "); 

// entry is name of song, artist, movie, etc
if (search === "concert-this") {
  concertSearch(entry);
} else if (search === "spotify-this-song") {
  songSearch(entry);
} else if (search === "movie-this") {
  movieSearch(entry);
} else if (search ==="do-what-it-says") {
  randomSearch(entry);
}
  
function concertSearch(entry) {
  
  var queryUrl = "https://rest.bandsintown.com/artists/" + entry + "/events?app_id=codingbootcamp";
  
  axios.get(queryUrl).then(
    
    function(response) {
      concertGroupings = [];
      concertData = response.data;
      
      for (let i = 0; i < concertData.length; i++) {

      let concertInfo = [
      "\n\nName of venue: " + concertData[i].venue.name,
      "Venue location: " + concertData[i].venue.city + ", " + concertData[i].venue.country,
      "Date of Event: " + (moment(concertData[i].datetime, "YYYY-MM-DD")).format("MM/DD/YYYY"),
      ].join("\n");
    
      concertGroupings.push(concertInfo);
    }
    console.log(concertGroupings.join());
  })
}

function songSearch(entry) {
  if (entry.length === 0) {
    entry = "The Sign Ace of Base";
  }
  spotify
    .search({ type: 'track', query: entry, limit: 3}, function(err, data) {
      if (err) {
        return console.log("Error occured: " + err);
      }
      console.log("\nThe song you typed in is: " + data.tracks.items[0].name + "\nThis song is by: " + JSON.stringify(data.tracks.items[0].artists[0].name) + "\nThis song is from the album: " + data.tracks.items[0].album.name + "\nHere is a link to a preview on Spotify: " + JSON.stringify(data.tracks.items[0].album.external_urls));
    });
}

function movieSearch(entry) {
  if (entry.length === 0) {
    entry = "Mr. Nobody";
  }

  var queryUrl = "https://www.omdbapi.com/?t=" + entry + "&y=&plot=short&apikey=trilogy";
  
  axios.get(queryUrl).then(
    
    function(response) {
      movieGroup = [];
      movieData = response.data;

        let movieInfo = [
        "\nTitle: " + movieData.Title,
        "\nRelease Year: " + movieData.Year,
        "\nIMDB Rating: " + movieData.imdbRating,
        "\nRotten Tomatoes Rating: " + JSON.stringify(movieData.Ratings[1].Value),
        "\nCountry Produced: " + movieData.Country,
        "\nLanguage: " + movieData.Language,
        "\nPlot: " + movieData.Plot,
        "\nActors: " + movieData.Actors,
        ].join("\n");
        
        movieGroup.push(movieInfo);
      
      console.log(movieGroup.join());
    })    
}

function randomSearch(entry) {
  if (entry === "I Want it That Way") {
    songSearch(entry);
  }

  if (entry === "John Wick") {
    movieSearch(entry);
  }

  if (entry === "Lizzo") {
    concertSearch(entry);
  }
};


