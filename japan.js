
var print = function(translator){
       //put this variable inside the function so it doesn't get assigned until the button is clicked!
      var langOptions = document.getElementById("langOptions").value;

    nihongo = {
     merry: "meri",
     christmas: "kurisumasu",
     and: "soshite",
     happy: "happi",
     new: "atarashi",
     year: "toshi"
    }

translator.japanese = function() {
  var input = document.getElementById("beginningText").value;
  var inputArray = beginningText.split(" ");
  var output = ("");



}

})(print);

translateButton.addEventListener("click", print);