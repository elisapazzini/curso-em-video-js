function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resposta = document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        // window.alert('[ERRO] Faltam dados!')
        resposta.innerHTML = 'Impossível contar, tente novamente!'
    } else {
        resposta.innerHTML = 'Contando:  <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido. Considerando passo = 1')
            p = 1
        }
        if (i < f) {
            //Contagem progressiva
            for(let c = i; c <= f; c += p){
                resposta.innerHTML += `${c} \u{27A1} `
            }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c-= p){
                resposta.innerHTML += `${c} \u{2B05} `
            }
        }
        resposta.innerHTML += ` \u{1F389}`

          
    }
}