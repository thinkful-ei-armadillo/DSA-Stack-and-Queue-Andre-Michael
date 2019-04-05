const Stack = require('./Stack');

class _QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _QueueNode(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    
    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

class _DoubleNode {
  constructor(value, prev) {
    this.value = value;
    this.next = null;
    this.prev = prev;
  }
}

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _DoubleNode(data, this.last);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    
    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

class StackedQueue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(data) {
    //const node = new _QueueNode(data);
    this.firstStack.push(data);

    // this.first -> this.secondStack.top
    // this.last -> this.firstStack.top
  }

  dequeue() {
    while(this.firstStack.top !== null) {
      this.secondStack.push(this.firstStack.pop());
    }

    let val = this.secondStack.top;

    while(this.secondStack.top !== null) {
      this.firstStack.push(this.secondStack.pop());
    }

    return val;
  }
}



function display(q) {
  let arr = [];
  let currNode = q.first;

  while(currNode !== null) {
    arr.push(currNode.value);
    currNode = currNode.next;
  }

  return arr;
}

function displaySQ(sq) {
  while(sq.firstStack.top !== null) {
    sq.secondStack.push(sq.firstStack.pop());
  }

  if(!sq.secondStack.top){
    return null;
  }

  let currNode = sq.secondStack.top;
  let sArr = [];

  while(currNode !== null){
    sArr.push(currNode.data);
    currNode = currNode.next;
  }

  while(sq.secondStack.top !== null) {
    sq.firstStack.push(sq.secondStack.pop());
  }

  return sArr;
}

function peek(q) {
  return q.first;
}

function isEmpty(q) {
  return q.first ? false : true;
}

function main() {
  const starTrekQ = new Queue();
  const starTrekDQ = new DoubleQueue();
  const starTrekSQ = new StackedQueue();

  // starTrekQ.enqueue('Kirk');
  // starTrekQ.enqueue('Spock');
  // starTrekQ.enqueue('Uhura');
  // starTrekQ.enqueue('Sulu');
  // starTrekQ.enqueue('Checkov');

  // console.log(display(starTrekQ));
  // console.log('Peek: ', peek(starTrekQ));
  // console.log('isEmpty: ', isEmpty(starTrekQ));

  // starTrekQ.dequeue();
  // starTrekQ.dequeue();

  // console.log(display(starTrekQ));


  // starTrekDQ.enqueue('Kirk');
  // starTrekDQ.enqueue('Spock');
  // starTrekDQ.enqueue('Uhura');
  // starTrekDQ.enqueue('Sulu');
  // starTrekDQ.enqueue('Checkov');

  // starTrekDQ.dequeue();
  // starTrekDQ.dequeue();

  // console.log(display(starTrekDQ));
  // console.log(peek(starTrekDQ));


  starTrekSQ.enqueue('Kirk');
  starTrekSQ.enqueue('Spock');
  starTrekSQ.enqueue('Uhura');
  starTrekSQ.enqueue('Sulu');
  starTrekSQ.enqueue('Checkov');

  starTrekSQ.dequeue();
  starTrekSQ.dequeue();

  console.log(displaySQ(starTrekSQ));
}

main();