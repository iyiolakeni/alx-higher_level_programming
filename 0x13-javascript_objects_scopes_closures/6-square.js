#!/usr/bin/node
const fSquare = require('./5-square');

module.exports = class Square extends fSquare {
  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let i = 0; i < this.height; i++) {
        let col = '';
        for (let j = 0; j < this.width; j++) {
          col += c;
        }
        console.log(col);
      }
    }
  }
};
