class Balloon {
  constructor(x, y, ctx) {
    // Set the initial position of the balloon
    this.x = x;
    this.y = y;
    this.width = 130;
    this.height = 222;
    this.speed = 2;
    this.lives = 5;
    this.isGameOver = true;
    this.moving = true;
    this.loaded = false;
    this.img = null;
    this.ctx = ctx;
    this.interval = undefined;

    // Create an Image object for the balloon image
    const img = new Image();
    img.onload = () => {
      // Once the image is loaded, set the loaded flag and draw the balloon
      this.loaded = true;
      this.img = img;
      this.draw();
    };
    img.src = '../images/airballoon_01.png';

    // Add event listener to move balloon with mouse
    canvas.addEventListener('mousemove', event => {
      this.x = event.clientX - canvasPosition.left - this.width / 2;
      this.y = event.clientY - canvasPosition.top - this.height / 2;
    });
  }
  start() {
    this.interval = setInterval(this.update, 40);
  }
  draw() {
    if (!this.loaded) return;
    this.ctx.drawImage(this.img, this.x, this.y, 130, 222);
  }

  update() {
    this.y -= this.speed;
    if (this.y < -this.height) {
      this.y = canvas.height;
    }
  }
  checkCollisionWith(obstacle) {
    const balloonBox = {
      x: this.x + 10,
      y: this.y + 10,
      width: this.width - 20,
      height: this.height - 20
    };

    const obstacleBox = {
      x: obstacle.x - obstacle.width / 2 + 10,
      y: obstacle.y - obstacle.height / 2 + 10,
      width: obstacle.width - 20,
      height: obstacle.height - 20
    };

    /* return (
      balloonBox.x < obstacleBox.x + obstacleBox.width &&
      balloonBox.x + balloonBox.width > obstacleBox.x &&
      balloonBox.y < obstacleBox.y + obstacleBox.height &&
      balloonBox.y + balloonBox.height > obstacleBox.y
    ); */

    console.log('width ', obstacle.width);
    console.log('height', obstacle.height);

    return !(
      this.y + this.height < obstacle.y ||
      this.y > obstacle.y + obstacle.height ||
      this.x + this.width < obstacle.x ||
      this.x > obstacle.x + obstacle.width
    );
  }

  /* 
  checkCollisionWith(obstacle) {
    return (
      this.x + this.width / 2 > obstacle.x - obstacle.width / 2 &&
      this.x - this.width / 2 < obstacle.x + obstacle.width / 2 &&
      this.y + this.height / 2 > obstacle.y - obstacle.height / 2 &&
      this.y - this.height / 2 < obstacle.y + obstacle.height / 2
    ); */

  restart() {
    this.x = 50;
    this.y = -500;
    this.isGameOver = false;
  }

  move(mouseX, mouseY) {
    // Move balloon with mouse
    this.x = Math.max(
      0,
      Math.min(canvas.width - this.width, mouseX - this.width / 2)
    );
    this.y = Math.max(
      0,
      Math.min(canvas.height - this.height, mouseY - this.height / 2)
    );
  }
}

/*  console.log('Balloon move called');
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    if (mouse.x != this.x) {
      this.x -= dx / 20;
      this.moving = true;
    }
    if (mouse.y != this.y) {
      this.y -= dy / 20;
      this.moving = true;
    }
    this.y += 10; */

/* if (this.gameOver) {
      return;
    }
    this.x = Math.min(Math.max(this.x, 0), canvas.width - this.width);
    this.lives--; */
