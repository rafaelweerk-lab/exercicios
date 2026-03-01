// --- Conversor de Medidas de Fábrica ---


// Erro 1 - Valor estava como texto.
// Corrigido para número.
const mlPorLitro = 1000;

// Erro 2 - Conversão ml estava errada.
// Corrigida para divisão.
function converterMlParaLitro(quantidadeMl) {
  const resultado = quantidadeMl / mlPorLitro;
  return resultado;
}

// Erro 3 - Conversão litros estava errada.
// Corrigida para multiplicação.
function converterLitroParaMl(quantidadeLitros) {
  const resultado = quantidadeLitros * mlPorLitro;
  return resultado;
}

const producaoDia = {
  lote1: 5000, // ml
  lote2: 3, // litros
};

const calculoLote1 = converterMlParaLitro(producaoDia.lote1);
const calculoLote2 = converterLitroParaMl(producaoDia.lote2);

console.log("--- Relatório de Produção ---");
console.log("Lote 1 (5000ml em Litros): " + calculoLote1 + "L");
console.log("Lote 2 (2L em Mililitros): " + calculoLote2 + "ml");

// Erro 4 - Variável não usada.
// Comentada.

// Erro 5 - Atribuição usada na condição.
// Corrigida para comparação.

if ((producaoDia.lote1 == 0 && producaoDia.lote2 == 0)) {
  console.log("Atenção: Estoque zerado!");
}
// Erro 6 - Só um lote era verificado.
// Corrigido para verificar os dois.