var text = "This this  is a sentence! that, can be be be map reduced.";

var keyVal = {}; 

function mapper(textInput) {
	var text = textInput;
  
    //format the string to convert to lowercase, remove spaces and puctuation
	text = text.toLowerCase();
    text = text.replace(/\s+/g, ' ');
    text = text.replace(/(?:[\(\)\-&$#!\[\]{}\"\',\.]+(?:\s|$)|(?:^|\s)[\(\)\-&$#!\[\]{}\"\',\.]+)/g, ' ')
.trim();
	text = text.split(" ");
	
	//generate key value pairs and count each unique key
    for(var k in text){
      if(keyVal.hasOwnProperty(text[k])){
          keyVal[text[k]] += 1;    
      }else{ keyVal[text[k]] = 1; }
    }  
    return keyVal;
}

mapper(text);
console.log(keyVal);


