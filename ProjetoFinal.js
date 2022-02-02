const prompt = require('prompt-sync')();
console.clear();

let carisma = 0;
let fome = 100;
let furtividade = 0;
function time (horas){
    var tempo = horas
    var dia = 1
    if (tempo < 24){
        dia++
    }
}


console.log(`Olá, meu nome é Phia, sou uma desertora da terra de Lork,
acabei sendo expulsa depois de contar ao regente queplanejavam matar nosso rei,
sendo que todo o plano foi arquitetado por ele, no fim acabei sendo condenada ao exilio
injustamente por um crime que não cometi. 
Agora vago pelos reinos de Flauberth em busca de um abrigo permanente.
Sempre sigo pela estrada principal pois ja foi saqueada por anões algumas 
vezes desde que estou vagando pelo mundo.`);
console.log();
console.log(`
Dia ${dia}
Hoje cedo recolhi meu acampamento e segui em direção ao Sul, 
onde ouvi boatos de que tem uma cidade que abriga qualquer criatura exilada.`);
console.log(`Seguindo pela estrada encontro uma caravana de guerreiros, o que faço: 
1. Parar para conversar e fazer novas amizades;
2. Seguir meu caminho e ignorá-los;
3. Tentar saquear o grupo sorrateiramente;
`)
let perg1 = +prompt(`Qual opção eu escolho: 1, 2 ou 3? `);
if (perg1 == 1){
    console.log(`Por sorte são guerreiros amigaveis e me convidam para comer e se juntar a eles até a próxima cidade`)
    fome++
    carisma++
    console.log(`Chegar na cidade foi rápido graças ao cavalo que me emprestaram.`);
    time(3)
} else if(perg1 == 2){
    console.log(`Acabo de perder uma oportunidade de conseguir uma carona e comida.`)
    fome--
    carisma--
    console.log(`Indo a pé pela estrada principal acabo demorando mais do que o esperado para
    chegar na cidade mais próxima.`)
    time(8)
}else{
    console.log(`Tenho que lembrar de olhar para o chão na próxima vez, os guerreiros não gostaram
    da minha tentativa de furto.`);
    fome--
    furtividade++
    console.log(`Indo a pé pela estrada principal acabo demorando mais do que o esperado para
    chegar na cidade mais próxima.`)
    time(8)
}
console.log();
console.log(`Quando chego na cidade, a primeira coisa que procuro é uma estalagem para passar a noite.
Por sorte os poucos trocados que tenho são o suficiente para alugar o quarto por uma noite.`)
horas(8)
console.log()
console.log(`Durante a madrugada ouço um barulho, decido arrumar minhas coisas 
e pego a estrada novamente rumo ao meu destino.
Logo a frente acabo caindo em uma dessas armadilhas para animais. O que farei agora?
1. Gritar por ajuda;
2. Tentar cortar a corda com a faca escondida na bota;
3. Fingir de morta e esperar que o caçador apareça.`)
let perg2 = +prompt("Qual opção devo escolher? ");
if (perg2 == 1){
    console.log(`A essa hora da noite não tem ninguém acordado, acabo ficando muito tempo presa até que
    alguem apareça para me ajudar`)
    fome--
    horas(5)
} else if(perg2 == 2){
    console.log(`Ótima ideia, consigo me soltar bem rápido e logo ja posso voltar a caminhada.`)
    horas(1)
}else{
    console.log(`O caçador estava vagando pela região conferindo as armadilhas, me ajudou a descer e
    me deu um coelho morto como pedido de desculpas`);
    fome++
    carisma++
}
