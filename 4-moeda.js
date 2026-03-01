// --- Conversor de Moedas ---
//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa. Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.


// Erro 1 - Taxa estava como texto.
// Corrigida para número.
const taxaDolar = 5.5;


// Erro 2 - Função tinha variável desnecessária.
// Simplificada.
function converterParaReal(valorDolar) {
  return valorDolar * taxaDolar;
}


// Erro 3 - Variável inexistente no console.
// Linha removida.


// Erro 4 - Valor da transação estava como texto.
// Corrigido para número.
const transacao = {
  usuario: "Carlos",
  valor: 150.0,
  concluida: true,
};


// Erro 5 - Função não estava sendo chamada.
// Corrigido.
const valorFinal = converterParaReal(transacao.valor);


// Erro 6 - Comparação com texto.
// Corrigida para booleano.
if (transacao.concluida == true) {
  console.log(
    "O valor convertido para " + transacao.usuario + " é: R$" + valorFinal,
  );
}
if (transacao.concluida == false) {
  console.log("Erro no processamento.");
}