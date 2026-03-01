// --- Calculadora de Consumo de Combustível ---


// Erro 1 - Preço estava como texto.
// Corrigido para número.
const precos = {
  gasolina: 5.99,
  alcool: 3.9,
  diesel: 6.20,
};

function calcularGasto(distancia, consumoKml, tipoCombustivel) {
  let precoUnitario = tipoCombustivel;

  let litrosNecessarios = distancia / consumoKml;
  let custoTotal = litrosNecessarios * precoUnitario;

  return custoTotal;
}

// Erro 2 - Distância estava como texto.
// Corrigida para número.
const viagem = {
  destino: "Litoral",
  distancia: 200,
  veiculo: "Corsa",
};

const resultadoGasolina = calcularGasto(viagem.distancia, 10, precos.gasolina);
const resultadoAlcool = calcularGasto(viagem.distancia, 7, precos.alcool);
const resultadoDiesel = calcularGasto(viagem.distancia, 10, precos.diesel);

// Erro 3 - Variável da função usada fora dela.
// Corrigido para usar o retorno.
console.log("Viagem para: " + viagem.destino);
console.log("Custo estimado no Diesel: R$ " + resultadoDiesel.toFixed(2));
console.log("Custo estimado na Gasolina: R$ " + resultadoGasolina.toFixed(2));
console.log("Custo estimado na Alcool: R$ " + resultadoAlcool.toFixed(2));


// Erro 4 - Regra ajustada para 70%.
if ((precos.alcool / precos.gasolina) < 0.7) {
  mensagem = "O álcool está compensando!";
  console.log(mensagem);
}