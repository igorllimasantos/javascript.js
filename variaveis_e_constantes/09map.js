let lista = ['Arroz' , 'feijao','carne','pao']

lista.map((item) => {
    console.log(item)
})

let listaNotas = [8,9,10,4.5]

listaNotas.map((notas) =>{
    let numero = notas + 1
    //console.log(numero)
})
console.log(" O tamanho da lista é :")
console.log(lista.length)

lista.push("Manteiga")
lista.push("Dtergente")

console.log(lista)
console.log(lista.length)