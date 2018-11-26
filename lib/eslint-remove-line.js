'use strict';

const parse = require('./parse');
const updateFile = require('./update-file');

module.exports = async (read, write, options) => {
    const parsed = await parse(read, write, options);
    const files = Object.entries(parsed);
    
    for (const [file, lines]  of files) {
        await updateFile(file, lines);
    }
};

