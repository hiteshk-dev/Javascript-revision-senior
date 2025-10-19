console.log(a) //undefined
var a=10

console.log(functionCALL) //undefined
console.log(functionCALL()) //TypeError:not a function
var functionCALL = function(){
    console.log("Hello Normal Function")
}

console.log(ArrowfunctionCALL) // undefined
console.log(ArrowfunctionCALL()) //TypeError:not a function
var ArrowfunctionCALL = function(){
    console.log("Hello Arrow function")
}

console.log(anotherVariable) //ReferenceError:before initialization 
const anotherVariable= 10

thisIsNormal() //Gotcha!
function thisIsNormal(){
    console.log("Gotcha!")
}

(function(){
console.log("Visible on Screen")
})()

//Function declarations win over var
console.log(foo()); // "from function"
var foo = 10;
function foo(){ return "from function"; }

console.log(foo()); //Identifier 'foo' has already been declared
let foo = 10;
function foo(){ return "from function"; }

let c = 5;
{
  console.log(c); //ReferenceError
  let c = 10;
}
