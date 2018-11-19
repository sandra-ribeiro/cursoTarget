function mediadez() {
    var numero = 0;

    var notas = new Array(nota.nota1.value, nota.nota2.value, nota.nota3.value, nota.nota4.value,nota.nota5.value,nota.nota6.value,nota.nota7.value,nota.nota8.value,nota.nota9.value,nota.nota10.value);
    n1=0;
    var media = 0;
    for(var key in notas) {
        var numeroAluno = parseInt(key) + 1;
        document.write("<h3> a nota do aluno " + numeroAluno + " é " + notas[key] + "</h3>h3>");
        media +=notas[key];
    }
    document.write("<h2> A média dos alunos é " + media / notas.length + "</h2>");

}