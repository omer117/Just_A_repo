import { player1 } from "src/app";
import { player2 } from "src/app";
import { ctx } from "src/app";
import { startFromScratch } from "src/app";

export  class Rectangle {
    x: number;
    y: number;
    id: string;
    wid: number;
    hei: number;
    points: number;

    constructor(x: number, y: number, id: string, wid: number, hei: number, points: number) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.wid = wid;
        this.hei = hei;
        this.points = points;
    }

    update(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export function paddlesMovement(e: any) {
    console.log("this is player 1 " + e);
    if (e.keyCode === 87 || e.keyCode === 83) {
      var keyPr = e.keyCode;
      if (keyPr === 87 && player1.y > 0) {
        player1.y = player1.y - 15;
      } else if (keyPr === 83 && player1.y < window.innerHeight - 22) {
        player1.y = player1.y + 15;
      }
    }
    if (e.keyCode === 38 || e.keyCode === 40) {
      console.log('this is player 2 ' + e);
      var keyPr = e.keyCode;
      if (keyPr === 38 && player2.y > 0) {
        player2.y = player2.y - 15;
      } else if (keyPr === 40 && player2.y < window.innerHeight - 220) {
        player2.y = player2.y + 15;
      }
    }
  
    startFromScratch();
    return true;
  }

  export function drewRect(x: number, y: number, wid: number, hei: number) {
    ctx.fillStyle = '#363062';
    ctx.fillRect(x, y, wid, hei);
    return true;
  }
