const Circle = (radius) => {
    const proto = { 
      type: 'Circle',
      //code 
    }
    return Object.assign(Object.create(proto), {radius})
  }


const circle1 = Circle(2)


// class Circle {

//     type = 'Circle';

//     constructor(radius) {
//         // this.type = this.type;
//         this.radius = radius;
//     }
// }

// const circle1 = new Circle(7)





    // function foo() {}
    // const bar = { a: 'a'};

    // foo.prototype = bar;

    // // Is bar an instance of foo? Nope!
    // console.log(bar instanceof foo); // false

    // // Ok... since bar is not an instance of foo,
    // // baz should definitely not be an instance of foo, right?
    // const baz = Object.create(bar);

    // // ...Wrong.
    // console.log(baz instanceof foo); // true. oops.
