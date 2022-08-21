let images = ["dice1.png","dice2@2x.png","dice3@2x.png","dice4@2x.png","dice5@2x.png","dice6@2x.png"];

document.getElementsByClassName("roll-dice")[0].addEventListener("click", (e) => {
   let img1Index = Math.floor(Math.random() * images.length);
   let img2Index = Math.floor(Math.random() * images.length);

   document.getElementsByClassName('dice-1')[0].src = "./images/" + images[img1Index];
   document.getElementById('dice-2').src = "./images/" + images[img2Index];
});
