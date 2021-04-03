/**
 * Choose game
 */
var Games = require('./games.js');
// Games.init('bomberman');
// Games.init('tetris');
// Games.init('a2048');
// Games.init('battlecity');
// Games.init('excitebike');
// Games.init('icancode');
// Games.init('minesweeper');
// Games.init('snake');
Games.init('snakebattle');

var Point = require('./point.js');
var Direction = Games.require('./direction.js');
var Element = Games.require('./elements.js');
var Board = Games.require('./board.js');
var Stuff = require('./stuff.js');

var Solver = module.exports = {

    /**
     * paste here board page url from browser (board page) after registration
     */
    url : 'http://128.199.28.149/codenjoy-contest/board/player/zr6yb54pv8rvlzi0n4i4?code=5188178466508423293',

    /**
     * @return next hero action
     */
    get : function(board) {
        // TODO your code here
            console.log('head: ', board.getHead().x)
            console.log('amount of apples: ', board.GetApples().length)
            console.log('First apple X: ', board.GetApples()[0].x)
            console.log('First apple Y: ', board.GetApples()[0].y)

        return Direction.RIGHT;
    }
};
