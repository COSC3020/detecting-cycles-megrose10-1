//For my implementation, I used an adjacency list
function followPath(graph, hasBeenVisited, currentVertex, vertex) {

    currentVertex[vertex] = true;
    //pathOfVertex.push(vertex);

    //Check the next vertices
    for(let nextVertex of graph[vertex]) {
        //If the vertice is already in the path, then a cycle is present
        if(currentVertex[nextVertex]) {
            //console.log(pathOfVertex + "Cycle found");
            return true;
        }
        //Until you look at all nodes, recursively call dfs
        if(!hasBeenVisited[nextVertex]) {
            if(followPath(graph, hasBeenVisited, currentVertex, nextVertex)) {
                return true;
            }
        }
    }

    //Remove vertex from current path
    currentVertex[vertex] = false;
    //Mark vertex has been seen
    hasBeenVisited[vertex] = true;

    //If no cycle has been found
    return false;
}

function hasCycle(graph) {
    //Use depth first search to walk through graph
    let hasBeenVisited = {}; //visited vertices
    //let paths = []; //array to keep track of all paths
    let currentVertex = {}; //Looks at path in current vertex path
    let found = false; //boolean for if a cycle is found, return true if cycle
    //let pathOfVertex = [];
    for(let vertex in graph) {
        //let pathOfVertex = [];
        //Call dfs for each vertex to see if there is a cycle
        found = followPath(graph, hasBeenVisited, currentVertex, vertex);
        //look through path, if conatins the same vertex, return true
        //else, keep checking each path for a cycle
        //paths.push(pathOfVertex);
        //console.log(`Path for vertex ${vertex}`, pathOfVertex);
    }

    //returns whether or not cycle was found
    return found;
}
