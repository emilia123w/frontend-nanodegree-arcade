// Enemies our player must avoid
let win = $(".win");
let loose = $(".loose");
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.sprite = 'images/enemy-bug.png'; //location and speed of a bug
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt; //bugs are moving
    if (this.x > 510) {
      this.x = -50;
      this.speed = 100 + Math.floor(Math.random()*222);//are comming from the left again
    }

    if(player.x < this.x+80 &&
    player.x + 80 > this.x &&
    player.y < this.y+60 &&
    60 + player.y > this.y) {
      player.x=202;
      player.y=405;
      loose.append('<img class="price" src="images/enemy-bug.png">');
    } //collision of player and the bug-player is going back to the beggining
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){
  this.x=x;
  this.y=y;
  this.look= 'images/char-pink-girl.png'
}  //player location and image
Player.prototype.update = function(dt){

}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.look),this.x, this.y);
}

Player.prototype.handleInput = function(key){
  if(key=='left' && this.x>0){
    this.x-=102;
  }
  if(key=='right' && this.x<405){
    this.x+=102;
  }
  if(key=='up' &&this.y>0){
    this.y-=83;
  }
  if(key=='down' && this.y<405){
    this.y+=83;
  }

if(this.y<0) {
      player.x=202;
      player.y=405
      win.append('<img class="price" src="images/Gem Blue.png">');
    } //player goes back to the beggining if wins

}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies=[];
var enemyLocation=[63, 147, 230];
  enemyLocation.forEach(function(locationY){
    enemy=new Enemy( 0, locationY,200);
    allEnemies.push(enemy)
  });

var player = new Player(202,405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
