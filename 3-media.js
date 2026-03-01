// --- Sistema de média de alunos ---
// O objetivo deste código é calcular a média de um aluno com base em suas notas e determinar se ele foi aprovado ou reprovado. Identifique os erros presentes no código e corrija-os para que o sistemafuncione corretamente.


const nomeAluno = "Mariana";
const nota1 = 8;
const nota2 = 5;


// Erro 1 - Função não retornava valor.
// Foi adicionado return.

// Erro 2 - Média só existia dentro da função.
// Foi criada constante recebendo o retorno.
function calcularMedia(media) {
  return media = (nota1 + nota2) / 2;
}

const media = calcularMedia();


// Erro 3 - Variável estava dentro do if.
// Foi declarada fora.
let resultado = "";

if (media >= 7) {
  resultado = "Aprovado";
} else {
  resultado = "Reprovado";
}

// Erro 4 - Variável errada usada no console.
// Foi corrigida.
console.log("O aluno " + nomeAluno + " está: " + resultado);