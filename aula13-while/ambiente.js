// Laço mais simples, a quantidade de repetições é determinada por nós
// WHILE - Estrutura de repetição com teste lógico *no início*

var c = 1
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
}
console.log('Acabou!')

// DO... WHILE - Estrutura de repetição com teste lógico *no final*

var i = 1
do {
    console.log(`Passo ${i}`)
    i++
} while (i <=4)
console.log('Acabou!')