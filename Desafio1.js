/* Faça um algoritmo que receba 1 número e exiba no console a tabuada desse e dos
próximos 3 números. Utilizando o WHILE
Ex.: Número de entrada: 3
Saída:
Número: 3 Número: 4 Número: 5
3 x 1 = 3 4 x 1 =4 5 x 1 = 5
3 x 2 = 6 4 x 2 = 8 5 x 2 = 10
3 x 3 = 9 4 x 3 = 12 5 x 3 = 15
3 x 4 = 12 4 x 4 = 16 5 x 4 = 20
3 x 5 = 15 4 x 5 = 20 5 x 5 = 25
3 x 6 = 18 4 x 6 = 24 5 x 6 = 30
3 x 7 = 21 4 x 7 = 28 5 x 7 = 35
3 x 8 = 24 4 x 8 = 32 5 x 8 = 40
3 x 9 = 27 4 x 9 = 36 5 x 9 = 45
3 x 10 = 30 4 x 10 = 40 5 x 10 = 50 */

var numero = parseInt(prompt("Digite um número"))
var multiplicador = 1
var contador = 0

while (contador <= 3){
    console.log("Tabuada do Número: ", numero)
    while (multiplicador <= 10){
        console.log(numero, " x ", multiplicador, " = ", (numero * multiplicador))
        multiplicador++
    
   }
   
    contador++
    numero++
    multiplicador = 1
}

