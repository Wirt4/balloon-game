//remember need to import {function header} from "./scriptsrc";
import { expect } from "@jest/globals";
import{Game} from "../js/balloons";
//book uses design scheme for demos that resist testing
/** 
describe("Start", () => {
  test("description of start function", () => {
    document.body.innerHTML ="<div id='gameArea'><canvas id='myCanvas' width='800' height='480'>"
    +"</canvas></div>";
    g = new Game();
    g.start();
    expect(Game.canvas).toBe('MyCanvas');
    expect(Game.canvasContext).toBe('2d');
    expect(typeof Game.balloonSprite).toBe('Image');
    expect(Game.balloonSprite.width).toBe(35);
    expect(Game.balloonSprite.width).toBe(63);
    expect(Game.balloonSprite.src).toBe('sprites/spr_balloon.png');
  });
});
*/
