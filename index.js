


// var randomNumber1 = math.floor((math.random()*6)+1);
// alert(randomNumber1);
// var firstImage = document.querySelectorAll("img")[0];
// var secondImage = document.querySelectorAll("img")[1];
// alert(randomNumber);
// if(randomNumber1===1)
// firstImage.setAttribute("src","images/dice1.png");
// if(randomNumber1===2)
// firstImage.setAttribute("src","images/dice2.png");
// if(randomNumber1===3)
// firstImage.setAttribute("src","images/dice3.png");
// if(randomNumber1===4)
// firstImage.setAttribute("src","images/dice4.png");
// if(randomNumber1===5)
// firstImage.setAttribute("src","images/dice5.png");
// if(randomNumber1===6)
// firstImage.setAttribute("src","images/dice6.png");


// var randomNumber2 = math.floor((math.random()*6)+1);
// if(randomNumber2===1)
// secondImage.setAttribute("src","images/dice1.png");
// if(randomNumber2===2)
// secondImage.setAttribute("src","images/dice2.png");
// if(randomNumber2===3)
// secondImage.setAttribute("src","images/dice3.png");
// if(randomNumber2===4)
// secondImage.setAttribute("src","images/dice4.png");
// if(randomNumber2===5)
// secondImage.setAttribute("src","images/dice5.png");
// if(randomNumber2===6)
// secondImage.setAttribute("src","images/dice6.png");




var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2)
document.querySelector("h1").textContent = "Player 1 Wins";
else if(randomNumber1 < randomNumber2)
document.querySelector("h1").textContent = "Player 2 Wins";
else
document.querySelector("h1").textContent = "Draws !";







// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }