import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Basic JavaScript/TypeScript rules
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],

      // React specific rules
      "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }], // Only check for problematic entities
      "react-hooks/exhaustive-deps": "warn",

      // Next.js specific rules
      "@next/next/no-img-element": "warn",

      // Style preferences
      "prefer-const": "error",
    },
    overrides: [
      {
        files: ["**/*.tsx"],
        rules: {
          // More permissive rules for TSX files
          "@typescript-eslint/no-unused-vars": "off",
          "react/no-unescaped-entities": "off",
        }
      },
      {
        files: ["**/components/ui/**/*.tsx"],
        rules: {
          // Even more permissive rules for UI component files
          "@typescript-eslint/no-explicit-any": "off",
          "react-hooks/exhaustive-deps": "off",
        }
      }
    ]
  }
];

export default eslintConfig;