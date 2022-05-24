// The `movies` array from the file `src/data.js`.
/*console.log('movies: ', movies);*/

const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  let directorArray = movies.map(function (movieDirector) {
    return movieDirector.director;
  });

  return directorArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  let isSpiel = movies.filter(function(spie){
    return spie.director === "Steven Spielberg" && spie.genre.includes("Drama");
  });

  return isSpiel.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length < 1) return 0;
  let movieWithScore = movies.filter(function (el){
    return typeof el.score ==="number";
  })
  let starLevel = movieWithScore.reduce(function (accumulator, movie) {
    return (accumulator + movie.score);
  },0);
  const avg = starLevel/movies.length
  return Number(avg.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  // filtre pour prendre que les films qui on drama
  // faire l'average des score 
  let isDrama = movies.filter((movies => movies.genre.indexOf ("Drama") !== -1));
 
  if (isDrama.length < 1) return 0;

    let  dramaScore = isDrama.reduce(function(accumulator, movies){
      return (accumulator + movies.genre);
      
    },0);

    const avg2 = dramaScore/isDrama.length
    return Number(avg2.toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  
  let yearOrder = Array.from(movies.year.sort());
  return yearOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
