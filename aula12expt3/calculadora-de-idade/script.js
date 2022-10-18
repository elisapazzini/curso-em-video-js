function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var formAno = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (formAno.value == 0 || Number(formAno.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
    window.alert('Calculando...')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(formAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        //Homem
        if(idade >= 0 && idade <= 4){
            genero = 'Bebê'
            img.setAttribute('src', './assets/bebe-m.png')
        } else if (idade <= 12){
            genero = 'Criança'
            img.setAttribute('src', './assets/crianca-m.png')
        } else if (idade <= 21) {
            genero = 'Jovem'
            img.setAttribute('src', './assets/jovem-m.png')
        } else if (idade <= 50) {
            genero = 'Adulto'
            img.setAttribute('src', './assets/adulto-m.png')
        } else if(idade <= 70) {
            genero = 'Senhor'
            img.setAttribute('src', './assets/senhor-m.png')
        } else {
            genero = 'Idoso'
            img.setAttribute('src', './assets/idoso-m.png')
        }

    } else if (fsex[1].checked) {
        //Mulher
        if(idade >= 0 && idade <= 4){
            genero = 'Bebê'
            img.setAttribute('src', './assets/bebe-f.png')
        } else if (idade <= 12){
            genero = 'Criança'
            img.setAttribute('src', './assets/crianca-f.png')
        } else if (idade <= 21) {
            genero = 'Jovem'
            img.setAttribute('src', './assets/jovem-f.png')
        } else if (idade <= 50) {
            genero = 'Adulta'
            img.setAttribute('src', './assets/adulta-f.png')
        } else if(idade <= 70) {
            genero = 'Senhora'
            img.setAttribute('src', './assets/senhora-f.png')
        } else {
            genero = 'Idosa'
            img.setAttribute('src', './assets/idosa-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos - ${genero} com ${idade} anos.`
    res.appendChild(img)
   }
}