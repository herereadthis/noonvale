Noonvale
==========

[![Build Status](https://secure.travis-ci.org/herereadthis/noonvale.svg?branch=master)](http://travis-ci.org/herereadthis/noonvale)
[![devDependency Status](https://david-dm.org/herereadthis/noonvale/dev-status.svg)](https://david-dm.org/herereadthis/noonvale#info=devDependencies)

Noonvale is simple Tic-Tac-Toe game written with AngularJS

**[noonvale.herereadthis.com](http://noonvale.herereadthis.com/)**

* You are human player X versus computer player O.
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
# grunt serve:dist
```
