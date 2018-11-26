'use strict';

const {promisify} = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const removeLines = require('./remove-lines');

module.exports = async (name, lines) => {
    const data = await readFile(name, 'utf8');
    const result = removeLines(data, lines);
    
    await writeFile(name, result);
};

