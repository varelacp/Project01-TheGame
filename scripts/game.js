/* constructor(player) {
  // this class will receive the player that gets created in the component class

  this.player = player;
  // this will hold the intervalId from the setInterval that controls the game
  this.interval = undefined;
  this.frames = 0;
  // this
  this.obstacles = [];
}

start = () => {

 
};

stop = () => {
  //cancels the interval that loops the game

};

clear = () => {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
};

score = () => {
  const points = Math.floor(this.frames / 5);
  ctx.font = '10px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(`Score: ${points}`, 200, 50);
};

updateGameArea = () => {
  //firts we clear the canvas
  this.clear();

  // move the player
  this.player.move();

  // draw the new position of the player
  this.player.draw();

  //
  this.drawObstacles();

  // check the collision
  this.checkGameOver();

  // draw the score
  this.score();
};

drawObstacles = () => {
  this.obstacles.forEach(obstacle => {
    obstacle.x -= 1;
    obstacle.draw();
  });

  // based on this value, we'll add some more obstacles
  this.frames += 1;
  // every time the value % 120 is 0,
  if (this.frames % 120 === 0) {
    // creating top obstacles
    const minHeight = 20;
    const maxHeight = 160;

    // generate random number from 0 to max value
    // since the minHeight  is 20,we need to add that to the generated a number
    // and remove the minHeight is from the max to balance it
    const randomHeight = Math.floor(
      Math.random() * (maxHeight - minHeight) + minHeight
    );

    const obstacleTop = new Component(
      // fixed width for the obstacle
      10,
      randomHeight,
      'green',
      //initial position is at the right of the canvas
      canvas.clientWidth,
      0
    );

    // we add the new obstacle to the arry of obstacles
    this.obstacles.push(obstacleTop);

    // in order to garantee new obstacle to the array of the obstacle
    // obstacle, we need to generate

    const minGap = 80;
    const maxGap = 50;
    const randomHGap = Math.floor(Math.random() * (maxGap - minGap) + minGap);

    const obstacleBootom = new Component(
      10,
      // we´ll use the height of the top
      canvas.clientHeight - (randomHeight + randomHGap),
      'green',
      canvas.clientWidth,
      randomHeight + randomHGap
    );
    this.obstacles.push(obstacleBootom);
  }
};

checkGameOver = () => {
  const crashed = this.obstacles.some(obstacle => {
    if (this.player.collisionWith(obstacle)) {
      return true;
    } else {
      return false;
    }
  });
  if (crashed) {
    this.stop();
  }
}; */
