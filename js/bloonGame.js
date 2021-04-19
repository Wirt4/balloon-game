'use strict';

function handleMouseMove(evt) {
    Game.mousePosition = { x: evt.pageX, y: evt.pageY };
}

var Game = {
    canvas: undefined,
    canvasContext: undefined,
    backgroundSprite: undefined,
    mousePosition: { x: 0, y: 0 },
    cannonBarrelSprite: undefined,
    //below are constant values
    cannonPosition: { x: 72, y: 400 },
    cannonOrigin: { x: 34, y: 34 },
    cannonRotation: 0
};

Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
}

Game.update = function () {
    var opp = Game.mousePosition.y - Game.cannonPosition.y;
    var adj = Game.mousePosition.x - Game.cannonPosition.x;
    Game.cannonRotation = Math.atan2(opp, adj);
}

Game.drawImage = function (image, position, rotation, origin) {
    //note the save, restore pattern
    Game.canvasContext.save();
    //note the first translate, then draw idiom
    Game.canvasContext.translate(position.x, position.y);
    Game.canvasContext.rotate(rotation);
    Game.canvasContext.drawImage(image, 0, 0, image.width, image.height, -origin.x, -origin.y, image.width, image.height);
    Game.canvasContext.restore();
}

Game.draw = function () {
    Game.clearCanvas();
    Game.drawImage(Game.backgroundSprite, { x: 0, y: 0 }, 0, { x: 0, y: 0 });
    //Game.balloonOrigin = { x: Game.balloonSprite.width / 2, y: Game.balloonSprite.height / 2 };
    Game.drawImage(Game.cannonBarrelSprite, Game.cannonPosition, Game.cannonRotation, Game.cannonOrigin);
}

Game.mainLoop = function () {
    // Game.clearCanvas(); //implement
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
}

Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    //notice the odd idiom on line 28, how it passes a doc event to a function
    document.onmousemove = handleMouseMove;
    Game.backgroundSprite = new Image();
    Game.backgroundSprite.src = "assets/images/spr_background.jpg";
    //Game.balloonSprite = new Image();
    //Game.balloonSprite.src = "assets/images/spr_balloon.png";
    Game.cannonBarrelSprite = new Image();
    Game.cannonBarrelSprite.src = "assets/images/spr_cannon_barrel.png";
    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener('DOMContentLoaded', Game.start);


