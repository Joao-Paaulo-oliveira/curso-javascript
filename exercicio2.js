/* Exercicio 2 - Estrutura de decisão
Percorrer a lista de Cidades
Contendo: [Belo Horioznte, Rio de Janeiro, Bahia, São Paulo]
Para cada item verificar se a cidade Belo Horioznte está presente na lista 
Printar nome da cidade 
caso esteja avisar 
caso não seja o elemento procurado, avisar 
Numero da execução 
*/


// Declara um array contendo nomes de cidades
const cidades = ['Bahia', 'Rio de Janeiro', 'Belo Horizonte', 'São Paulo']

// Percorre o array com forEach, acessando cada cidade e seu índice
cidades.forEach((cidade, indice) => {

    // Verifica se a cidade atual é 'Belo Horizonte'
    // Se for, imprime mensagem positiva; se não for, imprime mensagem negativa
    console.log(cidade === 'Belo Horizonte' 
        ? 'Cidade Belo Horizonte encontrada' 
        : 'Não é a cidade procurada')

    // Mostra o número da execução atual (índice + 1 para começar do 1)
    console.log(`Execução: ${indice + 1}`)

    // Exibe o nome da cidade atual
    console.log(`Nome: ${cidade}`)

    // Linha separadora para organização visual no console
    console.log('--------------')
});

