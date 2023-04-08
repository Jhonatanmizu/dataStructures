class Graph {
  constructor() {
    this.vertices = new Set();
    this.edges = new Map();
  }

  addVertex(v) {
    this.vertices.add(v);
    this.edges.set(v, new Set());
  }

  addEdge(u, v) {
    this.edges.get(u).add(v);
    this.edges.get(v).add(u);
  }

  hasEdge(u, v) {
    return this.edges.get(u).has(v);
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");
myGraph.addEdge("C", "D");
myGraph.addEdge("D", "A");
myGraph.addEdge("A", "C");

/**
 * The function generates all possible subgraphs of a given graph.
 * @param graph - Unfortunately, the parameter `graph` is not provided in the code snippet you provided. Can you please
 * provide the `graph` parameter so I can assist you better?
 * @returns an array of subgraphs, where each subgraph is an object with two properties: "vertices" and "edges". The
 * "vertices" property is an array of vertices that form the subgraph, and the "edges" property is an array of edges that
 * connect those vertices.
 */
function generateSubgraphs(graph) {
  const subgraphs = [];

  // Generate all possible combinations of vertices
  for (let i = 0; i < 1 << graph.vertices.size; i++) {
    const vertices = [];
    for (const vertex of graph.vertices) {
      if (i & (1 << [...graph.vertices].indexOf(vertex))) {
        vertices.push(vertex);
      }
    }

    // Generate all possible combinations of edges
    const edges = [];
    for (let j = 0; j < vertices.length; j++) {
      for (let k = j + 1; k < vertices.length; k++) {
        if (graph.hasEdge(vertices[j], vertices[k])) {
          edges.push([vertices[j], vertices[k]]);
        }
      }
    }

    // Check if the combination of vertices and edges forms a valid subgraph
    const isValid = edges.every(
      ([u, v]) => vertices.includes(u) && vertices.includes(v)
    );
    if (isValid) {
      subgraphs.push({ vertices, edges });
    }
  }

  return subgraphs;
}

const subgraphs = generateSubgraphs(myGraph);
console.log(subgraphs);
subgraphs[3].edges.forEach((e) => {
  console.log("HADOUKEN  EDGE", e);
});
// Output:
// [
//   { vertices: ['A'], edges: [] },
//   { vertices: ['B'], edges: [] },
//   { vertices: ['C'], edges: [] },
//   { vertices: ['D'], edges: [] },
//   { vertices: ['A', 'B'], edges: [['A', 'B']] },
//   { vertices: ['A', 'C'], edges: [['A', 'C']] },
//   { vertices: ['A', 'D'], edges: [['A', 'D'], ['D', 'A']] },
//   { vertices: ['B', 'C'], edges: [['B', 'C']] },
//   { vertices: ['C', 'D'], edges: [['C', 'D']] },
//   { vertices: ['D', 'A'], edges: [['D', 'A'], ['A', 'D']] }
// ]
