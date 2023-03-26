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
  /**
   * "Get the node at the given index."
   *
   * The function starts by checking if the index is in the list. If it's not, it returns null
   * @param index - The index of the element you want to get.
   * @returns The node at the given index.
   */
  getElementAt(index) {
    if (!this.isInList(index)) return null;
    let node = this.head;
    for (let i = 0; i < index && node != null; i++) {
      node = node.next;
    }
    return node;
  }
  /**
   * "Remove the element from the list and return it."
   *
   * The function starts by finding the index of the element. If the element is not found, the function
   * returns undefined. If the element is found, the function removes it from the list and returns it
   * @param element - The element to remove from the list.
   * @returns The element that was removed.
   */
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  /**
   * If the index is valid, we traverse the list until we reach the index, and then we remove the node
   * at that index
   * @param index - The position of the element to be removed.
   * @returns The element that was removed from the list.
   */
  removeAt(index) {
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
  /**
   * Return the number of items in the list.
   * @returns The number of items in the stack.
   */
  size() {
    return this.count;
  }
  /**
   * If the count is less than or equal to zero, return true, otherwise return false.
   * @returns The count of the number of items in the queue.
   */
  isEmpty() {
    return this.count <= 0;
  }
  /**
   * The function returns a string representation of the linked list
   * @returns The string representation of the linked list.
   */
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
  /**
   * If the index is greater than or equal to 0 and less than the count, then return true, otherwise
   * return false.
   * @param index - The index of the item you want to check.
   * @returns The index of the item in the list.
   */
  isInList(index) {
    return index >= 0 && index < this.count;
  }
  /**
   * We start at the head of the list and traverse the list until we find the element or we reach the end
   * of the list
   * @param element - The element to search for.
   * @returns The index of the element in the linked list.
   */
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
  /**
   * It returns the head of the linked list.
   * @returns The head of the linked list.
   */
  getHead() {
    return this.head;
  }
}
module.exports = {
  LinkedList,
};
