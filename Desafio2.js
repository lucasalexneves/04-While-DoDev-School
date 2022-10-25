/*Caixa Eletrônico da DoDev
1. Solicite o nome e cpf do seu cliente
2. Ofereça a opção de saque ou depósito
3. Pergunte um valor
4. Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
5. Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total
6. Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar)
7. Exiba o saldo total
8. Exiba o maior valor inserido(independente de ser depósito ou saque)
9. Insira a média dos valores inseridos(independente de ser depósito ou saque)
REGRAS:
1- Não deve ser permitido sacar um valor não disponível no saldo.
2- Não deve ser permitido sacar nem depositar um valor negativo.*/

var nome = prompt("Digite seu nome") 
var cpf = parseInt(prompt("Digite o seu CPF"))
var saldoTotal = 0
var media = 0
var contador = 0
var maiorValor = 0
console.log("Olá ", nome, ". Seu cpf é: ", cpf)

var seguranca = true
while (seguranca){
    var opcao = prompt("Digite a opção: S para Saque e D para Depósito")

    var ValorInserido = parseFloat(prompt("Insira um valor:"))
    media = media + ValorInserido
    
    if (opcao == "S" && ValorInserido <= saldoTotal && ValorInserido > 0){
        saldoTotal = saldoTotal - ValorInserido
        contador++

    } else if (opcao == "D" && ValorInserido > 0){
        saldoTotal = saldoTotal + ValorInserido 
        contador++ 
    } else {
        console.log("Valor incorreto.")
    }

    
    if (ValorInserido > maiorValor){
    maiorValor = ValorInserido
    }

    var imputUsuario = prompt ("Digite 1 para continuar ou 2 para parar.")
    if(imputUsuario == 2){
        seguranca = false
    }else if (imputUsuario == 1){
        seguranca = true
    }
        
    
}

console.log("Saldo total na conta: ", saldoTotal)


console.log("O maior valor inserido é: ", maiorValor)

console.log("A média dos valores inseridos foi: ", media / contador)

console.log("Fim da operação")



