'use strict';

var Mouse = {
    position: { x: 0, y: 0 },
}

Mouse.handleMouseMove = function(evt) {
    Mouse.position = { x: evt.pageX, y: evt.pageY };
}

var Canvas2D ={
    canvas: undefined,
    context: undefined
}

var Game = {
    backgroundSprite: undefined,
};

var cannon = {
    cannonBarrelSprite: undefined,
    //below are constant values
    cannonPosition: { x: 72, y: 400 },
    cannonOrigin: { x: 34, y: 34 },
    cannonRotation: 0
};

Canvas2D.clearCanvas = function () {
    Canvas2D.context.clearRect(0, 0, Canvas2D.canvas.width, Canvas2D.canvas.height);
}

cannon.update = function () {
    var opp = Mouse.position.y - cannon.cannonPosition.y;
    var adj = Mouse.position.x - cannon.cannonPosition.x;
    cannon.cannonRotation = Math.atan2(opp, adj);
}

Canvas2D.drawImage = function (image, position, rotation, origin) {
    //note the save, restore pattern
    Canvas2D.context.save();
    //note the first translate, then draw idiom
    Canvas2D.context.translate(position.x, position.y);
    Canvas2D.context.rotate(rotation);
    Canvas2D.context.drawImage(image, 0, 0, image.width, image.height, -origin.x, -origin.y, image.width, image.height);
    Canvas2D.context.restore();
}

Canvas2D.draw = function () {
    Canvas2D.clearCanvas();
    Canvas2D.drawImage(Game.backgroundSprite, { x: 0, y: 0 }, 0, { x: 0, y: 0 });
    Canvas2D.drawImage(cannon.cannonBarrelSprite, cannon.cannonPosition, cannon.cannonRotation, cannon.cannonOrigin);
}

Game.mainLoop = function () {
    // Game.clearCanvas(); //implement
    cannon.update();
    Canvas2D.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
}

Game.start = function () {
    Canvas2D.canvas = document.getElementById("myCanvas");
    Canvas2D.context = Canvas2D.canvas.getContext("2d");
    //notice the odd idiom on line 28, how it passes a doc event to a function
    document.onmousemove = Mouse.handleMouseMove;
    Game.backgroundSprite = new Image();
    Game.backgroundSprite.src = "assets/images/spr_background.jpg";
    cannon.cannonBarrelSprite = new Image();
    cannon.cannonBarrelSprite.src = "assets/images/spr_cannon_barrel.png";
    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener('DOMContentLoaded', Game.start);


