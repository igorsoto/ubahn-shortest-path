const BFS = require('../algorithms/bfs');
const Graph = require('../data-structures/graph');
const Edge = require('../data-structures/edge');

module.exports = class UBahnService {
    constructor(repository) {
        this.repository = repository;
    }

    async loadGraph() {
        const ubahnMap = (await this.repository.list())[0].map;
        const indexes = new Map();
        const names = new Map();
        let i = 0;

        Object.keys(ubahnMap).forEach(ubahn => {
            const stations = ubahnMap[ubahn];
            stations.forEach(station => {
                if (!indexes.has(station)) {
                    indexes.set(station, i);
                    names.set(i, station);
                    i++;
                }
            });
        });

        this.graph = new Graph(indexes.size);
        
        Object.keys(ubahnMap).forEach(ubahn => {
            const stations = ubahnMap[ubahn];
            for (let i = 0; i < stations.length; i++) {
                const station = stations[i];
                const nextStation = stations[i + 1];
                if (!!nextStation) {
                    this.graph.addEdge(new Edge(indexes.get(station), indexes.get(nextStation)));
                    this.graph.addEdge(new Edge(indexes.get(nextStation), indexes.get(station)));
                }
            }
        });

        this.indexes = indexes;
        this.names = names;
    }

    shortestPath(from, to) {
        const s = this.indexes.get(from);
        const v = this.indexes.get(to);
        const bfs = new BFS(this.graph, s);
        
        const stack = bfs.pathTo(v);
        if (stack === null) {
            return null;
        }

        const path = new Array();
        do {
            path.push(this.names.get(stack.pop()));
        }
        while (!stack.isEmpty());
        
        return path;
    }

    listStations() {
        const names = Array.from(this.indexes.keys());
        return names.sort((a, b) => {
            if (a > b) return 1;
            if (b > a) return -1;
            return 0;
        });
    }
}