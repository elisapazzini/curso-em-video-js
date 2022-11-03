let amigo = {
    nome: 'Elisa',
    sexo: 'F',
    peso: 55,
    engordar(kg = 0){
        this.peso += kg
    }
}

console.log(typeof(amigo))
console.log(amigo)
console.log(amigo.nome) //parâmetro
console.log(typeof(amigo.nome))

amigo.engordar(2)
console.log(amigo.peso)