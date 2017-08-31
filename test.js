/**
 * Dependencies
 */

const allFacts = require('./lizard-facts.json');
const lizardFacts = require('./');
const test = require('ava');


/**
 * Tests
 */

test('random fact', t => {
	const randomFact = lizardFacts.random();

	t.true(allFacts.indexOf(randomFact) >= 0);
});

test('all facts', t => {
	t.same(lizardFacts.all, allFacts);
});

test('no facts should have extranous whitespace', t => {
	lizardFacts.all.forEach(fact => {
		t.same(fact.trim(), fact);
	});
});

test('no facts should be duplicate', t => {
	const set = new Set(lizardFacts.all);

	t.same(set.size, lizardFacts.all.length);
});
