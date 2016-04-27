
var translateButton = document.getElementById("translateButton"); //variable for translate button.
var translatedTextBox = document.getElementById("translatedText"); //variable for translated end result.

var print = function(event){
       //put this variable inside the function so it doesn't get assigned until the button is clicked!
      var langOptions = document.getElementById("langOptions").value;
      var beginningText = document.getElementById("beginningText").value; //variable for user-input text.

      //statement to determine which language option has been chosen
      if (langOptions === "Spanish") {
          translate.setSpanish(beginningText);
          translatedTextBox.innerHTML = translate.getSpanish();
          console.log("Spanish!");
          console.log("input text", beginningText.value);
      }

      else if (langOptions === "Dutch") {
          translatedTextBox.innerHTML = translate.dutchSpeak;
          console.log("Dutch!");
          console.log("input text", beginningText.value);
      }

      else if (langOptions ==="Japanese") {
          translatedTextBox.innerHTML = "Japanese placeholder";
          console.log("Japanese!");
      }

      else if (langOptions === "Pig-Latin") {
          translatedTextBox.innerHTML = "Pig-Latin placeholder";
          console.log("Pig-Latin!");
      }

      else {
          alert("HEY, dumbass, pick a language");
      }
    };

//main IFFE variable.
var translate = (function(){
  var translatedText = ""

  return {

  }
  }
}());

translateButton.addEventListener("click", print);
