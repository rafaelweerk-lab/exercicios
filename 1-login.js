// --- Sistema de login ---
// Objetivo deste código é simular um processo de login, onde o usuário tenta acessar o sistema usando um nome de usuário e senha pré-cadastrados. Identifique se há erros na lógica de execução do código e corrija-os, se necessário.


// Erro 1 - Os valores de usuário e senha cadastrados não devem ser alterados.
const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";

let tentativaUsuario = "Admin";
let tentativaSenha = "1234";

// Erro 2 - Foi usado "=" na comparação.
// Corrigido para usar comparação correta.
if (
  tentativaUsuario == usuarioCadastrado &&
  tentativaSenha == senhaCadastrada
) {
  console.log("Login realizado com sucesso!");
} 
// Erro 3 - Faltavam chaves no else.
// Foram adicionadas para organizar o bloco.
else {
  console.log("Usuário ou Senha incorretos!");
  console.log("Tente novamente mais tarde.");
}