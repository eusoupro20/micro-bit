input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("devolveotaparoer")
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("D B G B A D F F ", 120), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # . # #
        # . . . #
        # # # # #
        `)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(1 % 18)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
})
basic.showString("ola")
