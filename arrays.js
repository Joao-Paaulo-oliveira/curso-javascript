const times = ['Cruzeiro', 'Barcelona', 'Real Madrid', 'Palmeiras'] // Define um array constante 'times'.

console.log('Acessando o primeiro time: ' + times[0]) // Mostra o primeiro item do array ('Cruzeiro'), usando o índice 0.
console.log('Tamanho do array' + times.length) // Mostra quantos itens o array tem (4).

times.push('Flamengo') // Adiciona 'Flamengo' no final.
times.pop() // Remove o último item ('Flamengo' é removido).
times.unshift('Galo') // Adiciona 'Galo' no início.
times.shift() // Remove o primeiro item ('Galo' é removido).

console.log(times) // Imprime o array final, que é o mesmo inicial