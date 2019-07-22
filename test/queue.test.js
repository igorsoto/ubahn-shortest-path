const assert = require('assert');
const Queue = require('../data-structures/queue');

describe('Queue', () => {

    it('Should enqueue items', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        assert(queue.isEmpty() === false);
    });

    it('Should dequeue items', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        assert(queue.dequeue() === 1);
        assert(queue.dequeue() === 2);
        assert(queue.dequeue() === 3);
    });

    it('Should clear queue', () => {
        const queue = new Queue();
        queue.enqueue(3);
        queue.enqueue(2);
        queue.enqueue(1);
        queue.clear();

        assert(queue.isEmpty() === true);
    });
});