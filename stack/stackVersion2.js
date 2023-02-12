class Stack {
  // LIFO
  // LAST IN FIRST OUT
  // This is a better implementation, because when we use a array we need to iterator in the entire array to find the element O(n)
  // In this case we only access direct, O(1)

  constructor() {
    this._count = 0;
    this._items = {};
  }

  push(element) {
    this._items[this._count] = element;
    this._count++;
  }
  pop() {
    if (this.isEmpty()) return undefined;
    this._count--;
    const result = this._items[this._count];
    delete this._items[this._count];
    return result;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this._items[this._count - 1];
  }
  isEmpty() {
    return this._count === 0;
  }
  size() {
    return this._count;
  }
  clear() {
    this._items = {};
    this._count = 0;
  }
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
