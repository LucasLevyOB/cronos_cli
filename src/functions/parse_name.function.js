async function parseName(command) {
  return command.replace(/([a-z]*\/)*/i, "");
}

module.exports = parseName;
