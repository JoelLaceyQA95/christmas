<script>
	let currentWord = 0;
    let wordsArray = [];
    let replacementOrder = ["adjective", "noun"];
    function enterWords(){
		let inputBox = document.createElement("input");
		inputBox.setAttribute("type", "text");
		inputBox.setAttribute("placeholder", "enter an " + replacementOrder[currentWord]);
		inputBox.id = "inputBox";
		document.body.appendChild(inputBox);
		let submit = document.createElement("input");
		submit.setAttribute("type", "button");
		submit.setAttribute("value", "Submit");
		submit.setAttribute("onclick", "submitWord(inputBox.value);")
		document.body.appendChild(submit);
    }
	
    function submitWord(word){
		// adds word to story
        currentWord++;
        inputBox.value = "";
        inputBox.setAttribute("placeholder", "enter an " + replacementOrder[currentWord])
	}
        </script>