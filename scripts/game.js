console.log('JS Loaded');

// canvas setup
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.clientWidth = 1200;
canvas.clientHeight = 800;

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

class Game {
  constructor() {
    this.balloon = new Balloon(50, -500, ctx);

    this.obstacles1 = [];
    this.obstacles2 = [];
    this.isGameOver = false;
    this.lives = 0;

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
    // this.balloon.move();
    this.balloon.draw();

    this.balloon.update();

    for (let i = 0; i < this.obstacles1.length; i++) {
      const obstacle = this.obstacles1[i];
      obstacle.update();
      obstacle.draw();
      this.balloon.checkCollissionWith(obstacle);
      if (obstacle.isOutOfScreen()) {
        this.obstacles1.splice(i, 1);
        i--;
        this.lives++;
      }
    }

    for (let i = 0; i < this.obstacles2.length; i++) {
      const obstacle = this.obstacles2[i];
      obstacle.update();
      obstacle.draw();
      this.balloon.checkCollissionWith(obstacle);
      if (obstacle.isOutOfScreen()) {
        this.obstacles2.splice(i, 1);
        i--;
        this.lives++;
      }
    }

    if (this.balloon.isGameOver) {
      this.gameOver();
    } else {
      ctx.font = '20px Arial';
      ctx.fillText(`Lives: ${this.lives}`, 10, 30);
      requestAnimationFrame(() => this.update());
    }
  }
  generateObstacles1() {
    const types = ['bird', 'airplane'];
    setInterval(() => {
      const type = types[Math.floor(Math.random() * types.length)];
      const x = Math.random() * (canvas.width - 50);
      const obstacle = new Obstacle1(1500, 20, type);
      this.obstacles1.push(obstacle);
    }, 1500);
  }

  generateObstacles2() {
    this.types = ['building1', 'building2', 'building3', 'building4'];
    this.widths = [240, 240, 200, 200];
    this.heights = [150, 160, 210, 256];

    setInterval(() => {
      const type = this.types[Math.floor(Math.random() * this.types.length)];
      const width = this.widths[this.types.indexOf(type)];
      const height = this.heights[this.types.indexOf(type)];
      const x = Math.random() * (canvas.width - width);
      const obstacle = new Obstacle2(1500, type, 600, height);
      this.obstacles2.push(obstacle);
    }, 3000);
  }

  gameOver() {
    this.isGameOver = true;
    this.ctx.font = '30px Arial';
    this.ctx.fillText('Game Over', canvas.width / 2 - 70, canvas.height / 2);
    this.ctx.fillText(
      `Final Lives: ${this.lives}`,
      canvas.width / 2 - 90,
      canvas.height / 2 + 40
    );
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
