function outer(){
  let a=1
  return function inner(){
    a++
    console.log(a)
  }
}

let t=outer()
t()
t()
t()
