// [ ] Escreva um programa onde, você cria uma função geradora de desconto. 
// - A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não,
// um booleano que diz se o cliente vai pagar a vista ou não)
// - Os descontos funcionam da seguinte forma: 
//   - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto 
//   - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto 
//   - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
//   - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto  
//   - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 
//   - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10% 
//   - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
//  - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
//   - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 
//   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
//   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto 
//   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
// - A função deve imprimir na tela: 
//  - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.       
// - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto.
// Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.


function somaDesconto(nomeCliente, value, firstPurchase, isCashPay) {
    if (firstPurchase && isCashPay) {
        if (value > 1000){}
        else if (value < 500){}
        else{}
    }

    if (firstPurchase && !isCashPay) {
        if (value > 1000){}
        else if (value < 500){}
        else{}
    }

    if (!firstPurchase && isCashPay) {
        if (value > 1000){}
        else if (value < 500){}
        else{}
    }

    if (!firstPurchase && !isCashPay) {
        if (value > 1000){}
        else if (value < 500){}
        else{}
    }

    if (firstPurchase && isCashPay) {
        if (value > 1000){}
        else if (value < 500){
            Math.random () * (20 - 10) + 10; 
        }
        else{}
    }

}