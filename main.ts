let sprite: game.LedSprite = null
input.onPinPressed(TouchPin.P0, function () {
    sprite = game.createSprite(2, 0)
    basic.pause(2000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(2000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(5000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(5000)
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.pause()
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) == true) {
        if (sprite.get(LedSpriteProperty.Y) == 0) {
            if (sprite.get(LedSpriteProperty.X) == 1) {
                sprite.delete()
            }
        }
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) == true) {
        if (sprite.get(LedSpriteProperty.Y) == 0) {
            if (sprite.get(LedSpriteProperty.X) == 2) {
                sprite.delete()
            }
        }
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) == true) {
        if (sprite.get(LedSpriteProperty.Y) == 0) {
            if (sprite.get(LedSpriteProperty.X) == 0) {
                sprite.delete()
            }
        }
    }
})
basic.forever(function () {
    if (sprite.isDeleted() == true) {
        basic.showString("game over")
        music.playMelody("C5 A F D C C C C ", 120)
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) == true) {
        if (sprite.get(LedSpriteProperty.Y) == 0) {
            if (sprite.get(LedSpriteProperty.X) == 3) {
                sprite.delete()
            }
        }
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) == true) {
        if (sprite.get(LedSpriteProperty.Y) == 0) {
            if (sprite.get(LedSpriteProperty.X) == 4) {
                sprite.delete()
            }
        }
    }
})
