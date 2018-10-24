function checkNumber(){

let	userNumber1= parseInt(prompt (' please enter the first number'));
let	userNumber2= parseInt(prompt (' please enter the second number'));
let	userNumber3= parseInt(prompt (' please enter the third number'));

// if(userNumber1 < userNumber2){
// 	console.log('number 2 is greater')

// }else if (userNumber2 > userNumber3) {
// 	console.log ('number 2 is greatest')

// }else{
// console.log('number 3 is greatest')
// }


if (userNumber1 > userNumber2 && userNumber1 > userNumber3){

console.log ('userNumber1 is greatest')

}
else if (userNumber2 > userNumber1 && userNumber2 > userNumber3){

console.log ('userNumber2 is greatest')
}

else {

console.log ('userNumber3 is greatest')	
}


}


