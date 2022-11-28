function Jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1023)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(3000)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1023)
    Blanc()
    basic.pause(10000)
}
function Orange () {
    pins.digitalWritePin(DigitalPin.P0, 1023)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Vert () {
    pins.digitalWritePin(DigitalPin.P0, 1023)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    Orange()
    basic.pause(5000)
}
function Blanc () {
    pins.digitalWritePin(DigitalPin.P2, 1023)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        Vert()
        Jaune()
        pins.digitalWritePin(DigitalPin.P8, 0)
        Rouge()
        pins.digitalWritePin(DigitalPin.P16, 0)
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P8, 0)
            basic.pause(500)
        }
        Vert()
    }
})
