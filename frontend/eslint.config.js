"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_1 = require("@eslint/js");
var json_1 = require("@eslint/json");
var config_1 = require("eslint/config");
var globals_1 = require("globals");
var typescript_eslint_1 = require("typescript-eslint");
exports.default = (0, config_1.defineConfig)([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        plugins: { js: js_1.default },
        extends: ["js/recommended"],
        languageOptions: { globals: globals_1.default.browser },
    },
    typescript_eslint_1.default.configs.recommended,
    // pluginReact.configs.flat.recommended,
    { files: ["**/*.json"], plugins: { json: json_1.default }, language: "json/json", extends: ["json/recommended"] },
    {
        files: ["**/*.jsonc"],
        plugins: { json: json_1.default },
        language: "json/jsonc",
        extends: ["json/recommended"],
    },
    {
        files: ["**/*.json5"],
        plugins: { json: json_1.default },
        language: "json/json5",
        extends: ["json/recommended"],
    },
    // { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);
