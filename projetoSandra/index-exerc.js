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