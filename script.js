function firstChar(text) {
  // your code here
	if(text == "  "){
		return "";
	}
	else {
		let array = text.trim().split('');
		return array[0];
	}
}

// Do notchange the code beow

const text = prompt("Enter text:");
alert(firstChar(text));
