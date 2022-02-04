const prompt = require('prompt-sync')();
console.clear();

//FUNÇÕES

function tempo (hora, minuto){
    dia = 0;
    hora = hora;
    minuto = minuto;
    if (hora > 24){
        dia++
        hora -= 24
    }
    if (minuto > 60){
        hora++
        minuto -= 60
    }
    console.log(`
    DIA ${dia + 1}
    ${hora}:${minuto}`) 
}


// OBJETO STATUS

var status = {
    vida: 20,
    fome: 10,
    carisma : 0,
    furtividade: 0,
    cash: 100,
}

//VARIAVEIS DE CONTROLE

hour = 0,
min = 0

// HISTÓRIA

tempo(hour = 06, min = 15)

console.log();

console.log(`Olá, meu nome é Phia, sou uma desertora da terra de Lork,

acabei sendo expulsa depois de contar ao regente queplanejavam matar nosso rei,

sendo que todo o plano foi arquitetado por ele, no fim acabei sendo condenada ao exilio

injustamente por um crime que não cometi. 

Agora vago pelos reinos de Flauberth em busca de um abrigo permanente.

Sempre sigo pela estrada principal pois ja foi saqueada por anões algumas 

vezes desde que estou vagando pelo mundo.



Hoje cedo recolhi meu acampamento e segui em direção ao Sul, 

onde ouvi boatos de que tem uma cidade que abriga qualquer criatura exilada.



Seguindo pela estrada encontro uma caravana de guerreiros, o que faço:

1. Parar para conversar e fazer novas amizades;

2. Seguir meu caminho e ignorá-los;

3. Tentar saquear o grupo sorrateiramente;`);

console.log()

let perg1 = +prompt(`Qual opção eu escolho: 1, 2 ou 3? `);

console.log()

if (perg1 == 1){
    console.log(`Por sorte são guerreiros amigaveis e me convidam para comer e se juntar a eles até a próxima cidade`)
    status.fome += 2
    status.carisma += 5
    tempo(hour += 05, min += 15)
    console.log()
    console.log(status)
    console.log()
    console.log(`Chegar na cidade foi rápido graças ao cavalo que me emprestaram.`);
    
} 
else if(perg1 == 2){
    console.log(`Acabo de perder uma oportunidade de conseguir uma carona e comida.`)
    status.fome -= 2
    status.carisma -= 5
    tempo(hour += 12, min += 30);
    console.log();
    console.log(status);
    console.log();
    console.log(`Indo a pé pela estrada principal acabo demorando mais do que o esperado para
    chegar na cidade mais próxima.`)
}
else{
    console.log(`Tenho que lembrar de olhar para o chão na próxima vez, os guerreiros não gostaram
    da minha tentativa de furto.`);
    status.fome -= 2
    status.furtividade +=10
    tempo(hour += 12, min += 30);
    console.log();
    console.log(status);
    console.log();
    console.log(`Indo a pé pela estrada principal acabo demorando mais do que o esperado para
    chegar na cidade mais próxima.`)
}

console.log();

console.log(`Quando chego na cidade, a primeira coisa que procuro é uma estalagem para passar a noite.

Passar uma noite custa $20. Devo usar meu dinheiro para isso?`);

console.log()

let perg2 = prompt('Sim ou Não? ').toUpperCase();
if (perg2 == 'SIM' || perg2 == 'S'){
    status.carisma += 3
    status.fome += 2
    console.log()
    status.cash -= 20
    tempo(hour += 20, min += 00)
    console.log()
    console.log(status)
}
else if(perg2 == 'NAO' || perg2 == 'N'){
    console.log('Tem uma pequena clareira no bosque atrás da cidade, é ótimo para passar a noite.')
    console.log()
    tempo(hour += 20, min += 00)
    console.log()
    console.log(status)
}

console.log()

console.log(`No outro dia, arrumo minhas coisas e pego a estrada novamente rumo ao meu destino.

Logo a frente acabo caindo em uma dessas armadilhas para animais. O que farei agora?

1. Gritar por ajuda;

2. Tentar cortar a corda com a faca escondida na bota;

3. Fingir de morta e esperar que o caçador apareça.`)

console.log()

let perg3 = +prompt("Qual opção devo escolher? ");

console.log()

if (perg3 == 1){
    if(perg1 == 1 && status.carisma > 5){
        console.log(`A equipe de guerreiros que encontrei no dia anterior estava passando pelo local
     pouco tempo depois que cai na armadilha e me ajudaram a sair`)
        status.carisma += 5
        tempo(hour += 01, min +=10)
        console.log()
        console.log(status)
        console.log()
    }
    console.log(`A estrada que estou é mais utilizada por viajantes, e nem todos são generosos em ajudar 
    um estranho. Acabo ficando um tempo presa até conseguir ajuda.`)
    status.carisma += 1
    status.fome -= 3
    tempo(hour += 03, min += 30)
    console.log()
    console.log(status)
    console.log()
}
else if(perg3 == 2){
    console.log(`Ótima ideia, consigo me soltar bem rápido e logo ja posso voltar a caminhada.`)
    status.furtividade += 2
    status.fome -= 1
    tempo(hour += 00, min += 50)
    console.log()
    console.log(status)
    console.log()
}
else if(perg3 == 3){
    console.log(`O caçador estava vagando pela região conferindo as armadilhas, me ajudou a descer e
    me deu um coelho morto como pedido de desculpas`);
    status.fome += 2
    status.carisma += 2
    tempo(hour += 02, min += 30)
    console.log()
    console.log(status)
    console.log()
}
