const assert = require('assert');
const Graph = require('../data-structures/graph');
const Edge = require('../data-structures/edge');

describe('Graph', () => {

    it('Should add edges', () => {
        const graph = new Graph(3);

        graph.addEdge(new Edge(1, 2));
        graph.addEdge(new Edge(2, 3));

        assert(graph.E === 2);
    });

    it('Should list edges', () => {
        const graph = new Graph(4);

        graph.addEdge(new Edge(1, 2));
        graph.addEdge(new Edge(2, 3));
        graph.addEdge(new Edge(1, 4));

        const edges = graph.listEdges();
        assert(edges.length === 3);
        assert(edges[0].from === 1);
        assert(edges[0].to === 4);
        assert(edges[1].from === 1);
        assert(edges[1].to === 2);
        assert(edges[2].from === 2);
        assert(edges[2].to === 3);
    });

    it('Should list adjacents', () => {
        const graph = new Graph(3);

        graph.addEdge(new Edge(1, 2));
        graph.addEdge(new Edge(2, 3));

        const adj = graph.listAdjacents(2);
        assert(adj.length === 1);
        assert(adj[0].to === 3);
    });
});