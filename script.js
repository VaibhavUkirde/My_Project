function addNewWEField() {
	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("weField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows", 3);
	newNode.setAttribute("placeholder", "Enter Here");
	
	let weOb = document.getElementById("we");
	
	let weAddButtonOb = document.getElementById("weAddButton");
	
	weOb.insertBefore(newNode, weAddButtonOb);
}


function addNewAQField() {
	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("aqField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows", 3);
	newNode.setAttribute("placeholder", "Enter Here");
	
	let aqOb = document.getElementById("aq");
	
	let aqAddButtonOb = document.getElementById("aqAddButton");
	
	aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating CV
function generateCV() {
	let nameField = document.getElementById("nameField").value;
	let nameT1 = document.getElementById("nameT1");
	nameT1.innerHTML = nameField;
	
	//direct
	document.getElementById("nameT2").innerHTML = nameField;
	
	//for contact
	document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
	
	//for address
	document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
	
	//for setting profile photo
	let file = document.getElementById("imgField").files[0];
	//console.log(file);
	let reader = new FileReader();
	reader.readAsDataURL(file);
	//console.log(reader.result);
	//set the image to the template
	reader.onloadend = funtion()
	{
		document.getElementById("imgTemplate").src = reader.result;
	};
	
	//for fb
	document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
	
	//for insta
	document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
	
	//for linkedin
	document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
	
	//for objective
	document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
	
	//for work experience
	let wes = document.getElementsByClassName("weField");
	let str = "";
	for (let e of wes){
		str = str + `<li> ${e.value} </li>`;
	}
	document.getElementById("weT").innerHTML = str;
	
	//for academic qualification
	let aqs = document.getElementsByClassName("aqField");
	let str1 = "";
	for (let e of aqs){
		str1 = str1 + `<li> ${e.value} </li>`;
	}
	document.getElementById("aqT").innerHTML = str1;
	
	
	document.getElementById("cv-form").style.display = "none";
	document.getElementById("cv-template").style.display = "block";
}

//printCV
function printCV()
{
	window.print();
}