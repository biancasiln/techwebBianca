function calcularPeso(){

    //alert("Você entrou no arquivo Js, \n Desenvolva seu algoritmo")

    const peso = parseFloat(document.getElementById ("inppeso").value); //inputs
    console.table(peso);
if(peso>50){ 
    excd = (peso -50);
    multa= (excd*4);
    alert ("Quilos excedentes: "+ excd + "Kg"+ "\nE a multa aplicada será igual a R$" +multa.toFixed(0));
}
else{
   alert("Não houve excesso de peso")
}
}