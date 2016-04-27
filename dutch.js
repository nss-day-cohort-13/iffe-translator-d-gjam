//This is the javascript page for the Dutch translation of holiday phrases - AE

var translate = (function (dutchTranslation) {
  var dutchTranslation = "";

  var dutchPhrases = {
    Merry: "Vrolijk",
    Christmas: "Kerstmis",
    and: "en",
    Happy: "Gelukkig",
    New: "Nieuwe",
    Year: "Jaar"
  };

  return {

    setdutch: function(beginningText) {

      var englishPhrase = beginningText.split(" ");
      console.log("User Inputs", englishPhrase.value);

      englishPhrase.forEach(function(phrase) {
        dutchTranslation += `${dutchPhrases[phrase]}`;
        console.log("dutch speak variable", dutchTranslation);
      })
    },

    getdutch: function() {
      return dutchTranslation;
    }

  };

}(translate));

console.log("dutch page");

console.log("^^^", translate.getdutch())