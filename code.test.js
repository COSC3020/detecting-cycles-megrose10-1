const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

function test() {
    let adjListGraph = {
        A: {B, C},
        B: {A, C},
        C: {A, B}
    };
    let res1 = hasCycle(adjListGraph);
    assert.deepStrictEqual(res1, true);

    let adjListGraph2 = {
        A: {B: 6, C: 1},
        B: {A: 6, C: 5, D: 2},
        C: {A: 1, B: 5, D: 3},
        D: {B: 2, C: 3}
    };
    let res2 = hasCycle(adjListGraph2);
    assert.deepStrictEqual(res2, true);

    let adjListGraph3 = {
        A: {B: 2},
        B: {A: 2},
        C: {}
    };
    let res3 = hasCycle(adjListGraph3);
    assert.deepStrictEqual(res3, false);

    let adjListGraph4 = {
        A: {B: 5, C: 1},
        B: {A: 5, C: 2, D: 3},
        C: {A: 1, B: 2, D: 1},
        D: {B: 3, C: 1},
    }
    let res4 = hasCycle(adjListGraph4);
    assert.deepStrictEqual(res4, true);

}

test();
