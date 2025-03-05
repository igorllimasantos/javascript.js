function avaliarAluno(porcentagemDePresenca,notA,notaB){
    let media = (notA + notaB)/2
    if(media > 6 && porcentagemDePresenca  > 75){
        return "passou"
    }else {
        return "Reprovou "
    }
}

 console.log (avaliarAluno(65,6,10))
 