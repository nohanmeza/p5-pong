/*
 * Skeleton of a ball bouncing /game/.
 * Keith O'Hara <kohara@bard.edu>
 */

var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;

var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;


function setup() {
/*
 * Skeleton of a ball bouncing /game/.
 * Keith O'Hara <kohara@bard.edu>
 */

var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;

var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;
var s;
var lastSecond;
var ballX = 750;
var ballY = 300;
var lives;






function setup() {
    createCanvas(600, 300);
  frameRate (60)
    paddle_h = 16;
    paddle_w = 6 * paddle_h;
    paddle_x = width / 2;
    paddle_y = height - paddle_h;
    paddle_step = 0;
    ball_r = 13;
    reset();
    lives = 3
}

function draw() {
   
    background(125);
    fill (0)
    text (frameCount/60, 5, 20)
    text (lives, 5, 40)


    // move paddle
    //paddle_x += (mouseX - paddle_x) * .1;
    paddle_x = paddle_x + paddle_step;

    // is the ball hitting the right or left wall?
    if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
	ball_x_step = -ball_x_step;
    }

    // hitting the top?
    if (ball_y - ball_r < 0) {
	ball_y_step = -ball_y_step;
    }

    // hitting the paddle?
    if (ball_y + ball_r > paddle_y) {
	if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
	    ball_y_step = -ball_y_step;
	    ball_y = paddle_y - ball_r;
      
	}
	else if (ball_y + ball_r > paddle_y){
        lives = lives - 1
	    reset();
	}
    }

    // move ball by ball_x_step and ball_y_step
    ball_x = ball_x + ball_x_step;
    ball_y = ball_y + ball_y_step;

    //draw ball
    noStroke();
    fill(random (255),random (255), random(255));
    ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);

    // draw paddle
    stroke(24);
    fill(64);
    rect(paddle_x, paddle_y, paddle_w, paddle_h);
  
  
}

function reset() {
    ball_x = random(ball_r, width - ball_r);
    ball_y = random(ball_r, height / 2);
    ball_x_step = random(-3, 3);
    ball_y_step = random(1, 3);
    
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
	paddle_step = -3;
    } else if (keyCode == RIGHT_ARROW) {
	paddle_step = 3;
    } else if (key == ' ') {
	reset();
    }
}

function keyReleased() {
    paddle_step = 0;
}

function reset() {
    ball_x = random(ball_r, width - ball_r);
    ball_y = random(ball_r, height / 2);
    ball_x_step = random(-3, 3);
    ball_y_step = random(1, 3);
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
	paddle_step = -3;
    } else if (keyCode == RIGHT_ARROW) {
	paddle_step = 3;
    } else if (key == ' ') {
	reset();
    }
}

function keyReleased() {
    paddle_step = 0;
}

