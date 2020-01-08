const config = require('./../.eslintrc.json');
const index = require('./../index.js');

test('expect configs to match', () => {
	expect(index).toStrictEqual(config);
});
