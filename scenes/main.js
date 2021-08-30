const MOVE_SPEED = 200;
let INVADER_SPEED = 100;
let CURRENT_SPEED = INVADER_SPEED;
const LEVEL_DOWN = 100;

//layers of the game board


layer(['obj', 'ui'], 'obj')

//create the game board
addLevel([
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
  '^' : [ sprite('space-invader'), scale(0.7), 'space-invader'],
  '@' : [ sprite('space-invader2'), scale(0.7), 'space-invader'],
  '!' : [ sprite('wall'), 'left-wall'],
  '&' : [ sprite('wall'), 'right-wall']
  
})

//add spaceship
const player = add([
  sprite('space-ship'),
  pos(width() / 2, height() * .8),
  origin('center')
]);

//move player left
keyDown('left', () => {
  player.move(-MOVE_SPEED, 0)
})

//move player right
keyDown('right', () => {
  player.move(MOVE_SPEED, 0)
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
  camShake(4);
  destroy(b);
  destroy(s);
  score.value ++;
  score.text = score.value;
  //clear all aliens, win!
  if(score.value === 30){
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

//timer code, commented during build
// const TIME_LEFT = 100

// const timer = add([
//   text('0'),
//   pos(30,120),
//   scale(2),
//   layer('ui'),
//   {
//     time: TIME_LEFT
//   }
// ])

// timer.action(() => {
//   timer.time -= dt();
//   timer.text = timer.time.toFixed(2);
// if (timer.time <=0 ) {
//   go('lose', score.value)
// }
// })

action('space-invader', (s) => {
  s.move(CURRENT_SPEED, 0)
})

//right wall collision and reverse
collides('space-invader', 'right-wall', () => {
  CURRENT_SPEED = -INVADER_SPEED
  every('space-invader', (s) => {
     s.move(0, LEVEL_DOWN);
  })
})

//left wall collision and reverse
collides('space-invader', 'left-wall', () => {

  CURRENT_SPEED = INVADER_SPEED
  every('space-invader', (s) => {
     s.move(0, LEVEL_DOWN)
  })
})

player.overlaps('space-invader', () => {
  go('lose', { score : score.value })
})

action('space-invader', (s) => {
  if (s.pos.y >= height() ){
      go('lose', { score : score.value })
  }
})