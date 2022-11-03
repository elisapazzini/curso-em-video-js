function parimp(n){
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parimp(3)
console.log(res)
console.log(parimp(10))


function soma(n1 = 0, n2 = 0){ //parametros pré definidos
    return n1 + n2
}
console.log(soma(2))


let v = function(x){ //variável recebeu um parâmetro e executou uma função
    return x * 2
}
console.log(v(5))

//5! = 5 * 4 * 3 *2 * 1 = 120
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))


//fatorial de maneira recursiva n! = n * (n-1)! exceto 1! = 1
//funcao chama ela mesma
function fatorial(n){
    if(n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))


