let varWin = Math.floor(Math.random() * 102)
let varLose = Math.floor(Math.random() * 102)
let userName = 'Sova'

function resultRank(win,lose){
    let rank = win - lose
    return rank    
}

let currentRank = resultRank(varWin,varLose)
let lvlrank

function ranking(currentRank,lvlrank){
    if(currentRank <= 10){
        lvlrank = 'Ferro'
        return lvlrank
    }else if(currentRank >= 11 && currentRank <= 20){
        lvlrank = 'Bronze'
        return lvlrank
    }else if(currentRank >=21 && currentRank <= 50){
        lvlrank = 'Prata'
        return lvlrank
    }else if(currentRank >=51 && currentRank <= 80){
        lvlrank = 'Ouro'
        return lvlrank
    }else if(currentRank >=81 && currentRank <= 90){
        lvlrank = 'Diamente'
        return lvlrank
    }else if(currentRank >= 91 && currentRank <= 100){
        lvlrank = 'Lendário'
        return lvlrank
    }else if(currentRank >= 101){
        lvlrank = 'Imortal'
        return lvlrank
    }
}

let queryRank = ranking(currentRank,lvlrank)

console.log(`O Herói ${userName} tem de saldo: ${currentRank} e está no nível: ${queryRank}`)