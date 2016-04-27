var translate = (function(oldTranslate) {

//library of spanish words to access. keys are currently the same across all languages since this translator only works for one phrase.
  var spanishWords = {
    "Merry": "feliz",
    "Christmas": "Navidad",
    "and": "y",
    "Happy": "prospero",
    "New": "nuevo",
    "Year": "a&ntilde;o"
  };

//empty variable to put the new spanish phrase into. Unique for each language at this point.
  var translatedtoSpanish = "";
  
    return {

     setSpanish: function(beginningText){ 
      //splits the received phrase into an array to loop through. 
      var EnglishArray = beginningText.split(" ");
      console.log("english array", EnglishArray);
      var newSpecialWords = "";
        //loop through each word in the english array. assigns the variable 'word' to each item.
        EnglishArray.forEach(function(word){ 
          //pushes the key from the library that matches the item in the english array into the new string. 
          if (spanishWords[word] === undefined) {
            alert("this app only works with one phrase right now!")
          } else {
            newSpecialWords += `${spanishWords[word]} `; //finds the matching key. magic.
          };
          //logs the phrase each time the word is added, just in case. 
          console.log("newSpecialWords", newSpecialWords);
        }); 
        //reassigns the resulting array into the outside variable 
        translatedtoSpanish = newSpecialWords;
      },
    getSpanish: function() {
      return translatedtoSpanish;
    }  
  }

}(translate));
