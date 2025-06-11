 // create an array to hold the movie list
 let arrMovies = [];

 // function to add a movie to the array
 function addMovie(){
     // create a shortcut or nickname variable to the text input in the HTML
     let txtMovieName = document.getElementById("txtMovieName");
     // shortcut / nickname of the movie the user entered
     let movieName = txtMovieName.value;

     // console log the movie name so that we can confirm that we are correctly capturing it
     //console.log("movieName=" + movieName);

     // check to make sure that the user entered a movie name
     if (movieName != ""){
         // add the movieName to the array
         arrMovies.push(movieName);
         // remove the text from the textbox
         txtMovieName.value = "";
         // call the function to display the movies
         displayMovieList();
     }
 }

 // create a function to sort and display the movies on the page
 function displayMovieList(){
     // create a shortcut / nickname to the div that will show the movies the user has entered
     let divMovies = document.getElementById("divMovies");

     // sort the movie list before showing it
     arrMovies.sort();
     // this returns the array as a string with a line break in between each item
     divMovies.innerHTML = arrMovies.join("<BR>");
 }

 // create a function to remove any movies that have been entered
 function resetList(){
     // empty the contents of the array
     arrMovies = [];
     // update the div to show nothing
     displayMovieList();
 }