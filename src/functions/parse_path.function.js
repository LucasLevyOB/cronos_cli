async function parsePath(command) {
  if (!command.match(/\//)) return command;
  // const teste = command.replace(/\//g, " /");
  // const teste2 = teste.replace
  const folder = `/${command.replace(/\/([a-z]*)$/i, "")}`;
  return folder;
}

module.exports = parsePath;
