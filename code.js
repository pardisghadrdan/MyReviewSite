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
function changeStarRating(rating){
  for (let i = 1; i < 6; i++) {
    let star = document.getElementById("star" + i);
    if (i <= rating){
      star.classList.add("filled");
    } else {
      star.classList.remove("filled");
    }
  }
}

//Eventhanterare
for(let i=1; i<=5; i++){
  let star = document.getElementById("star" + i);
  star.addEventListener("click", function(){
    changeStarRating(i);
  });
}




renderMovie(movieData);
