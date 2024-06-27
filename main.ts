namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Evil_Coin = SpriteKind.create()
    export const Life_box = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    lifebox_appears = randint(0, 10)
    if (lifebox_appears == 10) {
        lifebox = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 6 6 6 6 6 5 5 5 6 6 6 6 6 . . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 2 6 2 6 6 6 . . . . 
            . . . . 6 2 2 2 1 2 6 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . f 8 2 2 2 8 f . . . . . 
            . . . f 8 8 8 2 8 8 8 f . . . . 
            . . f 8 8 8 8 8 8 8 8 8 f . . . 
            . f f f f f 5 5 5 f f f f f . . 
            . 8 8 8 8 8 5 5 5 8 8 8 8 8 . . 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Life_box)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("High score: " + info.highScore())
})
sprites.onOverlap(SpriteKind.Coin, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.createSong(hex`0078000408010107001c00020a006400f401640000040000000000000000000000000000000003180000000200011902000400011d04000600012006000a000125`), music.PlaybackMode.InBackground)
    sprites.destroy(coin, effects.confetti, 100)
    coin_goodevil = randint(0, 2)
    if (coin_goodevil == 2) {
        coin_evil = sprites.create(img`
            . . . b b . . . 
            . . b 2 2 b . . 
            . b 2 1 2 2 b . 
            . b 2 1 3 2 b . 
            . c d 1 3 2 c . 
            . c d d 1 2 c . 
            . . f d d f . . 
            . . . f f . . . 
            `, SpriteKind.Evil_Coin)
        coin_evil.y += randint(-50, 50)
        coin_evil.x += randint(-50, 50)
    } else {
        coin = sprites.create(img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `, SpriteKind.Coin)
        coin.y += randint(-50, 50)
        coin.x += randint(-50, 50)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 50, 50)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e f d f e . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . d f f f f . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . d 8 8 1 1 1 8 8 d . . . . 
        . . d . 8 8 8 8 1 8 8 . d . . . 
        . . d . . 8 1 1 1 8 . . d . . . 
        . . . . . 8 1 8 8 8 . . . . . . 
        . . . . . 8 1 1 1 8 . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 6 6 . 6 6 . . . . . . 
        . . . . . 6 6 . 6 6 . . . . . . 
        . . . . . d . . . d . . . . . . 
        . . . . b b . . . b b . . . . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . e e e e e . . . . . 
        . . . . . . d f d e e . . . . . 
        . . . . . . d d f e e . . . . . 
        . . . . . . f f d d e . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 1 2 2 d 2 . . . . . 
        . . . . . . 1 1 2 2 d . . . . . 
        . . . . . . 1 2 2 2 2 d . . . . 
        . . . . . . 1 2 2 2 2 d . . . . 
        . . . . . . 1 1 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 6 2 2 2 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . d . . d . . . . . . 
        . . . . . b b . b b . . . . . . 
        `,img`
        . . . . . . e e e e e . . . . . 
        . . . . . . d f d e e . . . . . 
        . . . . . . d d f e e . . . . . 
        . . . . . . f f d d e . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 1 2 2 d 2 . . . . . 
        . . . . . . 1 1 d 2 2 . . . . . 
        . . . . . . 1 d 2 2 2 . . . . . 
        . . . . . . 1 d 2 2 2 . . . . . 
        . . . . . . 1 1 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 6 2 2 2 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . d . . d . . . . . . 
        . . . . . b b . b b . . . . . . 
        `],
    500,
    true
    )
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . e e e e e . . . . . . 
        . . . . . e e d f d . . . . . . 
        . . . . . e e f d d . . . . . . 
        . . . . . e d d f f . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 d 2 2 1 . . . . . . 
        . . . . . 2 2 d 1 1 . . . . . . 
        . . . . . 2 2 2 d 1 . . . . . . 
        . . . . . 2 2 2 d 1 . . . . . . 
        . . . . . 2 2 2 1 1 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . d . . d . . . . . . 
        . . . . . . b b . b b . . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . . e e d f d . . . . . . 
        . . . . . e e f d d . . . . . . 
        . . . . . e d d f f . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 d 2 2 1 . . . . . . 
        . . . . . d 2 2 1 1 . . . . . . 
        . . . . d 2 2 2 2 1 . . . . . . 
        . . . . d 2 2 2 2 1 . . . . . . 
        . . . . . 2 2 2 1 1 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . d . . d . . . . . . 
        . . . . . . b b . b b . . . . . 
        `],
    500,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . e e e e e . . . . . . 
        . . . . . e e d f d . . . . . . 
        . . . . . e e f d d . . . . . . 
        . . . . . e d d f f . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 8 d 8 1 1 . . . . . . 
        . . . . . 8 8 d 8 8 . . . . . . 
        . . . . . 8 8 8 d 1 . . . . . . 
        . . . . . 8 8 8 d 8 . . . . . . 
        . . . . . 8 8 8 1 1 . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . d . . d . . . . . . 
        . . . . . . b b . b b . . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . . e e d f d . . . . . . 
        . . . . . e e f d d . . . . . . 
        . . . . . e d d f f . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 8 d 8 1 1 . . . . . . 
        . . . . . d 8 8 8 8 . . . . . . 
        . . . . d 8 8 8 1 1 . . . . . . 
        . . . . d 8 8 8 1 8 . . . . . . 
        . . . . . 8 8 8 1 1 . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . d . . d . . . . . . 
        . . . . . . b b . b b . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Evil_Coin, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    info.changeScoreBy(-3)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    sprites.destroy(coin_evil, effects.fire, 100)
    coin_goodevil = randint(0, 2)
    if (coin_goodevil == 2) {
        coin_evil = sprites.create(img`
            . . . b b . . . 
            . . b 2 2 b . . 
            . b 2 1 2 2 b . 
            . b 2 1 3 2 b . 
            . c d 1 3 2 c . 
            . c d d 1 2 c . 
            . . f d d f . . 
            . . . f f . . . 
            `, SpriteKind.Evil_Coin)
        coin_evil.y += randint(-50, 50)
        coin_evil.x += randint(-50, 50)
    } else {
        coin = sprites.create(img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `, SpriteKind.Coin)
        coin.y += randint(-50, 50)
        coin.x += randint(-50, 50)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e f d f e . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . d f f f f . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . d 2 2 2 1 2 2 2 d . . . . 
        . . d . 2 2 1 1 2 2 2 . d . . . 
        . . d . . 2 2 1 2 2 . . d . . . 
        . . . . . 2 2 1 2 2 . . . . . . 
        . . . . . 2 1 1 1 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 6 6 . 6 6 . . . . . . 
        . . . . . 6 6 . 6 6 . . . . . . 
        . . . . . d . . . d . . . . . . 
        . . . . b b . . . b b . . . . . 
        `],
    500,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . e e e e e . . . . . 
        . . . . . . d f d e e . . . . . 
        . . . . . . d d f e e . . . . . 
        . . . . . . f f d d e . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 1 1 8 d 8 . . . . . 
        . . . . . . 8 8 d 8 8 . . . . . 
        . . . . . . 1 d 8 8 8 . . . . . 
        . . . . . . 8 d 8 8 8 . . . . . 
        . . . . . . 1 1 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . d . . d . . . . . . 
        . . . . . b b . b b . . . . . . 
        `,img`
        . . . . . . e e e e e . . . . . 
        . . . . . . d f d e e . . . . . 
        . . . . . . d d f e e . . . . . 
        . . . . . . f f d d e . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 1 1 8 d 8 . . . . . 
        . . . . . . 8 8 8 8 d . . . . . 
        . . . . . . 1 1 8 8 8 d . . . . 
        . . . . . . 8 1 8 8 8 d . . . . 
        . . . . . . 1 1 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . d . . d . . . . . . 
        . . . . . b b . b b . . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Evil_Coin, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    sprites.destroy(coin_evil, effects.fire, 100)
    sprites.destroy(projectile, effects.ashes, 100)
    coin_goodevil = randint(0, 2)
    if (coin_goodevil == 2) {
        coin_evil = sprites.create(img`
            . . . b b . . . 
            . . b 2 2 b . . 
            . b 2 1 2 2 b . 
            . b 2 1 3 2 b . 
            . c d 1 3 2 c . 
            . c d d 1 2 c . 
            . . f d d f . . 
            . . . f f . . . 
            `, SpriteKind.Evil_Coin)
        coin_evil.y += randint(-50, 50)
        coin_evil.x += randint(-50, 50)
    } else {
        coin = sprites.create(img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `, SpriteKind.Coin)
        coin.y += randint(-50, 50)
        coin.x += randint(-50, 50)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Life_box, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    info.changeLifeBy(2)
    sprites.destroy(lifebox, effects.hearts, 1000)
})
let projectile: Sprite = null
let coin_evil: Sprite = null
let coin_goodevil = 0
let lifebox: Sprite = null
let lifebox_appears = 0
let coin: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
music.setVolume(255)
game.setGameOverMessage(true, "You won! Nice job! :D")
game.setGameOverEffect(true, effects.confetti)
info.setLife(2)
info.setScore(0)
music.play(music.createSong(hex`0078000408020205001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400012504000800012c08000c0001250c001000012c10001400012714001800012a18001c0001271c002000012a20002400012524002800012c28002c0001252c003000012c30003400012734003800012a38003c0001273c004000012a07001c00020a006400f401640000040000000000000000000000000000000003480000000400010d04000800010808000c00011110001400010f14001800010a18001c00011220002400010d24002800010828002c00011130003400010f34003800010a38003c000112`), music.PlaybackMode.LoopingInBackground)
game.splash("How to play the game!", "")
game.splash("Press space to shoot the red coins for points", "Collect the yellow coins for points")
game.splash("Don't touch the red coins or you lose one life and some points!", "You can collect the lifebox for two extra lives")
game.splash("You have 3 minutes and 2 lives!")
game.splash("Ready...")
game.splash("GO!")
music.stopAllSounds()
info.startCountdown(180)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e f d f e . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . d f f f f . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . d 2 2 2 1 2 2 2 d . . . . 
    . . d . 2 2 1 1 2 2 2 . d . . . 
    . . d . . 2 2 1 2 2 . . d . . . 
    . . . . . 2 2 1 2 2 . . . . . . 
    . . . . . 2 1 1 1 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 6 6 . 6 6 . . . . . . 
    . . . . . 6 6 . 6 6 . . . . . . 
    . . . . . d . . . d . . . . . . 
    . . . . b b . . . b b . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e f d f e . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . d f f f f . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . d 8 8 1 1 1 8 8 d . . . . 
    . . d . 8 8 8 8 1 8 8 . d . . . 
    . . d . . 8 1 1 1 8 . . d . . . 
    . . . . . 8 1 8 8 8 . . . . . . 
    . . . . . 8 1 1 1 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 6 6 . 6 6 . . . . . . 
    . . . . . 6 6 . 6 6 . . . . . . 
    . . . . . d . . . d . . . . . . 
    . . . . b b . . . b b . . . . . 
    `, SpriteKind.Player)
coin = sprites.create(img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . b 5 1 d 5 b . 
    . b 5 1 3 5 b . 
    . c d 1 3 5 c . 
    . c d d 1 5 c . 
    . . f d d f . . 
    . . . f f . . . 
    `, SpriteKind.Coin)
coin.x += randint(-50, 50)
coin.y += randint(-50, 50)
controller.moveSprite(mySprite)
controller.player2.moveSprite(mySprite2)
mySprite.setStayInScreen(true)
mySprite2.setStayInScreen(true)
game.setGameOverScoringType(game.ScoringType.HighScore)
game.setGameOverPlayable(false, music.createSong(hex`0078000408020205001c000f0a006400f4010a0000040000000000000000000000000000000002120000001000012010002000011d20004000011907001c00020a006400f401640000040000000000000000000000000000000003080020004000030d1114`), false)
game.setGameOverMessage(false, "Try again? :(")
forever(function () {
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    pause(30000)
    scene.setBackgroundImage(img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444111144444444444444444444444444444444444444455555555555555555444444444444444444444411114444444444444444444444444444444444444444444444444444
        4444444444444444444441111114444444444444444444444444444445455555555555555555555555555444444444444444444111111444444444444444444444444444444444444444444444444444
        4444444444444444444441111114411444444444444444444444444455555555555555555555555555555554444444444444444111111441144444444444444444444444444444444444444444444444
        4444444444444444441111111114111114444444444444444444555555555555555555555555555555555555544444444444111111111411111444444444444444444444444444444444444444444444
        4444444444444444411111111111111114444444444444444455555555555555555555555555555555555555544444444441111111111111111444444444444444444444444444444444444444444444
        4444444444444444111111111111111111144444444444445555555555555555555555555555555555555555554444444411111111111111111114444444444444444444444444444444444444444444
        4444444444444444111111111111111111114444444444555555555555555555555555555555555555555555555444444411111111111111111111444444444444444444444444444444444444444444
        4444444444444444411111111111111111114441144445555555555555555555555555555555555555555555555444444441111111111111111111444114444444444444444444444444444444444444
        4444444444444111144111111111111111114411111455555555555555555555555555555555555555555555555544411114411111111111111111441111144444444444444444444444444444444444
        4444444444441111114111111111111111144411111455555555555555555555555555555555555555555555555554111111411111111111111114441111144444444444444444444444444444444444
        4444444444441111111111111111111111411111111155555555555555555555555555555555555555555555555555111111111111111111111141111111114444444444444444444444444444444444
        4444444444441111111111111111111111111111111555555555555555555555555555555555555555555555555555111111111111111111111111111111114444444444444444444444444444444444
        4444444444444111111111111111111111111111111155555555555555555555555555555555555555555555555555511111111111111111111111111111114444444444444444444444444444444444
        4411144441114441111111111111111111111111111551155555555555555111555555555555555555551115555111551111111111111111111111111111144114444444444444111144444444444444
        4111114411111441111111111111111111111111111551115555555555511111155555555555555555511111555111111111111111111111111111111111141111444444444441111114444444444444
        4111114111111111111111111111111111111111111551115555555555511111151115555555555555551111511111111111111111111111111111111111141111444444444441111114111444444444
        4411111111111111111111111111111111111111111111115555555555555111111111555555555555551111111111111111111111111111111111111111111111444444444444411111111144444444
        4111111111111111111111111111111111111111111111155555555551115111111111555555555555511111111111111111111111111111111111111111111114444444441111411111111144444444
        1111111111111111111111111111111111111111111111115555555111115111111115555555555155111111111dd1111111111111111111111111111111111111444444411111111111111444444444
        1111111111111111111111111111111111111111111111111511155111111111111111111555555ddd111111111ddd111111111111111111111111111111111111141114411111111111111111144444
        1111111111111111111111111111111111111111111111111111111111111111111111111155551ddd111111111ddd111111111111111111111111111111111111111111111111111111111111114444
        11111111111111111111111111111111111111111111111111111111111111111111111111555ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111114444
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111151ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    pause(30000)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111ffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111ffffffffffff
        ffffffffffffffffffffffeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeefffffffffffffffffffff1111111111111111111ffffffffffff
        fffffffffffffffffffffeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeffffffffffffffffffff1111111111111111111ffffffffffff
        fffffffffffffffffffffeeeeeeffeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeffeeffffffffffffffff1111111111111111111ffffffffffff
        ffffffffffffffffffeeeeeeeeefeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeefeeeeeffffffffffffff1111111111111111111ffffffffffff
        fffffffffffffffffeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeffffffffffffff1111111111111111111ffffffffffff
        ffffffffffffffffeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeffffffffffff1111111111111111111ffffffffffff
        ffffffffffffffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeefffffffffff1111111111111111111ffffffffffff
        fffffffffffffffffeeeeeeeeeeeeeeeeeeefffeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeefffeeffffff1111111111111111111ffffffffffff
        fffffffffffffeeeeeeeeeeeeeeeeeeeeeeeffeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeffeeeeefffff11111111111111111fffffffffffff
        ffffffffffffeeeeeeeeeeeeeeeeeeeeeeefffeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeefffeeeeefffff11111111111111111fffffffffffff
        ffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff111111111111111ffffffffffffff
        ffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff1111111111111fffffffffffffff
        fffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffff111111111fffffffffffffffff
        ffeeeffffeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeffffffffffffffeeeffffffffffffffffffffeeeffffeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeefffffffffffffeeeeffffffffffffff
        feeeeeffeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeefffffffffffeeeeeeffffffffffffffffffeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeefffffffffffeeeeeefffffffffffff
        feeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeefffffffffffeeeeeefeeefffffffffffffffeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeefffffffffffeeeeeefeeefffffffff
        ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeeeffffffff
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffeeefeeeeeeeeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffeeeefeeeeeeeeeffffffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeefeeeeeeeeffffffffff1ffeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeefffffffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeffeeeeeeeeeeeeeeeeeeffffffdddeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeffeeeeeeeeeeeeeeeeeefffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff1dddeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffdddddddeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddeeeeeeeeeeeeeeeeeeeeeeeeefedddddddeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeed11ddddddeeeeeeeeeeeeeeeeeeeeeeeeeeed11ddddeeeeedddddddeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeedd1d1dddddeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeddddddd1deeeeeeeeeeeeeeeeeeeeeeeeeeedddddddeeeeedddddddeeeeeeeeeeeeeeeeeeeddddeeeeeeeeeeeeeeeeeedddddd11ddeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeddddddeeeeeeeeeeeeeeeeeedddddddddeeeeeeeeeedeeeeeeeedddddeeed1dddddeeeeedddddddeeeeeeeeeeeeeeeeeddddddeeeeeeeeeeeeeeeeeeddddddddddeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeddd1deeeeeedeeeeeeeeeeeedddddddddeeeeeeeeeddeeeeeeeedddddeeedddddddeeeeedddddddeeeeeeeeeeeeeeeeeddd1deeeeeeddeeeeeeeeeeedddd1dddddeeeeeeeeddeee
        eeeeeeeeeeeeeeeeeddddddeeeeedeeeeeeeeeeeeddddddd1deeeeeeeeeddeeeeeeeedddddeeedddddddeeeeedddddddeeeeeeeeeeeeeeeeeddddddeeeeeddeeeeeeeeeeeddddddd1ddeeeeeeeeddeee
        eeeeeeeedddeeeeeedd11deeeeedddeeeeeeeeeeedddddddddeeddddddeddeeeeeeeedddddeeedddddddeeeeedddddddeeeeeeeeeddeeeeeeddd1deeeeedddeeeeeeeeeeeddddddddddedddddddddeee
        deddeeeeddddddddddd1dddeeedddddeeeeeeeeeeddddddd1deed11dddeddeeeeeeeeedd1ddeedddddddeeeddddddddddeddeeeeddddddddddddd1deeeeddddeeeeeeeeeedddddd11dded11ddddddeee
        ddddeeeeed1dd1dddddddddeeedddddeeeeeeeeeedddddddddeedddd1deddeeeeeeeeddddddeedd1ddddeeedddddddddddddeeeedd1ddd1ddddddddeeeeddddeeeeeeeeeeddddddddddedddd1ddddeee
        dd1deeeeeddd1111dddddddeeedddddeeeeeeeeeedddddddddeedddd1ddddeeeeeeeeddddddeedddddddeeeddddddddddd1deeeedddd1d11dddddddeeeeddddeeeeeeeeeeddddddddddedddd1ddddeee
        ddddeeeeddddddddddddddddeeddddddeeddeddeddddddddddded11ddddddeeeeeeeeddddddeedddddddeeedddddddddddddeeeeddddddddddddddddeeddddddeeedeeddddddddddddded11ddddddeee
        dd1deeeeddddddddddddddddeeddddddeedddddddddddddddddedddddddddeedeedeeddddddeedddddddeeeddddddddddd1deeeeddddddddddddddddeeddddddeeeddddddddddddddddedddddddddeee
        dddddedd1d1dddddddddddddeedddddddedddd11ddddddddddddd11bbdddddddedddeedd1ddeedddddddeeedddddddddddddddeddd1dddddddddddddeedddddddeeed11ddddddbddddddd11bbbdddedd
        dddddedddddddddddddddddddd1ddddddedddddddddbbbdddddddddbbbddddddedddeddddddeedddddddeeedddddddddddddddeddddddddddddddddddddddddddeddddddddddbbdddddddddbbbdddedd
        dddddedddddddddddddddddddddddddddedddddddddbbbdddddddddbbbddddddddddddddddddddddddddeeedddddddddddddddeddddddddddddddddddddddddddeddddddddddbbdddddddddbbbdddddd
        dddddedddddddddddddddddddddddddddedddddddbbbbbbbddddddbbbbbdddddddddddddddddddddddddddedddddddddddddddedddddddddddddddddddddddddded1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbdddddddddddddddddddedddddddbbbbbbbddddddbbbbbdddddddddddddddddddddddddddeddddddddddddddbbbbbbbbbbddddddddddddddddddeddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbdddddddddddddddddddedddddddbbbbbbbddddddbbbbbdddddddddddddddddddddddddddeddddddddddddddbbbbbbbbbbddddddddddddddddddeddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbdddddddddddddddddddedddddddb55bbbbdddddbbbbbbbdd111dddddddddddddddbbddddeddddddddddddddbb5b5bbbbbddddddddddddddddddeddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbb5bdddddddddddddddddddedddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbdddeddddddddddddddbbbbbb55bbddddddddddddddddddeddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddb5bbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbdddeddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbb5bbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbb5bddddddbbdddddddddddbbbb5bbbbbddddddddbbdddddddddbbbbddddbbb5bbbddddbbbbbbbbd1d
        dddddbbbbbbb5bdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbb5bbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbb5bdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbb5bbbddddbbbbbbbbddd
        dddddbbbbbbb5bddb55bbbdbbdddddddd5bb5bbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbb5bddddbbbbddddddddddbbbbbb55bbdb55bbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbb5bdbbddddddddbbbbbbddbb5bbbbdddbbbbbbbbbbbbbddddbb5bbb5bbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbb5bbbbddddddddbbbbbbbddbbbb5bbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbb5bbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbb5bddddbbbb5b55bbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbb5bbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdb55bbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdb55bbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbb5bddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbb5555bbbbbbbdbbbddbb5bbddbbbbbbbdddbbbbbbbbbbbbbbbdbbb5bbbbbbbbbbbbbddbbbbbbbdddb55bbbbbbbbbbbbbb55b5bbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbb5bbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb55bbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb555bbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbb55b5b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbb55bbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb555bbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    pause(30000)
    scene.setBackgroundImage(img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444111144444444444444444444444444444444444444455555555555555555444444444444444444444411114444444444444444444444444444444444444444444444444444
        4444444444444444444441111114444444444444444444444444444445455555555555555555555555555444444444444444444111111444444444444444444444444444444444444444444444444444
        4444444444444444444441111114411444444444444444444444444455555555555555555555555555555554444444444444444111111441144444444444444444444444444444444444444444444444
        4444444444444444441111111114111114444444444444444444555555555555555555555555555555555555544444444444111111111411111444444444444444444444444444444444444444444444
        4444444444444444411111111111111114444444444444444455555555555555555555555555555555555555544444444441111111111111111444444444444444444444444444444444444444444444
        4444444444444444111111111111111111144444444444445555555555555555555555555555555555555555554444444411111111111111111114444444444444444444444444444444444444444444
        4444444444444444111111111111111111114444444444555555555555555555555555555555555555555555555444444411111111111111111111444444444444444444444444444444444444444444
        4444444444444444411111111111111111114441144445555555555555555555555555555555555555555555555444444441111111111111111111444114444444444444444444444444444444444444
        4444444444444111144111111111111111114411111455555555555555555555555555555555555555555555555544411114411111111111111111441111144444444444444444444444444444444444
        4444444444441111114111111111111111144411111455555555555555555555555555555555555555555555555554111111411111111111111114441111144444444444444444444444444444444444
        4444444444441111111111111111111111411111111155555555555555555555555555555555555555555555555555111111111111111111111141111111114444444444444444444444444444444444
        4444444444441111111111111111111111111111111555555555555555555555555555555555555555555555555555111111111111111111111111111111114444444444444444444444444444444444
        4444444444444111111111111111111111111111111155555555555555555555555555555555555555555555555555511111111111111111111111111111114444444444444444444444444444444444
        4411144441114441111111111111111111111111111551155555555555555111555555555555555555551115555111551111111111111111111111111111144114444444444444111144444444444444
        4111114411111441111111111111111111111111111551115555555555511111155555555555555555511111555111111111111111111111111111111111141111444444444441111114444444444444
        4111114111111111111111111111111111111111111551115555555555511111151115555555555555551111511111111111111111111111111111111111141111444444444441111114111444444444
        4411111111111111111111111111111111111111111111115555555555555111111111555555555555551111111111111111111111111111111111111111111111444444444444411111111144444444
        4111111111111111111111111111111111111111111111155555555551115111111111555555555555511111111111111111111111111111111111111111111114444444441111411111111144444444
        1111111111111111111111111111111111111111111111115555555111115111111115555555555155111111111dd1111111111111111111111111111111111111444444411111111111111444444444
        1111111111111111111111111111111111111111111111111511155111111111111111111555555ddd111111111ddd111111111111111111111111111111111111141114411111111111111111144444
        1111111111111111111111111111111111111111111111111111111111111111111111111155551ddd111111111ddd111111111111111111111111111111111111111111111111111111111111114444
        11111111111111111111111111111111111111111111111111111111111111111111111111555ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111114444
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111151ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    pause(30000)
})
