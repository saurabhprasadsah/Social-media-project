function createGreeter(greeting) {
    
    function greet(name){
        console.log(greeting, name)
    }
    return greet
    
}
let g1 = createGreeter('Goodmorning')
let g2 = createGreeter('Good evening')

console.log(typeof g1)

console.log(g1('Arnva'))
console.log(g2('prateek'))
