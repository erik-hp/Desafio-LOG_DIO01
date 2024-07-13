let name = "Cypher"
let Exp = Math.random() * 11000
let currentLvl

if (Exp <= 1000) {
    currentLvl = "Ferro"
} else if (Exp >= 1001 && Exp <= 2000) {
    currentLvl = "Bronze"
} else if (Exp >= 2001 && Exp <= 5000) {
    currentLvl = "Prata"
} else if (Exp >= 5001 && Exp <= 7000) {
    currentLvl = "Ouro"
} else if (Exp >= 7001 && Exp <= 8000) {
    currentLvl = "Platina"
} else if (Exp >= 8001 && Exp <= 9000) {
    currentLvl = "Ascendente"
} else if (Exp >= 9001 && Exp <= 10000) {
    currentLvl = "Imortal"
} else if (Exp >= 10001) {
    currentLvl = "Radiante"
}
            
console.log(`O Herói ${name} está no nível ${currentLvl}`)