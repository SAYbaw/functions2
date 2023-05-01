function pythagorean (num: number, num2: number) {
    return Math.sqrt(num * num + num2 * num2)
}
function displayImg () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # . #
            . # . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            # # # # #
            `)
    }
}
function convertMilli (num: number) {
    return Math.idiv(num, 1000)
}
function timer (num: number) {
    for (let index = num; index < 0; index--) {
        basic.showNumber(index)
        basic.pause(1000)
    }
basic.showNumber(0)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
}
input.onButtonPressed(Button.AB, function () {
    displayImg()
    basic.clearScreen()
    basic.showNumber(pythagorean(height, base))
})
function getDeltaTime (num: number) {
    return input.runningTime() - num
}
input.onGesture(Gesture.Shake, function () {
    timer(3)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    if (isRunning) {
        isRunning = false
        deltaTime = getDeltaTime(startTime)
        basic.showNumber(convertMilli(deltaTime))
    } else {
        startTime = input.runningTime()
        isRunning = true
    }
})
let startTime = 0
let deltaTime = 0
let base = 0
let height = 0
let isRunning = false
isRunning = false
height = 3
base = 4
basic.forever(function () {
    if (isRunning) {
        led.toggle(0, 0)
    }
    basic.pause(100)
})
