class LRUcache{
    constructor(capacity = 2){
        this.capacity = capacity
        this.cache = new Map()
    }

    put(key,value){
        if(this.cache.size == this.capacity){
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }
        this.cache.set(key,value)
    }

    get(key){
        if(!this.cache.has(key)){
            return -1
        }

        const val = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key,val)
        return val
    }
}

const test_cache = new LRUcache(2)
test_cache.put(1,1)
test_cache.put(2,2)
console.log(test_cache) //1=>1,2=>2
test_cache.get(1) 
test_cache.put(3,3) 
console.log(test_cache) //1=>1,3=>3
test_cache.put(4,4) 
console.log(test_cache) //3=>3,4=>4