const myInstanceOf = (instance, origin) => {
    const type = typeof instance
    if (type !== 'object' && type !== 'function') {
        return false
    }

    while (instance) {
        if (instance.__proto__ === origin.prototype) {
            return true
        } else {
            instance = instance.__proto__
        }
    }

    return false
}

console.log(myInstanceOf(1, Object))