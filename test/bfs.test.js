const assert = require('assert');
const Edge = require('../data-structures/edge');
const Graph = require('../data-structures/graph');
const BFS = require('../algorithms/bfs');

describe('BFS', () => {
    it('hasPath should returns true when path exists', () => {
        const graph = new Graph(5);
        graph.addEdge(new Edge(1, 2));
        graph.addEdge(new Edge(2, 3));
        graph.addEdge(new Edge(3, 4));
        graph.addEdge(new Edge(1, 4));

        const bfs = new BFS(graph, 1);

        assert(bfs.hasPathTo(4) === true);
    });

    it('hasPath should returns false when path does not exist', () => {
        const graph = new Graph(5);
        graph.addEdge(new Edge(1, 2));
        graph.addEdge(new Edge(2, 3));
        graph.addEdge(new Edge(3, 4));
        graph.addEdge(new Edge(1, 4));

        const bfs = new BFS(graph, 4);

        assert(bfs.hasPathTo(1) === false);
    });

    it('pathTo should return the shortest path when one or more paths exists', () => {
        const graph = new Graph(5);
        graph.addEdge(new Edge(1, 2));
        graph.addEdge(new Edge(2, 3));
        graph.addEdge(new Edge(3, 4));
        graph.addEdge(new Edge(1, 4));

        const bfs = new BFS(graph, 1);

        const stack = bfs.pathTo(4);
        assert(stack.pop() === 1);
        assert(stack.pop() === 4);
        assert(stack.isEmpty() === true);
    });

    it('pathTo should return the null when no paths exist', () => {
        const graph = new Graph(5);
        graph.addEdge(new Edge(1, 2));
        graph.addEdge(new Edge(2, 3));
        graph.addEdge(new Edge(3, 4));

        const bfs = new BFS(graph, 4);

        const stack = bfs.pathTo(1);
        assert(stack === null);
    });
});