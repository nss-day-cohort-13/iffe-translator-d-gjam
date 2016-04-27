

var beginningText = document.getElementById("beginningText")
var translateButton = document.getElementById("translateButton");
var translatedTextBox = document.getElementById("translatedText");

var print = function(event){
       //put this variable inside the function so it doesn't get assigned until the button is clicked!
      var langOptions = document.getElementById("langOptions").value;

      //statement to determine which language option has been chosen
      if (langOptions === "Spanish") {
          translate.setSpanish(beginningText);
          translatedTextBox.innerHTML = translate.getSpanish();
          console.log("Spanish!");
      } else if (langOptions === "Dutch") {
          translatedTextBox.innerHTML = "Dutch placeholder";
          console.log("Dutch!");
      } else if (langOptions ==="Japanese") {
          translatedTextBox.innerHTML = translate.getJapanese;
          console.log("Japanese!");
      } else if (langOptions === "Pig-Latin") {
          translatedTextBox.innerHTML = "Pig-Latin placeholder";
          console.log("Pig-Latin!");
      } else {
          alert("HEY, dumbass, pick a language");
      }
    };


var translate = (function(){
  var translatedText = ""

  return {
    setSpanish: function () {
      //get beginning text. probably a var textToTranslate = beginningText.innerHTML.
      //do some stuff like .split to make it an array, .map to translate, and then blah all the stuff.
      translatedText = beginningText.innerHTML;//this is just to demonstrate, the translated text will be the result of all the stuff.
    },
    getSpanish: function() {
      return translatedText;
    }
  }

}());

translateButton.addEventListener("click", print);