const IsPositiveNumber = {
    [Symbol.hasInstance](instance) {
        return typeof instance === 'number' && instance > 0;
    }
}

const add = (x, y) => {
    if (!(x instanceof IsPositiveNumber)) {
        throw new Error('First parameter must be positive');
    }
    if (!(y instanceof IsPositiveNumber)) {
        throw new Error('Second parameter must be positive');
    }
    return x + y;
}

console.log(add(10, 20));
console.log(add(-10, 20));