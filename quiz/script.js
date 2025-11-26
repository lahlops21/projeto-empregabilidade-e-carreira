const questions = [
    {
        text: "Você vai planejar uma viagem de férias com amigos. Qual é a sua primeira atitude?",
        options: [
            { text: "Monto uma planilha detalhada com custos, horários e rotas para nada dar errado.", scores: { backend: 3, data: 2 } },
            { text: "Pesquiso fotos dos lugares mais bonitos e 'instagramáveis' para gente visitar.", scores: { frontend: 3, ux: 1 } },
            { text: "Garanto que todos tenham seguro viagem, vacinas em dia e cópias dos documentos.", scores: { security: 3 } },
            { text: "Procuro o jeito mais rápido e eficiente de chegar lá, evitando conexões inúteis.", scores: { cloud: 3, infra: 1 } },
            { text: "Pesquiso a opinião de quem já foi para garantir que a experiência vai ser agradável.", scores: { ux: 3 } }
        ]
    },
    {
        text: "Você está cozinhando um prato novo e complexo. Como você lida com a receita?",
        options: [
            { text: "Sigo o passo a passo lógico rigorosamente. Se diz 10g, eu coloco 10g.", scores: { backend: 3, infra: 1 } },
            { text: "Foco na apresentação: o sabor importa, mas o prato tem que ficar lindo na mesa.", scores: { frontend: 3 } },
            { text: "Dou um jeito de sujar menos louça e otimizar o tempo de forno para terminar rápido.", scores: { cloud: 3 } },
            { text: "Provo o tempo todo para garantir que quem for comer vai gostar do tempero.", scores: { ux: 3 } },
            { text: "Analiso 5 receitas diferentes antes de começar para encontrar a média dos ingredientes.", scores: { data: 3 } }
        ]
    },
    {
        text: "Se você tivesse um superpoder para resolver problemas do mundo, qual seria?",
        options: [
            { text: "Visão de Raio-X: Para ver a estrutura invisível das coisas e como elas se sustentam.", scores: { backend: 2, infra: 3 } },
            { text: "Ilusionismo: Capacidade de criar visuais incríveis que encantam quem vê.", scores: { frontend: 3 } },
            { text: "Precognição: Ler padrões do passado para prever o futuro e evitar desastres.", scores: { data: 3, security: 1 } },
            { text: "Telepatia: Entender exatamente o que as pessoas sentem e precisam sem elas falarem.", scores: { ux: 3 } },
            { text: "Campo de Força: Criar barreiras indestrutíveis para proteger quem eu amo.", scores: { security: 3 } },
            { text: "Multiplicação: Estar em vários lugares ao mesmo tempo para fazer mais coisas.", scores: { cloud: 3 } }
        ]
    },
    {
        text: "Você comprou um móvel para montar em casa (tipo IKEA). Qual sua estratégia?",
        options: [
            { text: "Organizo todos os parafusos e peças por tamanho antes de começar qualquer coisa.", scores: { data: 2, backend: 2 } },
            { text: "Olho a foto da caixa para ver como tem que ficar no final e vou tentando encaixar.", scores: { frontend: 3 } },
            { text: "Verifico se a estrutura está firme e se não vai cair na cabeça de ninguém.", scores: { security: 2, infra: 2 } },
            { text: "Penso: 'Será que se eu usar uma parafusadeira elétrica eu termino na metade do tempo?'", scores: { cloud: 3 } },
            { text: "Monto pensando em onde ele vai ficar melhor para não atrapalhar a passagem das pessoas.", scores: { ux: 3, infra: 1 } }
        ]
    },
    {
        text: "Em um jogo de estratégia ou RPG, que tipo de jogador você é?",
        options: [
            { text: "O Estrategista: Conheço todas as regras e combos matemáticos para vencer.", scores: { backend: 3, data: 1 } },
            { text: "O Customizador: Passo horas criando a aparência perfeita para o meu personagem.", scores: { frontend: 3, ux: 1 } },
            { text: "O Suporte: Garanto que o time todo tenha recursos e ninguém morra.", scores: { infra: 3, security: 1 } },
            { text: "O Speedrunner: Quero encontrar o caminho mais curto e rápido para zerar o jogo.", scores: { cloud: 3 } },
            { text: "O Explorador: Converso com todos os NPCs para descobrir a história completa.", scores: { ux: 2, data: 2 } }
        ]
    },
    {
        text: "Seu amigo te conta um segredo. O que passa na sua cabeça?",
        options: [
            { text: "Guardo a sete chaves. Ninguém vai saber, nem sob tortura.", scores: { security: 3 } },
            { text: "Tento conectar essa informação com outras coisas que sei para entender o cenário todo.", scores: { data: 3, backend: 1 } },
            { text: "Penso em como aconselhar meu amigo para ele se sentir melhor.", scores: { ux: 3 } },
            { text: "Analiso se essa informação muda a dinâmica do nosso grupo de amigos.", scores: { infra: 2 } },
            { text: "Já imagino a 'cena de filme' que essa história daria.", scores: { frontend: 2 } }
        ]
    },
    {
        text: "Você entra em um quarto extremamente bagunçado. O que te incomoda mais?",
        options: [
            { text: "A falta de lógica: roupas misturadas com livros, nada faz sentido.", scores: { backend: 3 } },
            { text: "O visual feio: cores que não combinam e a sensação de caos visual.", scores: { frontend: 3 } },
            { text: "A dificuldade de andar: tem coisas no caminho atrapalhando o fluxo.", scores: { ux: 3, infra: 1 } },
            { text: "A ineficiência: levaria horas para achar qualquer coisa ali.", scores: { cloud: 3 } },
            { text: "O risco: tropeçar em algo, quebrar algo ou perder algo importante.", scores: { security: 3 } }
        ]
    },
    {
        text: "Se você fosse escrever um livro, como começaria?",
        options: [
            { text: "Criando um esquema complexo da trama e como os capítulos se ligam.", scores: { backend: 3, infra: 1 } },
            { text: "Imaginando a capa, as ilustrações e a descrição visual dos cenários.", scores: { frontend: 3 } },
            { text: "Pesquisando o que o público mais gosta de ler atualmente para ser um best-seller.", scores: { data: 3, ux: 1 } },
            { text: "Escrevendo rascunhos rápidos e usando ferramentas para corrigir erros automaticamente.", scores: { cloud: 3 } },
            { text: "Focando na jornada emocional do protagonista e como o leitor vai se sentir.", scores: { ux: 3 } }
        ]
    }
];


//OBJETO DE CARREIRAS (7 ao total)
// --- DESCRIÇÕES DETALHADAS DAS CARREIRAS ---
const careers = {
    frontend: {
        icon: "🎨",
        title: "Desenvolvedor Front-end",
        subtitle: "A ponte entre o design e a tecnologia.",
        description: "Você é a pessoa que dá vida à internet. Sabe aquele site lindo, com animações suaves e botões que dão vontade de clicar? É obra sua. Seu trabalho mistura lógica com criatividade visual. Você pega o desenho estático do designer e o transforma em código funcional que milhões de pessoas vão usar. Se você gosta de ver o resultado do seu trabalho instantaneamente na tela, esse é o seu lugar.",
        skills: [
            "Domínio da tríade: HTML, CSS e JavaScript",
            "Frameworks modernos (React, Vue ou Angular)",
            "Design Responsivo (funciona em qualquer tela)",
            "Acessibilidade (web para todos)",
            "Olhar crítico para pixel-perfect"
        ]
    },
    backend: {
        icon: "⚙️",
        title: "Desenvolvedor Back-end",
        subtitle: "O cérebro invisível que faz tudo funcionar.",
        description: "Você não se importa com a cor do botão, mas sim com o que acontece quando clicam nele. Você constrói a lógica, a segurança e a inteligência do sistema. É quem garante que o dinheiro saia de uma conta e vá para outra, ou que a senha do usuário esteja protegida. Se você curte quebra-cabeças complexos, arquitetura de sistemas e performance, o 'lado do servidor' é sua casa.",
        skills: [
            "Linguagens robustas (Python, Java, Node.js, C#)",
            "Bancos de Dados (SQL e NoSQL)",
            "Criação de APIs e integração de sistemas",
            "Segurança da informação e autenticação",
            "Estrutura de dados e algoritmos"
        ]
    },
    ux: {
        icon: "💡",
        title: "UX/UI Designer",
        subtitle: "Onde a psicologia encontra a tecnologia.",
        description: "Você não escreve código (necessariamente), você projeta a experiência. Sua missão é garantir que a tecnologia seja humana, intuitiva e fácil de usar. Você investiga as dores dos usuários, desenha protótipos e briga para que o produto não seja apenas bonito, mas útil. Se você tem muita empatia e adora resolver problemas de usabilidade, você é a voz do usuário no time.",
        skills: [
            "Ferramentas visuais (Figma, Adobe XD)",
            "Pesquisa com usuários e testes de usabilidade",
            "Prototipagem e Wireframing",
            "Arquitetura da Informação",
            "Empatia e Design Thinking"
        ]
    },
    data: {
        icon: "📊",
        title: "Cientista de Dados",
        subtitle: "O detetive que prevê o futuro.",
        description: "Onde os outros veem uma planilha chata, você vê histórias e padrões. Seu trabalho é pegar milhões de dados brutos e transformá-los em respostas estratégicas. Você ajuda empresas a prever tendências, cria inteligências artificiais e algoritmos de recomendação (tipo o do TikTok/Netflix). Se você curte matemática, estatística e curiosidade investigativa, essa área é ouro.",
        skills: [
            "Programação para dados (Python, R, Pandas)",
            "Estatística e Matemática avançada",
            "Machine Learning e Inteligência Artificial",
            "Visualização de Dados (PowerBI, Tableau)",
            "Storytelling com dados"
        ]
    },
    cloud: {
        icon: "☁️",
        title: "Engenheiro de Cloud & DevOps",
        subtitle: "O guardião da escala e da eficiência.",
        description: "Sabe quando a Netflix não cai nem na sexta à noite? Culpa sua (no bom sentido). Você cria a infraestrutura virtual que sustenta os aplicativos. Seu foco é automação: fazer com que o código dos programadores chegue aos usuários de forma rápida, segura e sem derrubar o sistema. Se você gosta de otimização, servidores e de ver as coisas rodando como um relógio suíço, vem pra nuvem.",
        skills: [
            "Provedores de Nuvem (AWS, Azure, Google Cloud)",
            "Contêineres (Docker e Kubernetes)",
            "Infraestrutura como Código (Terraform)",
            "Automação de processos (CI/CD)",
            "Monitoramento de sistemas"
        ]
    },
    infra: {
        icon: "🌐",
        title: "Analista de Infraestrutura",
        subtitle: "A espinha dorsal da conectividade.",
        description: "Antes da 'nuvem' existir, existe o físico. Você entende como a internet realmente funciona: cabos, roteadores, servidores físicos e redes complexas. Você garante que a empresa inteira esteja conectada e operante. É uma área para quem gosta de entender o hardware, configurar redes e resolver problemas críticos que param a operação. Sem você, o Wi-Fi não existe.",
        skills: [
            "Sistemas Operacionais (Linux e Windows Server)",
            "Redes de Computadores (TCP/IP, DNS, VPN)",
            "Virtualização e Hardware",
            "Configuração de Roteadores e Switches",
            "Resolução de problemas críticos (Troubleshooting)"
        ]
    },
    security: {
        icon: "🔒",
        title: "Especialista em Cibersegurança",
        subtitle: "A defesa contra as artes das trevas digitais.",
        description: "Você é o hacker do bem. Seu trabalho é pensar como um invasor para proteger os sistemas antes que eles sejam atacados. Você procura brechas, blinda servidores e garante a privacidade dos dados. É uma carreira de eterna vigilância e aprendizado constante, perfeita para quem tem um senso de proteção aguçado e curiosidade sobre como quebrar (e consertar) coisas.",
        skills: [
            "Ethical Hacking e Pentest",
            "Criptografia e Proteção de Dados",
            "Análise de Vulnerabilidades",
            "Firewalls e segurança de rede",
            "Normas e leis de proteção (LGPD)"
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