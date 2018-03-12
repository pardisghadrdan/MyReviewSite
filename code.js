function renderMovie(movie){
    document.querySelector(".infosection h1").textContent=movie.title;
    document.querySelector(".infosection p").textContent=movie.description;
    document.querySelector(".infosection ul").textContent=movie.actors;
    document.querySelector(".poster").setAttribute("src", movie.imgUrl);

    let actorList = "";
    for(let i=0; i<movie.actors.length; i++){
      actorList += "<li>" + movie.actors[i] + "</li>";
    }
    document.querySelector(".infosection ul").innerHTML = actorList;

}

renderMovie(movieData);