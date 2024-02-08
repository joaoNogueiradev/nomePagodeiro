let nomeMes = '';
let nomeDia = '';

mes.onchange = () => {
    switch(mes.value.toLowerCase()){
        case 'janeiro':
            nomeMes = 'Rei'
        break;
        case 'fevereiro':
            nomeMes = 'Mô'
        break;
        case 'março':
            nomeMes = 'Cupido'
        break;
        case 'abril':
            nomeMes = 'Apaixonado'
        break;
        case 'maio':
            nomeMes = 'Pagodeiro'
        break;
        case 'junho':
            nomeMes = 'Cara perfeito'
        break;
        case 'julho':
            nomeMes = 'Mensageiro'
        break;
        case 'agosto':
            nomeMes = 'Perturbado'
        break;
        case 'setembro':
            nomeMes = 'Gueri gueri'
        break;
        case 'outubro':
            nomeMes = 'Coração'
        break;
        case 'novembro':
            nomeMes = 'Linda voz'
        break;
        case 'dezembro':
            nomeMes = 'Criado mudo'
        break;
    }

    nome.innerHTML = `${nomeMes + nomeDia}`;
}

dia.onchange = () =>{
    if (dia.value >= 1 && dia.value <= 3){
        nomeDia = ' que tanto fez ou tanto faz'
    } else if (dia.value >= 4 && dia.value <= 6){
        nomeDia = ' que desabou o barraco' 
    } else if (dia.value >= 7 && dia.value <= 9){
        nomeDia = ' que largou o freio' 
    } else if (dia.value >= 10 && dia.value <= 12){
        nomeDia = ' que quer futicar' 
    } else if (dia.value >= 13 && dia.value <= 15){
        nomeDia = ' que tem fogo na roupa' 
    } else if (dia.value >= 16 && dia.value <= 18){
        nomeDia = ' que se apaixonou pela pessoa errada' 
    } else if (dia.value >= 19 && dia.value <= 21){
        nomeDia = ' que desliga e vem depressa' 
    } else if (dia.value >= 22 && dia.value <= 24){
        nomeDia = ' que está à deriva' 
    } else if (dia.value >= 25 && dia.value <= 27){
        nomeDia = ' que segura o samba' 
    } else {
        nomeDia = ' que ninguém ama'
    }

    nome.innerHTML = `${nomeMes + nomeDia}`;
}

// const meses = [
//     'Rei', 'Mô', 'Cupido', 'Apaixonado', 'Pagodeiro', 'Cara perfeito',
//     'Mensageiro', 'Perturbado', 'Gueri gueri', 'Coração', 'Linda voz', 'Criado mudo'
// ];

// const dias = [
//     'que tanto fez ou tanto faz', 'que desabou o barraco', 'que largou o freio',
//     'que quer futicar', 'que tem fogo na roupa', 'que se apaixonou pela pessoa errada',
//     'que desliga e vem depressa', 'que está à deriva', 'que segura o samba',
//     'que ninguém ama'
// ];

// mes.onchange = () => {
//     const indice = mes.selectedIndex;
//     nomeMes = meses[indice];
// };

// dia.onchange = () => {
//     const indice = dia.value - 1;
//     nomeDia = dias[indice] || 'que ninguém ama';
//     nome.innerHTML = `${nomeMes} ${nomeDia}`;
// };