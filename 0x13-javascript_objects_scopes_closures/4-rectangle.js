#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let col = '';
      for (let j = 0; j < this.width; j++) {
        col += 'X';
      }
      console.log(col);
    }
  }

  rotate () {
    let swap = 0;
    swap = this.width;
    this.width = this.height;
    this.height = swap;
  }

  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
};
