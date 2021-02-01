const reactGenerate = require("../generate/react_js.generate");

async function reactExtension(second, third, options = {}) {
  switch (second) {
    case "component":
    case "c":
      await reactGenerate(third, options);
      break;
    case "page":
    case "p":
      await reactGenerate(third, options);
      break;
    case "route":
    case "r":
      await reactGenerate(third, options);
      break;
    default:
      console.log("Comando invalido");
  }
}

module.exports = reactExtension;
