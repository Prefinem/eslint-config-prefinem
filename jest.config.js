module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['index.js', '!**/node_modules/**', '!**/vendor/**'],
	coverageDirectory: './coverage/',
	coverageReporters: ['lcov'],
};
