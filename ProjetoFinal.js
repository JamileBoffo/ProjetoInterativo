const prompt = require('prompt-sync')();
console.clear();

//FUNÇÕES
let dia = 0;

function tempo (hora, minuto){
    hour = hour + hora
    min = min + minuto
    if (hour > 24){
        dia++
        hour -= 24
    }
    if (min > 60){
        hour++
        min -= 60
    }
    console.log(`
    DIA ${dia}
    ${hour}:${minu}`) 
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

let livros = Math.trunc(Math.random() * 10);
let cont = 0

hour = 0,
min = 0

// HISTÓRIA
console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
tempo(hour = 06, min = 15)

console.log();

console.log(`Olá, meu nome é Phia, sou uma desertora da terra de Lork,
acabei sendo expulsa depois de contar ao regente que planejavam matar nosso rei,
sendo que todo o plano foi arquitetado por ele, no fim acabei sendo condenada ao exilio
injustamente por um crime que não cometi. 

Agora vago pelos reinos de Flauberth em busca de um abrigo permanente.
Sempre sigo pela estrada principal pois ja fui saqueada por anões algumas 
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
    tempo(05, 15)
    console.log(status)
    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
    console.log()
    console.log(`Chegar na cidade foi rápido graças ao cavalo que me emprestaram.`);
    
} 
else if(perg1 == 2){
    console.log(`Acabo de perder uma oportunidade de conseguir uma carona e comida.`)
    status.fome -= 2
    status.carisma -= 5
    tempo(hour += 12, min += 30);
    console.log(status);
    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
    console.log();
    console.log(`Indo a pé pela estrada principal acabo demorando mais do que o esperado para
    chegar na cidade mais próxima.`)
}
else{
    console.log(`Tenho que lembrar de olhar para o chão na próxima vez, os guerreiros não gostaram
    da minha tentativa de furto.`);
    status.vida -= 3
    status.fome -= 2
    status.furtividade +=10
    console.log();
    console.log(`Indo a pé pela estrada principal acabo demorando mais do que o esperado para
    chegar na cidade mais próxima.`)
    tempo(hour += 12, min += 30);
    console.log(status);
    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
    console.log();
}

console.log();

console.log(`Quando chego na cidade, a primeira coisa que procuro é uma estalagem para passar a noite.
Passar uma noite custa $20. Devo usar meu dinheiro para isso?`);

console.log()

while(true){
    let perg2 = prompt('Sim ou Não? ').toUpperCase();
    if(perg2 == 'SIM' || perg2 == 'S' || perg2 == 'NAO' || perg2 == 'N'){
        if (perg2 == 'SIM' || perg2 == 'S'){
            status.carisma += 3
            status.fome += 2
            console.log()
            status.cash -= 20
            tempo(hour += 20, min += 00)
            console.log(status)
            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
            break;
        }
        else{
            console.log('Tem uma pequena clareira no bosque atrás da cidade, é ótimo para passar a noite.')
            status.fome -= 2
            console.log()
            tempo(hour += 20, min += 00)
            console.log(status)
            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
            break;
        }
    } 
    else{
        console.log('Você precisa escolher entre Sim ou Não')
    }
    
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
        console.log(status)
        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
        console.log()
    }
    console.log(`A estrada que estou é mais utilizada por viajantes, e nem todos são generosos em ajudar 
    um estranho. Acabo ficando um tempo presa até conseguir ajuda.`)
    status.carisma += 1
    status.fome -= 3
    tempo(hour += 03, min += 30)
    console.log(status)
    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
    console.log()
}
else if(perg3 == 2){
    console.log(`Ótima ideia, consigo me soltar bem rápido e logo ja posso voltar a caminhada.`)
    status.furtividade += 2
    status.fome -= 1
    tempo(hour += 00, min += 50)
    console.log(status)
    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
    console.log()
}
else if(perg3 == 3){
    console.log(`O caçador estava vagando pela região conferindo as armadilhas, me ajudou a descer e
    me deu um coelho morto como pedido de desculpas`);
    status.fome += 2
    status.carisma += 2
    tempo(hour += 02, min += 30)
    console.log(status)
    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
    console.log()
}

console.log(`Finalmente consegui voltar a estrada, logo mais a frente está a Grande Divisora, uma 
montanha enorme que divide duas das maiores cidades de Flauberth.
Para passar por ela tem duas opções: 
1. Pagar uma quantia de dinheiro aos anões para usar o túnel subterraneo construido por eles($25);
2. Dar a volta na montanha;`);

console.log();

while (true) {
    let perg4 = +prompt(`Qual opção devo escolher? `);
    console.log();
    if (perg4 == 1 || perg4 == 2 ) {
        if (perg4 == 1) {
            status.cash -= 25;
            status.carisma += 10
            console.log('Diferente dos anões que tinham me saqueado na estrada uma vez, esses são mais amigáveis.');
            tempo(hour += 03, min +=30);
            console.log(status)
            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
            break;
        } else {
            status.fome -= 3
            console.log('Acabo economizando meu dinheiro mas perco o dobro do tempo para contornar a montanha');
            tempo(hour += 06, min +=40);
            console.log(status)
            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
            break;
        }
    } else {
        console.log(`Você precisa escolher entre:
        1. Pagar uma quantia de dinheiro aos anões para usar o túnel subterraneo construido por eles($25);
        2. Dar a volta na montanha; `);
    }
}
console.log();

console.log(`Depois de conseguir atravessar a Grande Divisora, entro em Dumnensis, a Grande Metrópole de Flauberth.
Por ser uma visitante/exilada, rapidamente sou parada pela Guilda Anjos do Sul, é uma equipe guerreira
que proteje a cidade.

Rapidamente sou separada dos demais visitantes da cidade e levada até a sede da Guilda para falar com 
o chefe Martius. Ele pede minha ajuda para decifrar um código escrito na Língua Antiga.`);

console.log();

while(true){
    let perg5 = prompt(`Devo ajudá-los? Sim ou Não? `).toUpperCase();
    console.log();
    if (perg5 == 'SIM' || perg5 == 'S' || perg5 == 'NAO' || perg5 == 'N' ) {
        if (perg5 == 'SIM' || perg5 == 'S') {
            status.carisma += 10
            console.log('Escolha inteligente, essa Guilda tem muita influência e pode vir a ajudar no futuro.');
            console.log();
            tempo(hour += 00, min +=40);
            console.log(status)
            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
            break;
        } 
        else {
            status.carisma -= 15
            console.log('Martius está tão desesperado que não aceita Não como resposta, ele ameaça me prender caso não ajude.');
            status.vida -= 3
            console.log();
            tempo(hour += 01, min +=00);
            console.log(status)
            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
            break;
        }
    } 
    else {
        console.log(`Você precisa escolher entre Sim ou Não`);
    }
}

console.log();

console.log(`O chefe me leva até a biblioteca da sede e me explica que preciso decifrar o código o 
mais rápido possível porque a barragem que protege a cidade está em ruínas e pode destruir tudo quando se romper,
desde então eles procuram pela resposta que está em um pergaminho escrito em uma língua desconhecida.
Martius deixa a minha disposição todos os livros escritos na Língua Antiga para me ajudar.`);

console.log();

for(let cont = 0; cont < livros; cont++){
    console.log('Ainda não encontrei as palavras certas para decifrar o código...');
    console.log('Vou continuar procurando.');
    console.log('...PESQUISANDO...');
    console.log();
    status.fome -= 1;
    tempo(hour += 01, min +=30);
    console.log(status)
    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
}

console.log(`Foram necessários ${livros} livros até que conseguisse decifrar a mensagem do código.`)
console.log(`
╔════════════════════════════╗
║ A RESPOSTA PARA O PROBLEMA ║
║   QUE DESTRÓI A CIDADE É   ║
║ PROCURAR OS JOTUNS E PEDIR ║
║  A ELES QUE USEM SEU PODER ║
║  PARA CONGELAR TODA A ÁGUA ║
║  DA BARRAGEM E PROTEGER A  ║
║ TODOS, EM TROCA, OFEREÇAM  ║
║ MORADIA E DEEM LIBERDADE A ║
║ TODOS, POIS FORAM EXILADOS ║
║ A MUITO TEMPO E QUASE FORAM║
║          EXTINTOS          ║
╚════════════════════════════╝`);

console.log();

console.log(`Assim que a mensagem é desvendada, aviso imediatamente o chefe Martius, que prontamente
me agradece pela ajuda e me oferece uma grande recompensa de $1000, além de estadia para o dia todo
e comida a vontade`);

status.cash += 1000;
status.fome += 30;
tempo(hour += 24, min +=00);
console.log(status)
console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
