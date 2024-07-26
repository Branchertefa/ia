const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
               texto: "Isso é assustador!",
                 afirmacao: [
                   "No início ficou com medo do que essa tecnologia pode fazer.",
                   "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
            ]
            },
            {
               texto: "Isso é maravilhoso!",
                 afirmacao: [
                  "Quis saber como usar IA no seu dia a dia.",
                  "Pensou que IA pode ajudar em tarefas da sua vida."
            ]
            }

       ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas:  [
            {
               texto: "Isso é assustador!",
                 afirmacao: [
                   "No início ficou com medo do que essa tecnologia pode fazer.",
                   "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
            ]
            },
            {
               texto: "Isso é maravilhoso!",
                 afirmacao: [
                  "Quis saber como usar IA no seu dia a dia.",
                  "Pensou que IA pode ajudar em tarefas da sua vida."
            ]
            }

       ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas:  [
            {
               texto: "Isso é assustador!",
                 afirmacao: [
                   "No início ficou com medo do que essa tecnologia pode fazer.",
                   "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
            ]
            },
            {
               texto: "Isso é maravilhoso!",
                 afirmacao: [
                  "Quis saber como usar IA no seu dia a dia.",
                  "Pensou que IA pode ajudar em tarefas da sua vida."
            ]
            }

       ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas:  [
            {
               texto: "Isso é assustador!",
                 afirmacao: [
                   "No início ficou com medo do que essa tecnologia pode fazer.",
                   "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
            ]
            },
            {
               texto: "Isso é maravilhoso!",
                 afirmacao: [
                  "Quis saber como usar IA no seu dia a dia.",
                  "Pensou que IA pode ajudar em tarefas da sua vida."
            ]
            }

       ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas:  [
            {
               texto: "Isso é assustador!",
                 afirmacao: [
                   "No início ficou com medo do que essa tecnologia pode fazer.",
                   "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
            ]
            },
            {
               texto: "Isso é maravilhoso!",
                 afirmacao: [
                  "Quis saber como usar IA no seu dia a dia.",
                  "Pensou que IA pode ajudar em tarefas da sua vida."
            ]
            }

       ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}


mostraPergunta();
