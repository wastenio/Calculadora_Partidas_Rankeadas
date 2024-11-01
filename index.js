function rankedCalculator(vitoria, derrota){
    const saldo = vitoria - derrota;

    const limiteFerro = 10
    const limiteBronze = 11
    const limitePrata = 21
    const limiteOuro = 51
    const limiteDiamante = 81
    const limiteLendario = 91
    const limiteImortal = 101

    let classificacao;

    if(vitoria < limiteFerro){
        classificacao = "Ferro";
    }else if(vitoria >= limiteBronze && vitoria <= limitePrata){
        classificacao = "Bronze"
    }else if(vitoria >= limitePrata && vitoria <= limiteOuro){
        classificacao = "Prata"
    }else if(vitoria >= limiteOuro && vitoria <= limiteDiamante){
        classificacao = "Ouro"
    }else if(vitoria >= limiteDiamante && vitoria <= limiteLendario){
        classificacao = "Diamante"
    }else if(vitoria >= limiteLendario && vitoria <= limiteImortal){
        classificacao = "Lendario"
    }else{
        classificacao = "Imortal"
    }

    return {saldo, classificacao};
}

const vitoria = 29
const derrota = 20
const resultado = rankedCalculator(vitoria, derrota);

console.log(`O Herói tem de saldo de ${resultado.saldo} e está no nível de ${resultado.classificacao}.`);