let shoes = [];

function addShoe(){
	let newShoe= document.getElementById('shoeInput').value;

	shoes.push('<li>' +newShoe+'</li>); 

	document.getElementById('shoeInput').value ='';

	alert('Added the shoe ' + newShoe);


}

function displayShoes(){

	document.getElementById('shoeDisplay').innerHtml = shoes.join('');

	displayShoes();



}