// 图片的基类，所有图片类的父类

import { DataStore } from "./DataStore";

export class Sprite{
  constructor(
    img=null, // 图片对象
    srcx=0, // 初始x坐标
    srcy=0, // 初始y坐标
    srcw=0, // 宽度
    srch=0, // 高度
    x=0, // 画布上的初始x坐标
    y=0, // 画布上的初始y坐标
    w=0, // 画布的宽
    h=0 // 画布的高
  ){
    // 获取变量池中的ctx对象
    this.ctx = DataStore.getInstance().ctx;
    this.img = img;
    this.srcx = srcx;
    this.srcy = srcy;
    this.srcw = srcw;
    this.srch = srch;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  // 画图
  draw(
    img = this.img,
    srcx = this.srcx,
    srcy = this.srcy,
    srcw = this.srcw,
    srch = this.srch,
    x = this.x,
    y = this.y,
    w = this.w,
    h = this.h
  ){
    this.ctx.drawImage(img,srcx,srcy,srcw,srch,x,y,w,h);
  }

  // 获取某个图片
  static getImage(key){
    return DataStore.getInstance().res.get(key);
  }
}