module.exports = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // new feature
        "fix", // bug fix
        "docs", // documentation changes
        "style", // code style changes (e.g., formatting)
        "refactor", // code changes that neither fix a bug nor add a feature
        "perf", // performance improvements
        "test", // adding tests
        "chore", // updates to build tools, documentation, etc.
        "ci", // CI related changes
        "build", // changes related to build system or external dependencies
        "revert", // revert a previous commit
        "hotfix", // urgent fixes
      ],
    ],

    "scope-enum": [
      2,
      "always",
      [
        "deps", // dependencies
        "config", // configuration files
        "ui", // user interface related changes
        "backend", // backend related changes
        "frontend", // frontend related changes
        "docs", // documentation related changes
        "build", // build system changes
        "ci", // continuous integration changes
        "tests", // testing related changes
        "release", // release related changes
      ],
    ],
    "subject-case": [2, "always", "lower-case"],
    "header-max-length": [2, "always", 72],
    "footer-max-line-length": [2, "always", 100],
    "body-max-line-length": [2, "always", 100],
  },
};
