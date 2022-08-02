module.exports = {
  "**/*.(ts?(x))|(js?(x))": () => "yarn lint:ts",
  "**/*.(ts?(x))": () => "yarn typecheck",
  "*.scss": "yarn lint:scss",
};
