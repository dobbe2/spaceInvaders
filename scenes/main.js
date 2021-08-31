add([
  text(`
  Space Invaders was created using
  Kaboom.JS JavaScript Library and Replit
  `)
])

add([
  sprite('stars')
])

  add([
  text(`Press Space to Play
    Press " i " to learn more
    Press " h " to learn how to play`),
  origin('center'),
  pos(width() / 2, height() /2)
]);


keyPress("space", () => {

	go("battle")

});

keyPress("i", () => {

	go("theCreator")

});

keyPress("h", () => {

	go("howToPlay")

});