## identifiers

var
  - weakest signal available when defining a variable in JavaScript
  - can (but shouldn't) be used for _anything_, _anywhere_
  - can be changed later (e.g. defined with a string, reassigned as an integer later)
  - can be globally scoped
    - pro tip - _never_ use globally scoped variables

let
  - signal that the variable __will be reassigned__
  - signal that the variable __will only be used in the block its defined it__
  - tends to be for loops or mathematical algorithms
  - _block scoped_
  - can be changed later (like var) but only in the same scope where it is declared. if declared in a different scope, a new variable is defined
  - can't be hoisted
  - always give a value when defining
    - try to define it later, and you will get errors

const
  - signal that the variable __will not be reassigned__
  - _block scoped_
  - can't be reassigned
  - can't be hoisted

`scope` - anything inside **{}**

`hoisting` - declaring at the top of a function
  - make sure variables are declared before being passed a value
  - prevent variable from being globally scoped

sources
  - [es6 var let const what is the difference](http://www.competa.com/blog/2016/08/es6-var-let-const-what-is-the-difference/)
  - [javascript es6 var let or const](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.3u7a0qsuy)
