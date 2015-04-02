"use strict";

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    // The name `constructor` is important here
    constructor: function() {
        // Calling the super constructor
        generators.Base.apply(this, arguments);

        // Next
        this.option('coffee');
    },

    method1: function() {
        console.log('method 1 just run');
    },

    method2: function() {
        console.log('method 2 just run');
    }
});
