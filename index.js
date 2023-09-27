var randomNumber1 = Math.ceil(Math.random()*6); // Generates a random number from 1-6
var randomString1 = "images/dice" + randomNumber1 + ".png"; // Changes the image source between dice1-dice6 (simulating a dice roll)
var randomNumber2 = Math.ceil(Math.random()*6);
var randomString2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src", randomString1); // Selects and modifies src attribute of img element/node
document.getElementsByTagName("img")[1].setAttribute("src", randomString2);

if(randomNumber1>randomNumber2){ // Changes the text of h1 element/node based on which player gets the greater number on their dice
  document.getElementsByTagName("h1")[0].textContent = "🚩Player 1 Wins!";
}
else if (randomNumber1===randomNumber2) {
  document.getElementsByTagName("h1")[0].textContent = "Draw!";
}
else{
  document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins!🚩";
}
