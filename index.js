// Strict mode in 2020 maybe 

/**
 * Dependencies
 */
const lizardFacts = require('./lizard-facts.json'); // You arent redefining lizardFacts so use const

/**
 * Interesting lizard facts
 */

const random = () => {
	return lizardFacts[Math.floor(Math.random() * lizardFacts.length)]
};
module.exports.random = random();
module.exports.all = lizardFacts;
