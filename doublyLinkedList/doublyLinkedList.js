const { defaultEquals } = require("../linkedList/defaultEquals");
const { LinkedList } = require("../linkedList/linkedList");
class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = null;
  }
}
module.exports = DoublyLinkedList;
