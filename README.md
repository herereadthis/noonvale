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

You need Node Package Mangager (npm)

```bash
# check NPM
$ npm --version
# else, go to http://nodejs.org/ to install
# Alternate: use Homebrew
$ brew install node
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
# install Bower dependencies
$ npm run bower
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

#### NPM

NPM is a package manager for Node programs. You can see the installed packages at [package.json](https://github.com/herereadthis/noonvale/blob/master/package.json). They include Karma for testing, LESS for CSS preprocessing, and JSHint to lint JavaScript.

#### Grunt

Grunt is a JavaScript automated task runner that allows you to execute commands as if it were running in a terminal. For example, ```grunt serve``` will load your local environment.

#### Bower

Bower is a package manager to handle third-party libraries. Noonvale uses Bower to load AngularJS and other AngularJS resources. Also included are CSS libraries such as [Bellmaker](https://github.com/herereadthis/bellmaker) for handling media queries

#### LESS

LESS CSS is a CSS preprocessor. When done right, it can help manage CSS bloat and add semantics to CSS logic.
* The CSS for the TicTac cells is located at [app/less/tictac.less](https://github.com/herereadthis/noonvale/blob/master/app/less/tictac.less)
* Some LESS CSS is from herereadthis Bower dependencies, such as [Mossflower](https://github.com/herereadthis/mossflower), a global reset.

## Application Structure

The essential logic is human player (&#x2715;) is 1, computer player (&#x25ef;) is 0, and no value is (boolean) false.

#### [App: app.js](https://github.com/herereadthis/noonvale/blob/master/app/scripts/app.js)

Main model. We really only have one view - the homepage.

#### [Controllers: main.js](https://github.com/herereadthis/noonvale/blob/master/app/scripts/controllers/main.js)

The Tic Tac Toe grid is a actually an array of nine elements, stacked three on top of each other with nifty CSS. It's simpler than making an array of elements (rows), each with three values (columns).

The array begins as array of nine undefined values, which becomes ```$scope.ticTac```. Angular directive ```ngRepeat``` is used to create the cells in the template.

```html
<div class="tictac_cell" ng-repeat="cell in ticTac track by $index">
    <div ng-click="markCell($index)" ng-class="clickSelect($index)">
        <p ng-class="markWinSet($index)">{{ cell | ticTacSymbol }}</p>
    </div>
</div>
```

Consequently, all cells should output ```undefined``` at the beginning of the game. Clicking on any cell will trigger the ```markCell``` function. The cell is marked with (1) one and then then it checks to see if there's a winner. If not, then it lets the computer mark a cell with a (0) zero, and again checks to see if a winner exists.

The ```ngClass``` directives are used to mark cells. When a player marks a cell, it fires the ```clickSelect()``` function which will give the cell a ```selected``` class. When a winner is determined, it will grab the indices of the winning subset of cells and mark them to show a winner. There is also a final directive that toggles the appearance of the game restart button with the function ```restartToggle()```.

When a winner exists or all turns have been exhausted the restart button will appear. It has an ```ngClick``` directive to reset all scope parameters.

#### [Services: services.js](https://github.com/herereadthis/noonvale/blob/master/app/scripts/services.js)

The primary factory function has two methods: a random cell selector and winner determiner.

```TicTacFinger.randomSelect``` will find the indices of ```$scope.ticTac``` array where a cell is undefined. Then it selects a random element from the available choices. The computer player uses this method to mark a cell.

```TicTacFinger.whoWon``` first builds an multidimensional array of subset indices that are winning scenarios. For example, a player can win by getting all cells in the first row ```[0,1,2]``` or all the cells in the last column ```[2,5,8]```. Then it uses these indices to fetch the values from ```$scope.ticTac```. If there is a winning subset, it returns the value of the entries. Otherwise, it returns false.

#### [Filters: filters.js](https://github.com/herereadthis/noonvale/blob/master/app/scripts/filters.js)

The main purpose of the filter is to replace the player entries (1 or 0) with something more user friendly: (&#x2715; or &#x25ef;). Since empty cells are undefined, it will only work on cells that have been marked.
