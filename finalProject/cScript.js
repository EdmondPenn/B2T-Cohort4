let movies = [
	{title:'Superman', director:'Richard Donner', year:1978, status: 'Yes'},
	{title:'Batman', director:'Tim Burton', year:1989, status: 'No'},
	{title:'Wonder Woman', director:'Patty Jenkins', year:2017, status: 'No'}
];


function addMovie(){
	let movieTitle = document.getElementById('title').value;
	let movieDirector = document.getElementById('director').value;
	let movieYear = document.getElementById('year').value;
	let movieStatus = document.getElementById('status').value;

	movies.push({
		title: movieTitle,
		director: movieDirector,
		year: movieYear,
		status: movieStatus,
	});

	displayMovies();
}
function displayMovies(){
	document.getElementById('display').innerHTML = '';
	for(let i = 0; i < movies.length; i++){
		document.getElementById('display').innerHTML +=    `<h1>${movies[i].title} directed by ${movies[i].director} </h1>
			<h1>${movies[i].year} Shown Status: ${movies[i].status} </h1>
			<input type="button" value="DELETE" onclick="deleteMovies(${i})"/>
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

 // portfolio
 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });



