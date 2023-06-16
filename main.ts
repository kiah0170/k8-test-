input.onButtonPressed(Button.A, function () {
    motion.driveStraight(25)
    motion.drive(25, 25)
    music.playMelody("C D E F G A B C5 ", 500)
    motion.driveStraight(25)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . # #
            # # . # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    for (let index = 0; index < 2; index++) {
        motion.turnLeft(4)
    }
    motion.driveStraight(25)
})
