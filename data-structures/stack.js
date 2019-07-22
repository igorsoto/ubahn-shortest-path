const LinkedList = require('./linked-list');

module.exports = class Stack {
    constructor () {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.addFirst(value);
    }

    pop() {
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