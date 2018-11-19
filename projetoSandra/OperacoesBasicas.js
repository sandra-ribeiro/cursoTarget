function soma(){
    var numeroUm = document.getElementById("valor-um").value;
    var numeroDois= document.getElementById("valor-dois").value;
    alert(parseInt(numeroUm) + parseInt(numeroDois));
}
function mensagem() {
    alert("Botão Clicado")
}

function somaDois(){
    const NOME = "DESSA FUÇÃO"
    var parcela1 = parseInt(document.getElementById('valor-um').value);
    var parcela2 = parseInt(document.getElementById('valor-dois').value);
    let soma = parcela1 + parcela2;
    alert(soma);
    /* console.log(soma);*/
}
function multDois(){
    const NOME = "DESSA FUÇÃO"
    var parcela1 = parseInt(document.getElementById('valor-um').value);
    var parcela2 = parseInt(document.getElementById('valor-dois').value);
    let mult = parcela1 * parcela2;
    alert(mult);
    /* console.log(soma);*/
}
function divDois(){
    const NOME = "DESSA FUÇÃO"
    var parcela1 = parseInt(document.getElementById('valor-um').value);
    var parcela2 = parseInt(document.getElementById('valor-dois').value);
    if (parseInt(parcela2) == null || parseInt(parcela2) == 0) {
        alert('número inválido');
    }else {
        let mult = parcela1 / parcela2;
        alert(mult);
        /* console.log(soma);*/
    }
}
