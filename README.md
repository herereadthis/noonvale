Noonvale
==========

[![Build Status](https://secure.travis-ci.org/herereadthis/noonvale.svg?branch=master)](http://travis-ci.org/herereadthis/noonvale)
[![devDependency Status](https://david-dm.org/herereadthis/noonvale/dev-status.svg)](https://david-dm.org/herereadthis/noonvale#info=devDependencies)

Noonvale is simple Tic-Tac-Toe game written with AngularJS

**[noonvale.herereadthis.com](http://noonvale.herereadthis.com/)**

* You are human player X versus computer player O. Computer player is dumb; it will select any empty cell randomly.
* It's device agnostic, so it will work on your phone or computer.
* It uses Yeoman scaffolding, which will allow you to make production instances of the application easily.

## Requirements

You need Node Package Mangager (npm), Bower, and Grunt

```bash
# check NPM
$ npm --version
# else, go to http://nodejs.org/ to install
# check Bower
$ bower --version 
# if not,
$ sudo npm install -g bower
# check grunt
$ grunt --version
# if not,
$ sudo npm install -g grunt

```

## Build

```bash
$ git clone https://github.com/herereadthis/noonvale.git
$ cd noonvale/
$ npm install
$ bower install
# work in developer mode
$ grunt serve
# work in production mode (minified, concactenated)
$ grunt serve:dist
```

## Testing

Testing is done in PhantomJS. You can check build and testing status on [Travis CI](https://travis-ci.org/herereadthis/noonvale)

```bash
# test locally
$ grunt test
```

## Scaffolding Structure

Noonvale is an AngularJS application with Yeoman scaffolding. Yeoman is useful because it takes care of all the boilerplate work to build a new application, while adding tasks that help in development and production. For example of "live reload":

**Start the server**

```bash
$ grunt serve
# Your browser will automatically open http://localhost:9000/#/
```

**Open up [app/views/main.html](https://github.com/herereadthis/noonvale/blob/master/app/views/main.html) and append this line to the bottom:**

```html
<p>Hello World!</p>
```

Now go back to your browser and the change will appear live.

### NPM

NPM is a package manager for Node programs. You can see the installed packages at [package.json](https://github.com/herereadthis/noonvale/blob/master/package.json). They include Karma for testing, LESS for CSS preprocessing, and JSHint to lint JavaScript.

### Grunt

Grunt is a JavaScript automated task runner that allows you to execute commands as if it were running in a terminal. For example, ```grunt serve``` will load your local environment.

### Bower

Bower is a package manager to handle third-party libraries. Noonvale uses Bower to load AngularJS and other AngularJS resources. Also included are CSS libraries such as [Bellmaker](https://github.com/herereadthis/bellmaker) for handling media queries

### LESS

LESS CSS is a CSS preprocessor. When done right, it can help manage CSS bloat and add semantics to CSS logic.
* The CSS for the TicTac cells is located at [app/less/tictac.less](https://github.com/herereadthis/noonvale/blob/master/app/less/tictac.less)
* Some LESS CSS is from herereadthis Bower dependencies, such as [Mossflower](https://github.com/herereadthis/mossflower), a global reset.

## Application Structure

### [App](https://github.com/herereadthis/noonvale/blob/master/app/scripts/app.js)
### [Services](https://github.com/herereadthis/noonvale/blob/master/app/scripts/services.js)
### [Filters](https://github.com/herereadthis/noonvale/blob/master/app/scripts/filters.js)
### [Controllers](https://github.com/herereadthis/noonvale/blob/master/app/scripts/controllers/main.js)
