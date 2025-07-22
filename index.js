var randomNumber1 = Math.ceil(Math.random()*6);
var image1 = document.getElementsByClassName('img1')[0];
image1.setAttribute('src', './images/dice' +randomNumber1 +'.png');

var randomNumber2 = Math.ceil(Math.random()*6);
var image2 = document.getElementsByClassName('img2')[0];
image2.setAttribute('src', './images/dice' +randomNumber2 +'.png');

var text = "";
if(randomNumber1>randomNumber2){
    text = "Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    text = "Player 2 Wins";
}
else{
    text = "Draw";
}

var title = document.querySelector('div > h1');
title.innerHTML = text;