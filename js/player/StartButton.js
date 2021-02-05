import { DataStore } from "../base/DataStore";
// 重新开始按钮

import { Sprite } from "../base/Sprite";

export class StartButton extends Sprite{
  constructor(){
    let img = Sprite.getImage("startButton");
    // 获取画布
    let canvas = DataStore.getInstance().canvas;
    let h = canvas.height;  // 画布的高
    let w = canvas.width;  // 画布的高
    // 重写父类构造
    let X = (w - img.width) / 2;
    let Y = (h - DataStore.getInstance().res.get("land").height) / 2;  // 按钮在画布上的初始y坐标
    super(img,0,0,img.width,img.height,X,Y,img.width,img.height);
  }
}