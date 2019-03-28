# liri-node-app

## Description

LIRI stands for Language Interpretation and Recognition Interface. This is a LIRI bot (yes - similar to SIRI) but rather LIRI is a command line node app that takes in parameters and gives back data.

## Languages / Technologies Used

* Node
* JavaScript
* Moment
* Spotify Node API
* Bands In Town API
* OMDB API
* Axios
* Dotenv

## User Instructions

Since this is a command line app, as the user you will need to do the following: 
* Clone the repo
* Run `npm install` in your terminal
* Create a .env file
* Obtain spotify keys:
  
  -you'll need a **client id** and **client secret**:

   1. Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   1. Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   1. Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   1. Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

## What it does

* Bands In Town <br/>

Want to know when your favorite band is playing? Type into the module: node liri.js concert-this <your band here>, and the module will populate with your favorite band or solo artist's upcoming concert dates, complete with venues and locations.
<br/>
* Spotify

Type in the title of the song that's been in your head all day, again, in the format node liri.js spotify-this-song <song title>, and the module will answer back with details about said song - who it's by, what album it's attached to, and more.

* Movie Search

I love the film John Wick, but I can't remember what year it was made or who plays the wife... type in node liri.js movie-this <movie title> and the module will answer back with more details than you could ever need about said film, including, of course, the year it was made and the actors.

* Random Feature

Use this "do-what-it-says" feature to have the app read from a text file to display a band, song, or movie.

## Author
Katie Haster

## View video walk through - 
To see screencastify of the app in action, visit - https://drive.google.com/open?id=1XyG6IUfIbl8CPCroa2YI7YCNMwYxVP2V. There are two videos; select the LIRI Bot video.


