const shapeInterface = (state) => ({
    type: 'shapeInterface',
    area: () => state.area(state)
})

const square = (length) => {
    const proto = {
        length,
        type: 'Square',
        area: (args) => Math.pow(args.length, 2)
    }
    const basics = shapeInterface(proto)
    const composite = Object.assign({}, basics)
    return Object.assign(Object.create(composite), { length })
}


const s = square(5)
console.log('OBJ\n', s)
console.log('PROTO\n', Object.getPrototypeOf(s))
s.area()
// output
