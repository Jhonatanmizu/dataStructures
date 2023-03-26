const { defaultEquals } = require("../linkedList/defaultEquals");
const { LinkedList } = require("../linkedList/linkedList");
const DoublyNode = require("./doublyNode");
class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = null;
  }
  /**
   * If the index is 0, then the new node is inserted at the head of the list. If the index is equal to
   * the size of the list, then the new node is inserted at the tail of the list. Otherwise, the new
   * node is inserted after the node at the index - 1 position
   * @param element - The element to insert into the list.
   * @param index - The position where the new element should be inserted.
   * @returns the element at the specified index.
   */
  insert(element, index) {
    if (!(index >= 0 && index <= this.count)) return false;
    const node = new DoublyNode(element);
    let current = this.head;
    if (index === 0) {
      if (this.head == null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      }
    } else if (index === this.count) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;
      current.prev = node;
      node.prev = previous;
    }
    this.count++;
    return true;
  }
  /**
   * If the index is 0, then the head is set to the current node's next node. If the index is the last
   * node, then the tail is set to the current node's previous node. Otherwise, the previous node's next
   * node is set to the current node's next node, and the current node's next node's previous node is
   * set to the previous node
   * @param index - The index of the element to remove.
   * @returns The removed element.
   */
  removeAt(index) {
    if (!(index >= 0 && index <= this.count)) return undefined;
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
      if (this.count === 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
    } else if (index === this.count - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = undefined;
    } else {
      current = this.getElementAt(index);
      const previous = current.prev;
      previous.next = current.next;
      current.next.prev = previous;
    }
  }
}
module.exports = DoublyLinkedList;
