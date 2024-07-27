

const calcular = document.getElementById('calcular')



function imc () {
    const nome = document.getElementById('nome')

    const altura = document.getElementById('altura')

    const peso = document.getElementById('peso')

    const resultado = document.getElementById('resultado')

    if (nome.value !== '' && altura.value !== '' && peso.value !== '') {
        const valorIMC = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classificação = ''

        if (valorIMC < 18.5) {
            classificação = 'Abaixo do peso'
        } else if (valorIMC < 25) {
            classificação ='com peso ideal'
        } else if (valorIMC < 30) {
            classificação = 'sobre peso'
        } else if (valorIMC < 35) {
            classificação = 'obesidade grau 1'
        } else if (valorIMC < 40) {
            classificação = 'obesidade grau 2'
        } else {
            classificação = 'obesidade morbida, cuidade você vai morrer se não parar de comer!'
        }

        resultado.innerHTML = `${nome.value} o seu IMC é ${valorIMC} e você está classificado como ${classificação}!`
    }else {
        resultado.innerHTML = 'Preencha todos os campos!!'
    }
}

calcular.addEventListener('click',imc)

