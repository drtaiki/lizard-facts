'use strict';

/**
 * Dependencies
 */

var uniqueRandomArray = require('unique-random-array');
var lizardFacts = require('./lizard-facts.json');


/**
 * Interesting lizard facts
 */

exports.random = uniqueRandomArray(lizardFacts);
exports.all = lizardFacts;
