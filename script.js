function firstChar(text) {
  // your code here
	if(text == "  "){
		return "";
	}
	else {
		let array = text.trim().split{''};
		return array[0];
		
	}
}

// Do not change the code below

// const text = prompt("Enter text:");
// alert(firstChar(text));
