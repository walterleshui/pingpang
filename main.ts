scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    _1vy = 0 - _1vy
    _1vx = 0 - _1vx
    mySprite3.setVelocity(_1vx, _1vy)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    _1vy = 0 - _1vy
    _1vx = 0 - _1vx
    mySprite3.setVelocity(_1vx, _1vy)
})
let _1vx = 0
let _1vy = 0
let mySprite3: Sprite = null
let mySprite = sprites.create(img`
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.x = 0
info.setScore(0)
controller.moveSprite(mySprite, 0, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
`, SpriteKind.Player)
mySprite2.x = 151.5
info.player2.setScore(0)
controller.player2.moveSprite(mySprite2, 0, 100)
mySprite2.setFlag(SpriteFlag.StayInScreen, true)
mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 d 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 d d 1 1 1 1 d 1 1 1 . . 
. 1 1 1 1 1 1 1 1 d d 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
mySprite3.setPosition(80, 60)
mySprite3.setVelocity(Math.randomRange(-75, 75), Math.randomRange(-75, 75))
_1vy = mySprite3.vy
_1vy = mySprite3.vx
