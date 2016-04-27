//This is the javascript page for the Dutch translation of holiday phrases - AE
var translate = (function (newTranslation) {

  var dutchPhrases = {
    Merry: "Vrolijk",
    Christmas: "Kerstmis",
    and: "en",
    Happy: "Gelukkig",
    New: "Nieuwe",
    Year: "Jaar"
  };

// empty variable for the translation
  var dutchTranslation = "";



    newTranslation.setdutch = function(beginningText){

      var englishPhrase = beginningText.split(" ");
      console.log("User Inputs", englishPhrase);
      var newPhrase = "";

        englishPhrase.forEach(function(phrase){
          if (dutchPhrases[phrase] === undefined) {
            alert("this app only works with one phrase right now!")
          }
          else {
            newPhrase += `${dutchPhrases[phrase]} `;
          };
          console.log("newPhrase", newPhrase);
          dutchTranslation = newPhrase;
        });
    };

    newTranslation.getdutch = function() {
      return dutchTranslation;
    }

    return newTranslation;

}(translate));

console.log("dutch page");

console.log("^^^", translate.getdutch())