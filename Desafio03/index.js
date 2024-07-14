class Hero{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        if(this.tipo === 'Mago' || this.tipo === 'mago'){
            this.ataque = "Magia"
        }else if(this.tipo === 'Guerreiro' || this.tipo === 'guerreiro'){
            this.ataque = "Espada"
        }else if(this.tipo === 'Monge' || this.tipo === 'monge'){
            this.ataque = "Artes Marciais"
        }else if(this.tipo === 'Ninja' || this.tipo === 'ninja'){
            this.ataque = "Shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let newMago = new Hero("ElMaguito",15,"Mago")
let newGuerreiro = new Hero("ElGuerreiro", 35,"Guerreiro")
let newMonge = new Hero("ElMonge", 50,"Monge")
let newNinja = new Hero("ElNinja", 25,"Ninja")
newMago.atacar()
newGuerreiro.atacar()
newMonge.atacar()
newNinja.atacar()