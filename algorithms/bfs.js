const Queue = require('../data-structures/queue');
const Stack = require('../data-structures/stack');

module.exports = class BFS {
    constructor(graph, s) {
        this.marked = new Set();
        this.edgeTo = new Map();
        this.s = s;
        this.bfs(graph, s);
    }

    bfs(graph, s) {
        const queue = new Queue();
        this.marked.add(s);

        queue.enqueue(s);

        while (!queue.isEmpty()) {
            const v = queue.dequeue();
            const adj = graph.listAdjacents(v);
            adj.forEach(({ to }) => {
                if (!this.marked.has(to)) {
                    this.edgeTo.set(to, v);
                    this.marked.add(to);
                    queue.enqueue(to);
                }
            })
        }
    }

    hasPathTo(v) {
        return this.marked.has(v);
    }

    pathTo(v) {
        if (!this.hasPathTo(v)) {
            return null;
        }

        const path = new Stack();
        for (let x = v; x != this.s; x = this.edgeTo.get(x))
            path.push(x);
        
        path.push(this.s);
        return path;
    }
}