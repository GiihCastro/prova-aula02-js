let name = prompt("Digite seu nome:")
let heightcm = parseFloat(prompt("Digite sua altura em centímetros:"))
let weight = parseFloat(prompt("Digite seu peso em kg:"))

let heightm = heightcm / 100

let imc = weight / (heightm * heightm)

let result

if (isNaN(imc) || imc < 0 || imc > 100) {
    console.log('Por favor, insira valores válidos')
} else if (imc < 16) {
    result = "Baixo peso muito grave"
    console.log(`Olá, ${name}!, seu IMC é ${imc.toFixed(2)} e sua classificação é ${result}`)
} else if (imc >= 16 && imc <= 16.99) {
    result = "Baixo peso grave"
    console.log(`Olá, ${name}!, seu IMC é ${imc.toFixed(2)} e sua classificação é ${result}`)
} else if (imc >= 17 && imc <= 18.49) {
    result = "Baixo peso"
    console.log(`Olá, ${name}!, seu IMC é ${imc.toFixed(2)} e sua classificação é ${result}`)
} else if (imc >= 18.5 && imc <= 24.99) {
    result = "Peso normal"
    console.log(`Olá, ${name}!, seu IMC é ${imc.toFixed(2)} e sua classificação é ${result}`)
} else if (imc >= 25 && imc <= 29.99) {
    result = "Sobrepeso"
    console.log(`Olá, ${name}!, seu IMC é ${imc.toFixed(2)} e sua classificação é ${result}`)
} else if (imc >= 30 && imc <= 34.99) {
    result = "Obesidade grau I"
    console.log(`Olá, ${name}!, seu IMC é ${imc.toFixed(2)} e sua classificação é ${result}`)
} else if (imc >= 35 && imc <= 39.99) {
    result = "Obesidade grau II"
    console.log(`Olá, ${name}!, seu IMC é ${imc.toFixed(2)} e sua classificação é ${result}`)
} else {
    result = "Obesidade grau III"
    console.log(`Olá, ${name}!, seu IMC é ${imc.toFixed(2)} e sua classificação é ${result}`)
}