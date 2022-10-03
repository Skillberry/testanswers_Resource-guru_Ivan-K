const assert = require("assert");

const SIGNS = { PLUS: '+', MINUS: '-', MULTIPLY: 'x', DIVIDE: '÷' }

class Node {
  constructor(left, operator, right, parent) {
    this.left = left;
    this.operator = operator;
    this.right = right;
    this.parent = parent;
  }

  add(right) {
    return new Node(this.left + right, SIGNS.PLUS, right, this);
  }

  minus(right) {
    return new Node(this.left - right,  SIGNS.MINUS, right, this);
  }

  multiply(right) {
    return new Node(this.left * right,  SIGNS.MULTIPLY, right, this);
  }

  divide(right) {
    return new Node(this.left / right,  SIGNS.DIVIDE, right, this);
  }

  toString() {
    if (!this.operator) {
      return this.left.toString();
    }

    const left = this.parent || this.left;

    return `(${left.toString()} ${this.operator} ${this.right.toString()})`;
  }

  result () {
    return this.left;
  }

  valueOf () {
    return this.left;
  }
}

const index = new Node(7).add(
  new Node(3).minus(2).multiply(5)
).divide(6)

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", index.toString());
assert.strictEqual(2, index.result());
