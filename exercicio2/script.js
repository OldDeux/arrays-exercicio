/* # Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`: */

const numeros = [30,2,25,9,14]
const strings = ["carlos","julia", "victor"]
const mistura = ["gardenia", 100, true, 20, "vinicius", false]

console.log("array com numeros",numeros)
console.log("array com strings",strings)
console.log("array com numeros, strings e booleanos", mistura)

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log("quantidade de itens no array numeros:",numeros.length)
console.log("quantidade de itens no array strings:",strings.length)
console.log("quantidade de itens no array mistura:",mistura.length)

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log("primeiro item do primeiro array:",numeros[0])
console.log("segundo item do segundo array:",strings[1])
console.log("terceiro item do terceiro array:",mistura[2])

/* - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). 
A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.  */

console.log("o array 'numeros' tem o numero 30?",numeros.includes(30))
console.log("o array 'mistura' tem a string victor?",mistura.includes("victor"))