const images = ["dice1.png","dice2@2x.png","dice3@2x.png","dice4@2x.png","dice5@2x.png","dice6@2x.png"];
const btn = document.getElementsByClassName("roll-dice")[0];
const dice1 = document.getElementsByClassName('dice-1')[0];
const dice2 = document.getElementById('dice-2');

btn.addEventListener("click", (e) => {
   const img1Index = Math.floor(Math.random() * images.length);
   const img2Index = Math.floor(Math.random() * images.length);

   dice1.src = "./images/" + images[img1Index];
   dice2.src = "./images/" + images[img2Index];
});
