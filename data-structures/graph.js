const LinkedList = require('./linked-list');

module.exports = class Graph {
    constructor(vertices){
        this.V = vertices;
        this.E = 0;
        this.adj = new Array();

        for (let v = 0; v < this.V; v++) {
            this.adj[v] = new LinkedList();
        }

        this.marked = new Set();
    }

    addEdge(edge) {
        this.adj[edge.from].addFirst(edge);
        this.E++;
    }

    listEdges(){
        const arr = new Array();
        
        for (let v = 0; v < this.V; v++) {
            const list = this.adj[v];
            let current = list.head;
            while (current != null) {
                arr.push(current.value);
                current = current.next;
            }
        }

        return arr;
    }

    listAdjacents(v){
        const arr = new Array();
        const list = this.adj[v];
        let current = list.head;
        while (current != null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}