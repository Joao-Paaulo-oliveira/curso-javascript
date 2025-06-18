var idade = 18

// Operadores relacionais:

// >   : maior que
// <   : menor que
// >=  : maior ou igual a
// <=  : menor ou igual a
// ==  : igual a (compara apenas o valor)
// === : estritamente igual (compara valor e tipo)
// !=  : diferente de (compara apenas o valor)
// !== : estritamente diferente (valor ou tipo diferente)

// Exemplo principal com if-else:
if (idade >= 18) { // verifica se a idade é maior ou igual a 18
   console.log('Pode entrar')
} else if (idade == 17) { // verifica se a idade é igual a 17
   console.log('Ano que vem você pode entrar')
} else { // para qualquer idade menor que 17
   console.log('Não pode entrar')
}

// Exemplos extras de operadores para consulta:
console.log('--- Exemplos de Operadores ---')

console.log(idade > 18)   // false -> 18 não é maior que 18
console.log(idade < 18)   // false -> 18 não é menor que 18
console.log(idade >= 18)  // true  -> 18 é maior ou igual a 18
console.log(idade <= 17)  // false -> 18 não é menor ou igual a 17
console.log(idade == 18)  // true  -> compara apenas o valor
console.log(idade === "18") // false -> valor é igual, mas tipo é diferente (número vs string)
console.log(idade != 20)  // true  -> 18 é diferente de 20
console.log(idade !== "18") // true -> número 18 não é estritamente igual à string "18"
