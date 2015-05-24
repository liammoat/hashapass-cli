var program = require('commander');
var inquirer = require('inquirer');
var hashapass = require('hashapass');
var chalk = require('chalk');

var package = require('../package');

var green = chalk.green;
var bold = chalk.bold;

program
  .version(package.version)
  .description(package.description)
  .option('-l, --length <length>', 'Set the length of the generated result', 8);

program.parse(process.argv); 

inquirer.prompt([
  { name: 'parameter', type: 'type', message: 'Parameter' },
  { name: 'master', type: 'password', message: 'Master password' }
], function (answers) {
  var result = hashapass.generate(answers.parameter, answers.master, {
    len: program.length
  });
  console.log(green('='), bold('Result:'), result);
});