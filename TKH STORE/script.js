let shoes = [];

function addShoe(){
	// get value from input
	let newShoe= document.getElementById('newShoe').value;
	// check if value is not empty
	if(newShoe !== ''){
	
	// add value to array
	shoes.push(newShoe);
	console.log(shoes);
	//removes value from input
	document.getElementById('newShoe').value = '';

	displayShoes();

	}

}

function displayShoes(){

	//section to display quantity
	document.getElementById("quantityDisplay").innerHTML = 'Quantity:' + shoes.length;


	//section to display shoes array
	document.getElementById("shoeDisplay").innerHTML ='';
	
	//for wach shoe in my shoes array, I want to diplay that shoes
	for(let i = 0; i < shoes.length; i++){

		document.getElementById("shoeDisplay").innerHTML += `<h4>${shoes[i]}</h4> <input type="button" value=
		"DELETE" onclick="deleteShoe(${i})"/>
		<hr/>`;

		//'<h4>' + shoes[i] + '</h4><hr/>`  - same thing as writing above- this version is concatonating
	}

}

function deleteShoe(index){
	// 1st argument is the index
	// 2nd arg number of element remove
	//removes 1 shoe at position index
	shoes.splice(index,1);

	displayShoes();

}

function sortShoes(){
	shoes.sort();
	displayShoes();

}