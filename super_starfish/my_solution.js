 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description:
// Overall mission: Remake the classic game 'frogger' into a space game.
// Goals: Get to the other side of the universe (Get from one side of the screen to the other)
// Characters: 'starfish' (like starfox)
// Objects: starfish, alien
// Functions: move, die, win, superstarfish(easter-egg that wins the game by typing in superstarfish)

// Pseudocode
// make a starfish object that has x,y cordanites
// make alien object that has x,y cordinates
// make a move function that moves starfish up, down, right, and left
// make a 'status' function that sets starfish.alive to false when starfish and a alien have the same x,y cordinates
// make a 'win' function that that becomes true when starfish makes it to a certain x cordinate

// Initial Code

// var starfish = {
//   x: 10,
//   y: 20,
//   alive: true,
//   won: false,
// };

// var alien = {
//   x: 20,
//   y: 40,
// };

// function move(direction){
//   if (direction === 'up'){
//     starfish.y = (starfish.y - 10); // move up
//     console.log("starfish.y is: " + starfish.y);
//   } else if (direction === 'down'){
//     starfish.y = (starfish.y + 10); // move down
//     console.log("starfish.y is: " + starfish.y);
//   } else if (direction === 'right'){
//     starfish.x = (starfish.x + 10); // move right
//     console.log("starfish.x is: " + starfish.x);
//   } else if (direction === 'left'){
//     starfish.x = (starfish.x - 10); // move left
//     console.log("starfish.x is: " + starfish.x);
//   }
// }

// function status(){
//   if (starfish.x === alien.x && starfish.y === alien.y){
//     starfish.alive = false;
//     console.log("You Crashed! Game Over");
//   } else {
//     console.log("You are still alive");
//   }
// }

// function win(){
//   if (starfish.x > 640){
//     starfish.won = true;
//     console.log("You have reached your destination, YOU WIN!");
//   }
// }

// var starfishImg = document.getElementById("starfish")
// var alienImg = document.getElementById("alien")


// cheet("warp");
// status();
// win();
// move("up");
// move("down");
// move("left");
// move("right");


// Refactored Code

var starfish = {
  x: 40,
  y: 200,
  alive: true,
  won: false,
  canMove: true,
};

var alien = {
  x: 560,
  y: 80,
  alive: true,
};

var alien2 = {
  x: 560,
  y: 200,
  alive: true,
};

var alien3 = {
  x: 560,
  y: 320,
  alive: true,
};

document.getElementById("up").onclick = function() {move(38);};
document.getElementById("down").onclick = function() {move(40);};
document.getElementById("right").onclick = function() {move(39);};
document.getElementById("left").onclick = function() {move(37);};

var starfishImg = document.getElementById("starfish");
var alienImg = document.getElementById("alien");
var alienImg2 = document.getElementById("alien2");
var alienImg3 = document.getElementById("alien3");



var alienCount = 3;

function move(direction){
  if (starfish.canMove){
    console.log('moving');
    ai_move(alien, alienImg);
    ai_move(alien2, alienImg2);
    ai_move(alien3, alienImg3);
    if (direction.keyCode === 38 || direction === 38 || direction.keyCode === 73){ // move up
      if (starfish.y > 0){
        starfish.y = (starfish.y - 40);
        starfishImg.style.top = (starfish.y + "px");
      }
    }else if (direction.keyCode === 40 || direction === 40 || direction.keyCode === 75){ // move down
      if (starfish.y < 440){
        starfish.y = (starfish.y + 40);
        starfishImg.style.top = (starfish.y + "px");
      }
    }else if (direction.keyCode === 39 || direction == 39 || direction.keyCode === 76){ // move right
      if (starfish.x < 600){
        starfish.x = (starfish.x + 40);
        starfishImg.style.left = (starfish.x + "px");
      }

    }else if (direction.keyCode === 37 || direction == 37 || direction.keyCode === 74){ // move left
      if (starfish.x > 0){
        starfish.x = (starfish.x - 40);
        starfishImg.style.left = (starfish.x + "px");
      }
    }
    status(alien, alienImg);
    status(alien2, alienImg2);
    status(alien3, alienImg3);
    setTimeout(function(){
      starfish.canMove = true;
    }, 200)
    starfish.canMove = false;
  }
}

function ai_move(player, playerImg){
  var random = Math.floor((Math.random() * 4) + 1);
  // move up
  if (random === 1){
    if (player.y > 0){
      player.y = (player.y - 40);
      playerImg.style.top = (player.y + "px");
    }
  }else if (random === 2){
    // move down
    if (player.y < 440){
      player.y = (player.y + 40);
      playerImg.style.top = (player.y + "px");
    }
  }else if (random === 3){
    // move right
    if (player.x < 600){
      player.x = (player.x + 40);
      playerImg.style.left = (player.x + "px");
    }
 }else{
    //move left
    if (player.x > 0){
      player.x = (player.x - 40);
      playerImg.style.left = (player.x + "px");
    }
 }
}

function status(enemy, enemyImg){
  if (starfish.x === enemy.x && starfish.y === enemy.y && enemy.alive){
    alienCount -= 1;
    enemy.alive = false;
    console.log ('DIE!');
    setTimeout(function(){
      console.log('killing alien');

      enemyImg.style.opacity = "0";
      enemyImg.style.transform = 'rotate(360deg) scale(5)';
      if (alienCount < 1){
        alert("Congratulations you killed the evil Space-Squid-Squad. Now you're free to roam the galaxy in peace... YOU WIN!");
      } else {
        alert("You killed an evil Space-Squid!");
      }
    }, 400);
  }
}



document.onkeydown = move;

// Reflection
// 1. What parts of your strategy worked? What problems did you face?
//    - My strategy was let the design be flexible. I changed the game quite a few times before I came up with something that was half way decent to play. This is something that I could not have seen before hand when I was trying to brainstorm. My original idea worked out just fine, but the game play was horrible.

// 2. What questions did you have while coding? What resources did you find to help you answer them?
//    - I had quite a few questions about JavaScript and found lots of useful information at http://www.w3schools.com/. I also had a few questions about positioning in CSS and found useful information at https://developer.mozilla.org/en-US/docs/Web/CSS. I had many other questions that I didn't have time to research them in more detail.

// 3. What concepts are you having trouble with, or did you just figure something out? If so, what?
//    - I had some positioning issues with css. Basically, when you set an element to have the 'position: absolute' it's absolute to the parent div that it is in. This got me tripped up and I spent a while trying to figure out what the problem was. I was able to figure out the answer to my questions by lots of googling.

// 4. Did you learn any new skills or tricks?
//    - Yes. I learned a lot on this challenge. Here is a list of things that I learned:
//         - How to use the DOM to access an HTML element
//         - How to set styles on elements by using the dot notation.
//         - How to use objects, and functions in JS
//         - CSS animations with 'transition: 0.4s' and '-webkit-transition: 0.4s'
//         - How to link a JS file to an HTML document
//         - Generate random number 1..4 with 'Math.floor((Math.random() * 4) + 1)'

// 5. How confident are you with each of the Learning Competencies?
//    - I'm pretty feeling confident.

// 6.Which parts of the challenge did you enjoy? Which parts of the challenge did you find tedious?
//    - It was challenging to code in JavaScript for the first time, but I am feeling more confident now. I enjoy making games. They have a very addicting quality that makes me spend more time because it's fun.