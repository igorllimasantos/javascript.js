/*function preparativoParaReceita(){
console.log("Deixar as vasilhas limpas")
console.log("Ter os ingredientes")
console.log("Pre aquecer o forno")
}

function rotina(){
    console.log("Comer alguma Coisa")
    console.log("escovar os dentes")
    console.log("...")

}
preparativoParaReceita()
rotina()

function soma(){
    let numeroA =25
    let numeroB = 12
    let soma = numeroA + numeroB
    console.log(soma)
}
soma()
*/

function soma(numeroA, numeroB){
    let soma = numeroA + numeroB
    console.log(soma)
}

soma(20,23)

function liquidificador(ingredientes){
    console.log("Estou Misturando : " + ingredientes)

}
liquidificador("banana")


function calcularMedia(notaA ,notaB,notaC){
    let soma = notaA + notaB + notaC
    let media = soma/3
    return media 
}

let media1 = calcularMedia(23,10,60)
let media2 = calcularMedia(10,20,30)

console.log(media1)
console.log(media2)