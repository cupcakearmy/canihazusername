const assert = require('assert')
const cihu = require('../lib/index').default

describe('Array', () => {
	it('Should return a string', () => {
		assert.equal(typeof cihu(), 'string')
	})
})