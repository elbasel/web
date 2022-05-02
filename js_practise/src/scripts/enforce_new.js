function Foo(num) {

    this.num = num
 
    if (!(this instanceof Foo)) { return new Foo(num); }
  }

const wrongFoo = Foo(3)
const myFoo = new Foo(2)

console.log(`wrongFoo: ${JSON.stringify(wrongFoo)}`)
console.log(`myFoo: ${JSON.stringify(myFoo)}`)