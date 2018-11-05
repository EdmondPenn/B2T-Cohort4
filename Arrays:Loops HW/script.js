let color =["Blue ", "Green ", "Red ", "Orange ", "Violet ", "Indigo", "Yellow"];

let o = [ "th", "st", "nd", "rd"];

   for (let i=0; i < color.length; i++){
		
		if (i ===0){ 
			document.getElementById("colorOrder").innerHTML += i + 1 + o[1] + " choice is " + color[i]+ "<hr/>";

		}
		else if (i ===1){ 
			document.getElementById("colorOrder").innerHTML += i + 1 + o[2] + " choice is " + color[i] + "<hr/>";
		}
		else if (i ===2){ 
			document.getElementById("colorOrder").innerHTML += i + 1 + o[3] + " choice is " + color[i]+ "<hr/>";
		}
		else { 
			document.getElementById("colorOrder").innerHTML += i + 1 + o[0] + " choice is " + color[i]+ "<hr/>";
		}
	} 


   

