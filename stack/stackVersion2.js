class Stack {
  // LIFO
  // LAST IN FIRST OUT
  // This is a better implementation, because when we use a array we need to iterator in the entire array to find the element O(n)
  // In this case we only access direct, O(1)

  constructor() {
    this._count = 0;
    this._items = {};
  }

  /**
   * Add an element to the end of the array.
   * @param element - The element to be added to the top of the stack.
   */
  push(element) {
    this._items[this._count] = element;
    this._count++;
  }
  /**
   * If the stack is empty, return undefined, otherwise decrement the count, store the last item in a
   * variable, delete the last item, and return the variable
   * @returns The last item in the array.
   */
  pop() {
    if (this.isEmpty()) return undefined;
    this._count--;
    const result = this._items[this._count];
    delete this._items[this._count];
    return result;
  }
  /**
   * If the stack is empty, return undefined, otherwise return the last item in the stack.
   * @returns The last item in the stack.
   */
  peek() {
    if (this.isEmpty()) return undefined;
    return this._items[this._count - 1];
  }
  /**
   * Return true if the count is 0, otherwise return false.
   * @returns The return value is a boolean value that is true if the queue is empty and false if it is
   * not.
   */
  isEmpty() {
    return this._count === 0;
  }
  /**
   * It returns the number of items in the list
   * @returns The number of items in the queue.
   */
  size() {
    return this._count;
  }
  /**
   * The clear() function clears the hash table by setting the items object to an empty object and the
   * count to 0
   */
  clear() {
    this._items = {};
    this._count = 0;
  }
  /**
   * The function returns a string representation of the items in the stack
   * @returns A string of the items in the array.
   */
  toString() {
    if (this.isEmpty()) return "";
    let objString = `${this._items[0]}`;
    for (let i = 0; i < this._count; i++) {
      objString = `${objString}, ${this._items[i]}`;
    }
    return objString;
  }
}

module.exports = Stack;
