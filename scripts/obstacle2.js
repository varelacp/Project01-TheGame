class Obstacle2 {
  static aspectRatio = 0.6;
  constructor(x, y, type, width, height) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = width;
    this.height = height;
    this.speed = 2;
    this.image = null;
    this.imageLoaded = false;
    this.getBuildingImage(type);
  }
  getBuildingImage(type) {
    let image = new Image();
    const aspectRatio = Obstacle2.aspectRatio;
    if (type === 'building1') {
      image.onload = () => {
        this.width = 240 * aspectRatio;
        this.height = 160 * aspectRatio;
        this.imageLoaded = true;
      };
      image.src = '../images/padrao_01.png';
    } else if (type === 'building2') {
      image.onload = () => {
        this.width = 240 * aspectRatio;
        this.height = 150 * aspectRatio;
        this.imageLoaded = true;
      };
      image.src = '../images/house_01.png';
    } else if (type === 'building3') {
      image.onload = () => {
        this.width = 200 * aspectRatio;
        this.height = 210 * aspectRatio;
        this.imageLoaded = true;
      };
      image.src = '../images/se_01.png';
    } else if (type === 'building4') {
      image.onload = () => {
        this.width = 200 * aspectRatio;
        this.height = 256 * aspectRatio;
        this.imageLoaded = true;
      };
      image.src = '../images/torre_vasco_gama_01.png';
    }
    this.image = image;
  }
  getBoundingBox() {
    const aspectRatio = Obstacle2.aspectRatio;
    return {
      x: this.x - this.width / 2,
      y: this.y - this.height,
      width: this.width,
      height: this.height * (1 + aspectRatio)
    };
  }

  draw() {
    if (!this.imageLoaded) {
      return;
    }
    ctx.drawImage(
      this.image,
      this.x - this.width / 2,
      this.y - this.height,
      this.width,
      this.height
    );
    this.x -= 10;
  }
  move() {
    this.x -= this.speed;
  }

  isOutOfScreen() {
    return this.y > canvas.clientHeight;
  }

  collidesWith(balloon) {
    return (
      this.x - this.width / 2 < balloon.x + balloon.width / 2 &&
      this.x + this.width / 2 > balloon.x - balloon.width / 2 &&
      this.y + this.height / 2 > balloon.y - balloon.height / 2 &&
      this.y - this.height / 2 < balloon.y + balloon.height / 2
    );
  }
}
