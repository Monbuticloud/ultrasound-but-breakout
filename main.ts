let dis = 0
let delayms = 0
basic.forever(function () {
    dis = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (0 < dis && dis < 250) {
        delayms = Math.map(dis, 2, 250, 25, 600)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showLeds(`
            . # # # .
            # . # . #
            # # . # #
            # . # . #
            . # # # .
            `)
        basic.pause(delayms)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(delayms)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
    }
})
