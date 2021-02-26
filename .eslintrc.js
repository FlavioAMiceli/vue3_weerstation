module.exports = {
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: '@typescript-eslint/parser',
		extraFileExtensions: [
			".vue"
		]
	},
	plugins: [
		'@typescript-eslint',
		"vue",
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
	],
	rules: {
		// Base rules
		"no-empty": "off",
		"no-unused-vars": "off",
		"no-constant-condition": ["error", { "checkLoops": false }],

		// TS-ESLint rules
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/explicit-module-boundary-types": ["warn", {
			allowArgumentsExplicitlyTypedAsAny: true
		}],

		// Vue rules
		"vue/max-attributes-per-line": "off",
		"vue/html-closing-bracket-newline": "off",
		"vue/html-indent": ["error", "tab"],
		"vue/component-definition-name-casing": "off",
		"vue/prop-name-casing": "off",
		"vue/singleline-html-element-content-newline": "off",
		"vue/no-mutating-props": "off",
		"vue/this-in-template": "error",
	}
};
