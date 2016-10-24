/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
    console.log('This is...', this);
    console.log('a = ', a);
    console.log('b = ', b);
};

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
};

var inAFunction = function(a, b) {
    this.name = 'Sally';
    whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
};

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

/* Instructions:
   You are a scientist who has just discovered a *mysterious* new element in your lab. Since creativity isn't your strong suit, you name the element `this`. Your job is to figure out the properties of this new element as well as how it interacts with its environment. Run through each of the examples in whatIsThis.js, one by one (commenting out the previous example and uncomment the current example as necessary). In the comments section below each example fill in what `this` is referencing inside of the whatIsThis function. Why? If it throws an error, why is it throwing an error?

   Create an index.html and link this file.  Open index.html in your browser and view your console to get started.
*/

// * Problem 1
// whatIsThis('hello', 'world');
/*
- "this" is ... "this" is defined as the "window" object.

- because ... the calling function is an anonymous function assigned to a global var. The top-most object in the global namespace is the containing environment, in this case : the window object.

My console output:
whatIsThis('hello', 'world');
This is... Window → http://127.0.0.1:59669/  main.js:5:5
a =  hello  main.js:6:5
b =  world
*/




// * Problem 2
// window.whatIsThis('hello', 'world');
/*
- "this" is ... Again... 'this' is referencing the "window" object.

- because ... This time it is because the function is being called explicitly as a method in the window objects environment.

My console output:
window.whatIsThis('hello', 'world');
This is... Window → http://127.0.0.1:59669/  main.js:5:5
a =  hello  main.js:6:5
b =  world

*/




// * Problem 3
// inAnObject.test1('face', 'book');
/*
- "this" is ... "this" refers to the object that it is being called from... the object that "test1" is a method of. The call to the function passes two parameters, "face" and "book".


- because ... the function is called as a method of "inAnObject". It is within the scope of the objects environment. Therefor "this refers to "inAnObject"

My console output:
inAnObject.test1('face', 'book');
This is... Object { name: "inAnObject", test1: whatIsThis(), anotherObject: Object }  main.js:5:5
a =  face  main.js:6:5
b =  book
*/




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
/*
- "this" is ... Received an error: Typeerror: ... is not an object.

- because ... Because test1 does not exist in the inner object (anotherObject).

My console output:
inAnObject.anotherObject.test1('twitter', 'book');
TypeError: inAnObject.anotherObject.test1 is not a function [Learn More]
*/




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
/*
- "this" is ... This refers to the object called "anotherobject", which is a property of the outer or "main" object called "inAnObject". It has access to it's own environment as well as inheriting the environments of it's immediate parent and the global space.

- because ... "test2" is a property of "anotherobject". This refers to the enclosing object ("inAnObject").



My console outpout:
inAnObject.anotherObject.test2('twitter', 'book');
This is... Object { name: "anotherObject", test2: whatIsThis() }  main.js:5:5
a =  twitter  main.js:6:5
b =  book
*/




// * Problem 6
// whatIsThis.call();
/*
- "this" is ... This refers to the global namespace, in this case, the "window" object.

- "this" is ... This refers to the "this" that was passed with the ".call()" function, namely: the "confusing" object. Since it doesn't pass any parameters into the whatIsThis function, a and b are undefined.

- because ... The global space is the most distant parent. Normally, ".call()" would all us to specify an alternative "this" for the called function. However, in this case no "this" argumement was provided, so it defaults to the "this" of the calling object: the global space.

My console.log output:
whatIsThis.call();
This is... Window → http://127.0.0.1:59669/  main.js:5:5
a =  undefined  main.js:6:5
b =  undefined
*/




// * Problem 7
// whatIsThis.call(trickyTricky);
/*
- "this" is ... the object called trickyTricky.

- "this" is ... This refers to the "this" that was passed with the ".call()" function, namely: the "confusing" object. Since it doesn't pass any parameters into the whatIsThis function, a and b are undefined.

- because ... Because the call function passed the objected named "trickyTricky" as the "this" for this operation. Therefore, the properties of "trickyTricky" were available in the execution environment.

My console log output:
whatIsThis.call(trickyTricky);
This is... Object { name: "trickyTricky", why: "does this work?", what: "is going on here?" }  main.js:5:5
a =  undefined  main.js:6:5
b =  undefined
*/




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
/*
- "this" is ...As in #7, "this" refers to the "trickyTricky" object, which also has access to the "whatIsThis" function as they are both in the same environment.

- because ...Both the "this" object ("trickyTricky") and the function whatIsThis share the same parent (global) space. While the .call() function is passing the "this" of the "trickyTricky" object, it is still calling the "whatIsThis" function with parameters which are assigned to internal (internal to the function) vars a & b, which then get passed to the console.log output .

whatIsThis.call(trickyTricky, 'nice', 'job');
This is... Object { name: "trickyTricky", why: "does this work?", what: "is going on here?" }  main.js:5:5
a =  nice  main.js:6:5
b =  job
*/




// * Problem 9
// whatIsThis.call(confusing);
/*
- "this" is ... This refers to the "this" that was passed with the ".call()" function, namely: the "confusing" object. Since it doesn't pass any parameters into the whatIsThis function, a and b are undefined.

- because ... Again, the .call() function is being used and is passing the "this" of the "confusing" object, No other argements are being passed so the parameters a & b to the whatIsThis function are undefined.

My console.log output:
whatIsThis.call(confusing);
This is... Object { name: "confusing", state: "Alaska", city: "Anchorage" }  main.js:5:5
a =  undefined  main.js:6:5
b =  undefined
*/




// * Problem 10
// whatIsThis.call(confusing, 'hello');
/*
- "this" is ... Like the previous exampple (#9), this refers to the "this" that was passed with the ".call()" function, namely: the "confusing" object. This time is passed one parameter in addition to the "this" context, parameter "a" of whatIsThis is defined while the "b" parameter remains undefined.

- because ... Again, the .call() function is being used and is passing the "this" of the "confusing" object. An additional parameter is being passed through the ".call()" function, which gets passed as the first argument to the whatIsThis function.

My console.log output:
whatIsThis.call(confusing, 'hello');
This is... Object { name: "confusing", state: "Alaska", city: "Anchorage" }  main.js:5:5
a =  hello  main.js:6:5
b =  undefined

*/




// * Problem 11
// whatIsThis.apply(trickyTricky);
/*
- "this" is ... In this case, "this" refers to the "this" which is being passed by the .apply() function, which is the environment for object "trickyTricky". No other parameters are being passed, so the whatIsThis parameters a and b are undefined. If additional parameters would have been sent, they would be passed to the calling funtion as an array or array-like object.

- because ... The .apply() function (similar to the .call() function) passes a "this" context to into the execution environment of the calling function. If additional parameters are passed with the .apply() function, they would be passed to the calling function as an array or array-like object (per MDN).

My console.log output:
whatIsThis.apply(trickyTricky);
This is... Object { name: "trickyTricky", why: "does this work?", what: "is going on here?" }  main.js:5:5
a =  undefined  main.js:6:5
b =  undefined

*/




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
/*
- "this" is ... Like the previous examples using the .apply() function, the "this" is the object passed as the first argument: "confusing". The second parameter is an array literal containing two elements. These are passed to the calling function and destructured into parameters a and b.

- because ... Apply works in a similar fashion to the .call() function, with the first parameter specifying a "this" for the calling funtions execution environment.

My console.log output:
whatIsThis.apply(confusing, ['nice', 'job']);
This is... Object { name: "confusing", state: "Alaska", city: "Anchorage" }  main.js:5:5
a =  nice  main.js:6:5
b =  job

*/




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
/*
- "this" is ... We get an error with this one because the apply() function requires an array or array-like object to be passed as it's second parameter (or no second parameter). Due to the error, the calling funtion and it's execution environment are not set up or executed.

- because ... The apply() function requires the second parameter (if passed) to be in the form of an array or array-like object.

My console.log output:
whatIsThis.apply(confusing, 'nice', 'job');
TypeError: second argument to Function.prototype.apply must be an array

*/




// * Problem 14
// inAFunction('what will', 'happen?');
/*
- "this" is ... In this case, "this" is the parent object's environment (window). As such, it has access to objects that are visible in the parent environment, including the whatIsThis function. So the parameters "what will" and "happen" are passed into the anonymous function and mapped to the function call to whatIsThis as parameters a and b.

- because ... It has access to objects that are visible in the parent environment. Passed parameters are mapped into the function call to whaatIsThis as that function is available to the calling function.

My console.log output:
inAFunction('what will', 'happen?');
This is... Window → http://127.0.0.1:59669/  main.js:5:5
a =  what will  main.js:6:5
b =  happen?

*/




// * Problem 15
// inAFunction.test3('A', 'B');
/*
- "this" is ... the var inAFunction references an anonymous function. The "this" would be the object of the calling object, "window". WHile the "inAFunction" object prototype appears to have a new property called "test3", it is unavailable to the function.

- because ... Arg. This is confusing to me! functions inherit the properties of the prototype, so test3 should have propagated to the function?


My console.log output:
> inAFunction.test3('A', 'B');
  TypeError: inAFunction.test3 is not a function [Learn More]

> inAFunction
  function inAFunction()

> inAFunction.prototype
    Object { test3: whatIsThis(), 1 more… }

> inAFunction()
  This is... Window → http://127.0.0.1:59669/  main.js:5:5
  a =  undefined  main.js:6:5
  b =  undefined  main.js:7:5
  undefined

> inAFunction.test3
  undefined               <===  Undefined when attemptint to
                                call from function.
> inAFunction.prototype.test3
  function whatIsThis()   <===  exists as parameter
                                of the prototype.
*/




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
/*
- "this" is ... refers to the "window" object. The new instance of the inAFuntion constructor is created and called from the global namespace.

- because ... The new instance of the inAFuntion constructor is created and called from the global namespace. It's "this" will be the calling objects environment.

My console.log output:
var newObject = new inAFunction('what will', 'happen?');
This is... Window → http://127.0.0.1:59669/  main.js:5:5
a =  what will  main.js:6:5
b =  happen?

*/




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
/*
- "this" is ...

- because ...

In the first statement, "this" is the window object -- the global environment. The variable "newObject" has a new function assigned to it, which was instantiated from the prototype of "inAFunction" with the "new" keyword. When creating it, it passed 2 parameters "what will" and "happen", which get passed as the new function is executed upon instantiation.

In the second statement, "this" is the newly instantiated object "newObject". The test3 method, which had previously been created on the prototype function, is called with parameters 'C' and 'D'. The test3 method executes the "whatIsThis" function, and returns its results in vars a and b.

My console.log output:
var newObject = new inAFunction('what will', 'happen?');
This is... Window → http://127.0.0.1:59669/  main.js:5:5
a =  what will  main.js:6:5
b =  happen?  main.js:7:5
undefined
newObject.test3('C', 'D');
This is... Object { name: "Sally" }  main.js:5:5
a =  C  main.js:6:5
b =  D

*/




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
/*
- "this" is ... "this" is the object "trickyTricky".

- because ... The test1 method of the inAnObject object is called and passed to the .call() function. The call() function passes in the "this" of the "trickyTricky" object, along with two other parameters "face" and "book" which are passed to the function that test1 calls (whatIsThis).


My console.log output:
inAnObject.test1.call(trickyTricky, 'face', 'book');
This is... Object { name: "trickyTricky", why: "does this work?", what: "is going on here?" }  main.js:5:5
a =  face  main.js:6:5
b =  book

*/




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
/*
- "this" is ..."this" is the "confusing" object (aptly named)...
- because ... the test2 method of the anotherObject method of the inAnObject object is being called. It is passed to the .apply() function, which passes in the "this" of the "confusing" object, along with an array with two elements "foo" and "bar". This array is then passed to the function called by test2, which is the "whatIsThis" function.

Somehow (and this I don't quite understand yet) the array is deconstructed before being passed to the "whatIsThis" function?


My console.log output:
inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
This is... Object { name: "confusing", state: "Alaska", city: "Anchorage" }  main.js:5:5
a =  foo  main.js:6:5
b =  bar

*/
