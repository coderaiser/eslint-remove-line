'use strict';

const {promisify} = require('util');
const split = require('split');
const strip = require('strip-ansi');
const chalk = require('chalk');
const currify = require('currify');
const wraptile = require('wraptile');

const last = (a) => a[a.length - 1];

const onData = currify(_onData);
const onEnd = wraptile((fn, result) => fn(null, result));

module.exports = promisify((read, write, options, fn) => {
    const files = [];
    const result = {};
    
    read
        .pipe(split())
        .on('end', onEnd(fn, result))
        .on('data', onData(options, {
            write,
            files,
            result,
        }));
});

function _onData({quiet, rules}, {write, files, result}, line) {
    const striped = strip(line);
    
    if (line.includes('js'))
        files.push(striped);
    
    const reg = RegExp(rules.join('|'));
    
    if (reg.test(line)) {
        const number = getNumber(striped);
        const name = last(files);
        
        result[name] = result[name] || [];
        result[name].push(number);
        
        line = line.replace('error', chalk.green('removed'));
    }
    
    if (quiet)
        return;
    
    write.write(`${line}\n`);
}

function getNumber(line) {
    const [pair] = line
        .split(' ')
        .filter(Boolean);
   
    const [first] = pair
        .split(':');
    
    return Number(first);
}

