let random = 0
let Y_Acceleration = 0
let X_Acceleration = 0
let laser = null
let tie = game.createSprite(0, 0)
game.startCountdown(60000)
basic.forever(function () {
    X_Acceleration = input.acceleration(Dimension.X)
    Y_Acceleration = input.acceleration(Dimension.Y)
    game.createSprite(1, 3)
    game.createSprite(3, 3)
    game.createSprite(3, 1)
    input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
        laser = game.createSprite(2, 2)
        basic.pause(300)
        if (laser.isTouching(tie)) {
            tie.delete()
            game.addScore(10)
            tie = game.createSprite(0, 0)
        }
        laser.delete()
    })
    // move tie
    random = randint(0, 3)
    if (random == 0) {
        tie.change(LedSpriteProperty.Y, 1)
        basic.pause(300)
    }
    if (random == 1) {
        tie.change(LedSpriteProperty.Y, -1)
        basic.pause(300)
    }
    if (random == 2) {
        tie.change(LedSpriteProperty.X, 1)
        basic.pause(300)
    }
    if (random == 3) {
        tie.change(LedSpriteProperty.X, -1)
        basic.pause(300)
    }
    if (X_Acceleration > 120) {
        tie.change(LedSpriteProperty.X, 1)
    } else if (X_Acceleration < 120) {
        tie.change(LedSpriteProperty.X, -1)
    }
    if (Y_Acceleration > 120) {
        tie.change(LedSpriteProperty.Y, 1)
    } else if (Y_Acceleration < 120) {
        tie.change(LedSpriteProperty.Y, -1)
    }
    if (game.isGameOver() && input.buttonIsPressed(Button.A)) {
        control.reset()
    }
    game.createSprite(1, 1)
})
