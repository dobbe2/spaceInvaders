const endMusic = play('gameOver');

add([
  text(`YOU LOSE! Score:`.trim() + args.score),
  origin('center'),
  scale(3),
  pos(width() / 2, height() / 3)
])

add([
  text(`Press Space to play again`),
  origin('center'),
  scale(2),
  pos(width() / 2, height() / 2)
]);

keyPress("space", () => {

  go("battle")

});