let movies = [
    {title:'Black Panther', director:'Ryan Coogler', year:2018, status: 'Yes', cover:'images/blackPanther.jpg'},
    {title:'Bohemian Rhapsody', director:'Bryan Singer', year:2018, status: 'No', cover:'images/BohRhap.jpg'},
    {title:'Jaws', director:'Steven Spielberg', year: 1975, status: 'Yes', cover:'images/jaws.JPG'},
    {title:'Pulp Fiction', director:'Quentin Tarantino', year: 1994, status: 'No', cover:'images/pulpFiction.jpg'},
    /* Moonlight is for the sample data
    {title:'Moonlight', director:'Barry Jenkins', year: 2016, status: 'No', cover:'images/moonlight.jpg'}
    */
];


function addMovie(){
    let movieTitle = document.getElementById('title').value;
    let movieDirector = document.getElementById('director').value;
    let movieYear = document.getElementById('year').value;
    let movieStatus = document.getElementById('status').value;
    let movieCover = document.getElementById('cover').value;
    
    movies.push({
        title: movieTitle,
        director: movieDirector,
        year: movieYear,
        status: movieStatus,
        cover: movieCover,
    });

    displayMovies();
}
function displayMovies(){
    document.getElementById('display').innerHTML = '';
    for(let i = 0; i < movies.length; i++){
        document.getElementById('display').innerHTML += `<br><div class="newDisplay">
        <div>
             <img id="movieimg" src=${movies[i].cover} />
            
            <input type="button" value="DELETE" onclick="deleteMovies(${i})"/>
            </div>
         <div class="text">
        <h1>${movies[i].title} directed by ${movies[i].director} </h1>
            <h1>${movies[i].year} Shown Status: ${movies[i].status} </h1> 
            </div>
         
            </div>
        <hr/>`;
    }
    //Section to display quantity from id on index
    document.getElementById('quantityDisplay').innerHTML = 'Quantity: ' + movies.length;
}


function deleteMovies(index){  //has parameter, index b/c it needs a position
    //1st argument is the index
    //2nd argument number of element remove
    movies.splice(index,1); //Given an item, take 1 element out
    displayMovies();
}