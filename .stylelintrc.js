module.exports = {
  "extends": "stylelint-config-standard-scss",
  "rules": {
    "color-hex-length": "long",
    "color-hex-case": "upper",
    "font-family-name-quotes": "always-where-recommended",
    "declaration-empty-line-before": null,
    "scss/dollar-variable-empty-line-before": null,
    "value-keyword-case": null,
    "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["export"] }],
    "property-no-unknown": [true, { ignoreSelectors: [":export"] }],
    "custom-property-pattern": "maplat-.+",
  }
};
