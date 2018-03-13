//dataModule//
var getMovie =  (url, handleMovie) => {
    fetch(url)
        .then( (httpResponse)=>{
            return httpResponse.json();

        })
        .then( (rawMovieObject)=> {
            var movie = {
                name: rawMoveObject.name,
                id: rawMovieObject.id
            }
            handleMovie(movie);
        })
}

//mainmodule

var handleRealMovieObject = (movie)=> {
    console.log("name" + movie.name);
}

var url = "http://api.tvmaze.com/shows/4";

getMovie(url, handleRealMovieObject);


