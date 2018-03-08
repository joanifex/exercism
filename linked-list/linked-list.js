class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  count() {
    const forward = (nextNode, count) =>
      nextNode.next ? forward(nextNode.next, count + 1) : count;
    return this.head ? forward(this.head, 1) : 0;
  }

  find(datum) {
    const traverse = node => {
      if (node.datum === datum) {
        return node;
      } else if (node.next) {
        return traverse(node.next);
      } else {
        return null;
      }
    };
    return traverse(this.head);
  }

  delete(datum) {
    const node = this.find(datum);
    if (node) {
      node.prev === null
        ? (this.head = node.next)
        : (node.prev.next = node.next);
      node.next === null
        ? (this.tail = node.prev)
        : (node.next.prev = node.prev);
    }
  }

  push(datum) {
    const node = new LinkedNode(datum, this.tail);
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
  }

  pop() {
    const datum = this.tail.datum;
    this.tail = this.tail.prev;
    if (this.tail && this.tail.next) {
      this.tail.next = null;
    }
    return datum;
  }

  shift() {
    if (this.head) {
      const datum = this.head.datum;
      this.head = this.head.next;
      return datum;
    } else {
      return null;
    }
  }

  unshift(datum) {
    const node = new LinkedNode(datum, null, this.head);
    if (this.head) {
      this.head.prev = node;
    }
    if (this.tail === null) {
      this.tail = node;
    }
    this.head = node;
  }
}

class LinkedNode {
  constructor(datum, prev = null, next = null) {
    this.datum = datum;
    this.prev = prev;
    this.next = next;
  }
}

module.exports = LinkedList;
