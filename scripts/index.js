console.log('JS Loaded');

// canvas setup
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.clientWidth = 1200;
canvas.clientHeight = 800;

let score = 50;
let gameFrame = 0;
ctx.font = 'bold 32px Tahoma';

const invader1 = new Invaders();
function handleInvaders() {
  invader1.update();
  invader1.draw();
}

// Create a new Balloon object and add an event listener for the mouse move event
const balloon = new Balloon();
balloon.draw();

// Mouse Interactivity

let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
  x: 50,
  y: 500,
  click: false
};
canvas.addEventListener('mousemove', function (e) {
  mouse.click = true;
  mouse.x = e.x - canvasPosition.left;
  mouse.y = e.y - canvasPosition.top;
});
window.addEventListener('mouseup', function (e) {
  mouse.click = false;
});

//Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balloon.update();
  balloon.draw();
  handleInvaders();
  ctx.fillStyle = 'black';
  ctx.fillText('Score: ' + score, 30, 60);
  requestAnimationFrame(animate);
}
animate();

/* checkCollision () {
  if(balloon.left < invader1.left + balloon.width && balloon.left + balloon.width > invader1.left && balloon.right < invader1.right + invader1.bottom && balloon.right + balloon.heigth > invader1.height) {
  }
  return 
};
 */

// balloon.draw(130, 222, 'green', 50, 500);

// repeating backgrounds - go to css to put info at the background - linear gradient
/* const background = new Image();
background.src = 'imagem'





/* let balloon_X = canvas.width;
let balloon_Y = canvas.height; */
/* canvas.addEventListener('mousemove', event => {
  event.preventDefault();
  balloon.move(event.clientX, event.clientY);
}); */
// Define the draw function to animate the balloon
/* function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the balloon at its current position
  balloon.draw();

  // Call the draw function again to create animation
  requestAnimationFrame(draw);
}

// Call the draw function to start the animation
draw();
 */
/* 
function animate() {
  const velocityChangeWhileHeating = 0.4;
  const velocityChangeWhileCooling = 0.2;

  if (heating) {
    vertivalVelocity -= velocityChangeWhileHeating;
  } else if (vertivalVelocity < 5) {
    vertivalVelocity += velocityChangeWhileCooling;
  }
  balloon.y += vertivalVelocity;
  if (balloon.y > 0) balloon.y = 0;
  if (balloon.y < 0) balloon.x + -horizontalVelocity;
} */

/* let heating;
let vertivalVelocity = 5;
let horizontalVelocity = 5;
let gameStart = false; */

// event handling
/* window.addEventListener('mousedown', function () {
  heating = true;
  if (!gameStart) {
    window.requestAnimationFrame(animate);
  }
});

window.addEventListener('mouseup', function () {
  heating = false;
}); */
