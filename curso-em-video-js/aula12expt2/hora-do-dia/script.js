function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${ hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = './assets/manha.png'
        document.body.style.background = '#a3acad'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = './assets/tarde.png'
        document.body.style.background = '#2a2c1e'
    } else {
        // Boa noite!
        img.src = './assets/noite.png'
        document.body.style.background = '#1b2c37'
    }
}

