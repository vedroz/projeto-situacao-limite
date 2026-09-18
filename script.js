console.log("Olá!");

const cartas = [
    {
        codigo: "1",
        pergunta: "O que você faria por um milhão de dólares?",
        resposta_A: "A. Passar uma noite de amor com um(a) desconhecido(a)",
        resposta_B: "B. Posar nu(a) para uma revista",
        resposta_C: "C. Fazer um strip-tease total numa famosa casa noturna",
        resposta_D: "D. Fazer uma apresentação de sexo explícito com seu(sua) namorado(a) numa festinha em um motel"
    },
    {
        codigo: "2",
        pergunta: "Qual a melhor música para a hora do amor?",
        resposta_A: "A. Romântica, internacional",
        resposta_B: "B. MPB, romântica",
        resposta_C: "C. Instrumental",
        resposta_D: "D. Ritmo quente, acelerado"
    },
    {
        codigo: "3",
        pergunta: "Qual a melhor despedida de solteiro para um noivo?",
        resposta_A: "A. Uma noite bebendo e contando piadas de sacanagem com os amigos para rir e relaxar",
        resposta_B: "B. Uma noite assistindo a strip-teases totais numa casa noturna para se excitar com outras",
        resposta_C: "C. Transar com outra(s) mulher(es) para não fazê-lo depois do casamento",
        resposta_D: "D. Transar com a própria noiva para já ir esquentando"
    },
    {
        codigo: "4",
        pergunta: "O que você pensa de um homem casado que mantém relações extra-conjugais esporádicas?",
        resposta_A: "A. Ele está procurando um pouco de emoção e variedade",
        resposta_B: "B. Ele deveria ser sincero consigo mesmo e escolher entre as amantes ou a esposa",
        resposta_C: "C. Não dá mesmo para resistir quando a atração é muito forte",
        resposta_D: "D. Ele não ama sua mulher e deveria deixá-la"
    },
    {
        codigo: "5",
        pergunta: "Para você, o que é o sexo sem amor?",
        resposta_A: "A. Opção de lazer",
        resposta_B: "B. Impulso irresistível",
        resposta_C: "C. Desrespeito ao próprio corpo",
        resposta_D: "D. Busca de conhecimento sobre sua própria sexualidade"
    },
    {
        codigo: "6",
        pergunta: "O que um homem não deve dizer para sua mulher?",
        resposta_A: "A. Que ele fica excitado ao ver fotos de mulheres nuas",
        resposta_B: "B. Que ele já sonhou que estava transando com outras mulheres",
        resposta_C: "C. Que ela deveria se esforçar para agradá-lo mais na cama",
        resposta_D: "D. Que ele gosta de se masturbar"
    },
    {
        codigo: "7",
        pergunta: "Qual a melhor luz na hora do amor?",
        resposta_A: "A. Tudo bem iluminado",
        resposta_B: "B. A meia luz",
        resposta_C: "C. Bem escuro",
        resposta_D: "D. Luz vermelha"
    },
    {
        codigo: "8",
        pergunta: "Qual a melhor despedida de solteira para uma noiva?",
        resposta_A: "A. Uma noite num clube de mulheres",
        resposta_B: "B. Uma festinha com as amigas e um stripper (para um strip-tease total e particular)",
        resposta_C: "C. Transar com um homem bem diferente de seu noivo",
        resposta_D: "D. Transar com o próprio noivo"
    },
    {
        codigo: "9",
        pergunta: "Seu(sua) namorado(a) quer temperar o namoro com um pouco de fantasia. Que papéis você preferiria representar?",
        resposta_A: "A. A professora e o aluno",
        resposta_B: "B. O chefe e a secretária",
        resposta_C: "C. O sultão e sua predileta",
        resposta_D: "D. A juíza e o réu"
    },
    {
        codigo: "10",
        pergunta: "O que você não toparia de jeito nenhum?",
        resposta_A: "A. Troca de casais",
        resposta_B: "B. Relação homossexual",
        resposta_C: "C. Sexo oral",
        resposta_D: "D. Transar por dinheiro"
    },
    {
        codigo: "11",
        pergunta: "O que o(a) faz perder a vontade?",
        resposta_A: "A. Discutir com ele(a)",
        resposta_B: "B. O cansaço",
        resposta_C: "C. A falta de interesse dele(a)",
        resposta_D: "D. Um lugar pouco agradável"
    },
    {
        codigo: "12",
        pergunta: "Qual é o homem mais irresistível?",
        resposta_A: "A. O inteligente",
        resposta_B: "B. O bem-humorado",
        resposta_C: "C. O bom de cama",
        resposta_D: "D. O cavalheiro"
    },
    {
        codigo: "13",
        pergunta: "Você fica mais excitado(a) vendo o quê?",
        resposta_A: "A. Um vídeo de sexo explícito",
        resposta_B: "B. Um strip-tease total em uma casa noturna",
        resposta_C: "C. Uma revista de homem (ou mulher) sem roupas",
        resposta_D: "D. Um manual com fotos e desenhos de posições para se fazer amor"
    },
    {
        codigo: "14",
        pergunta: "Ao sair de uma sex-shop, você dá de cara com um vizinho, que andava na calçada. O que você diz?",
        resposta_A: "A. Oi, tudo bem? Você trabalha por aqui?",
        resposta_B: "B. Sabe que eu entre nessa loja pensando que era uma vídeo locadora...",
        resposta_C: "C. Eu sempre tive curiosidade de entrar numa loja dessas...",
        resposta_D: "D. Você também veio ver as novidades?"
    },
    {
        codigo: "15",
        pergunta: "O que é mais importante para você?",
        resposta_A: "A. Atingir o clímax",
        resposta_B: "B. Ver seu(sua) parceiro(a) atingir o clímax",
        resposta_C: "C. Ter e dar prazer, atingindo ou não o clímax",
        resposta_D: "D. Atingir o clímax no mesmo momento em que seu(sua) parceiro(a)"
    },
    {
        codigo: "16",
        pergunta: "Qual o pior tabu?",
        resposta_A: "A. Virgindade",
        resposta_B: "B. Homossexualidade",
        resposta_C: "C. Sexo anal",
        resposta_D: "D. Sexo oral"
    },
    {
        codigo: "17",
        pergunta: "Qual a melhor amante?",
        resposta_A: "A. A com mais folêgo",
        resposta_B: "B. A mais espontânea",
        resposta_C: "C. A mais ousada",
        resposta_D: "D. A que mais procura agradar"
    },
    {
        codigo: "18",
        pergunta: "Em que caso ainda vale a pena ser ''filial''?",
        resposta_A: "A. Temporariamente, enquanto ele(a) não rompe definitivamente com a ''matriz''.",
        resposta_B: "B. Para tirar umas casquinhas, enquanto você decide se ele(a) é mesmo o que você quer.",
        resposta_C: "C.",
        resposta_D: ""
    },
    {
        codigo: "19",
        pergunta: "Que característica seu namorado(a) mais aprecia em você?",
        resposta_A: "A. A ausência de preconceitos",
        resposta_B: "B. A criatividade no amor",
        resposta_C: "C. O romantismo à moda antiga",
        resposta_D: "D. A fidelidade"
    },
    {
        codigo: "20",
        pergunta: "Para você, o que é o sexo antes do casamento?",
        resposta_A: "A. Uma tentação a ser evitade",
        resposta_B: "B. Motivo para marcar o casamento para o mais cedo possível",
        resposta_C: "C. Natural, quando os dois se amam",
        resposta_D: "D. Imprescindível, para ver se os dois combinam sexualmente"
    },
    {
        codigo: "21",
        pergunta: "Onde você gostaria de fazer amor?",
        resposta_A: "A. Na cama de seus pais ou sogros",
        resposta_B: "B. Na portaria do seu prédio",
        resposta_C: "C. No seu local de trabalho (ou estudo)",
        resposta_D: "D. Numa discoteca"
    },
    {
        codigo: "22",
        pergunta: "Como você encara seus(suas) ex-namorados(as)",
        resposta_A: "A. Boas lembranças para os momentos de solidão e depressão",
        resposta_B: "B. Coisas do passado, que você nem lembra mais",
        resposta_C: "C. Experiências importantes para você ser o que é hoje",
        resposta_D: "D. Tentativas frustradas de encontrar um grande amor"
    },
    {
        codigo: "23",
        pergunta: "O que você não tolera numa relação amorosa?",
        resposta_A: "A. Mentira",
        resposta_B: "B. Agressão física",
        resposta_C: "C. Agressão moral",
        resposta_D: "D. Indiferença"
    },
    {
        codigo: "24",
        pergunta: "O que você pensa de uma mulher que quer casar virgem, mas mantém relações íntimas com o noivo (excetuando apenas ''os finalmentes'')?",
        resposta_A: "A. É insegura demais para romper realmente com os tabus sociais",
        resposta_B: "B. É hipócrita, como convém a uma sociedade machista",
        resposta_C: "C. É realista e faz o certo para manter o noivo",
        resposta_D: "D. É emocionalmente imatura e precisa de apoio psicológico"
    },
    {
        codigo: "25",
        pergunta: "O que você gostaria de ver (ou rever) em uma bola de cristal?",
        resposta_A: "A. Sua noite de núpcias",
        resposta_B: "B. Sua primeira vez",
        resposta_C: "C. Sua próxima vez",
        resposta_D: "D. Sua noite mais quente"
    },
    {
        codigo: "26",
        pergunta: "Que ''fruto proibido'' mais o atrai?",
        resposta_A: "A. O exibicionismo",
        resposta_B: "B. O voyerismo",
        resposta_C: "C. O homossexualismo",
        resposta_D: "D. A infidelidade"
    },
    {
        codigo: "27",
        pergunta: "Sua filha de 14 anos faz-lhe perguntas sobre sexo oral. O que você pensa primeiro?",
        resposta_A: "A. Que bom que ela confia em mim!",
        resposta_B: "B. Ela é muito nova pra essas coisas.",
        resposta_C: "C. Será que ela quer colocar em prática?",
        resposta_D: "D. Seu namorado deve estar-lhe fazendo propostas indecentes."
    },
    {
        codigo: "28",
        pergunta: "Qual a melhor roupa que ela pode usar para o amor?",
        resposta_A: "A. Uma camisola florida de algodão",
        resposta_B: "B. Lingerie vermelha bem sexy",
        resposta_C: "C. Camisola preta, longa, de seda",
        resposta_D: "D. Roupão atoalhado sem nada por baixo"
    },
    {
        codigo: "29",
        pergunta: "Como deve ser a educação sexual de uma menina e de um menino?",
        resposta_A: "A. Exatamente a mesma",
        resposta_B: "B. Pode-se ser mais liberal com o menino, já que ele não engravida",
        resposta_C: "C. As mesmas informações, mas com abordagens adequadas a cada sexo",
        resposta_D: "D. Depende de cada criança, sem generalizações"
    },
    {
        codigo: "30",
        pergunta: "O que você pensa dos antigos amores de seu(sua) namorado(a)",
        resposta_A: "A. São coisas do passado",
        resposta_B: "B. Tudo bem, desde que não cheguem perto",
        resposta_C: "C. É melhor nem pensar, senão viram tormento",
        resposta_D: "D. Experiências importantes para meu(minha) namorado(a) ser o que é hoje"
    },
    {
        codigo: "31",
        pergunta: "Que fantasia mais o(a) excita, embora você nunca tivesse a coragem de realizá-la?",
        resposta_A: "A. Participar de brincadeiras entre dois casais",
        resposta_B: "B. Fazer um strip-tease em uma casa noturna",
        resposta_C: "C. Ficar na esquina fingindo-se de profissional do sexo até seu(sua) namorado(a) chegar de carro para ser seu(sua) ''cliente''",
        resposta_D: "D. Dar uma festinha ''do cabide'', em que todos penduram suas roupas ao chegarem"
    },
    {
        codigo: "32",
        pergunta: "Como é a primeira vez ideal?",
        resposta_A: "A. Com alguém que você ama e que o(a) ama, em qualquer idade",
        resposta_B: "B. Depois de casado(a)",
        resposta_C: "C. Quando você está maduro(a) emocionalmente",
        resposta_D: "D. Na adolescência, quando se começa a descobrir a sexualidade"
    },
    {
        codigo: "33",
        pergunta: "O que você (ou sua namorada) faz para ficar mais sexy?",
        resposta_A: "A. Aumenta o decote",
        resposta_B: "B. Diminui o comprimento da saia",
        resposta_C: "C. Explora as transparências",
        resposta_D: "D. Usa um batom bem vermelho"
    },
    {
        codigo: "34",
        pergunta: "O que você mais teme?",
        resposta_A: "A. Ficar impotente (ou frígida)",
        resposta_B: "B. Tornar-se escravo(a) do sexo",
        resposta_C: "C. Não ser mais desejado(a)",
        resposta_D: "D. Pegar uma doença sexualmente transmissível"
    },
    {
        codigo: "35",
        pergunta: "Onde você gostaria de fazer amor?",
        resposta_A: "A. No meio de um baile de carnaval",
        resposta_B: "B. Num elevador",
        resposta_C: "C. No banheiro do avião",
        resposta_D: "D. No escurinho do cinema"
    },
    {
        codigo: "36",
        pergunta: "Qual desses casais você escolheria para estrelar um filme erótico dirigido por você?",
        resposta_A: "A. Superman e Louis Lane",
        resposta_B: "B. Batman e a Mulher Gato",
        resposta_C: "C. He-man e She-ha",
        resposta_D: "D. Tarzan e Jane"
    },
    {
        codigo: "37",
        pergunta: "Até onde você chega na primeira noite?",
        resposta_A: "A. Beijos e abraços comportados",
        resposta_B: "B. Beijos e abraços, com direito a ''mão boba''",
        resposta_C: "C. Todas as preliminares, mas sem ir até o fim",
        resposta_D: "D. Tudo o que rolar, sem regras fixas"
    },
    {
        codigo: "38",
        pergunta: "Que carícia deixa uma mulher mais acesa?",
        resposta_A: "A. Beijar e morder sua nuca",
        resposta_B: "B. Acariciar seus seios",
        resposta_C: "C. Beliscar seu bumbum",
        resposta_D: "D. Acariciar suas coxas"
    },
    {
        codigo: "39",
        pergunta: "Qual dessas é a melhor bebida para iniciar uma noite de amor?",
        resposta_A: "A. Cerveja",
        resposta_B: "B. Vinho",
        resposta_C: "C. Whisky",
        resposta_D: "D. Licor"
    },
    {
        codigo: "40",
        pergunta: "Para você, o que é transar de camisinha?",
        resposta_A: "A. Um mal necessário nos tempos de hoje",
        resposta_B: "B. Medida de precaução, mas só em caso de dúvida",
        resposta_C: "C. Uma medida para evitar doenças e gravidez, não necessariamente desagradável",
        resposta_D: "D. Bom para os outros, mas totalmente fora de seus planos"
    },
    {
        codigo: "41",
        pergunta: "O que você prefere ouvir na hora H?",
        resposta_A: "A. Você me deixa louco(a)",
        resposta_B: "B. Eu te amo",
        resposta_C: "C. Eu sou todo(a) teu(tua)",
        resposta_D: "D. Você é lindo(a)"
    },
    {
        codigo: "42",
        pergunta: "Um homem que só quer casa com mulher virgem é o quê?",
        resposta_A: "A. Inseguro",
        resposta_B: "B. Precavido",
        resposta_C: "C. Ultrapassado",
        resposta_D: "D. Inteligente"
    },
    {
        codigo: "43",
        pergunta: "O quê você pensa de alguém que só transa por amor?",
        resposta_A: "A. O último romântico",
        resposta_B: "B. Uma pessoa que castra seus impulsos e se priva de fortes emoções",
        resposta_C: "C. Uma opção de vida invejável",
        resposta_D: "D. Alguém que um dia ainda vai ''liberar geral'' e viver o que não viveu"
    },
    {
        codigo: "44",
        pergunta: "Onde é mais gostoso fazer amor?",
        resposta_A: "A. Debaixo do chuveiro",
        resposta_B: "B. Na piscina",
        resposta_C: "C. Numa cama king size",
        resposta_D: "D. Na hidromassagem"
    },
    {
        codigo: "45",
        pergunta: "O que mais o(a) agrada depois do amor?",
        resposta_A: "A. Abraçar e ser abraçado, em silêncio",
        resposta_B: "B. Olhar nos olhos e dizer o que sente",
        resposta_C: "C. Fumar e relaxar",
        resposta_D: "D. Relaxar, fechar os olhos e dormir"
    },
    {
        codigo: "46",
        pergunta: "Qual destas situações é mais excitante para fazer amor?",
        resposta_A: "A. Correndo perigo de alguém ver",
        resposta_B: "B. Com alguém vendo",
        resposta_C: "C. Vendo filmes ou revistas eróticas",
        resposta_D: "D. Com muita privacidade"
    },
    {
        codigo: "47",
        pergunta: "Se você fosse experimentar ''algo'' diferente em grupo, o que preferia",
        resposta_A: "A. Um homem e duas mulheres (já incluindo você)",
        resposta_B: "B. Uma mulher e dois homens (já incluindo você)",
        resposta_C: "C. Você, seu(sua) namorado(a) e outro casal",
        resposta_D: "D. Qualquer coisa, desde que sem o(a) seu(sua) namorado(a)"
    },
    {
        codigo: "48",
        pergunta: "O que o(a) levaria a perdoar uma infidelidade?",
        resposta_A: "A. Amar demais seu(sua) namorado(a)",
        resposta_B: "B. A promessa de que insto não se repetiria",
        resposta_C: "C. Compreender os verdadeiros motivos que levaram à infidelidade",
        resposta_D: "D. Ter o direito de dar o troco, pelo menos uma vez"
    },
    {
        codigo: "49",
        pergunta: "Sua filha de 16 anos lhe diz que não é mais virgem. Qual é sua primeira preocupação?",
        resposta_A: "A. Com quem foi?",
        resposta_B: "B. Será que ela está tomando as devidas precauções?",
        resposta_C: "C. Como ela está se sentindo como mulher?",
        resposta_D: "D. Será que ela não vai ser arrepender mais tarde?"
    },
    {
        codigo: "50",
        pergunta: "No amor, você age como?",
        resposta_A: "A. Uma pantera selvagem",
        resposta_B: "B. Um gatinho manhoso",
        resposta_C: "C. Um pavão vaidoso",
        resposta_D: "D. O zoológico todo"
    },
    {
        codigo: "51",
        pergunta: "O que o(a) deixa mais aceso(a)?",
        resposta_A: "A. Uma calcinha ou cueca preta",
        resposta_B: "B. Nada por baixo",
        resposta_C: "C. Short bem curtinho",
        resposta_D: "D. Decote bem profundo ou camisa desabotoada"
    },
    {
        codigo: "52",
        pergunta: "Qual é a mulher mais irresistível?",
        resposta_A: "A. A inteligente",
        resposta_B: "B. A rica",
        resposta_C: "C. A linda",
        resposta_D: "D. A boa de cama"
    },
    {
        codigo: "53",
        pergunta: "O que não pode faltar numa noite de amor?",
        resposta_A: "A. Preliminares prolongadas",
        resposta_B: "B. A segunda, pelo menos",
        resposta_C: "C. Palavras picantes",
        resposta_D: "D. Sexo oral"
    },
    {
        codigo: "54",
        pergunta: "Entre você e seu(sua) namorado(a), quem dá a partida?",
        resposta_A: "A. Ele, na maioria das vezes",
        resposta_B: "B. Ela, na maioria das vezes",
        resposta_C: "C. Ele ou ela e, às vezes, os dois",
        resposta_D: "D. Sempre os dois ao mesmo tempo"
    },
    {
        codigo: "55",
        pergunta: "Qual desses filmes você gostaria de estrelar?",
        resposta_A: "A. 9 1/2 semanas de amor",
        resposta_B: "B. Instinto Selvagem",
        resposta_C: "C. Romeu e Julieta",
        resposta_D: "D. A Lagoa Azul"
    },
    {
        codigo: "56",
        pergunta: "Qual é o melhor amante?",
        resposta_A: "A. O de maior fôlego",
        resposta_B: "B. O mais criativo",
        resposta_C: "C. O menos apressado",
        resposta_D: "D. O mais atencioso"
    },
    {
        codigo: "57",
        pergunta: "O que mais o(a) incomoda?",
        resposta_A: "A. Pensar que pode ser traído",
        resposta_B: "B. Lembrar dos antigos amores de seu(sua) amado(a)",
        resposta_C: "C. Lembrar de antigos amores seus que já o(a) traíram",
        resposta_D: "D. Pensar que pode perdê-lo(a) para sempre"
    },
    {
        codigo: "58",
        pergunta: "Qual a melhor frequência para se fazer amor?",
        resposta_A: "A. Todos os dias",
        resposta_B: "B. Uma vez por semana",
        resposta_C: "C. Três vezes por semana",
        resposta_D: "D. Mais de uma vez por dia"
    },
    {
        codigo: "59",
        pergunta: "Que fantasia você (ou sua namorada) usaria para seduzi-lo?",
        resposta_A: "A. Odalisca",
        resposta_B: "B. Gueixa",
        resposta_C: "C. Cigana",
        resposta_D: "D. Camponesa"
    },
    {
        codigo: "60",
        pergunta: "Você encontra uma camisinha na bolsa de sua filha de 16 anos. O que você pensa primeiro?",
        resposta_A: "A. Minha filha não é mais virgem",
        resposta_B: "B. Orientei bem a minha filha",
        resposta_C: "C. Será que ela já usou ou ainda pretende usar uma camisinha?",
        resposta_D: "D. Por que ela não me contou antes?"
    },
    {
        codigo: "61",
        pergunta: "O que você pensa de um(a) profissional do sexo?",
        resposta_A: "A. Tem uma profissão como outra qualquer",
        resposta_B: "B. Não teve outras chances profissionais",
        resposta_C: "C. Não tem vergonha na cara",
        resposta_D: "D. Deve ser uma pessoa infeliz"
    },
    {
        codigo: "62",
        pergunta: "Ele(a) está muito mais carinhoso(a) com você. O que você pensa?",
        resposta_A: "A. Ele(a) aprontou alguma e está com a consciência pesada.",
        resposta_B: "B. Ele(a) estpa com medo de me perder.",
        resposta_C: "C. É só uma boa fase. Depois, volta tudo ao normal.",
        resposta_D: "D. Ele(a) quer me pedir alguma coisa."
    },
    {
        codigo: "63",
        pergunta: "Qual é o melhor motel?",
        resposta_A: "A. O mais discreto",
        resposta_B: "B. O mais perto",
        resposta_C: "C. O que está na moda",
        resposta_D: "D. O que está em promoção"
    },
    {
        codigo: "64",
        pergunta: "O que uma mulher não deve dizer para seu marido?",
        resposta_A: "A. Que ele não foi o primeiro",
        resposta_B: "B. Que ela teve sonhos eróticos com seu cunhado",
        resposta_C: "C. Que ela fica escitada ao ver fotso de mulheres nuas",
        resposta_D: "D. Que ela gostaria de ser mais ativa na cama"
    },
    {
        codigo: "65",
        pergunta: "Com quem você jamais teria um caso?",
        resposta_A: "A. Uma pessoa casada",
        resposta_B: "B. Seu(sua) chefe",
        resposta_C: "C. Seu(sua) subordinado(a)",
        resposta_D: "D. Seu(sua) vizinho(a)"
    },
    {
        codigo: "66",
        pergunta: "O que mais o(a) incomoda?",
        resposta_A: "A. Sentir ciúme dele(a)",
        resposta_B: "B. Quando ele(a) sente ciúme de você",
        resposta_C: "C. Quando não há ciúme entre vocês",
        resposta_D: "D. Quando você percebe que alguém está sentindo ciúme dele(a)"
    },
    {
        codigo: "67",
        pergunta: "Seu filho de 15 anos faz-lhe perguntas sobre masturbação. O que você lhe diz sobre o assunto?",
        resposta_A: "A. É um tipo de sexo seguro para a idade dele",
        resposta_B: "B. É uma forma de ele descobrir seu próprio corpo",
        resposta_C: "C. É uma aticidade egoísta, em que se busca apenas o próprio prazer",
        resposta_D: "D. Sem mulher, é o único jeito para ''aliviar'' o desejo"
    },
    {
        codigo: "68",
        pergunta: "Você surpreende seu irmão de 18 anos transando com a namorada. O que você faz?",
        resposta_A: "A. Conta para seus pais",
        resposta_B: "B. Finge que não viu nada",
        resposta_C: "C. Procura seu irmão para saber dos detalhes",
        resposta_D: "D. Conta para os pais da namorada"
    },
    {
        codigo: "69",
        pergunta: "Qual é a pior companhia?",
        resposta_A: "A. Um bêbado contando piadas",
        resposta_B: "B. Um deprimido se lamentando",
        resposta_C: "C. Um mentiroso contando vantagem",
        resposta_D: "D. Um(a) chefe asseddiando-o(a) sexualmente"
    },
    {
        codigo: "70",
        pergunta: "Qual a melhor roupa que ele pode usar para o amor?",
        resposta_A: "A. Um pijama de algodão bem macio",
        resposta_B: "B. Uma cueca samba-canção bem soltinha",
        resposta_C: "C. Uma cueca de lycra marcando tudo",
        resposta_D: "D. Roupão atoalhado sem nada por baixo"
    },
    {
        codigo: "71",
        pergunta: "Você chega em casa e encontra seu marido(sua mulher) na cama com outra pessoa. O que você faz?",
        resposta_A: "A. Sai do local, sem falar nada",
        resposta_B: "B. Xinga e agride fisicamente os adúlteros",
        resposta_C: "C. Pergunta a seu marido(sua mulher) o que está acontecendo ali",
        resposta_D: "D. Expulsa os dois de sua casa imediatamente"
    },
    {
        codigo: "72",
        pergunta: "Sua irmã mais nova lhe conta que não é mais virgem. O que você faz?",
        resposta_A: "A. Conta a novidade para sua mãe e pede-lhe segredo",
        resposta_B: "B. Aconselha sua irmã a se abrir com sua mãe",
        resposta_C: "C. Torna-se confidente de sua irmã e não conta nada para ninguém",
        resposta_D: "D. Guarda segredo e evita falar mais sobre o assunto"
    },
    {
        codigo: "73",
        pergunta: "Que fantasia você (ou seu namorado) usaria para seduzi-la?",
        resposta_A: "A. Marinheiro",
        resposta_B: "B. Cigano",
        resposta_C: "C. Zorro",
        resposta_D: "D. Sultão"
    },
    {
        codigo: "74",
        pergunta: "Qual a parte do corpo feminino(ou masculino) que mais o(a) atrai?",
        resposta_A: "A. Pernas",
        resposta_B: "B. Bumbum",
        resposta_C: "C. Peito ou seios",
        resposta_D: "D. Boca"
    },
    {
        codigo: "75",
        pergunta: "Qual é a cantada mais eficiente?",
        resposta_A: "A. Cantar ao pé do ouvido ''meu bem, você me dá água na boca''",
        resposta_B: "B. Convidar para ouir uns CDs importados no seu apartamento",
        resposta_C: "C. Flores e bombons suíços",
        resposta_D: "D. Um anúncio apaixonado no jornal"
    },
    {
        codigo: "76",
        pergunta: "Qual foi seu encontro sexual (ou amoroso) mais inesquecível?",
        resposta_A: "A. O primeiro de toda a minha vida",
        resposta_B: "B. O mais recente",
        resposta_C: "C. O primeiro com o namorado(a) atual",
        resposta_D: "D. Ainda está para acontecer"
    },
    {
        codigo: "77",
        pergunta: "Que carícia deixa um homem mais aceso?",
        resposta_A: "A. Beijar sua nuca",
        resposta_B: "B. Passar a mão nas suas coxas",
        resposta_C: "C. Mordiscar os orelhas",
        resposta_D: "D. Pentear seus cabelos com os dedos"
    },
    {
        codigo: "78",
        pergunta: "Que posição não pode faltar numa noite de amor?",
        resposta_A: "A. Papai e mamãe",
        resposta_B: "B. Ela por cima",
        resposta_C: "C. Em pé",
        resposta_D: "D. Deitados lado a lado"
    },
    {
        codigo: "79",
        pergunta: "O que você não se deve contar a ninguém?",
        resposta_A: "A. Seus fracassos sexuais",
        resposta_B: "B. Suas fantasias sexuais",
        resposta_C: "C. Suas dificuldades sexuais com seu(sua) atual parceiro(a)",
        resposta_D: "D. As qualidades sexuais de seu(sua) atual parceiro(a)"
    },
    {
        codigo: "80",
        pergunta: "O que mais o(a) aborrece?",
        resposta_A: "A. Quando ele(a) não quer e você está louco(a) para",
        resposta_B: "B. Quando vocÊ não está nem aí e ele(a) está querendo",
        resposta_C: "C. Quando nenhum dos dois está querendo",
        resposta_D: "D. Quando vocês não fazem mais nada, a não ser ''aquilo''"
    },
    {
        codigo: "81",
        pergunta: "Seu(sua) namorado(a) quer temperar o namoro com um pouco de fantasia. Que papéis você preferiria rerpesentar?",
        resposta_A: "A. O fotógrafo e a modelo",
        resposta_B: "B. O strípper e a fã",
        resposta_C: "C. O motorista de táxi e a passageira",
        resposta_D: "D. O executivo e a massagista"
    },
    {
        codigo: "82",
        pergunta: "Com quem você gostaria de passar uma noite de amor (para mulheres/homens)?",
        resposta_A: "A. Antônio Fagundes/ Maitê Proença",
        resposta_B: "B. Richard Gere/ Kim Basigner",
        resposta_C: "C. Paulo Betti/ Vera Fischer",
        resposta_D: "D. Tom Cruise/ Demi Moore"
    },
    {
        codigo: "83",
        pergunta: "O que você pensa de uma mulher de 45 com um cara de 25?",
        resposta_A: "A. Ela não se enxerga",
        resposta_B: "B. Ele está afim de se dar bem",
        resposta_C: "C. Eles pertencem a mundos diferentes",
        resposta_D: "D. No amor, a idade não conta"
    }
];

console.log(cartas);

const elementoCarta = document.getElementById("carta");

elementoCarta.innerHTML = `
    <h2>${"Escolha uma carta!"}</h2>
`

function sortearCarta() {
    const indice_aleatorio = Math.floor(Math.random() * cartas.length);
    console.log(indice_aleatorio+1);
    const carta = cartas[indice_aleatorio];
    elementoCarta.innerHTML = `
        <h2>${"Pergunta #" + carta.codigo}</h2>
        <p>${carta.pergunta}</p>
        <p>${carta.resposta_A}</p>
        <p>${carta.resposta_B}</p>
        <p>${carta.resposta_C}</p>
        <p>${carta.resposta_D}</p>
    `;
}

const botao = document.getElementById("botao-sortear");
botao.addEventListener("click", sortearCarta);


const campoCodigo = document.getElementById("codigo");
const botaoBuscar = document.getElementById("botao-buscar");

function buscarCarta() {
    const carta = cartas.find(
        carta => carta.codigo === campoCodigo.value.trim().toUpperCase()
    );
    elementoCarta.innerHTML = `
    <h2>${"Pergunta #" + carta.codigo}</h2>
    <p>${carta.pergunta}</p>
    <p>${carta.resposta_A}</p>
    <p>${carta.resposta_B}</p>
    <p>${carta.resposta_C}</p>
    <p>${carta.resposta_D}</p>
`;
}

botaoBuscar.addEventListener("click", buscarCarta);