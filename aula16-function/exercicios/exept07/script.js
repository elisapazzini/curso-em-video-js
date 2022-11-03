let num = document.getElementById('num')
let lista = document.getElementById('sellista')
let resultados = document.getElementById('res')
let valores = []

function eNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function naLista(n, l){
    if(l.indexOf(Number(n)) != -1) { //indice -1 quer dizer que elemento não existe
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(eNumero(num.value) && !naLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('[ERRO] Valor inválido ou já cadastrado.')
    }
    resultados.innerHTML = ''
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for(let i in valores) {
            soma += valores[i]
            if (valores[i] > maior) {
                maior = valores[i]
            }
            if (valores[i] < menor) {
                menor = valores[i]
            }
        }

        let media = soma / total

        resultados.innerHTML = ''
        resultados.innerHTML += `<br> ${valores} <br>`
        resultados.innerHTML += `Ao todo, temos ${total} números cadastrados; <br>`
        resultados.innerHTML += `O maior valor informado foi ${maior}; <br>`
        resultados.innerHTML += `O menor valor informado foi ${menor}; <br>`
        resultados.innerHTML += `Somando todos os valores, temos ${soma}; <br>`
        resultados.innerHTML += `A média dos valores cadastrados é ${media}. <br>`
    }
}