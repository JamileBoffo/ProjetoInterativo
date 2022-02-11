const prompt = require('prompt-sync')();
console.clear();

//FUNÇÕES

function tempo (hora, minuto){
    hour = hour + hora
    min = min + minuto
    if (hour > 24){
        dia++
        hour -= 24
    }
    if (min >= 60){
        hour++
        min -= 60
    }
    console.log(`
    DIA ${dia}
    ${hour}:${min}`) 
}


// OBJETO STATUS

var status = {
    vida: 20,
    fome: 20,
    carisma : 0,
    furtividade: 0,
    cash: 100
}

//VARIAVEIS DE CONTROLE

let livros = Math.trunc(Math.random() * 10);
let dia = 1;
hour = 0,
min = 0

// HISTÓRIA

console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
tempo(06, 15)

console.log();

console.log(`Olá, meu nome é Theris, sou uma elfa desertora da terra de Lork,
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
    status.fome += 2;
    status.carisma += 5;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(05, 15);
    console.log(status);

    console.log();

    console.log(`Chegar na cidade foi rápido graças ao cavalo que me emprestaram.`);
    
} 
else if(perg1 == 2){
    console.log(`Acabo de perder uma oportunidade de conseguir uma carona e comida.`);
    status.fome -= 2;
    status.carisma -= 5;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(12, 30);
    console.log(status);

    console.log();

    console.log(`Indo a pé pela estrada principal acabo demorando mais do que o esperado para
    chegar na cidade mais próxima.`);
}
else{
    console.log(`Tenho que lembrar de olhar para o chão na próxima vez, os guerreiros não gostaram
    da minha tentativa de furto.`);
    status.vida -= 3;
    status.fome -= 2;
    status.furtividade +=10;

    console.log();

    console.log(`Indo a pé pela estrada principal acabo demorando mais do que o esperado para
    chegar na cidade mais próxima.`);

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(12, 30);
    console.log(status);

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
            status.carisma += 3;
            status.fome += 2;

            console.log();

            status.cash -= 20;
            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(20, 00);
            console.log(status);
            break;
        }
        else{
            console.log('Tem uma pequena clareira no bosque atrás da cidade, é ótimo para passar a noite.');
            status.fome -= 2;

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(20, 00);
            console.log(status);
            break;
        }
    } 
    else{
        console.log('Você precisa escolher entre Sim ou Não');
    }
    
}

console.log();

console.log(`No outro dia, arrumo minhas coisas e pego a estrada novamente rumo ao meu destino.
Logo a frente acabo caindo em uma dessas armadilhas para animais. O que farei agora?

1. Gritar por ajuda;
2. Tentar cortar a corda com a faca escondida na bota;
3. Fingir de morta e esperar que o caçador apareça.`);

console.log();

let perg3 = +prompt("Qual opção devo escolher? ");

console.log();

if (perg3 == 1){
    if(perg1 == 1 && status.carisma > 5){
        console.log(`A equipe de guerreiros que encontrei no dia anterior estava passando pelo local
     pouco tempo depois que cai na armadilha e me ajudaram a sair`);
        status.carisma += 5;

        console.log();

        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
        tempo(01, 10);
        console.log(status);

        console.log();
    }
    else{
        console.log(`A estrada que estou é mais utilizada por viajantes, e nem todos são generosos em ajudar 
        um estranho. Acabo ficando um tempo presa até conseguir ajuda.`);
        status.carisma += 1;
        status.fome -= 3;

        console.log();

        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
        tempo(03, 30);
        console.log(status);

        console.log();
    }
}
else if(perg3 == 2){
    console.log(`Ótima ideia, consigo me soltar bem rápido e logo ja posso voltar a caminhada.`)
    status.furtividade += 2;
    status.fome -= 1;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(00, 50);
    console.log(status);

    console.log();
}
else if(perg3 == 3){
    console.log(`O caçador estava vagando pela região conferindo as armadilhas, me ajudou a descer e
    me deu um coelho morto como pedido de desculpas`);
    status.fome += 2;
    status.carisma += 2;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(02, 30);
    console.log(status);

    console.log();
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
            status.carisma += 10;
            console.log('Diferente dos anões que tinham me saqueado na estrada uma vez, esses são mais amigáveis.');
            
            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
            tempo(03, 30);
            console.log(status);
            break;
        } else {
            status.fome -= 3
            console.log('Acabo economizando meu dinheiro mas perco o dobro do tempo para contornar a montanha');
            
            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(06, 40);
            console.log(status);
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
            status.carisma += 10;
            console.log('Escolha inteligente, essa Guilda tem muita influência e pode vir a ajudar no futuro.');
            
            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(00, 40);
            console.log(status);
            break;
        } 
        else {
            status.carisma -= 15
            console.log('Martius está tão desesperado que não aceita Não como resposta, ele ameaça me prender caso não ajude.');
            status.vida -= 3

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(01, 00);
            console.log(status);
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
    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(01, 30);
    console.log(status);
}
console.log();

console.log(`Foram necessários ${livros} livros até que conseguisse decifrar a mensagem do código.`);

console.log();

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

console.log();

console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
tempo(24, 00);
console.log(status);

console.log();

console.log(`Durante minha estadia em Dumnensis, descobri que a cidade que procuro se chama Hiden,
ela fica na Baía de Links, a cidade mais ao Sul de nosso país, ainda falta mais um pouco para chegar lá.

Finalmente consigo sair de Dumnensis e retornar a minha jornada.
A partir daqui as estradas ficam cada vez mais desertas pela proximidade da Floresta Abandonada,
lá vivem os povos mais selvagens já conhecidos como os Orcs, Ogros, Goblins, Tieflings e mais alguns outros.`);

console.log();

console.log(`Para o meu azar, logo a frente encontro um pequeno acampamento de Orcs, eles naturalmente 
são agressivos e não muito sociáveis. O que devo fazer?
1. Usar das minhas habilidades de furtividade para passar despercebida.
2. Tentar socializar mesmo sabendo dos riscos.
3. Dar a volta no acampamento para evitá-los.`);

console.log();

let perg6 = +prompt('Qual opção devo escolher? 1, 2 ou 3? ');

console.log();

if (perg6 == 1){
    if(perg6 == 1 && status.furtividade > 15){
        console.log(`Consegui passar por eles sem ser notada. Ufa!!`);
        status.furtividade += 10;
        status.fome -= 2;

        console.log();

        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
        tempo(01, 00);
        console.log(status);

        console.log();
    } 
    else{
        console.log(`Parece que não tenho habilidades furtivas o suficiente para conseguir passar sem
        ser notada. Os Orcs acabam me encontrando e por muito pouco acabo não levando um golpe de machado`);
        status.furtividade -= 3;
        status.vida -= 2;
        status.fome -= 2;

        console.log();

        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
        tempo(01, 50);
        console.log(status);

        console.log();
    }
}
else if(perg6 == 2){
    console.log(`Essa equipe de Orcs é considerada a mais amigável possível entre os que habitam
    na Floresta Abandonada, então me deixam passar sem nenhum ferimento.`);
    status.carisma += 5;
    status.fome -= 2;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(00, 50);
    console.log(status);

    console.log();
}
else if(perg3 == 3){
    console.log(`Não foi uma boa idéia contornar o acampamento, porque logo ao lado do acampamento de
    Orcs tinha outro acampamento de Goblins e acabo sendo ferida e roubada.`);
    status.cash += 100;
    status.vida += 2;
    status.fome -= 2;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(02, 30);
    console.log(status);

    console.log();
}

console.log(`Depois desse fatidico encontro, eu preciso ter mais atenção com os acampamentos que
encontro pelo caminho. As raças renegadas tem se multiplicado com muita rapidez, e não são muito 
receptivos com os demais.

Assim que consigo sair da Floresta Abandonada, decido parar e montar acampamento para descansar um pouco.
Agora preciso saber o que fazer:

1. Montar uma cabana (mas antes preciso achar algumas madeiras para erguer minha tenda);
2. Achar uma caverna para me abrigar da chuva;`);

console.log();

let perg7 = +prompt('Na sua opinião, qual a melhor opção? ');

console.log();

if (perg7 == 1 || perg7 || 2){
    if(perg7 == 1){
        let madeira = Math.trunc(Math.random() * 20);
        console.log(`Encontrei ${madeira} pedaços de madeira para fazer a cabana`);
        console.log('Por sorte durante a minha busca por madeira, encontrei algumas frutas, vão ser bem aproveitadas.');
        status.fome += 5;
    }
    else{
        console.log('Achar a caverna foi bem fácil, só espero não ser um alvo para os animais selvagens.');
        console.log('Até consegui caçar alguns coelhos que supriram a fome.');
        status.fome += 3;
    }
}
console.log();

console.log(`Hora de descansar um pouco e se recuperar para a caminhada de amanhã.
Agora falta muito pouco para chegar ao meu destino final, só falta atravessar o Lago Dash e estarei 
logo em Hiden.`);

console.log();

console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
tempo(24, 00);
console.log(status);

console.log();

console.log('Assim que acordei já arrumei todas as coisas e retornei a jornada...');

console.log();

console.log(`Depois de algum tempo andando, chego ao Lago Dash.
Tem alguns pescadores a margem do rio que podem me ajudar a atravessar.
Devo pedir ajuda?`);

while(true){
    let perg8 = prompt('Sim ou Não? ').toUpperCase();

    console.log();

    if(perg8 == 'SIM' || perg8 == 'S' || perg8 == 'NAO' || perg8 == 'N'){

        if (perg8 == 'SIM' || perg8 == 'S'){

            console.log(`O pescador até pode me ajudar, mas por uma certa quantia ($200)`)
            let perg = prompt('Devo aceitar mesmo assim? Sim ou Não?').toUpperCase()

            console.log();

            if(perg == 'SIM' || perg == 'S' ){
                console.log('É um investimento válido para a etapa da jornada em que estou.')
                status.fome -= 2;
                status.carisma += 3;
                status.cash -= 200;

                console.log();

                console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
                tempo(12, 00);
                console.log(status);
                break;
            }    
            else{
                console.log('O valor é muito alto para a atravessia, prefiro tentar atravessar sozinha');
                status.fome -= 2;
                
                console.log();

                console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
                tempo(18, 00);
                console.log(status);
                break;
            }
        }
        else{
            console.log('Tenho certeza que vi um bote abandonado e levemente quebrado em um lado do Lago, pode me ser útil');
            status.fome -= 2;

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(20, 00);
            console.log(status);
            break;
        }
    } 
    else{
        console.log('Você precisa escolher entre Sim ou Não');
    }
    
}

console.log();

console.log('Consegui atravessar o Lago, agora estou cada vez mais perto de chegar a cidade de Hiden.');
console.log(`Estou com altas expectativas sobre essa cidade, afinal, é o único lugar em que posso realmente
viver em paz e tranquilidade depois de ter sido acusada de um crime que não cometi.`);

console.log();

console.log(`Já posso avistar os portões da cidade, é esplendorosa, bem grande, e mesmo de longe já posso
perceber a diversidade de raças e povos que habitam nela.

De repente, sou parada por algumas crianças na estrada, são Tieflings
Não é comum vê-los fora da Floresta Abandonada, mas também, não é estranho estarem em Hiden.
As crianças me pedem ajuda para apanhar algumas frutas de uma árvore alta...`);

console.log();

while(true){
    let perg9 = prompt('Melhor ajudar? Sim ou Não? ').toUpperCase();

    console.log();

    if(perg9 == 'SIM' || perg9 == 'S' || perg9 == 'NAO' || perg9 == 'N'){

        if (perg9 == 'SIM' || perg9 == 'S'){
            console.log(`Acreditei que a árvore era grande somente para as crianças, mas é realmente alta para mim também.
            Acho melhor construir uma escada para me ajudar.`);
            let madeira = 12;
            for(let i = 0; i < madeira; i++){
                console.log(`Achei uma vareta boa o suficiente... Vou continuar procurando`);

                console.log();

                console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
                tempo(00, 10);
                console.log(status);

                console.log();
            }
            console.log(`Consegui construir uma escada grande o suficiente para atingir as frutas
            As crianças ficam muito felizes e até compartilham algumas frutas comigo.`);
            status.fome += 4;
            status.furtividade +=5;
            status.carisma += 3;

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(02, 00);
            console.log(status);
            break;
        }   
        else{
            console.log(`As crianças realmente precisavam daquelas frutas, estavam com fome.
            Ajudo com algumas moedas para que não morram de fome. 
            Espero que outras pessoas possam ajudá-las`);
            status.cash -= 100
            status.fome -= 2;

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(00, 40);
            console.log(status);
            break;
        }
    } 
    else{
        console.log('Você precisa escolher entre Sim ou Não');
    }
    
}

console.log();

console.log(`Finalmente, depois dessa longa jornada desde que saí das terras de Lork,
encontrei o lugar seguro para mim no mundo. 

Chegando na cidade, sou parada pelos guardas, informo a eles minhas condições e intenções
nesse lugar, eles pedem que eu me apresente ao Rei junto aos futuros moradores e assim eu faço.

O palácio é majestoso e o Rei Illias é muito generoso, acolhe todos aqueles que se apresentam a ele.
Somos encaminhados até o responsável pela realocação dos recém chegados e temos a oportunidade
de escolher uma casa para si.

Agora tenho minha casa em uma nova cidade.
Muito obrigado meu(minha) amigo(a), por ter me acompanhado nessa jornada, era muito solitário 
antes de você aparecer.`);

console.log();

console.log('FIM');