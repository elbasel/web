// instanceof is a prototype identity check.
// NOT a type check.

// That means it lies across execution contexts,
// when prototypes are dynamically reassigned,
// and when you throw confusing cases like this
// at it:

function foo() {}
const bar = { a: 'a'};

foo.prototype = bar;

// Is bar an instance of foo? Nope!
console.log(bar instanceof foo); // false

// Ok... since bar is not an instance of foo,
// baz should definitely not be an instance of foo, right?
const baz = Object.create(bar);

// ...Wrong.
console.log(baz instanceof foo); // true. oops.