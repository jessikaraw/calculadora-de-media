
 var resultado = document.getElementById("resultado");

function calcularMedia(){
    var primeiraNota = parseInt(document.getElementById("nota1").value);
    var segundaNota = parseInt(document.getElementById("nota2").value);
    var media = (primeiraNota+segundaNota)/2; 
    console.log(media);
    
    if(media>=6){
        resultado.style.color="#f0f0f0"
        resultado.innerHTML = `Sua média é ${media}<br> Parabéns, você foi aprovado!`;
    }
    else{
        resultado.style.color="#f0f0f0"
        resultado.innerHTML = `Sua média é ${media}<br> Infelizmente, você foi reprovado.`;
       }      
       
 }
 