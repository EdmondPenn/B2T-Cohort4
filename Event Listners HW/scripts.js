
function changeToggleButton(){
	let toggleButton = document.getElementById('toggleButton');
	if (toggleButton.value === 'ON') {
		toggleButton.value = 'OFF';
	}else{
		toggleButton.value = 'ON';
	}
}

function changeBoxColor(){
	let myBox = document.getElementById('myBox');
	if( myBox.style.backgroundColor === 'green' ){
		myBox.style.backgroundColor = 'red';
	} else {
		myBox.style.backgroundColor = 'green';
	}
}

document.getElementById('myBox').addEventListener('mouseover', changeBoxColor);
document.getElementById('myBox').addEventListener('mouseleave', changeBoxColor);




