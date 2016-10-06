module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "node": true,
        "phantomjs": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off"
    },

    'globals' : {
        'angular'    : true,
        'describe'   : true,
        'it'         : true,
        'inject'     : true,
        'beforeEach' : true,
        'afterEach'  : true,
        'expect'     : true,
        'sinon'      : true
    }
};
