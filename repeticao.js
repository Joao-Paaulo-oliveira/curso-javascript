
// Declara um array com nomes de cidades
const cidades = ['Belo Horizonte', 'Rio de Janeiro', 'São Paulo', 'Bahia']

// -------------------------------------------
// Usando forEach - forma moderna e simplificada
// -------------------------------------------
// .forEach percorre cada item do array automaticamente
// 'cidade' representa o valor atual em cada volta do laço
cidades.forEach((cidade) => {
    console.log(cidade) // Imprime o nome da cidade no console
})


// -------------------------------------------
// Usando o laço for tradicional
// -------------------------------------------
// i começa em 0 e vai até o tamanho do array (cidades.length)
// cidades[i] acessa a cidade na posição atual do índice i
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]) // Imprime a cidade atual no console
}
