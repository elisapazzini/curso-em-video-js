let num = [1, 2, 3, 4, 5]

console.log(`Nosso vetor é o ${num}`)

num[3] = 6

console.log(`Nosso novo vetor, acrescido de um elemento no índice 3, é o ${num}`)

console.log(`Nosso vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

num.sort()
console.log(`Nosso vetor em ordem crescente é ${num}`)

num.push(7)
console.log(`Nosso novo vetor, acrescido de um último elemento, é o ${num}, tendos ${num.length} posições`)

console.log(`Percurso para exibicão de array com for comum`)
for(var i = 0; i < num.length; i++) { 
    console.log(num[i])
}

console.log(`Percurso para exibicão do array com for/in`)
for(var i in num){
    console.log(num[i])
}

var posicao = num.indexOf(2)
console.log(`O valor 1 está na posição ${posicao}`)

var posicao = num.indexOf(10)
console.log(`O valor 10 está na posição ${posicao}, ou seja, não foi encontrada no array.`)

var posicao = num.indexOf(3)
if (posicao == -1) {
    console.log(`O valor não foi encontrado neste array.`)
} else {
    console.log(`O valor está na posição ${posicao}`)
}

var posicao = num.indexOf(11)
if (posicao == -1) {
    console.log(`O valor não foi encontrado neste array.`)
} else {
    console.log(`O valor está na posição ${posicao}`)
}