class LinkedListNode {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

module.exports = class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    addFirst(value) {
        if (this.head == null) {
            this.head = new LinkedListNode(value);
            this.tail = this.head;
        } else {
            const tempHead = this.head;
            this.head = new LinkedListNode(value, tempHead);
        }
        this.count++;
    }

    addLast(value) {
        if (this.head == null) {
            this.addFirst(value);
        } else {
            const currentTail = this.tail;
            const newTail = new LinkedListNode(value);
            
            currentTail.next = newTail;
            this.tail = newTail;
            this.count++;
        }
    }

    addBefore(node, value) {
        let current = this.head;
        let before = null;

        while (current != null && current != node) {
            before = current;
            current = current.next;
        }

        let newNode = new LinkedListNode(value, current);
        if (before) {
            before.next = newNode;
        } else {
            this.head = newNode;
            this.tail = current;
        }
        
        this.count++;
    }

    removeFirst() {
        if (this.count == 0) {
            throw Error('List is empty.');
        }

        const tempHead = this.head;
        if (tempHead.next == null) {
            this.tail = null;
        }
        this.head = tempHead.next;
        this.count--;
        return tempHead.value;
    }

    removeLast() {
        if (this.count == 0) {
            throw Error('List is empty.');
        }

        const currentTail = this.tail;
        if (this.count == 1) {
            this.clear();
            return currentTail.value;
        }

        let current = this.head;
        while (current.next != this.tail) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
        this.count--;

        return currentTail.value;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
}