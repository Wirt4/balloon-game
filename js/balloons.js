//styalistic choices I dislike...
//struct style iniation of objects
//use of global var??? (still tricky on that one)

var Game = {
    canvas : undefined,
    conavasContext: undefined,
    balloonSprite, undefined
};

Game.balloonSprite = {
    witdh: 35,
    height: 63
};
//load the gameloop function after 500 ms, so there's time to load everything
//window.setTimeout(Game.mainloop, 500);

Game.start = function(){
    Game.canvas = document.getElementById ='myCanvas';
    Game.canvasContext = Game.canvas.getContext('2d');
    Game.balloonSprite = new Image();
    Game.balloonSprite.src  = 'sprites/spr_balloon.png';
    window.setTimeout(Game.mainLoop, 500);
}

//TODO: write index.html with a canvas for this game to use
//write 