let podeDirigir = true
let stringTrue  = "true"

console.log(podeDirigir)

console.log("O tipo da variavel pode dirigir é " + typeof podeDirigir)
console.log("O tipo da variavel stringTrue é " + typeof stringTrue)


let nome1 = "Igor"
let nome2 = "Igor"


console.log(nome1 == nome2)


let ehIgual = (nome1 == nome2)

console.log(ehIgual)

let numeroA = 20
let numeroB = 15
let comparacao = (numeroA == numeroB)

console.log("Os numeros são iguais  ?" + comparacao) 


/* 
maior :>
menor :<
igual : =
*/

console.log("10 é maior que 20")
console.log(10 >20 )

let comparacaoDois = (15 < 100)
//console.log("Quinze é menor do que 100?" + comparacaoDois)

let lista = ["elemento A","Elemento B"]
let inclui = lista. includes("Elemento B")
console.log(inclui) 

let nota1 = 70
let nota2 = 70
let nota3 = 70
let nota4 = 1000
///Condição && 
let passouDeAno = (nota1 > 60 && nota2 > 60 && nota3 > 60 && nota4>60)
console.log("O aluno passou de ano  ?" + passouDeAno)


let nome = "Igor"
let sobrenome = "Santos"

let ehIgorSantos = (nome == "Igor" && sobrenome =="Santos")
console.log("Esse nome é igor Lima ?" + ehIgorSantos)

let passouNoEnem = false 
let passouNoVestibular = false
let ehtransferencia = false

// || 

let entrouNaFaculdade = (passouNoEnem == true || passouNoVestibular == true || ehtransferencia == true)


//console.log("Entrou na Faculdade ? " + entrouNaFaculdade )

let passouEmMatematica = !true
console.log("Passou em Matematica " + passouEmMatematica )
