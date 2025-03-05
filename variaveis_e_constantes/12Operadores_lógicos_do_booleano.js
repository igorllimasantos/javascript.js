/*  
    Se eu passar na prova for true
        ir ao cinema
    Se NAO
        estudar mais
    SE passsarNaProva == true
        irAoCinema()

*/

let nota = 6
let notaMinimaPraPassar = 6

if(nota >= notaMinimaPraPassar){
   // console.log("Aluno passou ")
}else{
    //console.log("O aluno não Passou ")


}

let frutas = ['Banana','kiwi','Ameixa','Morango']
frutas.push("Abacate") // com esse push incluir o abacate na lista
console.log(frutas)
//se as frutas contem 'Abacate'
if (frutas.includes("Abacate")){
    console.log("A lista está completa")

}else{
    console.log("Esta faltando abacate")
}