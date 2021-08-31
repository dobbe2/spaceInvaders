const winMusic = play('win');

add([
  text(`WINNER! Score:`.trim() + args.score),
  // text("Press Space to Start Again"),
  origin('center'),
  scale(3),
  pos(width() / 2, height() / 4)
]);

add([
  text(`Press Space to play again`),
  origin('center'),
  scale(2),
  pos(width() / 2, height() /3)
]);

add([
  text(`Press Enter for Insane Mode`),
  origin('center'),
  scale(2),
  pos(width() / 2, height() /2)
]);

keyPress("space", () => {

	go("main")

});

keyPress("enter", () => {

	go("insaneBattle")

});