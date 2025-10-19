function debounce(fn,delay){
    let timer 
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

const log = (...args) => console.log('log',...args)
const debouncedLog = debounce(log,500)
for(let i=0;i<1000;i++){
 debouncedLog(i) 
}
setTimeout(()=>{
 debouncedLog(200) 
},501)