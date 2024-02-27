scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    sprite.sayText(text_list._pickRandom(), 500, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    mySprite.sayText("Yay")
    if (info.player1.score() > 1) {
        game.splash("Player 1 wins with orange portal bonus")
    }
    pause(2000)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile0`, function (sprite, location) {
    sp2.sayText("Yay")
    if (info.player2.score() > 1) {
        game.splash("Player 2 wins with orange portal bonus")
    }
    pause(2000)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile1`, function (sprite, location) {
    sprite.sayText(text_list._pickRandom(), 500, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    mySprite.sayText("yummy", 500, false)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    sp2.sayText("yummy", 500, false)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let sp2: Sprite = null
let mySprite: Sprite = null
let text_list: string[] = []
text_list = ["Oh no! My points are gone.", "I shouldn't've done that ", "Darn it!"]
music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
game.splash("The Ghost must now escape the fairy world; dont touch the torch bearers")
info.setScore(0)
scene.setBackgroundColor(2)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
sp2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
tiles.placeOnRandomTile(sp2, sprites.dungeon.collectibleBlueCrystal)
controller.player2.moveSprite(sp2, 100, 100)
controller.player1.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
info.startCountdown(45)
