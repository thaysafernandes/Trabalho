const caixaPrincipal =document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
    {
        enunciado: "Você esta acompanhando as olimpíadas?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "É incrivél que esteja tendo visibilidade,"
            },
            {
                texto: "Não",
                afirmacao: "Muitas pessoas não se interessam, porém"
            }
        ]
    },
    {
        enunciado: "Você acha que as olimpíadas merecem mais reconhecimento no mundo atual?",
        alternativas: [
            {
                texto:  "Acredito que sim",
                afirmacao: "são importantes, tanto pelo significado quanto pela cultura"
            },
            {
                texto: "Não acho que seja necessário",
                afirmacao: "foi importante no passado e vem tendo mais reconhecimento atualmente,"
            }
           
        ]
    },
    {
        enunciado: "Você acredita que as olímpiadas podem trazer mais visibilidade para as diferentes culturas que se encontram nela?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "muitos países podem mostrar gandes destaques e serem mais valorizados."
            },
            {
                texto: "Não",
                afirmacao: "mas já que a maioria dos países que ficam no topo já são populares, dificilmente outras nações são valorizadas."
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

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Foram muito importantes historicamente e carregam um grande peso, porém temos diversos pontos de vista sobre.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();