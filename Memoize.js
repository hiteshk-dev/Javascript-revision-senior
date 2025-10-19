function memoize(fn) {
    const cache = new Map()
    return function (...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            console.log('from cache')
            return cache.get(key)
        }
        else {

            const result = fn(...args)
            cache.set(key, result)
            return result
        }
    }
}

const sum = (a, b) => {
    console.log('fresh execution')
    return a + b
}

const memoizedSum = memoize(sum)
console.log(memoizedSum(1, 2))
console.log(sum(2, 3))
console.log(sum(2, 3))
console.log(sum(4, 5))
console.log(sum(1, 2))
console.log(memoizedSum(2, 3))
console.log(memoizedSum(2, 3))
console.log(memoizedSum(4, 5))
console.log(memoizedSum(1, 2))