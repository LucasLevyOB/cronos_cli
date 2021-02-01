const memEditor = require("mem-fs-editor");
const memFs = require("mem-fs");

const parseName = require("./parse_name.function");
const PATH = require("../../config");
const FOLDERBASE = "/src/";

const store = memFs.create();
const fs = memEditor.create(store);

// async function copyFile(template, path, name = "index", extension = "js") {
async function copyFile(from, to, templateOptions = {}) {
  new Promise((resolve) => {
    fs.copyTpl(
      `${PATH}/src/templates${from}`,
      `./${FOLDERBASE}${to}`,
      templateOptions
    );
    fs.commit(resolve);
  });
}

module.exports = copyFile;
