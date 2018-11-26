'use strict';

const test = require('tape');
const parse = require('./parse');
const stringToStream = require('string-to-stream');
const through2 = require('through2');

test('parse: quiet', async (t) => {
    const str = [
        'a.js\n',
        '2:3 no-unused-vars\n',
    ].join('');
    
    const read = stringToStream(str);
    const write = {};
    
    const result = await parse(read, write, {
        quiet: true,
        rules: [
            'no-unused-vars',
        ],
    });
    
    const expected = {
        'a.js': [2],
    };
    
    t.deepEqual(result, expected, 'should equal');
    t.end();
});

test('parse', async (t) => {
    const str = [
        'a.js\n',
        '2:3 no-unused-vars\n',
    ].join('');
    
    const read = stringToStream(str);
    const write = through2((chunk, enc, cb) => {
        cb();
    });
    
    const result = await parse(read, write, {
        rules: [
            'no-unused-vars',
        ],
    });
    
    const expected = {
        'a.js': [2],
    };
    
    t.deepEqual(result, expected, 'should equal');
    t.end();
});

