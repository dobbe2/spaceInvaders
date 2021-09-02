add([
  sprite("jamesDobbe"),
  scale(2),
  pos(width() / 2, height() / 3),
  "creator",
  origin('center')
]);

add([
  text(`
My Name is James Dobbe,
I am a Full Stack Web Developer/Designer.
I created this game for the 
Mintbean.io hackathon.
I used Kaboom.JS and Replit.com
to create this game.
    `),
  pos(width() / 2, height() / 10),
  origin('center')
])

add([
  sprite('in'),
  scale(1),
  pos(width() / 2, height() / 1.8),
  origin('center')
])

add([
  text(`https://www.linkedin.com/in/james-dobbe/`),
  pos(width() / 2, height() / 1.4),
  origin('center'),
])

add([
  text(`Press Space to Play
  Press 'A' to learn how to play`
    , 8),
  origin('center'),
  pos(width() / 2, height() / 1.1)
]);

keyPress("space", () => {

  go("battle")

});

keyPress("a", () => {

  go("howToPlay")

});
