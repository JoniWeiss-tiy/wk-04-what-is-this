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

*/




// * Problem 2
// window.whatIsThis('hello', 'world');
/*
- "this" is ... Again... 'this' is referencing the "window" object.

- because ... This time it is because the function is being called explicitly as a method in the window objects environment.

*/




// * Problem 3
// inAnObject.test1('face', 'book');
/*
- "this" is ... "this" refers to the object that it is being called from... the object that "test1" is a method of. The call to the function passes two parameters, "face" and "book".


- because ... the function is called as a method of "inAnObject". It is within the scope of the objects environment. Therefor "this refers to "inAnObject"

*/




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
/*
- "this" is ... Received an error: Typeerror: ... is not an object.

- because ... Because test1 does not exist in the inner object.

*/




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
/*
- "this" is ...

- because ...

*/




// * Problem 6
// whatIsThis.call();
/*
- "this" is ...

- because ...

*/




// * Problem 7
// whatIsThis.call(trickyTricky);
/*
- "this" is ...

- because ...

*/




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
/*
- "this" is ...

- because ...

*/




// * Problem 9
// whatIsThis.call(confusing);
/*
- "this" is ...

- because ...

*/




// * Problem 10
// whatIsThis.call(confusing, 'hello');
/*
- "this" is ...

- because ...

*/




// * Problem 11
// whatIsThis.apply(trickyTricky);
/*
- "this" is ...

- because ...

*/




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
/*
- "this" is ...

- because ...

*/




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
/*
- "this" is ...

- because ...

*/




// * Problem 14
// inAFunction('what will', 'happen?');
/*
- "this" is ...

- because ...

*/




// * Problem 15
// inAFunction.test3('A', 'B');
/*
- "this" is ...

- because ...

*/




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
/*
- "this" is ...

- because ...

*/




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
/*
- "this" is ...

- because ...

*/




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
/*
- "this" is ...

- because ...

*/




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
/*
- "this" is ...

- because ...

*/
