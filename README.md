# eslint remove line [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]:                https://img.shields.io/npm/v/eslint-remove-line.svg?style=flat&longCache=true
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/eslint-remove-line/master.svg?style=flat&longCache=true
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/eslint-remove-line.svg?style=flat&longCache=true
[NPMURL]:                   https://npmjs.org/package/eslint-remove-line "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/eslint-remove-line  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/eslint-remove-line "Dependency Status"

[CoverageURL]:              https://coveralls.io/github/coderaiser/eslint-remove-line?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/eslint-remove-line/badge.svg?branch=master&service=github

eslint --fix for [unused variables](https://eslint.org/docs/rules/no-unused-vars). Also try [putout](https://github.com/coderaiser/putout) pluggable code transformer with [@putout/plugin-remove-unused-variables](https://github.com/coderaiser/putout/tree/master/packages/plugin-remove-unused-variables) plugin which is more powerful.

## Install

```
npm i eslint-remove-line -g
```

## Example

```
FORCE_COLOR=1 eslint | eslint-remove-line
```


## Related

- [putout](https://github.com/coderaiser/putout) - pluggable code transformer
- [@cloudcmd/stub](https://github.com/cloudcmd/stub) - simplest `sinon.stub()` alternative with diff support
- [supertape](https://github.com/coderaiser/supertape) - tape with superpowers
- [sinon-called-with-diff](https://github.com/coderaiser/sinon-called-with-diff) - sinon `calledWith` diff
- [try-to-tape](https://github.com/coderaiser/try-to-tape) - `try catch` for async tape tests
- [try-catch](https://github.com/coderaiser/try-catch "TryCatch") - functional try-catch wrapper.
- [try-to-catch](https://github.com/coderaiser/try-to-catch "TryToCatch") - functional try-catch wrapper for promises.

## License

MIT

