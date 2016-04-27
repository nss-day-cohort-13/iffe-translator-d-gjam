
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

return {

  setJapanese: function(beginningText){
    var anArray = beginningText.split(" ");
    console.log("an array", anArray);
    anArray.forEach(function(word){
      newJapanese += `${nihongo[word]} `;

      console.log("newJapanese", newJapanese);
    });

  },
  getJapanese: function() {
    return newJapanese;
  }
}


}(translate));