

function createParagraph() {
   var wordOne = document.getElementById("one").value;
   var wordTwo =  document.getElementById("two").value;
   var wordThree = document.getElementById("three").value;
   var wordFour = document.getElementById("four").value
   var wordFive = document.getElementById("five").value
   var wordSix =  document.getElementById("six").value
   

   var paragraph = "<p> mothers sit around " + wordOne + ". " + "Last summer, my little brother fell in a/an " + wordTwo + " and got poison " + wordThree + " all over his " + wordFour + ". " + "My family is going to go to " + wordFive + ", " + "and I will try to stay " + wordSix + "</p>"

    document.getElementById("answer").innerHTML = paragraph;
}
