class Balloon {
  constructor() {
    // this will be the starting position of our ballon
    this.x = 0;
    this.y = 600;
    this.loaded = false;

    const img = new Image();
    img.addEventListener('load', () => {
      // once the image is loaded, draw it
      this.loaded = true;
      this.img = img;
      this.draw();
    });

    img.src = '/Images/airballon_01.png';
  }
  // velocity
  verticalVelocity() {}

  horizontalCelocity() {}

  heating() {}

  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}
