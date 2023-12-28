// Obtenha os lados do triângulo com o prompt
const  ladoA = parseFloat(window.prompt('Digite o comprimento do lado A:'));
const  ladoB = parseFloat(window.prompt('Digite o comprimento do lado B:'));
const  ladoC = parseFloat(window.prompt('Digite o comprimento do lado C:'));

// Calcule o perimetro do triângulo
const perimetro = ladoA + ladoB + ladoC

// Calcule a área usando a fórmula de Heron
const sp = perimetro / 2 // semi-perimetro
const area = Math.sqrt(sp * (sp - ladoA) * (sp - ladoB) * (sp - ladoC))

// Exibe o resultado em um alert
window.alert(`Perímetro do triângulo ${perimetro}\n área do triângulo ${area} `)

