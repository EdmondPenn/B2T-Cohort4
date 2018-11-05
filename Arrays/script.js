function addCarToFront() {
	let carValue = prompt("please enter new car");
	cars.unshift(carValue); 
	console.log(cars);
	document.getElementById("carsH1").innerHTML = cars.join(" and a "); 
}

let cars = ["BMW", "volvo", "KIA"];
document.getElementById('carsH1').innerHTML = cars;

function addCarToEnd() {
	cars.push(document.getElementById("carId").value);
	document.getElementById("carsH1").innerHTML = cars.join(" and a ");
	console.log(cars);
}

