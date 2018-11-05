let lap =0;
while(lap <15){ //another way to say this is <= 4
	console.log('I am on lap ' + lap);
	lap++; //lap=lap +1;

}


let count = 10;
while(count >= 0){ // > -1
console.log(count);
	count--;

}


let num = 1;
while(num < 101){ //num <= 100

	if(num % 2 === 0){
		console.log(num + ' is even');
	}

  	else{
  		console.log(num + ' is odd');
  	}
	num++;
	}

	//FOR LOOPS EXAMPLES

for(let i = 0; i < 5; i++){
	console.log('I am on lap ' + i)

}

for(let i = 7; i <= 19; i++){
	console.log(i)
}

// How to loop through an array

let food = ['pizza', 'cherry pie','hotdog', 'kale salad', 'ice cream'];

for(let i = 0; i < food.length; i++){
//pringts to console
console.log('I love to eat'+ food[i]);
 document.getElementById('display').innerHTML+= 'I love to eat' + food[i] +'<br>';

 }
//print to webpage

let days =['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

let dayType= ['weekday', 'weekend'];

for(let i=0; i < days.length; i++){
	//use weekday for index 1 - 5 (Mon-Fri)
	// use weekend for index 0 and 6 (Sun and Sat)

	//if(0 <i && <6){

	if (i === 0 || i==6){
		document.getElementById('display').innerHTML += days[i] + ' is a ' + dayType[1] + '<br>';
	
	}else{document.getElementById('display').innerHTML += days[i] + ' is a ' + dayType[0] + '<br>';

	}

}











