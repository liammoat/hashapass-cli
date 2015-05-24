# Hashapass CLI
A CLI for generating [hashapass.com](http://hashapass.com/) compatible passwords

> **Note:** This tool is not affiliated with [hashapass.com](http://hashapass.com/). I have created it as a tool for generating compatible passwords.


## Getting Started
The Hashapass CLI is installed and managed via [npm](https://npmjs.org/), the [Node.js](http://nodejs.org/) package manager.

Before setting up ensure that your [npm](https://npmjs.org/) is up-to-date by running ```npm update -g npm``` (this might require sudo on certain systems).

### Installing 
In order to get started, you'll want to install the command line interface (CLI) globally. You may need to use sudo (for OSX, \*nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

```
npm install -g hashapass-cli
```
This will put the ```hashapass``` command in your system path, allowing it to be run from any directory.

To confirm it has installed correctly run ```hashapass --version```.

### Using the CLI
Once the CLI is installed you're good go. Run ```hashapass``` to launch the CLI - this will prompt you for your *parameter* and *master password*.

If you want to configure the length of the output:
```
hashapass -l 14
```

## License
Copyright (c) 2015 Liam Moat

Released under [the MIT license](https://bitbucket.org/liammoat/hashapass-cli/raw/master/LICENCE).
