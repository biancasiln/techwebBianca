function calculaMedia(){
    let nome = document.getElementById("nomeAluno").value;
    let nota1 = parseFloat(document.getElementById("nota1").value); //inputs
    let nota2 = parseFloat(document.getElementById("nota2").value); //inputs

    let media = (nota1+nota2)/2;

    console.log(nota1);
    console.log(nota2);

    if(media>=7){
        exibeResultado(nome, media, "Aprovado");
    }
    else{
        alert (nome +" não atingiu a média, porém pode realizar a recuperação! \n Insira a nota da recuperação abaixo.");
   solicitaRecuperacao(nome, media);
}
}
function solicitaRecuperacao(nome, mediaInicial) {
    let rec = parseFloat(document.getElementById("rec").value); //inputs
    let mediaFinal =(rec + mediaInicial)/2;
    
    if(mediaFinal>=5){
        exibeResultado(nome, mediaFinal, "Aprovado na recuperação");
    } else {
        exibeResultado(nome, mediaFinal,"Reprovado")
    }

}

function exibeResultado(nome, media, status) {
    document.getElementById("resultado").innerHTML = "O aluno " +nome + " obteve média = " + media.toFixed(2) + "\n Resultado:" +status;
}