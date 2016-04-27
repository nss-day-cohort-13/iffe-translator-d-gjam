
var translate = (function(original){

   var nihongo = {
     Merry: "meri",
     Christmas: "kurisumasu",
     and: "soshite",
     Happy: "happi",
     New: "atarashi",
     Year: "toshi"
    }

  var newJapanese = "";



  original.setJapanese = function(beginningText){
    var anArray = beginningText.split(" ");
    console.log("an array", anArray);
    anArray.forEach(function(word){
      newJapanese += `${nihongo[word]} `;

      console.log("newJapanese", newJapanese);
    });
  };
  original.getJapanese = function() {
    return newJapanese;
  };

  return original;

}(translate));