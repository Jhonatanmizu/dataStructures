const { Node } = require("../linkedList/listNode");
class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

module.exports = DoublyNode;
