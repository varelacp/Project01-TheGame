class Obstacle1 {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.height = 20;
    this.clientWidth = 100;
    this.clientHeight = 100;
    this.speed = 2;
    this.boundingBox = { x: x, y: y, width: 0, height: 0 };
    this.image = new Image();
    this.image.onload = () => {
      this.width = width || this.image.width;
      this.height = height || this.image.height;
    };
    this.img = new Image();
    if (type === 'bird') {
      this.image.onload = () => {
        this.width = 78;
      };
      this.image.src = '../images/airplane_200x52px_01.png';
    } else if (type === 'airplane') {
      this.image.onload = () => {
        this.width = 78;
      };
      this.image.src = '../images/bird_100x94px_02.png';
    }
  }
  getBoundingBox() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.clientWidth,
      this.clientHeight
    );

    // Update the bounding box's position
    this.boundingBox.x = this.x = this.x;

    ctx.strokeStyle = 'red';
    ctx.strokeRect(
      this.boundingBox.x,
      this.boundingBox.y,
      this.boundingBox.width,
      this.boundingBox.height
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
    const dx =
      balloon.x -
      Math.max(
        this.boundingBox.x,
        Math.min(balloon.x, this.boundingBox.x + this.boundingBox.width)
      );
    const dy =
      balloon.y -
      Math.max(
        this.boundingBox.y,
        Math.min(balloon.y, this.boundingBox.y + this.boundingBox.height)
      );
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance < balloon.radius;
    /*  return (
      this.x - this.width / 2 < balloon.x + balloon.width / 2 &&
      this.x + this.width / 2 > balloon.x - balloon.width / 2 &&
      this.y + this.height / 2 > balloon.y - balloon.height / 2 &&
      this.y + this.height / 2 > balloon.y - balloon.height / 2 */
  }
}
