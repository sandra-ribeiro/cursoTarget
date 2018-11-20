function carregaImagens() {
    var imagens = new Array("img1","img2","img3","img4","img5","img6");
    for (key in imagens) {
        var numero = parseInt(key) + parseInt(1);
        var ele = "img" + numero;
        document.getElementById(ele).src = "images/"+imagens[key]+".jpg";
        document.getElementById(ele).style.width = "100px";
        document.getElementById(ele).style.height = "100px";
    }
}
function Inserir(objeto) {
    var imagens = new Array("img1","img2","img3","img4","img5","img6");
    for(key in imagens) {
        var numero = parseInt(key) + parseInt(1);
        var ele = "img" + numero;
        var objNovoParagrafo = document.createElement('p');
        var objNovaImagem = document.getElementById(ele).src = "images/" + "malvadofavor.jpg";
    }
}

function Insere(objeto) {
    var imagens = new Array("img1","img2","img3","img4","img5","img6");
    var objNovoParagrafo = document.createElement('p');
    var objNovaImagem = document.getElementById("img1").src = "images/"+"img5.jpg";
    objNovoParagrafo.onclick = function () { this.parentNode.removeChild(this); };
}
