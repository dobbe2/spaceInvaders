add([
  text(
      `
Welcome to Space Invaders
How To Play:
Move ship with 
Left and Right Arrows
Fire with Spacebar
Press M to mute music
  `),
  pos(width() / 2, height() / 10),
  origin('center')
  ])

add([
  sprite('leader'),
  scale(1),
  pos(width() / 2 , height()/2),
  origin('center')
])

  add([
  text(`Press Space to Play
  Press 'D' to meet the developer`
, 8),
  origin('center'),
  pos(width() / 2, height() / 1.1)
]);

  keyPress("space", () => {

	go("battle")

});

keyPress("r", () => {

	go("main")

});

keyPress("d", () => {

	go("theCreator")

});