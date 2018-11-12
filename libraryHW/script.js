let library = [
	{author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true},
	{author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true},
	{author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of the Hunger Games', 
	readingStatus: false},

];

	for (let i = 0; i < library.length; i++){
		if (library[i].readingStatus == true) {
			document.getElementById('display').innerHTML += `<h4>Already read ${library[i].title} 
			by ${library[i].author} </h4>`;
		}else{
			document.getElementById('display').innerHTML += `<h4>You still need to read ${library[i].title} 
			by ${library[i].author} </h4>`;
		}
	}