const reactExtension = require("../extensions/react_js.extension");

async function reactCommand(
  first,
  second = null,
  third = null,
  options = null
) {
  switch (first) {
    case "generate":
    case "g":
      await reactExtension(second, third, options);
      break;
    default:
      console.log("Comando invalido");
  }
}

module.exports = reactCommand;
