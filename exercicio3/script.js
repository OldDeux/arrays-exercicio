/* # Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`,
e faça o que se pede abaixo nas cópias dos arrays originais; */

const Original1 = [1, 2, 3]
const copia1 = Original1.slice()
const Original2 = [4, 5, 6]
const copia2 = Original2.slice()
const Original3 = [7, 8, 9]
const copia3 = Original3.slice()
//- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;

copia1.unshift(10)

console.log("primeiro array original1", Original1)
console.log("primeiro array copia1", copia1)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

copia2.pop()

console.log("primeiro array origina2", Original2)
console.log("primeiro array copia2", copia2)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

copia3.splice(1, 1)

console.log("primeiro array original3", Original3)
console.log("primeiro array copia3", copia3)