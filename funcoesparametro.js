

// Define a função gerarNome que recebe três parâmetros: nome, sobrenome e idade
function gerarNome(nome, sobrenome, idade) {

    // Exibe no console o nome completo e a idade formatados usando template string
    console.log(`Nome: ${nome} ${sobrenome}, Idade: ${idade}`)
}

// Chama a função passando "João", "Paulo" e 30 como argumentos
// Resultado: Nome: João Paulo, Idade: 30
gerarNome('João', 'Paulo', 30)

// Segunda chamada da função com outros dados
// Resultado: Nome: Felipe Saulo, Idade: 19
gerarNome('Felipe', 'Saulo', 19)
