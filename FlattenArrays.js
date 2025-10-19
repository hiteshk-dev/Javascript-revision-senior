function flattenArray(arr){
    return arr.reduce((acc,curr)=>{
        if(Array.isArray(curr)){
            return acc.concat(flattenArray(curr))
        } else{
          acc.push(curr)
           }   return acc
    },[])
    
}

console.log(flattenArray([1,2,3,[1,2,[1,2]]]))