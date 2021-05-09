input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    time = "" + hours + (":" + minutes)
    basic.showString(time)
})
input.onButtonPressed(Button.B, function () {
    if (hours < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    ampm = !(ampm)
})
let hours = 0
let minutes = 0
let time = ""
let ampm = false
ampm = false
time = ""
let adjust = 0
minutes = 0
hours = 0
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        hours += 1
    } else {
        hours = 0
    }
})
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        hours += 1
    } else {
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
        hours = 0
    }
})
