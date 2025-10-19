function throttle(fn,delay){
    var isThrottled=false
    return function(...args){
        if(isThrottled)
        return

        fn.apply(this,args)
        isThrottled=true
        
        timer = setTimeout(()=>{
            isThrottled=false
        },delay)
    }
}
const log = (...args)=>console.log(...args)

const throttledLog = throttle(log,0)

for(i=0;i<1000;i++){
   throttledLog(i)
   
}
setTimeout(()=>{
    throttledLog(1)
},600)

