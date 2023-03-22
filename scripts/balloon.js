class Balloon {
  constructor(x, y, ctx) {
    // Set the initial position of the balloon
    this.x = x;
    this.y = y;
    this.width = 130;
    this.heigth = 222;
    this.lives = 5;
    this.isGameOver = false;
    this.moving = true;
    this.loaded = false;
    this.img = null;
    this.ctx = ctx;

    // Create an Image object for the balloon image
    const img = new Image();
    img.onload = () => {
      // Once the image is loaded, set the loaded flag and draw the balloon
      this.loaded = true;
      this.img = img;
      this.draw();
    };
    img.src = './images/airballoon_01.png';
  }

  /* img.addEventListener('load', () => {
      
    }); */

  /*  canvas.addEventListener('mousedown', event => {
      if (
        event.clientX >= this.x &&
        event.clientX <= this.x + this.width &&
        event.clientY >= this.y + this.heigth
      ) {
        console.log('Runnig');
        this.isMoving = true;
      }
    });
    canvas.addEventListener('mousemove', event => {
      this.isMoving = false;
    }); */

  /*  move() {
    this.x = x;
    this.y = y;
  } */
  update = () => {
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
    this.y += 10;

    /* this; */
  };
  left = () => {
    return this.x;
  };

  right = () => {
    return this.x + this.width;
  };

  top = () => {
    return this.y;
  };

  bottom = () => {
    return this.y + this.heigth;
  };

  draw() {
    // Only draw the balloon if the image is loaded
    if (!this.loaded) return;
    ctx.drawImage(this.img, this.x, this.y, 130, 222);
  }

  update() {
    if (this.isGameOver) {
      return;
    }
    this.x = Math.min(Math.max(this.x, 0), canvas.width - this.width);
    this.lives--;
  }
  restart() {
    this.lives = 5;
    this.isGameOver = false;
  }
  checkCollissionWith(obstacle) {
    // check if player collides with obstacle
    if (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    ) {
      this.isGameOver = true;
    }
  }
}
