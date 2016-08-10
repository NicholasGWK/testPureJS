# testPureJS
A library to easily create  mocha tests for pure functions

Basically a shameless ripoff of [elm-test](https://github.com/deadfoxygrandpa/elm-test)

Original motivation was for testing lots of selectors which occur when using reselect with redux. Hard to mock out big chunks of state and brittle to write lots of tests for small, pure functions. This should make things easier and less brittle!
