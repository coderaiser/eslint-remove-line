'use strict';

const test = require('tape');
const removeLines = require('./remove-lines');

test('remove-lines', (t) => {
    const data = [
        'hello\n',
        'world\n',
    ].join('');
    
    const result = removeLines(data, [
        2,
    ]);
    
    const expected = 'hello\n';
    
    t.equal(result, expected, 'should equal');
    t.end();
});

