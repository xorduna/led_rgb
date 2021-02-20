let blue = 0
let green = 0
let red = 0
pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
	if(green == 0){
        green = 100
    } else {
        green = 0
    }
})
pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
	if(blue == 0){
        blue = 100
    } else {
        blue = 0
    }
})
pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
	if(red == 0){
        red = 100
    } else {
        red = 0
    }
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, red)
    pins.analogWritePin(AnalogPin.P1, green)
    pins.analogWritePin(AnalogPin.P2, blue)
})
