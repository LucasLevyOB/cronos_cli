const copyFile = require("../functions/copy_file.function");
const parseName = require("../functions/parse_name.function");
const parsePath = require("../functions/parse_path.function");
const parseStyle = require("../functions/react_js/parse_style");
const parseComponent = require("../functions/react_js/paser_component");

const baseTemplate = "/react_js";

async function reactGenerate(third, options) {
  const componentName = await parseName(third);
  // const folder = await parsePath(third.trim());
  const typeComponent = await parseComponent(options);
  const componentFrom = `${baseTemplate}/${typeComponent}/component.js.ejs`;
  const componentTo = `${third}/index.js`;
  const styleExtension = await parseStyle(options);
  const styleFrom = `${baseTemplate}/${typeComponent}/styles.${styleExtension}.ejs`;
  const styleTo = `${third}/styles.${styleExtension}`;
  await copyFile(componentFrom, componentTo, {
    name: componentName,
    styleType: styleExtension,
  });
  await copyFile(styleFrom, styleTo);
}

module.exports = reactGenerate;
