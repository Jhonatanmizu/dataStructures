const Dictionary = require("../dictionary");

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  /**
   * This function adds a vertex to a graph if it doesn't already exist and initializes its adjacency list.
   * @param v - v is a parameter representing a vertex that needs to be added to a graph data structure.
   */
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []); // initialize adjacency list with array as well;
    }
  }

  /**
   * This function adds an edge between two vertices in a graph data structure.
   * @param a - The first vertex of the edge to be added.
   * @param b - 'b' is a parameter representing a vertex/node in a graph data structure. It is being used in the `addEdge`
   * method to add an edge between vertex 'a' and vertex 'b'.
   */
  addEdge(a, b) {
    if (!this.adjList.get(a)) {
      this.addVertex(a);
    }
    if (!this.adjList.get(b)) {
      this.addVertex(b);
    }
    this.adjList.get(a).push(b);
    if (this.isDirected !== true) {
      this.adjList.get(b).push(a);
    }
  }

  /**
   * The function returns the vertices of an object.
   * @returns The `getVertices()` method is returning the vertices of an object, but without more context it is unclear what
   * type of object or what the vertices represent.
   */
  getVertices() {
    return this.vertices;
  }

  /**
   * The function returns the adjacency list of a graph.
   * @returns The `getAdjList()` method is returning the adjacency list of a graph.
   */
  getAdjList() {
    return this.adjList;
  }

  /**
   * The function returns a string representation of a graph's vertices and their adjacent vertices.
   * @returns The `toString()` method is returning a string representation of the graph, where each vertex is followed by a
   * list of its neighbors. The string is built by iterating over the vertices array, getting the neighbors of each vertex
   * from the adjacency list, and appending them to the string. The string is then returned.
   */
  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += "\n";
    }
    return s;
  }
}
// TEST
const graph = new Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

let string = "";
for (let i = 0; i < 100; i++) {
  string += "-";
}
console.log(string);
console.log("RESULT");
console.log(string);
console.log(graph.toString());
console.log(string);
