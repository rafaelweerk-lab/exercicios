// --- Sistema de compras ---
// O objetivo deste código é simular um sistema de compras simples, onde o usuário pode aplicar um desconto em um produto e atualizar o estoque. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.


// Erro 1 - Preço estava como texto.
// Corrigido para número.
const produto = {
  nome: "Teclado Gamer",
  preco: 150.00,
  estoque: 10,
};

// Erro 2 - Desconto era valor fixo.
// Corrigido para porcentagem.
function aplicarDesconto(valor) {
  return valor - (valor * 0.2);
}

// Erro 3 - Variável inexistente usada.
// Corrigido para produto.preco.
const precoFinal = aplicarDesconto(produto.preco);


// Erro 4 - Estoque estava sendo reduzido com texto.
// Corrigido para número.
produto.estoque = produto.estoque - 1;

console.log("Produto: " + produto.nome);
console.log("Preço com desconto: " + precoFinal);
console.log("Estoque atual: " + produto.estoque);