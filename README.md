# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

I referenced these two links when looking into cycles, as well as, referencing the depth first search https://www.geeksforgeeks.org/walks-trails-paths-cycles-and-circuits-in-graph/ and https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/. I as well looked at the lecture slides on graphing, my test code was developed using my dijkstra test code and modifying it where needed, which on that exercise I referenced lilybrongo's test code. I also used some logic from dijkstra's algorithm repo.  

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

When we start, we go through each vertex, calling the recursive function to look at the path of each vertex, which gives us O(V). In the recursive call, we check the path of the current recursive call and check each edge, which would give us O(E). In total, this gives us a worst complexity of $\Theta$(V+E) since this would mean going through each node and going through the entire path to find all cycles.

