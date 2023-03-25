console.log('JS Loaded');

// canvas setup
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.clientWidth = 1200;
canvas.clientHeight = 800;
const aspectRatio = 16 / 9; // Replace with the aspect ratio of your canvas
let canvasPosition = canvas.getBoundingClientRect();

const background = new Image();
background.src = '../images/land-sky_01.png';
function handleBackground() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}
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

class Game {
  constructor() {
    this.balloon = new Balloon(50, 530, ctx);

    this.obstacles1 = [];
    this.obstacles2 = [];
    this.isGameOver = true;
    this.lives = 5;

    canvas.addEventListener('click', () => {
      if (this.isGameOver) {
        this.restart();
      }
    });

    this.generateObstacles1();
    this.generateObstacles2();
    this.update();
  }

  update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(this.lives);
    // this.balloon.move();
    handleBackground();
    this.balloon.draw();

    this.balloon.update();

    for (let i = 0; i < this.obstacles1.length; i++) {
      const obstacle = this.obstacles1[i];
      obstacle.move();
      obstacle.draw();
      if (this.balloon.checkCollisionWith(obstacle)) {
        this.obstacles1.splice(i, 1);
        this.lives -= 1;
      }

      if (obstacle.isOutOfScreen() && !this.balloon.isGameOver) {
        this.obstacles1.splice(i, 1);
        i--;
      } /* else if (obstacle.collidesWith(this.balloon)) {
        this.balloon.isGameOver = true;
        break;
      } */
    }
    for (let i = 0; i < this.obstacles2.length; i++) {
      const obstacle = this.obstacles2[i];
      obstacle.move();
      obstacle.draw();
      if (this.balloon.checkCollisionWith(obstacle)) {
        this.obstacles2.splice(i, 1);
        this.lives -= 1;
      }
      if (obstacle.isOutOfScreen() && !this.balloon.isGameOver) {
        this.obstacles2.splice(i, 1);
        i--;
      } /* else if (obstacle.collidesWith(this.balloon)) {
        this.balloon.isGameOver = true;
        break;
      } */
    }

    if (this.lives <= 0) {
      this.gameOver();
      this.gameOver = true;
    } else {
      ctx.font = '20px Arial';
      ctx.fillText(`Lives: ${this.lives}`, 10, 30);
      setTimeout(() => {
        requestAnimationFrame(() => this.update());
      }, 1000 / 60);
    }
  }

  generateObstacles1() {
    const types = ['bird', 'airplane'];
    setInterval(() => {
      const type = types[Math.floor(Math.random() * types.length)];
      const x = Math.random() * (canvas.width - 50);
      const obstacle = new Obstacle1(1500, 50, type);
      this.obstacles1.push(obstacle);
    }, 1500);
  }

  generateObstacles2() {
    this.types = ['building1', 'building2', 'building3', 'building4'];
    this.widths = [240, 240, 200, 200];
    this.heights = [150, 160, 210, 256];
    this.yPositions = [760, 760, 760, 760];

    setInterval(() => {
      const type = this.types[Math.floor(Math.random() * this.types.length)];
      const width = this.widths[this.types.indexOf(type)];
      const height = this.heights[this.types.indexOf(type)];
      const x = Math.random() * (canvas.width - width);
      const y =
        this.yPositions[Math.floor(Math.random() * this.yPositions.length)];
      const obstacle = new Obstacle2(x, y, type, width, height);
      this.obstacles2.push(obstacle);
    }, 2000); // decrease the interval to 1000 milliseconds (1 second)
  }
  /*  this.types = ['building1', 'building2', 'building3', 'building4'];
    this.widths = [240, 240, 200, 200];
    this.heights = [150, 160, 210, 256];

    setInterval(() => {
      const type = this.types[Math.floor(Math.random() * this.types.length)];
      const width = this.widths[this.types.indexOf(type)];
      const height = this.heights[this.types.indexOf(type)];
      const x = Math.random() * (canvas.width - width);
      const y = canvas.height - height;
      const obstacle = new Obstacle2(x, y, type, width, height);
      this.obstacles2.push(obstacle);
    }, 3000);
  } */

  gameOver() {
    this.isGameOver = true;
    ctx.font = '30px Arial';
    ctx.fillText('Game Over', canvas.width / 2 - 70, canvas.height / 2);
    ctx.fillText(
      `Final Lives: ${5 - this.lives}`,
      canvas.width / 2 - 90,
      canvas.height / 2 + 40
    );
    this.lives = 0;

    // Show restart button
    this.showRestartButton();
  }

  showRestartButton() {
    const restartBtn = document.getElementById('restart-btn');
    restartBtn.style.display = 'block';
    restartBtn.addEventListener('click', () => {
      restartBtn.style.display = 'none';
      this.restart();
    });
  }

  hideRestartButton() {
    const restartBtn = document.getElementById('restartBtn');
    restartBtn.style.display = 'none';
  }

  restart() {
    this.isGameOver = false;
    this.lives = 0;
    this.balloon.restart();
    this.obstacles1 = [];
    this.obstacles2 = [];
    this.generateObstacles1();
    this.generateObstacles2();
    this.update();
  }
}

const game = new Game();
