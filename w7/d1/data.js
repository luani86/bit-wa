// data module

var startGettingMovie = function (url, handleMovie){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(rawMovieObject){
        var movie = {
            name: rawMovieObject.name,
            id: rawMovieObject.id
        }
        handleMovie(movie);
    })
}

//main module
var handleRealMovieObject = function(movie){
    console.log("name:" + movie.name)
}

var url = "http://api.tvmaze.com/shows/4";
startGettingMovie(url, handleRealMovieObject);

//-----------------------------------------------------------
var startGettingMovie = function (url, handleMovie){
    return fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(rawMovieObject){
        var movie = {
            name: rawMovieObject.name,
            id: rawMovieObject.id
        }
        return movie;
    })
}

//main module
var handleRealMovieObject = function(movie){
    console.log("name:" + movie.name)
}

var url = "http://api.tvmaze.com/shows/4";
startGettingMovie(url, handleRealMovieObject);
