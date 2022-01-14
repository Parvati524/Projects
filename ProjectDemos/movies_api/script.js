tmdb_key = "d0081a9462b445bec485ef360a436b27";
const baseUrl = "https://api.themoviedb.org/3";

$("button").click(function () {
  const doggyHorse = document.getElementById('textbox_id').value
  const route = `search/movie?api_key=${tmdb_key}&query=${doggyHorse}&page=1&include_adult=false`;

  let endpoint = `${baseUrl}/${route}`
  // action goes here!!

  fetch(endpoint)
    .then(function (response) {
      if (!response.ok) { throw Error("Not able to get response from server") }
      else {
        return (response.json())
      }
    })
    .then(function (doggyHorse) {
      let movie = doggyHorse.results;
      let poster = "https://image.tmdb.org/t/p/w200/"
      movie.forEach(element => {
        $(".myDiv").append(`<div class="col-md-4"><div class="card py-5 my-5">
            <img src="${poster}${element.poster_path}"="card-img-top" alt=${element.title}>
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.overview}</p>
            </div>
            </div></div>`)
      })
    })


    .catch(function (error) {
      console.error("Issues READING from the database: ", error);
    })
})