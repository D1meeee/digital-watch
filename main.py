input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    time = "" + hours + (":" + ("" + minutes))
    basic.showString(time)
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    ampm = !(ampm)
})
let ampm = false
let hours = 0
let minutes = 0
let time = ""
let adjust = 0
time = ""
minutes = 0
hours = 0
hours = 0
minutes = 0
ampm = false
minutes = 0
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
