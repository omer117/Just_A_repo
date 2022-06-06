import {Rectangle} from "./shared/paddles.js";
import {ball} from "./shared/ball.js";
import {draw} from "./shared/ball.js";
import {paddlesMovement} from "./shared/paddles.js";
import { drewRect } from "./shared/paddles.js";

export var canvas = < HTMLCanvasElement > document.getElementById('theArea');
export const ctx = < CanvasRenderingContext2D > canvas.getContext('2d');
canvas.height = window.innerHeight - 200;
canvas.width = window.innerWidth - 200;


//Draw a dashed line at the center.
function dashedLine() {
  ctx.beginPath();
  ctx.setLineDash([17, 5]);
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke()
}

//Rewrite the whole board at every turn 
export function startFromScratch() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  dashedLine();
  drewRect(player1.x, player1.y, player1.wid, player1.hei);
  drewRect(player2.x, player2.y, player2.wid, player2.hei);
  ball.draw();
  ctx.font = "100px 'Kdam Thmor Pro', sans-serif";
  ctx.fillText(String(player1.points), canvas.width / 2 - 185, 130);
  ctx.font = "100px 'Kdam Thmor Pro', sans-serif";
  ctx.fillText(String(player2.points), canvas.width / 2 + 100, 130);
  return true;
}

export let player1: Rectangle = new Rectangle(75, 90, 'player1', 10, 49, 0);
export let player2: Rectangle = new Rectangle(canvas.width - 75, 90, 'player2', 10, 49, 0);

drewRect(player1.x, player1.y, player1.wid, player1.hei);
drewRect(player2.x, player2.y, player2.wid, player2.hei);


window.addEventListener('keydown', (e) => {
  paddlesMovement(e);
})





canvas.addEventListener('mouseover', () => {
  window.requestAnimationFrame(draw);
});

ball.draw();