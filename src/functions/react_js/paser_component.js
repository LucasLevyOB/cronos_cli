async function parseComponent(options) {
  if (options.function) {
    return "function_component";
  }
  if (options.class) {
    return "class_component";
  }
  return "function_component";
}

module.exports = parseComponent;
