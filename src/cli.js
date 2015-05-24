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
  .option('-l, --length <length>', 'Set the length of the generated result', 8)
  .option('-s, --secure', 'Provide two master passwords for an extra secure result');

program.parse(process.argv); 

var steps = [
  { name: 'parameter', type: 'type', message: 'Parameter' },
  { name: 'master', type: 'password', message: 'Master password' }
];

if (program.secure) {
  steps.push({ name: 'master2', type: 'password', message: 'Second master password' });
}

function output(result) {
  console.log(green('='), bold('Result:'), result);
}

inquirer.prompt(steps, function (answers) {
  var result1 = hashapass.generate(answers.parameter, answers.master, {
    len: program.length
  });
  
  if (!program.secure) return output(result1);
  
  var result2 = hashapass.generate(result1, answers.master2, {
    len: program.length
  });
  
  output(result2);
});