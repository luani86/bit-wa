var httpGet = function (url, callbackkojiocekujeXHResponse) {
    setTimeout(()=>{
        callbackkojiocekujeXHResponse(url.toResponse());
    },10000);
    
}

var getMovieAsync = function(url, callbackKojiocekujeMovie){
   httpGet(url, (xhrResponse)=>{
    callbackKojiocekujeMovie(xhrResponse.toMovie());
    });
}
getMovieAsync("http://...", (movie)=>{
    console.log(movie)
});