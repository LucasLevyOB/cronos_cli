async function parseStyle(options) {
  if (options.css) {
    return "css";
  }
  if (options.jss) {
    return "js";
  }
  return "js";
}

module.exports = parseStyle;
