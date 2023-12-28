// solicite que o usuário digite o primeiro número
let n1 = window.prompt("digite o primeiro número:");

// Solicite que o usuário digite o segundo número
let n2 = window.prompt('Digite o segundo número:');

// Converta os valores inserido pelo usuário para num
n1 = parseFloat(n1);
n2 = parseFloat(n2);

// Exibe o resultado
window.alert(`Resultado da soma: entre ${n1} + ${n2} é ${n1 + n2}
Resultado da subtração entre ${n1} - ${n2} ${n1 - n2}
Resultado da multiplicação ${n1} * ${n2} ${n1 * n2}
Resultado da divisão ${n1} / ${n2} ${n1 / n2}`);
