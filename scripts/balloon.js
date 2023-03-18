class Balloon {
  constructor() {
    // Set the initial position of the balloon
    this.x = 0;
    this.y = 600;
    this.loaded = false;

    // Create an Image object for the balloon image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once the image is loaded, set the loaded flag and draw the balloon
      this.loaded = true;
      this.img = img;
      this.draw();
    });
    img.src = '/Images/airballon_01.png';
  }

  draw() {
    // Only draw the balloon if the image is loaded
    if (!this.loaded) {
      return;
    }

    // Draw the balloon image at its current position on the canvas
    ctx.drawImage(this.img, this.x, this.y, 150, 256);
  }

  move(x, y) {
    // Update the position of the balloon based on the mouse position
    this.x = x;
    this.y = y;
  }
}
