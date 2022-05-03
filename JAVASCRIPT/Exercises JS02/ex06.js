// [X] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.


const nota = 1


switch (nota) {
    case 10: 
        console.log ("Você teve um desempenho abaixo do esperado.")
        break;

    case 9:
        console.log ("Seu desempenho não foi um dos melhores mas ainda sim se saiu bem.")
        break;

    case 8: 
    console.log ("Seu desempenho foi bom, mas ainda não é o que esperavamos")
    break;

    case 7: 
    console.log ("Seu desempenho foi otimo comparado aos outros competidores.")
    break;

    case 6: 
    console.log ("Seu desempenho foi maravilhoso, se saiu bem acima da media.")
    break;

    case 5: 
    console.log ("Seu desempenho foi espetacular, mas não o suficiente para ser classificado")
    break;

    case 4: 
    console.log ("Parabéns, você foi classificado em 4 lugar!")
    break;

    case 3: 
    console.log ("Parabéns, você foi classificado em 3 lugar!")
    break;

    case 2: 
    console.log ("Parabéns, você foi classificado em 2 lugar!")
    break;

    case 1: 
    console.log ("Parabéns, você foi classificado em 1 lugar!")
    break;

    default:
        console.log ("Não houve nota para você ser classificado, tente novamente na próxima!")
        break;
}

