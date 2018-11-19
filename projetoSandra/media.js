function media(){
        nome=nota.nome.value;
        n1=nota.nota1.value;
        n2=nota.nota2.value;
        media=parseFloat((parseInt(n1)+parseInt(n2))/2);
        sts="";
        if(media>=7){
            sts="Aprovado";
        }
        if(media<7){
            sts="Reprovado";
        }
        alert('Aluno: '+nome+' Média= '+media+ ' Status = '+sts);
    }
