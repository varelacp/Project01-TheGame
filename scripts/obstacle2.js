class Obstacle2 {
  constructor(x, type, y, width, height) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = width;
    this.height = height;
    this.speed = 2;
    this.image = new Image();
    this.image.onload = () => {
      this.width = width || this.image.width;
      this.height = height || this.image.height;
    };
    if (type === 'building1') {
      this.image.onload = () => {
        this.width = 240;
        this.height = 150;
      };
      this.image.src = '../images/house_01.png';
    } else if (type === 'building2') {
      this.image.onload = () => {
        this.width = 240;
        this.height = 160;
      };
      this.image.src = '../images/padrao_01.png';
    } else if (type === 'building3') {
      this.image.onload = () => {
        this.width = 200;
        this.height = 210;
      };
      this.image.src = '../images/se_01.png';
    } else if (type === 'building4') {
      this.image.onload = () => {
        this.width = 200;
        this.height = 256;
      };
      this.image.src = '../images/torre_vasco_gama_01.png';
    }
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.x -= 10;
  }

  update() {
    // move obstacle left
    this.x -= this.speed;
  }

  isOutOfScreen() {
    return this.y > canvas.clientHeight;
  }
}
