const assert = require("assert");

const Node = (left = null, operator = "",  right = null) => {
  const result = () => {
    switch (operator) {
      case "+":
        return left.result() + right.result();
      case "-":
        return left.result() - right.result();
      case "x":
        return left.result() * right.result();
      case "÷":
        return left.result() / right.result();
      default:
        return left;
    }
  };

  const toString = () => {
    if (!operator) {
      return left.toString();
    }

    return `(${left.toString()} ${operator} ${right.toString()})`;
  };

  return {
    operator,
    left,
    right,
    result,
    toString
  };
};

const index = Node(
  Node(
    Node(7),
    "+",
    Node(
      Node(Node(3),"-",  Node(2)),
      "x",
      Node(5)
    )
  ),
  "÷",
  Node(6)
);


assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", index.toString());
assert.strictEqual(2, index.result());
