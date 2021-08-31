add([
  text(
      `
      Welcome to Space Invaders
      How To Play:
      Move ship with Left and Right Arrows
      Fire with Spacebar
      Press M to mute music
  `)
  ])

add([
		text("OBJECTIVE: KILL ALL ALIENS", 14),
		// pos(width() / 2, height() / 5 ),
		origin("bot"),
		layer("obj"),
    'message',
	]);

  add([
		text(`
    Press Spacebar to Play
    
    Press " r " to return to main menu
    `),
		pos(width() / 2, height() / 2 ),
		origin("center"),
		layer("obj"),
    'message',
	]);

  keyPress("space", () => {

	go("battle")

});

keyPress("r", () => {

	go("main")

});
