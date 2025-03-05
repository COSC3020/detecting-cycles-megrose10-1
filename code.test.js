const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

function test() {
    let adjListGraph = {
        'A': ['B', 'C'],
        'B': ['A', 'C'],
        'C': ['A', 'B']
    };
    let res1 = hasCycle(adjListGraph);
    assert.deepStrictEqual(res1, true);

    let adjListGraph2 = {
        'A': ['B', 'C'],
        'B': ['A', 'C', 'D'],
        'C': ['A', 'B', 'D'],
        'D': ['B', 'C']
    };
    let res2 = hasCycle(adjListGraph2);
    assert.deepStrictEqual(res2, true);

    let adjListGraph3 = {
        'A': ['B'],
        'B': ['A'],
        'C': []
    };
    let res3 = hasCycle(adjListGraph3);
    assert.deepStrictEqual(res3, false);
}

test();
