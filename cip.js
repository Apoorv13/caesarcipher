/*$(document).ready(function() {
  $("#commands button").on('click', function() {
    
    console.log($("textarea").val());
  });
});*/
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#commands button').addEventListener('click', function() {
    var input = document.querySelector('textArea').value,
        result = startCaesarCipher(input);
      
    function startCaesarCipher(text) {
      var initialCharacters = text.toUpperCase(),
          message = "";
      for (var i = 0; i < initialCharacters.length; i++) {
        var numericValue = initialCharacters.charCodeAt(i);
        if (numericValue < 65 || numericValue > 90) {
          message += String.fromCharCode(numericValue);
        } else if (numericValue - 13 < 65) {
          message += String.fromCharCode(numericValue + 13);
        } else {
          message += String.fromCharCode(numericValue - 13);
        }
      }
      return message;
    }
    console.log(result);
    document.querySelector("#result").textContent = result;
  });
});