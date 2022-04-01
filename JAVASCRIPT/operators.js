/* OPERADORES aritméticos
   + Adição
   - Subtração
   * Multiplicação
   / Divisão
   % Resto
   ++ Incremento - adiciona 1 numero a cada linha posta (caso não utilize linha, se põe antes da constante)
   --  Decremento - subtrai 1 numero a cada linha posta (caso não utilize linha, se põe antes da constante) 
   ** Exponencial - usa-se para descobrir a potenciação ex: 2**3 = 8
*/



/* OPERADORES DE ATRIBUIÇÃO
   = Atribuição 
   +=  Adição
   -=  Subtração
   /=  Divisão
   *=  Multiplicação
   %=  Resto
*/


let firstNumber = 10

firstNumber = firstNumber + 2  
// ambos os 2 são iguais, pode se utilizar qualquer uma atribuição para incluir qualquer numero sem precisar
// fazer um codigo maior
firstNumber += 2

// console.log(firstNumber)


/* OPERADORES DE COMPARAÇÃO
== -> Igual // Ele compara o valor, mas não compara o tipo do valor - NUNCA USE ESSE AQUI
=== -> TOTALMENTE Igual // Ele verifica o tipo do dado!

!= -> Diferente // Ele compara o valor, mas não compara o tipo do valor - NUNCA USE ESSE AQUI
!== -> TOTALMENTE Diferente // Ele verifica o tipo do dado!
*/

   
/* OPERADORES DE COMPARAÇÃO
>   -> maior
>=   -> maior ou igual
<   -> menor
<=   -> menor ou igual
*/

 const firstNumber1 = 10 
 const seccondNumber = 20

// console. log(firstNumber1 >= /*ou <=*/ seccondNumber)


/* OPERADORES LÓGICOS
   && --> E // FILHO OBEDIENTE 
    true && true = true
    true && false = false
    false && false = false
    CASO ESTIVER ALGUM ITEM FALSO, TUDO É FALSO

|| > Ou // FILHO ESPERTINHO
    true || true = true
    true || false = true
    false || false = false
    CASO ESTIVER ALGUM ITEM VERDADEIRO, É VERDADEIRO


!    -> Negação // DO CONTRA 
     !true = false
     !false = true
     FAZ A INVERSÃO DE VALORES
*/


/* OPERADOR TERNÁRIO OU CONDICIONAL
? se
: se não
*/

const rain = false
const umbrela = Irain ? 'levar guarda-chuva' : 'deixar guarda-chuva'

// PRECISO TRANSFERIR MEU DINHEIRO
const balance = true
const isNotBlocked = true
const accountExist = false
const transfer0k = balance && isNotBlocked && accountExist ? 'TRANSFERENCIA REALIZADA' : 'TRANSFERENCIA NEGADA'

/* OPERADORES typeof e delete */
   // Servem para descobrir o tipo da variavel
   // e para deletar um item de um objeto

const myNumber = 20  
const myString = "Olá, sou uma string"
const myObject = {
    name: "Object",
    age:20,
    height:1.9}

    delete myObject.name
