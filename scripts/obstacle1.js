class Obstacle1 {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.clientWidth = 200;
    this.clientHeight = 150;
    this.speed = 2;
    this.image = new Image();
    this.image.onload = () => {
      this.width = width || this.image.width;
      this.height = height || this.image.height;
    };
    this.img = new Image();
    if (type === 'bird') {
      this.image.onload = () => {
        this.width = 78;
        this.heigth = 20;
      };
      this.image.src = '../images/airplane_01.png';
    } else if (type === 'airplane') {
      this.image.onload = () => {
        this.width = 78;
        this.heigth = 20;
      };
      this.image.src = '../images/bird_02.png';
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.clientWidth,
      this.clientHeight
    );
    this.x -= 10;
  }
  update() {
    this.y += this.speed;
  }
  isOutOfScreen() {
    return this.y > canvas.clientHeight;
  }
}
