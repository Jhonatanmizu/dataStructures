const { defaultEquals } = require("./defaultEquals");
const { Node } = require("./listNode");

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  /**
   * If there is no head, then the new node becomes the head. Otherwise, we traverse the list until we
   * find the last node, and then we add the new node to the end of the list.
   * @param element - the element to be added to the stack
   */
  push(element) {
    const node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  insert(element, index) {
    if (!this.isInList(index)) return false;
    const node = new Node(element);
    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      node.next = current;
      previous.next = node;
    }
    this.count++;
    return true;
  }
  getElementAt(index) {
    if (!this.isInList(index)) return null;
    let node = this.head;
    for (let i = 0; i < index && node != null; i++) {
      node = node.next;
    }
    return node;
  }
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  removeAt(index) {
    // const isInList = index >= 0 && index < this.count;
    if (!this.isInList(index)) return null;
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous;
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count <= 0;
  }
  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
  isInList(index) {
    return index >= 0 && index < this.count;
  }
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  getHead() {
    return this.head;
  }
}
module.exports = {
  LinkedList,
};
