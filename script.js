// ============================================================================
// 1. BANCO DE DADOS INTEGRAL DE QUESTÕES (3 BLOCOS COMPLETOS)
// ============================================================================
const niveisEducacionais = {
    1: [
        {
            pergunta: "O que a palha seca jogada sobre a horta ou lavoura faz pelo solo?",
            opcoes: [
                "Esquenta a terra até queimar a raiz",
                "Funciona como um cobertor, guardando a umidade da água",
                "Impede que o adubo faça efeito",
                "Serve apenas para juntar insetos ruins"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: A palha protege o solo contra o sol forte e evita que a água evapore rápido."
        },
        {
            pergunta: "Qual a forma correta de proteger uma mina d'água (nascente)?",
            opcoes: [
                "Deixar os animais beberem água direto na fonte",
                "Desmatar ao redor para o sol entrar",
                "Fazer o cercamento correto e manter a mata ciliar",
                "Canalizar toda a água com cimento"
            ],
            correta: 2,
            materialId: "video-minas",
            dica: "Dica: Veja a videoaula sobre recuperação de minas na aba Materiais de Apoio!"
        },
        {
            pergunta: "O que significa a sigla APP na legislação ambiental do campo?",
            opcoes: [
                "Área de Production Particular",
                "Área de Preservação Permanente",
                "Aplicativo de Programação Agro",
                "Associação de Produtores do Paraná"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: São áreas protegidas por lei, como margens de rios e topos de morros."
        },
        {
            pergunta: "Por que não se deve queimar os restos de folhas secas na lavoura?",
            opcoes: [
                "Because o fogo mata os microorganismos bons e empobrece a terra",
                "Because a fumaça atrapalha o crescimento das frutas",
                "Because o fogo deixa o solo muito úmido",
                "Because as cinzas azedam as sementes"
            ],
            correta: 0,
            materialId: "cartilha-solo",
            dica: "Dica: A queima elimina a matéria orgânica viva que alimenta as plantas."
        },
        {
            pergunta: "Qual o principal benefício da adubação verde com leguminosas?",
            opcoes: [
                "Secar a terra para o plantio de inverno",
                "Fixar nitrogênio natural no solo e economizar fertilizantes químicos",
                "Atrair abelhas para polinizar as lavouras vizinhas",
                "Evitar que pássaros comam as sementes plantadas"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: Plantas como o feijão-de-porco puxam o nitrogênio do ar para a terra."
        },
        {
            pergunta: "O que deve ser feito com a embalagem vazia de um defensivo químico?",
            opcoes: [
                "Queimar no fundo da propriedade rústica",
                "Enterrar perto de riachos para esconder",
                "Realizar a tríplice lavagem e devolver em postos autorizados",
                "Reutilizar para guardar água de consumo"
            ],
            correta: 2,
            materialId: "cartilha-solo",
            dica: "Dica: A devolução correta evita contaminações tóxicas graves no ecossistema."
        },
        {
            pergunta: "Qual o papel das minhocas na camada biológica da terra?",
            opcoes: [
                "Comer as raízes saudáveis das plantas cultivadas",
                "Cavar túneis que aeram o solo e produzir húmus fértil",
                "Atrair predadores perigosos para a plantação",
                "Secar o excesso de adubo orgânico"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: Elas são engenheiras naturais da fertilidade biológica."
        },
        {
            pergunta: "O que a ausência de Mata Ciliar pode causar a um rio próximo?",
            opcoes: [
                "Erosão das margens e assoreamento (entupimento com terra)",
                "Aumento excessivo do volume de peixes nativos",
                "Purificação automática de todas as impurezas",
                "Resfriamento prejudicial da temperatura da água"
            ],
            correta: 0,
            materialId: "video-minas",
            dica: "Dica: Sem raízes para segurar a margem, a terra desaba direto na água do rio."
        },
        {
            pergunta: "Qual prática ajuda a combater a erosão em terrenos inclinados?",
            opcoes: [
                "Plantio morro abaixo seguindo o fluxo da água",
                "Plantio em curvas de nível e terraceamento",
                "Retirada total da vegetação nativa antes da chuva",
                "Gradeamento intensivo do solo em dias secos"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: As linhas curvas cortam a velocidade da água da chuva."
        },
        {
            pergunta: "Por que a rotação de culturas ajuda a controlar pragas?",
            opcoes: [
                "Porque confunde a visão dos insetos voadores",
                "Because altera as plantas hospedeiras e quebra o ciclo biológico da praga",
                "Porque deixa o solo venenoso para qualquer organismo",
                "Porque as plantas novas crescem mais rápido que as pragas"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: Se o inseto só come milho, ao plantar soja ele ficará sem alimento."
        }
    ],
    2: [
        {
            pergunta: "O que caracteriza o sistema de Plantio Direto?",
            opcoes: [
                "Semear direto sobre a palhada sem arar ou gradear a terra",
                "Colocar sementes profundas usando tratores de alta potência",
                "Lançar as sementes por aviões para cobrir grandes áreas",
                "Plantar mudas diretamente na água sem solo (hidroponia)"
            ],
            correta: 0,
            materialId: "cartilha-solo",
            dica: "Dica: Mantém a terra intacta e protegida pelos restos da colheita passada."
        },
        {
            pergunta: "Qual gás de efeito estufa é mitigado pelo sequestro de carbono no solo?",
            opcoes: [
                "Metano (CH4)",
                "Dióxido de Carbono (CO2)",
                "Óxido Nitroso (N2O)",
                "Monóxido de Carbono (CO)"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: Plantas captруют o CO2 da atmosfera e o fixam em forma de matéria orgânica."
        },
        {
            pergunta: "Nascentes com fluxo reduzido se recuperam mais rápido se:",
            opcoes: [
                "O solo de recarga no topo do morro for protegido com vegetação",
                "Forem instaladas bombas mecânicas de alta sucção",
                "Limpar toda a grama ao redor para expor a água ao sol",
                "Adicionar adubo químico diretamente no olho d'água"
            ],
            correta: 0,
            materialId: "video-minas",
            dica: "Dica: A floresta no topo funciona como uma esponja que alimenta o lençol freático."
        },
        {
            pergunta: "O que é o Manejo Integrado de Pragas (MIP)?",
            opcoes: [
                "Uso exclusivo de agrotóxicos preventivos semanais",
                "Monitorar a plantação e combinar métodos biológicos, culturais e químicos",
                "Eliminar todos os seres vivos da lavoura usando fogo controlado",
                "Substituir toda a plantação sempre que surgir uma lagarta"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: Só aplica defensivo se a praga atingir o nível de dano econômico."
        },
        {
            pergunta: "A faixa mínima de APP em rios com menos de 10 metros de largura é de:",
            opcoes: [
                "5 metros",
                "15 metros",
                "30 metros",
                "100 metros"
            ],
            correta: 2,
            materialId: "video-minas",
            dica: "Dica: De acordo com o Código Florestal brasileiro, o mínimo absoluto é de 30 metros."
        },
        {
            pergunta: "Qual indicador biológico demonstra que o solo está saudável?",
            opcoes: [
                "Alta densidade de fungos micorrízicos e bactérias benéficas",
                "Ausência total de qualquer organismo ou inseto visível",
                "Textura extremamente compacta e impermeável à água",
                "Coloração esbranquiçada causada por resíduos minerais"
            ],
            correta: 0,
            materialId: "cartilha-solo",
            dica: "Dica: Solo vivo possui bilhões de seres microscópicos que quebram matéria orgânica."
        },
        {
            pergunta: "O que provoca o fenômeno da lixiviação nos solos rústicos?",
            opcoes: [
                "A compactação excessiva por pneus de máquinas rurais",
                "A lavagem de nutrientes solúveis para camadas profundas pela água da chuva",
                "O acúmulo de sal na superfície por falta de irrigação",
                "O ataque de nematóides microscópicos nas raízes"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: Sem palha, a água da chuva infiltra carregando a adubação para longe."
        },
        {
            pergunta: "As cercas ao redor de nascentes servem prioritariamente para:",
            opcoes: [
                "Demarcar o território contra invasões territoriais de vizinhos",
                "Impedir o pisoteio de animais que compactam a terra e barram a água",
                "Servir de suporte para trepadeiras frutíferas ornamentais",
                "Esconder a fonte d'água de aves de rapina nativas"
            ],
            correta: 1,
            materialId: "video-minas",
            dica: "Dica: Cascos de bois esmagam o solo esponjoso do olho d'água, secando a minação."
        },
        {
            pergunta: "Qual elemento químico é essencial na calagem para reduzir a acidez do solo?",
            opcoes: [
                "Cloro",
                "Cálcio (através do Calcário)",
                "Nitrogênio Líquido",
                "Potássio Puro"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: O calcário neutraliza o alumínio tóxico e corrige o pH da terra."
        },
        {
            pergunta: "A agroecologia difere da agricultura convencional porque:",
            opcoes: [
                "Não aceita nenhuma forma de tecnologia moderna ou computação",
                "Busca o equilíbrio ecológico imitando os ciclos da própria natureza",
                "Foca apenas no cultivo de hortaliças de pequeno porte",
                "Exige que o produtor abandone o uso de tratores e maquinários"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: Produzir bem hoje garantindo os recursos naturais para o amanhã."
        }
    ],
    3: [
        {
            pergunta: "O que mede o índice de porosidade do solo?",
            opcoes: [
                "O espaço vazio ocupado por ar e água entre os grãos de terra",
                "A quantidade exata de pedras misturadas ao adubo",
                "A velocidade de germinação de grãos híbridos transgênicos",
                "O teor de defensivos residuais fixados na raiz"
            ],
            correta: 0,
            materialId: "cartilha-solo",
            dica: "Dica: Solos compactados perdem porosidade, impedindo as raízes de respirarem."
        },
        {
            pergunta: "Como corredores ecológicos auxiliam as propriedades rurais?",
            opcoes: [
                "Facilitando o trânsito de colheitadeiras pesadas entre talhões",
                "Interligando fragmentos florestais para livre tráfego da fauna nativa",
                "Aumentando a área limpa e agricultável para monoculturas",
                "Impedindo a passagem de ventos fortes através de barreiras artificiais"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: Permitem que animais e polinizadores se movam de uma mata para outra."
        },
        {
            pergunta: "O processo de eutrofização de corpos d'água rurais ocorre por:",
            opcoes: [
                "Excesso de nutrientes (fertilizantes/esgoto) que geram proliferação de algas",
                "Falta total de luz solar direta sobre o curso do riacho",
                "Infiltração de óleos lubrificantes minerais vindos de maquinários",
                "Redução drástica do oxigênio provocada por evapotranspiração acelerada"
            ],
            correta: 0,
            materialId: "video-minas",
            dica: "Dica: Adubos lavados para dentro do rio alimentam algas que sufocam os peixes."
        },
        {
            pergunta: "Qual a função da Capacidade de Troca Catiônica (CTC) do solo?",
            opcoes: [
                "Medir a habilidade da terra em reter e liberar nutrientes minerais essenciais",
                "Verificar o nível de umidade estocada após estiagens prolongadas",
                "Calcular a velocidade de escoamento superficial da água de chuva",
                "Quantificar a presença de matéria argilosa pura na superfície"
            ],
            correta: 0,
            materialId: "cartilha-solo",
            dica: "Dica: Quanto maior a CTC, mais ímãs o solo tem para segurar o adubo."
        },
        {
            pergunta: "O superpastoreio degrada propriedades rústicas porque:",
            opcoes: [
                "Excede a capacidade de carga da pastagem, gerando compactação e erosão",
                "Acelera a engorda do rebanho de forma prejudicial à saúde animal",
                "Reduz o nitrogênio do ar devido à alta concentração de gases naturais",
                "Obriga o produtor a comprar rações balanceadas industriais externas"
            ],
            correta: 0,
            materialId: "cartilha-solo",
            dica: "Dica: Muitos animais pisando no mesmo local destroem a grama e esmagam a terra."
        },
        {
            pergunta: "O que preconiza a Lei Federal nº 12.651/2012 (Código Florestal) sobre Reserva Legal?",
            opcoes: [
                "Área interna com cobertura vegetal nativa obrigatória para conservação biológica",
                "Espaço reservado nas cidades para armazenamento de grãos estatais",
                "Território privado destinado exclusivamente à moradia do produtor rústico",
                "Porção de terra desmatada para teste de novos defensivos químicos"
            ],
            correta: 0,
            materialId: "cartilha-solo",
            dica: "Dica: No Paraná (Mata Atlântica), toda propriedade deve preservar 20% de mata nativa."
        },
        {
            pergunta: "A compactação profunda do solo rústico afeta as plantas pois:",
            opcoes: [
                "Aumenta a evaporação acelerada da água profunda",
                "Barra o crescimento radicular (raízes) e impede a absorção hídrica",
                "Deixa as folhas amareladas por excesso de radiação solar direta",
                "Facilita o surgimento de pragas fúngicas aéreas nas plantações"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: A terra vira um 'cimento' que impede a raiz de descer para buscar água."
        },
        {
            pergunta: "Para medir a vazão de uma mina recuperada, o método correto Corresponde a:",
            opcoes: [
                "Contar as gotas que caem da rocha principal por minuto cronometrado",
                "Medir o tempo necessário para encher um recipiente de volume conhecido",
                "Avaliar a profundidade máxima alcançada pelo espelho d'água visível",
                "Instalar medidores digitais pressurizados na saída da tubulação"
            ],
            correta: 1,
            materialId: "video-minas",
            dica: "Dica: Cronometrar quantos segundos leva para encher um balde de 10 litros."
        },
        {
            pergunta: "Qual das alternativas representa um defensivo biológico natural?",
            opcoes: [
                "Inseticidas organofosforados sintéticos de amplo espectro",
                "Uso da bactéria Bacillus thuringiensis (Bt) contra lagartas específicas",
                "Aplicação de soluções salinas concentradas industriais na terra",
                "Fertilizantes minerais altamente solúveis à base de ureia pura"
            ],
            correta: 1,
            materialId: "cartilha-solo",
            dica: "Dica: São inimigos naturais ou bactérias que combatem pragas sem veneno."
        },
        {
            pergunta: "O princípio da sustentabilidade sistêmica no campo defende que:",
            opcoes: [
                "A produção econômica deve caminhar junto com a conservação e justiça social",
                "O lucro financeiro imediato justifica qualquer alteração ambiental rústica",
                "Toda a produção agrícola nacional deve ser convertida para exportação rápida",
                "O meio ambiente deve ser intocado, proibindo qualquer tipo de agricultura"
            ],
            correta: 0,
            materialId: "cartilha-solo",
            dica: "Dica: Produzir bem hoje garantindo os recursos naturais para o amanhã."
        }
    ]
};

// ============================================================================
// 2. VARIÁVEIS DE CONTROLE DE ESTADO (ENGINE)
// ============================================================================
let nivelAtual = 1;
let questaoAtualIndice = 0;
let acertosNoBloco = 0;

let recordeSimuladoPontos = 0;
let totalMissoesCompletas = 0;

// ============================================================================
// 3. INICIALIZAÇÃO CORE (DOM)
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    const formSimulador = document.getElementById('simulador-form');
    if (formSimulador) {
        formSimulador.querySelectorAll('select').forEach(sel => {
            sel.addEventListener('change', calcularMetricasSimulador);
        });
        calcularMetricasSimulador();
    }

    carregarHistoricoNotasTabela();
    carregarQuestaoQuiz();
    atualizarPainelProgressoGeral();
});

// ============================================================================
// 4. LÓGICA DO SIMULADOR AGRO-AMBIENTAL (ABA 1)
// ============================================================================
function calcularMetricasSimulador() {
    const solo = document.getElementById('solo').value;
    const agua = document.getElementById('agua').value;
    const insumos = document.getElementById('insumos').value;
    const biodiversidade = document.getElementById('biodiversidade').value;

    let vCultivo = solo === 'excelente' ? 100 : (solo === 'alto' ? 80 : (solo === 'medio' ? 50 : 15));
    let vAmbiental = agua === 'excelente' ? 100 : (agua === 'alto' ? 75 : (agua === 'medio' ? 45 : 10));
    let vGestao = insumos === 'excelente' ? 100 : (insumos === 'alto' ? 80 : (insumos === 'medio' ? 50 : 20));

    if (biodiversidade === 'excelente') {
        vAmbiental = Math.min(vAmbiental + 15, 100);
        vGestao = Math.min(vGestao + 10, 100);
    } else if (biodiversidade === 'alto') {
        vAmbiental = Math.min(vAmbiental + 5, 100);
    }

    const notaFinal = Math.round((vCultivo + vAmbiental + vGestao) / 3);

    document.getElementById('pontos-valor').textContent = notaFinal;
    document.getElementById('pct-cultivo').textContent = `${vCultivo}%`;
    document.getElementById('bar-cultivo').style.width = `${vCultivo}%`;
    document.getElementById('pct-ambiental').textContent = `${vAmbiental}%`;
    document.getElementById('bar-ambiental').style.width = `${vAmbiental}%`;
    document.getElementById('pct-gestao').textContent = `${vGestao}%`;
    document.getElementById('bar-gestao').style.width = `${vGestao}%`;

    const badge = document.getElementById('status-badge');
    if (notaFinal >= 75) {
        badge.textContent = "ALTAMENTE SUSTENTÁVEL";
        badge.className = "pill-status state-success";
        
        let nodeSim = document.getElementById('node-ch-simulador');
        if (nodeSim && !nodeSim.classList.contains('achieved')) {
            nodeSim.classList.add('achieved');
            document.getElementById('tag-ch-simulador').innerText = "Concluído";
            document.getElementById('med-target-sim').classList.add('unlocked');
        }
    } else {
        badge.textContent = "MONITORAMENTO RECOMENDADO";
        badge.className = "pill-status state-wait";
    }

    if (notaFinal > recordeSimuladoPontos) {
        recordeSimuladoPontos = notaFinal;
    }
    atualizarPainelProgressoGeral();
}

// ============================================================================
// 5. MOTOR DO QUIZ INTERATIVO (ABA 3)
// ============================================================================
function carregarQuestaoQuiz() {
    ocultarDicaQuiz();
    const listaQuestoes = niveisEducacionais[nivelAtual];
    
    document.getElementById('quiz-block-indicator').innerText = `Bloco Ativo: ${nivelAtual} de 3`;
    document.getElementById('quiz-question-counter').innerText = `Questão ${questaoAtualIndice + 1} de 10`;
    document.getElementById('quiz-score-live').innerText = `Acertos no bloco: ${acertosNoBloco}`;

    const objetoQuestao = listaQuestoes[questaoAtualIndice];
    document.getElementById('quiz-question-text').innerText = objetoQuestao.pergunta;

    const boxOpcoes = document.getElementById('quiz-options-box');
    boxOpcoes.innerHTML = '';

    objetoQuestao.opcoes.forEach((opcaoText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opcaoText;
        btn.onclick = () => verificarRespostaQuiz(idx, btn);
        boxOpcoes.appendChild(btn);
    });

    document.getElementById('quiz-btn-prev').disabled = questaoAtualIndice === 0;
}

function verificarRespostaQuiz(indiceSelecionado, botaoClicado) {
    const objetoQuestao = niveisEducacionais[nivelAtual][questaoAtualIndice];
    const todosBotoes = document.getElementById('quiz-options-box').querySelectorAll('.opt-btn');

    todosBotoes.forEach(b => b.disabled = true);

    if (indiceSelecionado === objetoQuestao.correta) {
        botaoClicado.classList.add('correct');
        acertosNoBloco++;
        document.getElementById('quiz-score-live').innerText = `Acertos no bloco: ${acertosNoBloco}`;
    } else {
        botaoClicado.classList.add('wrong');
        todosBotoes[objetoQuestao.correta].classList.add('correct');
    }
}

function avancarQuestaoQuiz() {
    if (questaoAtualIndice < 9) {
        questaoAtualIndice++;
        carregarQuestaoQuiz();
    } else {
        salvarTentativaNoHistorico();
        exibirTelaFimDeBloco();
    }
}

function voltarQuestaoQuiz() {
    if (questaoAtualIndice > 0) {
        questaoAtualIndice--;
        carregarQuestaoQuiz();
    }
}

function toggleDicaQuiz() {
    const boxDica = document.getElementById('quiz-hint-box');
    const objetoQuestao = niveisEducacionais[nivelAtual][questaoAtualIndice];
    
    if (boxDica.classList.contains('hidden')) {
        boxDica.innerText = objetoQuestao.dica;
        boxDica.classList.remove('hidden');
    } else {
        boxDica.classList.add('hidden');
    }
}

function ocultarDicaQuiz() {
    document.getElementById('quiz-hint-box').classList.add('hidden');
}

// ============================================================================
// 6. PERSISTÊNCIA DE DADOS NO NAVEGADOR (LOCALSTORAGE)
// ============================================================================
function exibirTelaFimDeBloco() {
    document.getElementById('quiz-game-container').classList.add('hidden');
    const screenFim = document.getElementById('quiz-result-container');
    screenFim.classList.remove('hidden');

    document.getElementById('quiz-result-summary').innerText = `Você acertou ${acertosNoBloco} de 10 questões.`;

    const btnProximoBloco = document.getElementById('quiz-btn-next-block');
    if (nivelAtual === 3) {
        btnProximoBloco.innerText = "Trilha de Lições Concluída! 🎓";
        btnProximoBloco.disabled = true;
    } else {
        btnProximoBloco.innerText = "Próximo Bloco de Lições 🚀";
        btnProximoBloco.disabled = false;
    }

    if (acertosNoBloco === 10) {
        let nodeQuiz = document.getElementById('node-ch-quiz');
        if (nodeQuiz && !nodeQuiz.classList.contains('achieved')) {
            nodeQuiz.classList.add('achieved');
            document.getElementById('tag-ch-quiz').innerText = "Concluído";
            document.getElementById('med-target-quiz').classList.add('unlocked');
        }
    }
    atualizarPainelProgressoGeral();
}

function reiniciarBlocoAtual() {
    questaoAtualIndice = 0;
    acertosNoBloco = 0;
    document.getElementById('quiz-result-container').classList.add('hidden');
    document.getElementById('quiz-game-container').classList.remove('hidden');
    carregarQuestaoQuiz();
}

function irParaProximoBloco() {
    if (nivelAtual < 3) {
        nivelAtual++;
        questaoAtualIndice = 0;
        acertosNoBloco = 0;
        document.getElementById('quiz-result-container').classList.add('hidden');
        document.getElementById('quiz-game-container').classList.remove('hidden');
        carregarQuestaoQuiz();
    }
}

function salvarTentativaNoHistorico() {
    const dataHora = new Date().toLocaleString('pt-BR');
    const novaNota = {
        data: dataHora,
        bloco: `Bloco ${nivelAtual}`,
        aproveitamento: `${acertosNoBloco}/10`,
        status: acertosNoBloco >= 7 ? 'Aprovado' : 'Revisar Conteúdo'
    };

    let historico = JSON.parse(localStorage.getItem('historico_biocampo_data')) || [];
    historico.push(novaNota);
    localStorage.setItem('historico_biocampo_data', JSON.stringify(historico));

    carregarHistoricoNotasTabela();
}

function carregarHistoricoNotasTabela() {
    const tabelaCorpo = document.getElementById('corpo-tabela-relatorios');
    if (!tabelaCorpo) return;

    let historico = JSON.parse(localStorage.getItem('historico_biocampo_data')) || [];
    tabelaCorpo.innerHTML = '';

    if (historico.length === 0) {
        tabelaCorpo.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#5c7066;">Nenhuma avaliação realizada ainda neste dispositivo.</td></tr>`;
        return;
    }

    historico.reverse().forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.data}</td>
            <td>${item.bloco}</td>
            <td>${item.aproveitamento}</td>
            <td><strong>${item.status}</strong></td>
        `;
        tabelaCorpo.appendChild(tr);
    });
}

// ============================================================================
// 7. ARQUITETURA SPA - COMPORTAMENTO DA NAVEGAÇÃO DE ABAS
// ============================================================================
function atualizarPainelProgressoGeral() {
    let m1 = document.getElementById('node-ch-simulador')?.classList.contains('achieved') ? 1 : 0;
    let m2 = document.getElementById('node-ch-quiz')?.classList.contains('achieved') ? 1 : 0;
    totalMissoesCompletas = m1 + m2;

    const txtSim = document.getElementById('meta-txt-sim');
    if (txtSim) txtSim.innerText = recordeSimuladoPontos > 0 ? `${recordeSimuladoPontos}/100` : "--";

    const txtQuiz = document.getElementById('meta-txt-quiz');
    if (txtQuiz) {
        let historico = JSON.parse(localStorage.getItem('historico_biocampo_data')) || [];
        if (historico.length > 0) {
            let totalAcertos = historico.reduce((acc, curr) => acc + parseInt(curr.aproveitamento.split('/')[0]), 0);
            let precisao = Math.round((totalAcertos / (historico.length * 10)) * 100);
            txtQuiz.innerText = `${precisao}%`;
        } else {
            txtQuiz.innerText = "0%";
        }
    }
}

function irParaAba(nomeAba) {
    document.querySelectorAll('.view-pane').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const viewAlvo = document.getElementById(`view-${nomeAba}`);
    const btnAlvo = document.getElementById(`btn-tab-${nomeAba}`);

    if (viewAlvo) viewAlvo.classList.add('active');
    if (btnAlvo) btnAlvo.classList.add('active');
}