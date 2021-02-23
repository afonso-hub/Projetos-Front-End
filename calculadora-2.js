while(true){
     var x= prompt("Digita o primeiro numero o N");
     var y= prompt("Digita o segundo numero o N");
     if(x=="N"|| y=="N") {
         break;
     }
     var resultado = Number(x) + Number(y);
     alert("Resultado da soma é: " + resultado);
}
