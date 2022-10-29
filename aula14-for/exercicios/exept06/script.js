function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    

    if (num.value.length == 0){
        window.alert('[ERRO] Digite um número entre 0 e 10')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(c = 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}