// Description of you application 

// Explain your project's features

// Include a short demo video 

// Tutorial on how to use or interact with your application

// Obvious and clear button to link to your live application 

// "Meet the Engineers" that shows a photo of the you and your team plus links to your LinkedIn, Twitter, and Github 

// add([
//   text(`
//   Space Invaders was created using
//   Kaboom.JS JavaScript Library and Replit
//   `),
//   origin('topleft'),
//   // pos(width() / 2)
// ])
// const leftArrow = 
// add([
//   sprite('leftArrow'),
//   scale(.5),
//   pos(15, height()/2),
//   origin('center')
// ])

// if (mouseIsClicked('leftArrow')) {
// 				go('howToPlay');
// 			}

add([
  text("SPACE INVADERS", 20),
  pos(width() / 2, height() / 20),
  origin('center')
]);

add([
  text(`The objective of Space Invaders is to 
    pan across a screen and shoot descending 
    swarms of aliens, preventing them from reaching 
    the bottom of the screen.

    Best played on full screen.
    `, 5),
  pos(width() / 2, height() / 6),
  origin('center'),
]);

add([
  sprite('space-invader'),
  scale(1),
  pos(width() / 2 - 35, height() / 2),
  origin('center')
])

add([
  sprite('space-ship'),
  scale(1),
  pos(width() / 2, height() / 2),
  origin('center')
])

add([
  sprite('space-invader2'),
  scale(1),
  pos(width() / 2 + 35, height() / 2),
  origin('center')
])

add([
  text(`Press Space to Play
  Press 'A' to learn how to play
  Press 'D' to meet the developer`
    , 8),
  origin('center'),
  pos(width() / 2, height() / 1.1)
]);


// Press " i " to learn more

//     Press " h " to learn how to play
// keyDown("a", () => {

// 	go("howToPlay")

// });

keyPress("space", () => {

  go("battle")

});

keyPress("d", () => {

  go("theCreator")

});

keyPress("a", () => {

  go("howToPlay")

});