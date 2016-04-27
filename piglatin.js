var translate = (function(newTranslate) {
  var translatedPigLatin = "";

  var pigLatin = {
    Merry: "Errymay",
    Christmas: "Istmaschray",
    and: "andyay",
    Happy: "Appyhay",
    New: "Ewnay",
    Year: "Earyay"
  };

  return {

    setPigLatin: function(beginningText) {

      var englishPhrase = beginningText.split(" ");
      console.log("User Inputs", englishPhrase.value);

      englishPhrase.forEach (function(individualWord) {
        translatedPigLatin += `${pigLatin[individualWord]}`;
        console.log("pig latin variable", translatedPigLatin);
      })
    },

    getPigLatin: function() {
      return translatedPigLatin;
    }
  }
}(translate));

