module.exports = {
    plugins: ['stylelint-scss', 'stylelint-declaration-strict-value', 'stylelint-prettier'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-sass-guidelines',
        'stylelint-prettier/recommended',
    ],
    rules: {
        'selector-class-pattern': null,
        'color-function-notation': 'legacy',
        'color-named': [
            'never',
            {
                ignore: ['inside-function'],
            },
        ],
        'comment-empty-line-before': null,
        'comment-whitespace-inside': null,
        'declaration-property-value-disallowed-list': null,
        'max-nesting-depth': null,
        'no-invalid-position-at-import-rule': null,
        'import-notation': 'string',
        'order/order': null,
        'order/properties-alphabetical-order': null,
        'property-no-unknown': [
            true,
            {
                ignoreSelectors: [':export'],
            },
        ],
        'selector-max-compound-selectors': null,
        'selector-no-qualifying-type': null,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'export'],
            },
        ],
        'unit-allowed-list': ['px', 'em', '%', 'vw', 'vh', 's', 'deg', 'fr'],
        'scale-unlimited/declaration-strict-value': [
            'z-index',
            {
                ignoreValues: '/^z(.*)/',
            },
        ],
        'alpha-value-notation': 'number',
        'function-no-unknown': null,
    },
};
