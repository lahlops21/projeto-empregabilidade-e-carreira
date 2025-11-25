const questions = [
    {
        text: "Seu aplicativo de música favorito para de funcionar. Qual sua primeira reação?",
        options: [
            { text: "Procuro saber se a empresa está 'fora do ar' ou se o problema é só comigo.", scores: { cloud: 2, infra: 2 } },
            { text: "Entro nas redes sociais para ver o que as pessoas estão achando disso.", scores: { ux: 3 } },
            { text: "Reparo se o visual do aplicativo parece 'quebrado' ou se botões sumiram.", scores: { frontend: 3 } },
            { text: "Tento lembrar se parou em um horário de pico que todo mundo usa.", scores: { data: 3 } },
            { text: "Me preocupo se é um ataque hacker ou se meus dados estão seguros.", scores: { security: 3 } }
        ]
    },
    {
        text: "Você está comprando um eletrônico novo. O que mais pesa na sua decisão?",
        options: [
            { text: "A ficha técnica completa: velocidade, memória, capacidade.", scores: { backend: 3 } },
            { text: "O design do produto e a beleza da embalagem.", scores: { frontend: 3, ux: 1 } },
            { text: "Gráficos que comparam qual é o mais rápido entre as marcas.", scores: { data: 3 } },
            { text: "Comentários de usuários dizendo que foi 'muito fácil de configurar e usar'.", scores: { ux: 3 } },
            { text: "As garantias de segurança, como leitor de digital ou criptografia.", scores: { security: 3 } },
            { text: "A qualidade das conexões (Wi-Fi, 5G) e a velocidade da internet.", scores: { infra: 3 } }
        ]
    },
    {
        text: "Em um trabalho em grupo, qual papel você naturalmente assume?",
        options: [
            { text: "O 'Arquiteto': Desenho a estrutura principal e como as partes se conectam.", scores: { backend: 3 } },
            { text: "O 'Apresentador': Garanto que a entrega final seja clara e bonita.", scores: { frontend: 3, ux: 1 } },
            { text: "O 'Otimizador': Procuro jeitos de fazer o time trabalhar mais rápido e com menos esforço.", scores: { cloud: 3 } },
            { text: "O 'Mediador': Garanto que o resultado final realmente atende ao que o professor pediu.", scores: { ux: 3 } },
            { text: "O 'Analista': Junto todas as fontes de pesquisa para encontrar a 'grande ideia'.", scores: { data: 3 } }
        ]
    },
    {
        text: "Se você fosse construir um carro, qual parte te daria mais orgulho?",
        options: [
            { text: "O motor: perfeitamente ajustado para máxima potência e eficiência.", scores: { backend: 3 } },
            { text: "A sensação de dirigir e a facilidade de usar os botões do painel.", scores: { ux: 3 } },
            { text: "A linha de montagem: totalmente automatizada, rápida e sem falhas.", scores: { cloud: 3 } },
            { text: "O computador de bordo, que analisa o consumo e prevê manutenção.", scores: { data: 3 } },
            { text: "O sistema de alarme e travas, para ser impossível de roubar.", scores: { security: 3 } },
            { text: "O sistema de GPS e a conexão 5G com outros carros.", scores: { infra: 3 } }
        ]
    },
    {
        text: "Qual tipo de problema você prefere resolver?",
        options: [
            { text: "Um quebra-cabeça lógico complexo, com muitas partes móveis.", scores: { backend: 3 } },
            { text: "Um processo manual e lento que poderia ser feito por uma máquina.", scores: { cloud: 3 } },
            { text: "Um mistério onde você precisa encontrar pistas em um mar de informações.", scores: { data: 3 } },
            { text: "Um aplicativo confuso que ninguém sabe como usar direito.", scores: { ux: 3 } },
            { text: "Um rascunho feio que precisa ser transformado em algo bonito.", scores: { frontend: 3 } },
            { text: "Descobrir como um mágico fez o truque ou como um ladrão entrou no banco.", scores: { security: 3 } }
        ]
    },
    {
        text: "Você está organizando seu espaço de trabalho. O que é prioridade?",
        options: [
            { text: "A estética: cores, iluminação e um arranjo visualmente agradável.", scores: { frontend: 3, ux: 1 } },
            { text: "A eficiência: tudo no lugar certo, acesso fácil, sem bagunça.", scores: { backend: 2, cloud: 2 } },
            { text: "O conforto: uma cadeira ergonômica e tudo ajustado para *meu* uso.", scores: { ux: 3 } },
            { text: "A conexão: garantir que o Wi-Fi esteja rápido e que todos os cabos estejam certos.", scores: { infra: 3 } },
            { text: "A organização: meus arquivos e livros catalogados para eu achar tudo rápido.", scores: { data: 2, backend: 1 } }
        ]
    },
    {
        text: "Numa festa que você está ajudando a organizar, qual sua principal preocupação?",
        options: [
            { text: "Que a música e a iluminação criem o clima perfeito.", scores: { frontend: 2, ux: 1 } },
            { text: "Que a logística de bebida/comida funcione sem parar, mesmo se chegar mais gente.", scores: { cloud: 3 } },
            { text: "Que as pessoas estejam confortáveis e se sentindo incluídas.", scores: { ux: 3 } },
            { text: "Tentar adivinhar qual música vai fazer mais gente dançar, baseado no que tocou antes.", scores: { data: 3 } },
            { text: "Garantir que só os convidados entrem e que ninguém quebre nada.", scores: { security: 3 } },
            { text: "Verificar se o Wi-Fi está bom e se a caixa de som está bem conectada.", scores: { infra: 3 } }
        ]
    },
    {
        text: "Qual destas frases faz mais sentido para você?",
        options: [
            { text: "'A forma inspira a ação. A beleza importa.'", scores: { frontend: 3, ux: 1 } },
            { text: "'A função vem primeiro. A beleza é um bônus.'", scores: { backend: 3 } },
            { text: "'A experiência é tudo. Se for difícil, está errado.'", scores: { ux: 3 } },
            { text: "'A eficiência é a chave. Mais rápido é sempre melhor.'", scores: { cloud: 3 } },
            { text: "'A prova está nos números. O que não se mede, não se gerencia.'", scores: { data: 3 } },
            { text: "'Mais vale prevenir do que remediar.'", scores: { security: 3 } },
            { text: "'Uma corrente é tão forte quanto seu elo mais fraco.'", scores: { infra: 3, security: 1 } }
        ]
    },
     {
        text: "Se você estivesse criando um jogo, você preferiria:",
        options: [
            { text: "Desenhar os personagens, os cenários e os efeitos visuais.", scores: { frontend: 3 } },
            { text: "Criar as regras do jogo: o que acontece quando você pula, como funciona o inventário.", scores: { backend: 3 } },
            { text: "Garantir que o jogo funcione liso, sem travar, em qualquer aparelho.", scores: { cloud: 3 } },
            { text: "Analisar em qual fase os jogadores mais desistem, para ajustar a dificuldade.", scores: { data: 3 } },
            { text: "Ajustar a 'sensação' de jogar: a resposta dos controles e a fluidez dos pulos.", scores: { ux: 3, frontend: 1 } }
        ]
    },
    {
        text: "Como você prefere aprender algo novo e complexo?",
        options: [
            { text: "Lendo o manual de instruções original, do começo ao fim.", scores: { backend: 2, infra: 1 } },
            { text: "Vendo vídeos que mostram o resultado visual passo a passo.", scores: { frontend: 3 } },
            { text: "Apertando todos os botões e 'quebrando' até entender o que cada coisa faz.", scores: { cloud: 2, security: 2 } },
            { text: "Analisando exemplos prontos e buscando padrões em como eles funcionam.", scores: { data: 2, backend: 1 } },
            { text: "Observando alguém que já sabe usar e pedindo para explicar o 'porquê'.", scores: { ux: 3 } }
        ]
    },
    {
        text: "O que mais te irrita em um site ou aplicativo?",
        options: [
            { text: "Ele é lindo, mas a fonte é muito pequena e difícil de ler.", scores: { ux: 3 } },
            { text: "Ele demora mais de 3 segundos para carregar qualquer tela.", scores: { cloud: 2, backend: 1 } },
            { text: "Os botões e os textos estão visivelmente tortos ou desalinhados.", scores: { frontend: 3 } },
            { text: "Uma notícia que cita 'estudos apontam' sem mostrar os dados originais.", scores: { data: 3 } },
            { text: "Pedir minha senha em um site que não parece seguro ou um Wi-Fi público esquisito.", scores: { security: 3, infra: 1 } }
        ]
    },
    {
        text: "No final de um longo projeto, o que te dá mais orgulho?",
        options: [
            { text: "Ver o 'mapa' do sistema que criei: um diagrama de como tudo se conecta.", scores: { backend: 3 } },
            { text: "Um painel que mostra que tudo funcionou 99.9% do tempo e 50% mais rápido.", scores: { cloud: 3 } },
            { text: "Uma tela final polida, com animações suaves e que é bonita de ver.", scores: { frontend: 3 } },
            { text: "Um relatório com um gráfico que revela uma tendência que ninguém esperava.", scores: { data: 3 } },
            { text: "Ouvir um usuário dizer: 'Nossa, isso é muito fácil de usar!'", scores: { ux: 3 } },
            { text: "Saber que a rede Wi-Fi que montei está cobrindo o prédio todo sem falhas.", scores: { infra: 3 } },
            { text: "Um relatório mostrando que todas as 'portas' estão trancadas e seguras.", scores: { security: 3 } }
        ]
    }
];


//OBJETO DE CARREIRAS (7 ao total)
const careers = {
    frontend: {
        icon: "🎨",
        title: "Desenvolvedor(a) Frontend",
        subtitle: "Você é visual e adora criar interfaces!",
        description: "Você tem talento para transformar ideias em experiências visuais incríveis. Adora trabalhar com design, cores e animações, e se emociona quando vê algo que você criou na tela. Seu código tem estilo!",
        skills: [
            "HTML, CSS e JavaScript",
            "React, Vue ou Angular",
            "Design responsivo",
            "Atenção a detalhes visuais",
            "Criatividade e senso estético"
        ]
    },
    backend: {
        icon: "⚙️",
        title: "Desenvolvedor(a) Backend",
        subtitle: "Você é lógico(a) e adora resolver problemas!",
        description: "Você é a pessoa que faz tudo funcionar nos bastidores. Adora criar sistemas robustos, otimizar código e garantir que tudo rode perfeitamente. Para você, a mágica está na lógica!",
        skills: [
            "Python, Java, Node.js ou C#",
            "Bancos de dados (SQL e NoSQL)",
            "APIs e microsserviços",
            "Lógica de programação forte",
            "Pensamento analítico"
        ]
    },
    ux: {
        icon: "💡",
        title: "UX/UI Designer",
        subtitle: "Você tem empatia e adora facilitar a vida das pessoas!",
        description: "Você nasceu para entender pessoas e criar experiências que fazem sentido. Combina criatividade com pesquisa, e fica feliz quando vê alguém usando algo intuitivo que você projetou. Você é a voz do usuário!",
        skills: [
            "Figma, Adobe XD ou Sketch",
            "Pesquisa com usuários",
            "Prototipagem e wireframes",
            "Empatia e comunicação",
            "Design thinking"
        ]
    },
    data: {
        icon: "📊",
        title: "Cientista de Dados",
        subtitle: "Você adora números e encontrar padrões!",
        description: "Você vê o que os outros não veem. Adora mergulhar em dados, criar análises e descobrir insights valiosos. Para você, cada número conta uma história, e você é expert em desvendá-las!",
        skills: [
            "Python e R",
            "SQL e bancos de dados",
            "Estatística e matemática",
            "Machine Learning",
            "Visualização de dados"
        ]
    },
    cloud: {
        icon: "☁️",
        title: "Engenheiro(a) de Cloud",
        subtitle: "Você pensa em escala, eficiência e automação!",
        description: "Você é a pessoa que garante que o sistema aguente 10 ou 10 milhões de usuários. Adora automatizar processos, otimizar custos e usar o poder da 'nuvem' (AWS, Azure, GCP) para criar soluções flexíveis.",
        skills: [
            "AWS, Azure ou GCP",
            "Docker e Kubernetes",
            "CI/CD (Automação)",
            "Terraform (Infra as Code)",
            "Monitoramento e Escalabilidade"
        ]
    },
    infra: {
        icon: "🌐",
        title: "Analista de Infra e Redes",
        subtitle: "Você é quem conecta tudo e todos!",
        description: "Você é a base de tudo. Garante que os computadores conversem entre si, que a internet funcione e que os servidores estejam de pé. Você cuida da 'estrada' por onde os dados passam.",
        skills: [
            "Linux e Windows Server",
            "Roteadores e Switches (Cisco)",
            "Cabeamento e Wi-Fi",
            "VPNs e Redes",
            "Hardware e Servidores"
        ]
    },
    security: {
        icon: "🔒",
        title: "Analista de Cibersegurança",
        subtitle: "Você é o(a) guardião(ã) protetor(a) dos dados!",
        description: "Você pensa como um invasor para poder se defender. Seu trabalho é proteger sistemas, encontrar falhas antes dos 'vilões' e criar barreiras. Você é o escudo que protege as informações.",
        skills: [
            "Firewalls e Antivírus",
            "Pentest (Teste de Invasão)",
            "Análise de Malware",
            "Criptografia",
            "Gestão de Risco"
        ]
    }
};


let currentQuestion = 0;
let scores = { 
    frontend: 0, 
    backend: 0, 
    ux: 0, 
    data: 0, 
    cloud: 0, 
    infra: 0, 
    security: 0 
};

function startQuiz() {
    // Resetar scores caso seja um reinício
    scores = { frontend: 0, backend: 0, ux: 0, data: 0, cloud: 0, infra: 0, security: 0 };
    currentQuestion = 0;
    
    showScreen('question');
    showQuestion();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
    document.getElementById('questionText').textContent = question.text;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option.text;
        div.onclick = () => selectOption(index);
        optionsContainer.appendChild(div);
    });
}

function selectOption(index) {
    const question = questions[currentQuestion];
    const selectedOption = question.options[index];
    
    // Adicionar pontos
    for (let career in selectedOption.scores) {
        if (scores.hasOwnProperty(career)) { // Boa prática
            scores[career] += selectedOption.scores[career];
        }
    }
    
    // Próxima pergunta ou resultado
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        setTimeout(showQuestion, 300); // Pequeno delay para a transição
    } else {
        setTimeout(showResult, 300); // Pequeno delay para a transição
    }
}

function showResult() {
    // Encontrar carreira com maior pontuação
    let maxScore = -1; // Começar com -1 para garantir que o primeiro score seja pego
    let topCareer = 'frontend';
    
    for (let career in scores) {
        if (scores[career] > maxScore) {
            maxScore = scores[career];
            topCareer = career;
        }
    }

function showQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `pergunta ${currentQuestion + 1} de ${questions.length}`;
    document.getElementById('progressPercent').textContent = Math.round(progress) + '%'; // ADICIONE ESTA LINHA
    
    document.getElementById('questionText').textContent = question.text;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option.text;
        div.onclick = () => selectOption(index);
        optionsContainer.appendChild(div);
    });
}
    
    const result = careers[topCareer];
    
    document.getElementById('resultIcon').textContent = result.icon;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultSubtitle').textContent = result.subtitle;
    document.getElementById('resultDescription').textContent = result.description;
    
    const skillsList = document.getElementById('resultSkills');
    skillsList.innerHTML = '';
    result.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
    
    showScreen('result');
}

function shareResult() {
    const resultTitle = document.getElementById('resultTitle').textContent;
    const text = `Descobri meu perfil tech: ${resultTitle}! Faça o quiz também e descubra qual carreira de TI combina com você!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Meu Resultado - Quiz de Carreira TI',
            text: text
        });
    } else {
        // Fallback para desktop ou browsers que não suportam
        navigator.clipboard.writeText(text).then(() => {
            alert('Resultado copiado para a área de transferência!');
        }, () => {
            alert('Não foi possível copiar. Copie este texto:\n\n' + text);
        });
    }
}

function restartQuiz() {
    // Scores e currentQuestion são resetados no início do startQuiz()
    showScreen('intro');
}