class Balloon {
  constructor(width, heigth, x, y) {
    // Set the initial position of the balloon
    this.x = 50;
    this.y = 500;
    this.width = width;
    this.heigth = heigth;
    this.loaded = false;

    // Create an Image object for the balloon image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once the image is loaded, set the loaded flag and draw the balloon
      this.loaded = true;
      this.img = img;
      this.draw();
    });
    img.src = '../Images/airballoon_01.png';
  }

  draw() {
    // Only draw the balloon if the image is loaded

    if (!this.loaded) {
      return;
    }

    // Draw the balloon image at its current position on the canvas
    ctx.drawImage(this.img, this.x, this.y, 130, 222);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  update() {
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
  }
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
  collisionWith = balloon => {
    return !(
      this.bottom() < balloon.top() ||
      this.top() > balloon.bottom() ||
      this.right() < balloon.left() ||
      this.left() > balloon.right()
    );
  };
}
