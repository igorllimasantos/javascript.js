/*let notaFinal = 35// reprovado

if (notaFinal >=60) {
    console.log("Você passou")
}else if( notaFinal < 60 && notaFinal >= 30  ){
    console.log("Prova de recuperação")
}else{
    console.log("Reprovação")
}*/

let pagouBoleto = false
let venceu = true

if(pagouBoleto == true && venceu == false){
    console.log("Compra confirmada")
}else if(pagouBoleto == false && venceu == false){
    console.log("Compra Aguardando Pagamento")
}else if(venceu == true){
    console.log("Compra Cancelada")
}