// invaders

const invadersImage = new Image();
invadersImage.src = '../Images/bird_01.png';

class Invaders {
  constructor() {
    this.x = canvas.clientWidth + 200;
    this.y = Math.random() * (canvas.clientHeight / 2) + 90;
    this.radius = 30;
    this.speed = Math.random() * 2 + 2; // between 0 and 6
    /*  this.distance;
    this.counted = false;
    this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2';  */ // else stament
  }
  draw() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.drawImage(
      invadersImage,
      this.x - 20,
      this.y - 20,
      this.radius + 15,
      this.radius + 15
    );
  }
  update() {
    this.x -= this.speed;
    if (this.x < 0 - this.radius * 2) {
      this.x = canvas.clientWidth + 200;
      this.y = Math.random() * (canvas.clientHeight / 2) + 90;
      this.speed = Math.random() * 2 + 2;
    }
  }
  collisionWith = balloon => {
    return !(
      this.bottom() < Invaders.top() ||
      this.top() > Invaders.bottom() ||
      this.right() < Invaders.left() ||
      this.left() > Invaders.right()
    );
  };
}

/* const birdSound = document.createElement('audio');
birdSound.src = ''  */
