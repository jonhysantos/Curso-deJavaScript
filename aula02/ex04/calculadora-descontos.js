// Solicite ao usuário o valor da compra
let valorCompra = parseFloat(prompt('Digite o valor da compra R$:'))

// Solicite ao usuário a porcentagem de desconto
let porcetagemDesconto = parseFloat(window.prompt("Digite a porcentagem de desconto %:"))

// Calcule o valor do desconto
let desconto = (porcetagemDesconto / 100 ) * valorCompra

// Calcule o total com o desconto aplicado
let totalComDesconto = valorCompra - desconto

//Exibe o resultado usando templete string
window.alert(`O produto que custa ${valorCompra} com o desconto de ${desconto} passará a custar ${totalComDesconto}`)