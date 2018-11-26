'use strict';

const fs = require('fs');

const tryTo = require('try-to-tape');
const test = tryTo(require('tape'));
const stub = require('@cloudcmd/stub');
const {reRequire} = require('mock-require');

const anonymous = () => {};

test('update-file: writeFile: lines empty', async (t) => {
    const name = 'a.js';
    const lines = [];
    const data = 'hello';
    
    const {
        readFile,
        writeFile,
    } = fs;
    
    fs.readFile = stub((name, enc, cb) => cb(null, data));
    
    fs.writeFile = stub((name, data, cb) => cb());
    
    const updateFile = reRequire('./update-file');
    
    await updateFile(name, lines);
    
    t.ok(fs.writeFile.calledWith(name, data, anonymous), 'should call writeFile');
    t.end();
    
    fs.readFile = readFile;
    fs.writeFile = writeFile;
});

test('update-file: readFile', async (t) => {
    const name = 'a.js';
    const lines = [];
    const data = 'hello';
    
    const {
        readFile,
        writeFile,
    } = fs;
    
    fs.readFile = stub((name, enc, cb) => cb(null, data));
    fs.writeFile = stub((name, data, cb) => cb());
    const updateFile = reRequire('./update-file');
    
    await updateFile(name, lines);
    
    t.ok(fs.readFile.calledWith(name, 'utf8', anonymous), 'should call writeFile');
    t.end();
    
    fs.readFile = readFile;
    fs.writeFile = writeFile;
});

test('update-file: removeLines', async (t) => {
    const name = 'a.js';
    const lines = [1];
    const data = 'hello\nworld\n';
    
    const {
        readFile,
        writeFile,
    } = fs;
    
    fs.readFile = stub((name, enc, cb) => cb(null, data));
    fs.writeFile = stub((name, data, cb) => cb());
    const updateFile = reRequire('./update-file');
    
    await updateFile(name, lines);
    
    t.ok(fs.writeFile.calledWith(name, 'world\n', anonymous), 'should call writeFile');
    t.end();
    
    fs.readFile = readFile;
    fs.writeFile = writeFile;
});

