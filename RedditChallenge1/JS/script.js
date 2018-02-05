	var input = document.getElementById('BaumSweetInput'),
	array = [];

	//Changes all of the 0's in the content section to orange
	function colorContentZero() {
		var s0 = document.getElementById("content");
		var str = s0.innerHTML;
		var newText = "";
		for (var i = 0; i < str.length; i++) {
			if (str[i] == '0') {
				newText+= str.charAt(i).fontcolor("#e07a5f");
			}
			else {
				newText += str[i];
			}
		}
		s0.innerHTML = newText;
	}
	colorContentZero();

	//changes all of the 0's in the results section to orange.
	function colorResultsZero() {
		var s1 = document.getElementById("results");
		var str = s1.innerHTML;
		var newText = "";
		for (var i = 0; i < str.length; i++) {
			if (str[i] == '0') {
				newText+= str.charAt(i).fontcolor("#e07a5f");
			}
			else {
				newText += str[i];
			}
		}
		s1.innerHTML = newText;
	}


	
	//Only allows for the input of numbers
	input.onkeydown = function(e) {
		if(!( (e.keyCode > 95 && e.keyCode < 106)
			|| (e.keyCode > 47 && e.keyCode < 58) 
			||  e.keyCode == 8)){

			return false;
	}
	}



	

	function BaumSweetSequence(num){
		//clears out the array everytiem the button is pressed.
		array.length = 0;

		num = document.getElementById('BaumSweetInput').value;
		//loops for length of the number entered.
		for(i = 0; i <= num; i++) {

			var bit = intToBinary(i),
				sweet = bit.split(/(?=1)/g),
				results = document.getElementById('results');

			//Checks to see if the number is 0, or 1.
			if (sweet.length == 1 && sweet[0].length == 1) {
				array[i] = "Binary Value: " + sweet +' Index: ' + i + ' Value: 1<br>';

			//else it's greater than 1, check the value.
			} else {
				setToOneorZero(sweet, bit);
			}

		}
		
		//Removes the comma that would be displayed after each index value.
		results.innerHTML = '<p>' + array.join(' ') + '</p>';
		//Changes all of the 0's to orange.
		colorResultsZero();
	}

	function intToBinary(num) {
		return Number(num).toString(2);

	}

	function setToOneorZero(num, wholeNum) {
		var splitBit;
		
		for (x = 0; x < num.length; x++) {

			splitBit = num[x].length % 2;

			if (splitBit == 0) {
				array[i] = "Binary Value: " + wholeNum +  ' Index: ' + i + ' Value: 0 <br>';
				break;
			}
		}
	//An even numbered length never occured, and only had even amounts of lengths. so no Odd 0's
	if (splitBit == 1) {
		return array[i] ="Binary Value: " + wholeNum + ' Index: ' + i + ' Value: 1 <br>';
	}
	}
