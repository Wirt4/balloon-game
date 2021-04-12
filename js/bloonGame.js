'use strict';

var Game = {
    canvas: undefined,
    canvasContext: undefined,
    backgroundSprite: undefined,
    balloonSprite: undefined,
    balloonPosition: { x: 0, y: 50 },
    backgroundMusic: undefined,
    balloonOrigin: { x: 0, y: 50 }
};

function handleMouseMove(evt) {
    Game.balloonPosition = { x: evt.clientX, y: evt.clientY };
}


Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    Game.balloonSprite = new Image();
    Game.backgroundSprite = new Image();
    Game.balloonSprite.src = "assets/images/spr_balloon.png";
    Game.backgroundSprite.src = "assets/images/spr_background.jpg";
    Game.backgroundMusic = new Audio("assets/sound/urban_sunrise.mp3");
    Game.backgroundMusic.volume = 0.4;
    Game.backgroundMusic.play();
    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener('DOMContentLoaded', Game.start);


Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.drawImage = function (sprite, position, origin) {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x, position.y);
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height, -origin.x, -origin.y, sprite.width, sprite.height);
    Game.canvasContext.restore();
};

Game.mainLoop = function () {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
};

Game.update = function () {
    document.onmousemove = handleMouseMove;
    var d = new Date();
    // Game.balloonPosition.x = d.getTime() % Game.canvas.width;
};

Game.draw = function () {
    Game.drawImage(Game.backgroundSprite, { x: 0, y: 0 }, { x: 0, y: 0 });
    Game.balloonOrigin = { x: Game.balloonSprite.width / 2, y: Game.balloonSprite.height / 2 };
    Game.drawImage(Game.balloonSprite, Game.balloonPosition,Game.balloonOrigin);
    // Game.drawImage(Game.balloonSprite, { x: 50, y: 100 }, { x: 0, y: 0 });
};