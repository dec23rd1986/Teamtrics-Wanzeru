var path = require('path');

module.exports = {
    mode: 'none',
    entry: './scripts.js',
    output: {

        path: path.resolve(__dirname, './'),
        filename: 'build.js',

    },

    watch: true,

};