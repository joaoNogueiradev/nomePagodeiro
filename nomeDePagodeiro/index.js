let nomeMes = '';
let nomeDia = '';

mes.onchange = () => {
    switch(mes.value.toLowerCase()){
        case 'janeiro':
            mes = 'Rei'
        break;
        case 'fevereiro':
            mes = 'Mô'
        break;
        case 'março':
            mes = 'Mô'
        break;
        case 'abril':
            mes = 'Mô'
        break;
        case 'maio':
            mes = 'Mô'
        break;
        case 'junho':
            mes = 'Mô'
        break;
        case 'julho':
            mes = 'Mô'
        break;
        case 'agosto':
            mes = 'Mô'
        break;
        case 'setembro':
            mes = 'Mô'
        break;
        case 'outubro':
            mes = 'Mô'
        break;
        case 'novembro':
            mes = 'Mô'
        break;
        case 'dezembro':
            mes = 'Mô'
        break;
    }
}
dia.onchange = () =>{
    if (dia.value >= 1 && dia.value < 3){
        dia = 'que tanto fez ou tanto faz'
    } else if (dia.value >= 1 && dia.value < 3){
        dia = 'que desabou o barraco' 
    } else if (dia.value >= 1 && dia.value < 3){
        dia = 'que desabou o barraco' 
    } else if (dia.value >= 1 && dia.value < 3){
        dia = 'que desabou o barraco' 
    } else if (dia.value >= 1 && dia.value < 3){
        dia = 'que desabou o barraco' 
    } else if (dia.value >= 1 && dia.value < 3){
        dia = 'que desabou o barraco' 
    } else if (dia.value >= 1 && dia.value < 3){
        dia = 'que desabou o barraco' 
    } else if (dia.value >= 1 && dia.value < 3){
        dia = 'que desabou o barraco' 
    } else if (dia.value >= 1 && dia.value < 3){
        dia = 'que desabou o barraco' 
    } else {

    }
}

nome.innerHTML = `${nomeMes} ${nomeDia}`;