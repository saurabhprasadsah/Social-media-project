
console.log(beta())

function alpha(){
    return "A"
}

function beta(){
    return "b"
}

function area(height, width){
    if(typeof width === 'undefined'){
        return Math.PI * height * height
    }
    return height * width
}
console.log('area 3,4',area(3,4))
console.log('area 4',area(4))