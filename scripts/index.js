console.log('JS Loaded');

// canvas setup
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.clientWidth = 1200;
canvas.clientHeight = 800;

ctx.font = 'bold 32px Tahoma';

// Create a new Balloon object and add an event listener for the mouse move event
const balloon = new Balloon();
let balloon_X = canvas.width;
let balloon_Y = canvas.height;
canvas.addEventListener('mousemove', event => {
  event.preventDefault();
  balloon.move(event.clientX, event.clientY);
});
// Define the draw function to animate the balloon
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the balloon at its current position
  balloon.draw();

  // Call the draw function again to create animation
  requestAnimationFrame(draw);
}

// Call the draw function to start the animation
draw();
