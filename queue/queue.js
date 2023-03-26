class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /**
   * It adds an element to the end of the queue
   * @param element - the element to be added to the queue
   */
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  /**
   * If the queue is not empty, remove the first item from the queue and return it
   * @returns The first item in the queue.
   */
  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  /**
   * Peek() returns the first element in the stack
   * @returns The first item in the stack.
   */
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }
  /**
   * If the number of items in the queue is equal to the number of items that have been dequeued from the
   * queue, then the queue is empty
   * @returns The number of items in the queue.
   */
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  /**
   * It returns the number of items in the queue
   * @returns The number of items in the queue.
   */
  size() {
    return this.count - this.lowestCount;
  }
  /**
   * It clears the queue by setting the items object to an empty object, the count to 0, and the
   * lowestCount to 0
   */
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  /**
   * It returns a string representation of the items in the queue
   * @returns The string representation of the items in the queue.
   */
  toString() {
    if (this.isEmpty()) return "";
    let objectString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objectString = `${objectString},${this.items[i]}`;
    }
    return objectString;
  }
}
