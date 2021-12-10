let sprite: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
basic.forever(function () {
    basic.pause(1000)
    sprite = game.createSprite(2, 0)
    basic.pause(2000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(2000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(5000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(5000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    sprite = game.createSprite(2, 0)
    basic.pause(2000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(2000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(5000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(5000)
    sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
})
basic.forever(function () {
    basic.pause(2000)
    if (0 == 5) {
        sprite.change(LedSpriteProperty.Y, -1)
    }
})
