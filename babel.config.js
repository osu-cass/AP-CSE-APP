const presets = [
    [
        "@babel/preset-env", {
            "debug": true,
            "useBuiltIns": "usage"
        }
    ],
    "@babel/preset-typescript",
    [
        "@babel/preset-react", {
            "useBuiltIns": true,
        }
    ]
];

const plugins = [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-shorthand-properties",
    "styled-jsx/babel"
];

module.exports = {
    presets,
    plugins
}