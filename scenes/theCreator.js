add([
		sprite("jamesDobbe"),
		scale(5),
		pos(50, 20),
		"creator",
	]);

  add([
    text(`My Name is James Dobbe,
    thank you for taking the time to 
    learn about myself and my journey
    
    `)

  ])

  keyPress("space", () => {

	go("main")

});

