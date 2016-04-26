var translateButton = document.getElementById("button");
var translatedTextBox = document.getElementById("translatedText");

var translate = (function(){

  return {

    print: function(event){
      var langOptions = document.getElementById("langOptions").value;

      if (langOptions === "Spanish") {
          translatedTextBox.innerHTML = "Spanish";
          console.log("Spanish!");
      } else if (langOptions === "Dutch") {
          translatedTextBox.innerHTML = "Dutch";        
          console.log("Dutch!"); 
      } else if (langOptions ==="Japanese") { 
          translatedTextBox.innerHTML = "Japanese";
          console.log("Japanese!");
      } else if (langOptions === "Pig-Latin") {
          translatedTextBox.innerHTML = "Pig-Latin";
          console.log("Pig-Latin!");
      } else {
          alert("HEY, dumbass, pick a language");
      }
    }
  }

}());

translateButton.addEventListener("click", translate.print);
