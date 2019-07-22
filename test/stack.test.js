const assert = require('assert');
const Stack = require('../data-structures/stack');

describe('Stack', () => {

    it('Should push items', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        assert(stack.isEmpty() === false);
    });

    it('Should pop items', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        assert(stack.pop() === 3);
        assert(stack.pop() === 2);
        assert(stack.pop() === 1);
    });

    it('Should clear stack', () => {
        const stack = new Stack();
        stack.push(3);
        stack.clear();

        assert(stack.isEmpty() === true);
    });
});