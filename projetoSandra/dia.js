function diaSemana() {

    var DiaSemana = new Date();
    DiaSemana = DiaSemana.getDay();
    switch (DiaSemana) {
        case 1:
            alert(" Segunda-feira ");
            break;
        case 2:
            alert(" Terça-feira ");
            break;
        case 3:
            alert(" Quarta-feira ");
            break;
        case 4:
            alert(" Quinta-feira ");
            break;
        case 5:
            alert(" Sexta-feira ");
            break;
        case 6:
        case 7:
            alert(" Fim de semana ");
            break;
        default:
            alert(" Dia inexistente ");
    }
}
function foo() {
    var _sexo = "F";
    if (_sexo == "F"){
        alert('Feminino')
    }
    if (_sexo == "M"){
        alert('Masculino')
    }
}