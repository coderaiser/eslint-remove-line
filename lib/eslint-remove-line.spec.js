'use strict';

const test = require('tape');
const mockRequire = require('mock-require');
const {reRequire} = mockRequire;
const stub = require('@cloudcmd/stub');

test('eslint-remove-line: updateFile', async (t) => {
    const file = '1.js';
    const lines = [2, 3];
    const parse = stub().returns({
        [file] : lines,
    });
    
    const updateFile = stub();
    
    mockRequire('./parse', parse);
    mockRequire('./update-file', updateFile);
    
    const rmLine = reRequire('./eslint-remove-line');
    
    mockRequire.stop('./parse');
    mockRequire.stop('./update-file');
    
    const read = {};
    const write = {};
    
    await rmLine(read, write);
    
    t.ok(updateFile.calledWith(file, lines), 'should call updateFile');
    t.end();
});

test('eslint-remove-line: parse', async (t) => {
    const parse = stub().returns({
    });
    
    const updateFile = stub();
    
    mockRequire('./parse', parse);
    mockRequire('./update-file', updateFile);
    
    const rmLine = reRequire('./eslint-remove-line');
    
    mockRequire.stop('./parse');
    mockRequire.stop('./update-file');
    
    const read = {};
    const write = {};
    const options = {};
    
    await rmLine(read, write, options);
    
    t.ok(parse.calledWith(read, write, options), 'should call parse');
    t.end();
});

test('eslint-remove-line: updateFile: not called', async (t) => {
    const parse = stub().returns({
    });
    
    const updateFile = stub();
    
    mockRequire('./parse', parse);
    mockRequire('./update-file', updateFile);
    
    const rmLine = reRequire('./eslint-remove-line');
    
    mockRequire.stop('./parse');
    mockRequire.stop('./update-file');
    
    const read = {};
    const write = {};
    const options = {};
    
    await rmLine(read, write, options);
    
    t.notOk(updateFile.called, 'should not call updateFile');
    t.end();
});

