#!/usr/bin/env node

const program = require("commander");
const package = require("./package.json");
const omelette = require("omelette");
// const fs = require("fs");

const reactCommand = require("./src/commands/react_js.command");

program.version(package.version);

program
  .command("react-js <first> [second] [third]")
  .alias("rj")
  .option("--css", "estilo com css")
  .option("--jss", "estilo com jss")
  .option("-c, --class", "component class react")
  .option("-f, --function", "component funcional react")
  .description("Comandos para React JS")
  .on("--help", () => console.log("Comando de ajuda"))
  .action(async (first, second, third, options) => {
    await reactCommand(first, second, third, options);
  });
program
  .command("express-js [first]")
  .alias("ej")
  .description("Comandos para Express JS")
  .on("--help", () => console.log("Comando de ajuda"))
  .action(async (first) => {
    console.log("comando express");
  });

program.parse(process.argv);
