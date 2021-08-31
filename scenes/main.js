const MOVE_SPEED = 200;
let INVADER_SPEED = 100;
let CURRENT_SPEED = INVADER_SPEED;
const LEVEL_DOWN = 100;
const STAR_SPEED = 120;

add([
		text("KILL ALL ALIENS", 18),
		pos(width() / 2, height() / 5 ),
		origin("center"),
		layer("obj"),
    'message',
	]);

action("message", (m) => {
		m.move(0, STAR_SPEED);
		if (m.pos.y >= height()) {
			destroy(m);
		}
	});



//sound
const music = play('invaders', { loop: true, });
volume(0.5)
// const music2 = play('win');
// const music3 = play('gameOver');


//layers of the game board
layer(['obj', 'ui'], 'obj')

//sky

const sky = add([
  rect(width(), height()),
  color(0,0,0,0),
]);
//stars
//add stars
  add([
		sprite("stars"),
		scale(width() / 580, height() / 580),
		pos(50, 0),
		"stars",
	]);

	add([
		sprite("stars"),
		scale(width() / 680, height() / 680),
		pos(100, 80),
		"stars",
	]);

  add([
		sprite("stars"),
		scale(width() / 580, height() / 580),
		pos(150, 120),
		"stars",
	]);

	add([
		sprite("stars"),
		scale(width() / 680, height() / 680),
		pos(200, 260),
		"stars",
	]);

add([
		sprite("stars"),
		scale(width() / 680, height() / 680),
		pos(240, 20),
		"stars",
	]);

  add([
		sprite("stars"),
		scale(width() / 680, height() / 680),
		pos(290, 160),
		"stars",
	]);

  add([
		sprite("stars"),
		scale(width() / 680, height() / 680),
		pos(360, 360),
		"stars",
	]);

  //move stars down the screen
action("stars", (r) => {
		r.move(0, STAR_SPEED);
		if (r.pos.y >= height()) {
			r.pos.y -= height() * 2;
		}
	});
  
//message
// add([
// 		text("KILL ALL ALIENS",24),
// 		pos(width() / 2, height() / 2),
// 		origin("center"),
// 		layer("ui"),
// 	]);
  
//create the game board
addLevel([
  '%                %',
  '                  ',
  '!^@^@^@^@^@.     &',
  '!@^@^@^@^@^      &',
  '!^@^@^@^@^@      &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
  '!                &',
], {
  width: 30,
  height: 22,
  '^' : [ sprite('space-invader'), scale(0.5), 'space-invader'],
  '@' : [ sprite('space-invader2'), scale(0.5), 'space-invader'],
  '!' : [ sprite('wall'), 'left-wall'],
  '&' : [ sprite('wall'), 'right-wall'],
  '%' : [ sprite('leader'), 'left-wall', 'right-wall']
  
})

//add spaceship
const player = add([
  sprite('space-ship'),
  pos(width() / 2, height() - 16),
  origin('center')
]);

//move player left
keyDown('left', () => {
  player.move(-MOVE_SPEED, 0);
  if(player.pos.x < 20) {
    player.pos.x = 20;
  }
})

//move player right
keyDown('right', () => {
  player.move(MOVE_SPEED, 0);
  if(player.pos.x > width()){
    player.pos.x = width();
  }
})

//spawn bullet
function spawnBullet(p){
  add([
    rect(4,12), 
    pos(p), 
    origin('center'), 
    color(rand(rgb(0, 0, 0), rgb(1, 1, 1))), 
    'bullet'
    ])
}
//fire bullets
keyPress('space', () => {
  play('pew');
  spawnBullet(player.pos.add(0, -17))
})

const BULLET_SPEED = 400
//move bullet
action('bullet', (b) => {
  b.move(0, -BULLET_SPEED)
  if(b.pos.y < 0) {
    destroy(b);
  }
})

//bullet hits invader
collides('bullet', 'space-invader', (b,s) =>  {
  play('splode');
  camShake(4);
  destroy(b);
  destroy(s);
  score.value ++;
  score.text = score.value;
  //clear all aliens, win!
  if(score.value === 30){
    music.pause();
    go('win', { score : score.value })
  }
})

const score = add([
  text('0'),
  origin("botleft"),
  pos(4, height() - 2),
  layer('ui'),
  scale(3),
   {
     value: 0,
   }
])

action('space-invader', (s) => {
  s.move(CURRENT_SPEED, 0)
})

//right wall collision and reverse
collides('space-invader', 'right-wall', () => {
  CURRENT_SPEED = -INVADER_SPEED
  every('space-invader', (s) => {
     s.move(0, LEVEL_DOWN);
    music.detune(music.detune() + 1);
  })
})

//left wall collision and reverse
collides('space-invader', 'left-wall', () => {

  CURRENT_SPEED = INVADER_SPEED
  every('space-invader', (s) => {
     s.move(0, LEVEL_DOWN)
  })
})

keyPress("m", () => {

	// pause / play music
	if (music.paused()) {
		music.play();
	} else {
		music.pause();
	}
});

player.overlaps('space-invader', () => {
  music.pause();
  go('lose', { score : score.value })
})

action('space-invader', (s) => {
  if (s.pos.y >= height() ){
    music.pause();
      go('lose', { score : score.value })
  }
})
