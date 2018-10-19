
let fruits =["apple","orange","grape"];
document.getElementById('new').innerHTML = fruits;




function getFormValue(){


let edmond= prompt ("please add fruit").toLowerCase();

fruits.unshift(edmond);
console.log(fruits);

fruits.sort();

document.getElementById("new").innerHTML= fruits.join(" with ");




}


