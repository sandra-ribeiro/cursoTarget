function media() {

    var notas = new Array( 1, 9, 9, 9, 9, 9, 9, 9, 9, 10)
    var media = 0;
    for (var key in notas) {
        var numeroAluno = parseInt(key) + 1;
        document.write("<h3> a nota do aluno " +   numeroAluno  + " é " + notas[key] + "</h3>")
        media += notas[key];
    }

    document.write("<h2> A média dos alunos é " + media / notas.length + "</h2>")

};
function mediaSimples() {
    var valor1 = document.getElementById("valor-um").value;
    var valor2 = document.getElementById("valor-dois").value;
    var media = (parseInt(valor1) + parseInt(valor2)/ 2);

    document.getElementById("resultado").innerText = media;
}
function soma() {
    var valor1 = document.getElementById("valor-um").value;
    var valor2 = document.getElementById("valor-dois").value;
    var soma = (parseInt(valor1) + parseInt(valor2));

    document.getElementById("resultado").innerText = soma;
}
function sub() {
    var valor1 = document.getElementById("valor-um").value;
    var valor2 = document.getElementById("valor-dois").value;
    var sub = (parseInt(valor1) - parseInt(valor2));

    document.getElementById("resultado").innerText = sub;
}
function multiplica() {
    var valor1 = document.getElementById("valor-um").value;
    var valor2 = document.getElementById("valor-dois").value;
    var mult = (parseInt(valor1) * parseInt(valor2));

    document.getElementById("resultado").innerText = mult;
}
function divide() {
    var valor1 = document.getElementById("valor-um").value;
    var valor2 = document.getElementById("valor-dois").value;
    var divide =0;
    if(parseInt(valor2) == 0){
        alert("zero não dá!");
    }else {
        divide = (parseInt(valor1) / parseInt(valor2));
    }
    document.getElementById("resultado").innerText = divide;
}