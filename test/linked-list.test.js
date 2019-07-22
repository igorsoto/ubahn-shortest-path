const assert = require('assert');
const LinkedList = require('../data-structures/linked-list');

describe('LinkedList', () => {
    it('should add item in front', () => {
        const list = new LinkedList();
        list.addFirst(1);
        list.addFirst(2);
        assert(list.head.value == 2);
    });
    
    it('should add item in tail', () => {
        const list = new LinkedList();
        list.addLast(4);
        list.addLast(3);
        assert(list.tail.value == 3);
        assert(list.count == 2);
    });
    
    it('should add item before', () => {
        const list = new LinkedList();
        list.addLast(4);
        list.addLast(6);
        list.addBefore(list.tail, 5);
        assert(list.tail.value == 6);
        assert(list.count == 3);
    });
    
    it('should remove item in front', () => {
        const list = new LinkedList();
        list.addLast(4);
        list.addLast(6);
        list.addLast(8);
        
        const item = list.removeFirst();
        
        assert(item == 4);
        assert(list.head.value == 6);
        assert(list.count == 2);
    });
    
    it('should remove item in tail', () => {
        const list = new LinkedList();
        list.addLast(7);
        list.addLast(10);
        
        const item1 = list.removeLast();
        const item2 = list.removeLast();
    
        assert(item1 == 10);
        assert(item2 == 7);
        assert(list.count == 0);
    });
    
    it('should clear list', () => {
        const list = new LinkedList();
        list.addLast(5);
        list.addLast(7);
    
        list.clear();
        assert(list.count == 0);
        assert(list.head == null);
        assert(list.tail == null);
    });
});