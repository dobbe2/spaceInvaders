const MOVE_SPEED = 200;

layer(['obj', 'ui'], 'obj')

addLevel([
  '!^@^@^@^@^@    &',
  '!@^@^@^@^@^    &',
  '!^@^@^@^@^@    &',
  '!              &',
  '!              &',
  '!              &',
  '!              &',
  '!              &',
  '!              &',
], {
  width: 30,
  height: 22,
  '^' : [ sprite('space-invader'), scale(0.7), 'space-invader'],
  '@' : [sprite('space-invader2'), scale(0.7), 'space-invader'],
  '!' : [ sprite('wall'), 'left-wall', ],
  '&' : [ sprite('wall'), 'right-wall']
  
})

const player = add([
  sprite('space-ship'),
  pos(width() / 2, height() / 2),
  origin('center')
]);


keyDown('left', () => {
  player.move(-MOVE_SPEED, 0)
})

keyDown('right', () => {
  player.move(MOVE_SPEED, 0)
})

const score = add([
  text('0'),
  pos(50, 150),
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

const INVADER_SPEED = 100

action('space-invader', (s) => {
  s.move(INVADER_SPEED, 0)
})