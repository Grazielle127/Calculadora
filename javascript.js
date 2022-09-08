function somar() {
    //alert("Click no botão");
    console.log("Mensagem click no botao");
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var soma = num1 + num2;

    
    document.getElementById("operador").value = soma;
    console.log(soma);

    document.getElementById("history").innerHTML += "<h1>" + num1 + "+" + num2 + "=" + soma +"</h1>";

}




function somar2() {
    document.getElementById("operador").value = 
     parseFloat(document.getElementById("num1").value) +
     parseFloat(document.getElementById("num2").value);
}


function subtrair() {
    //alert("Click no botão");
    console.log("Mensagem click no botao");
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var subtrair = num1 - num2;
    document.getElementById("operador").value = subtrair;
    console.log(subtrair);

    document.getElementById("history").innerHTML +=  "<h1>" + num1 + "-" + num2 + "=" + subtrair +"</h1>";
}

function subtrair2() {
    document.getElementById("operador").value = 
     parseFloat(document.getElementById("num1").value) +
     parseFloat(document.getElementById("num2").value);
}

function multiplicar() {
    console.log("Mensagem click no botao");
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var multiplicar = num1 * num2;

    document.getElementById("operador").value = multiplicar;
    console.log(multiplicar)

    document.getElementById("history").innerHTML +=  "<h1>" + num1 + "x" + num2 + "=" + multiplicar +"</h1>";
}

function multiplicar2() {
    document.getElementById("operador").value = 
    parseFloat(document.getElementById("num1").value) +
    parseFloat(document.getElementById("num2").value);

}
function dividir() {
    console.log("Mensagem click no botao");
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var dividir = num1 / num2;

    document.getElementById("operador").value = dividir;
    console.log(dividir)

    document.getElementById("history").innerHTML +=  "<h1>" + num1 + "/" + num2 + "=" + dividir +"</h1>";
}

function dividir2() {
    document.getElementById("operador").value = 
    parseFloat(document.getElementById("num1").value) +
    parseFloat(document.getElementById("num2").value);

}


