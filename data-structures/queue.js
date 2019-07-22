const LinkedList = require('./linked-list');

module.exports = class Queue {
    constructor () {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.addLast(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw Error('Queue is empty.');
        }
        return this.list.removeFirst();
    }

    isEmpty() {
        return this.list.count == 0;
    }

    clear () {
        this.list.clear();
    }
}