// @ts-check

import eslint from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

const reactRecommended = react.configs.flat?.recommended ?? {};
const jsxRuntime = react.configs.flat?.["jsx-runtime"] ?? {};

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    reactRecommended,
    jsxRuntime,
    {
        files: ["**/*.{mjs,ts,tsx}"],
        rules: {
            "no-template-curly-in-string": "warn",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-unused-vars": "off", // already a ts warning
            // Consider adding more rules here.
        },
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },
);
// Rules:
// https://typescript-eslint.io/rules/
// https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules

// Also see
// https://www.luckymedia.dev/blog/laravel-breeze-with-inertia-react-eslint-prettier-pint-and-husky
// https://github.com/typescript-eslint/typescript-eslint/issues/9753
