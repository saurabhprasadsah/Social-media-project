function createGreeter(greeting) {
    
    function greet(name){
        console.log(greeting, name)
    }
    return greet
    
}

function getName() {
    return document.getElementById('namebox').Value
}





let g1 = createGreeter('Goodmorning')
let g2 = createGreeter('Good evening')

console.log(typeof g1)

console.log(g1('Arnva'))
console.log(g2('prateek'))


console.log(('saurabh'))
