/* feito por mim ! 
alunos = ["Alice", "Bruno", "Carolina", "Daniel", "Elisa", "Felipe", "Gabriela", "Hugo"]
let quantidade = alunos.length
let comVaga = 9
let salaLotada = 10 
console.log(quantidade)
if( salaLotada == quantidade){
    console.log("A sala ja está Lotada! " + quantidade)
    console.log(alunos)
}else if( comVaga = quantidade ){
    alunos.push("jõao")
    console.log("aluno 10 colado , pois a sala esta com menos de 10 alunos " + alunos)
    console.log(alunos)
}*/

let listaDealunos = ["Alice", "Bruno", "Carolina", "Daniel", "Elisa" ]
let alunoNovo = "Antonio"

if(listaDealunos.length < 10){
    listaDealunos.push(alunoNovo)
    console.log("Conseguiu adicionar  o aluno ")
}else(
    console.log("Atingiu o numero maximo de alunos ")
)