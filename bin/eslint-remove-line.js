#!/usr/bin/env node

'use strict';

const removeLine = require('../lib/eslint-remove-line');
const [quiet] = process.argv.slice(2);

main(process, {quiet})
    .catch(console.error);

process.stdin

async function main({stdin, stdout}, {quiet}) {
    await removeLine(stdin, stdout, {
        quiet,
        rules: [
            'no-unused-vars',
            'no-multiple-empty-lines',
        ]
    });
};

