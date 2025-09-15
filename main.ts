sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (perla == 1) {
        ostra.setImage(img`
            . . . . . f c c c c f . . . . . 
            . . c c f b b 3 3 b b f c c . . 
            . c b 3 3 b b c c b b 3 3 b c . 
            . f 3 c c c b c c b c c c 3 f . 
            f c b b c c b c c b c c b b c f 
            c 3 c c b c c c c c c b c c 3 c 
            c 3 c c c c c c c c c c c c 3 c 
            . f b b c c c c c c c c b b f . 
            . . f b b c c c c c c b b f . . 
            . . c c c f f f f f f c c c . . 
            . c 3 f f f f f f f f f f 3 c . 
            c 3 f f f f f f f f f f f f 3 c 
            f 3 c c f f f f f f f f c c 3 f 
            f b 3 c b b f b b f b b c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `)
        info.changeScoreBy(1)
        perla = 0
    }
    if (info.score() == 25) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let perla = 0
let ostra: Sprite = null
let protagonista = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . . c d d d d c c . . . . . . 
    . . . c d c c c c c c . . . . . 
    . . . c c d 4 4 4 4 c c . . . . 
    c c . c 1 4 4 4 4 4 d 4 c . . . 
    c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
    c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
    f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
    f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
    f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
    f f f f d 4 f 4 c 1 4 4 4 4 f . 
    . . c f c 4 f f 4 4 d 4 f f . . 
    . . c b d c 4 4 4 4 f f . . . . 
    . . c d d d f f f f . . . . . . 
    . . . c c c . . . . . . . . . . 
    `, SpriteKind.Player)
protagonista.setPosition(120, 60)
controller.moveSprite(protagonista)
let tiburon = sprites.create(img`
    ..............fffc..............
    ..............fbddcc............
    ..ccc.........ffbddbc...........
    ..cbbc.........fcbbccf..........
    ...cbdc.......ffccccccfffffff...
    ...fbdc....fffcbbbbbbbbbbbbbcff.
    ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
    ....fcdffcccccbbbcbcbbbffbbbbcbf
    ....fcbbccccccbbbcbcbbbff1111bbf
    ...fcbbccccccccbbbcbb11111111bf.
    ...fbbfffcccccccbbbb11bc33cccf..
    ..fbbf..cbdbcccccbbb111c131cf...
    ..fff....cbdddddccbbc111c33f....
    ..........ccbddccbbdf1111ff.....
    ............ccfbbbdfccccc.......
    ..............fffff.............
    `, SpriteKind.Enemy)
tiburon.setPosition(20, 60)
tiburon.follow(protagonista, 20)
scene.setBackgroundColor(8)
ostra = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
animation.runImageAnimation(
tiburon,
[img`
    ..............fffcc.............
    ..............fcbddcc...........
    ...............fbbddcc..........
    ...............fcbbccf..........
    ..ccc.........ffccccccfffff.....
    ..cbbcc....fffcbbbbcbbbbbbbff...
    ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
    ...fbbdcfcccccbbbcbcbbffbbbbbbff
    ....fbbffcccccbbbbbcb1ff11bbbcbf
    ....fcbbcccccccbbbbb11111111bbbf
    ....fcccccccccccbbbb11cc33111bf.
    ...fcbbffbdbcccccbbb111c13cccf..
    ...fbbf..ccddddcfbbbc111c31cf...
    ..fbbf.....ccdccbbdbf111cccf....
    ..fff........ccbbdcfcccc........
    ..............fffff.............
    `,img`
    ..............fffcc.............
    ..............fbbddc............
    ...............fbbddc...........
    ccc............fcbbccf..........
    cbbcc.........ffccccccffffff....
    .cbbdc.....fffcbbbbbbbbbbbbbff..
    .fbbddc..ffcccbbbbcbcbbbbbbbbbff
    ..fbbdfffcccccbbbcbcbbffbbbbbcbf
    ..fcbbbcccccccbbbcbcb1ff1111bbbf
    ..fccbcccccccccbbbbbb11111111bf.
    .fcbbfffccccccccbbbb11cc33cccf..
    .fbbf...cbdbcccccbbb111c131cf...
    fbbf.....ccdddddfbbbc111c33f....
    fff........ccddfbbdbf1111ff.....
    .............cfbbdbfccccc.......
    ..............fffff.............
    `,img`
    ..............fffc..............
    ..............fbddcc............
    ..ccc.........ffbddbc...........
    ..cbbc.........fcbbccf..........
    ...cbdc.......ffccccccfffffff...
    ...fbdc....fffcbbbbbbbbbbbbbcff.
    ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
    ....fcdffcccccbbbcbcbbbffbbbbcbf
    ....fcbbccccccbbbcbcbbbff1111bbf
    ...fcbbccccccccbbbcbb11111111bf.
    ...fbbfffcccccccbbbb11bc33cccf..
    ..fbbf..cbdbcccccbbb111c131cf...
    ..fff....cbdddddccbbc111c33f....
    ..........ccbddccbbdf1111ff.....
    ............ccfbbbdfccccc.......
    ..............fffff.............
    `,img`
    ..............fffcc.............
    ..............fbbddc............
    ...............fbbddc...........
    ccc............fcbbccf..........
    cbbcc.........ffccccccffffff....
    .cbbdc.....fffcbbbbbbbbbbbbbff..
    .fbbddc..ffcccbbbbcbcbbbbbbbbbff
    ..fbbdfffcccccbbbcbcbbffbbbbbcbf
    ..fcbbbcccccccbbbcbcb1ff1111bbbf
    ..fccbcccccccccbbbbbb11111111bf.
    .fcbbfffccccccccbbbb11cc33cccf..
    .fbbf...cbdbcccccbbb111c131cf...
    fbbf.....ccdddddfbbbc111c33f....
    fff........ccddfbbdbf1111ff.....
    .............cfbbdbfccccc.......
    ..............fffff.............
    `],
200,
true
)
forever(function () {
    ostra.setImage(img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c c c c c c b c c 3 c 
        c 3 c c c c c c c c c c c c 3 c 
        . f b b c c c c c c c c b b f . 
        . . f b b c 8 9 9 8 c b b f . . 
        . . c c c f 9 3 1 9 f c c c . . 
        . c 3 f f f 9 3 3 9 f f f 3 c . 
        c 3 f f f f 8 9 9 8 f f f f 3 c 
        f 3 c c f f f f f f f f c c 3 f 
        f b 3 c b b f b b f b b c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `)
    perla = 1
    pause(2000)
    ostra.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c c . . . . 
        . . c c b b 3 b 3 3 b b c c . . 
        . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
        c d d b 3 3 b 3 3 b 3 3 b d d c 
        f c c c d d c d d c d d c c c f 
        f b 3 c c c b c c b c c c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `)
    perla = 0
    pause(2000)
})
