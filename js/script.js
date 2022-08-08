function start(){
    var buttonCalculateIMC = document.querySelector('#btn-calculate-imc')
    buttonCalculateIMC.addEventListener('click', handleButtonClick)

    var inputWeight = document.querySelector('#input-weight')
    var inputHeight = document.querySelector('#input-height')

    inputWeight.addEventListener('input',handleButtonClick)
    inputHeight.addEventListener('input',handleButtonClick)

    handleButtonClick()
   
    
}

function calculateIMC(height, weight){
    return weight/ ( height*height )

}

function faixaPeso(imc){
    faixa_imc = ''
    if (imc >=16.0 && imc<=16.9){
        faixa_imc = 'Muito abaixo do peso'
    }else if (imc >=17.0 && imc<=18.4){
        faixa_imc = 'Abaixo do peso'
    }else if (imc >=18.5 && imc<=24.9){
        faixa_imc = 'Peso normal'
    }else if (imc >=25.0 && imc<=29.9){
        faixa_imc = 'Acima do peso'
    }else if (imc >=30.0 && imc<=34.9){
        faixa_imc = 'Obesidade Grau I'
    }else if (imc >=35.0 && imc<=40.0){
        faixa_imc = 'Obesidade Grau II'
    }else if (imc >40){
        faixa_imc = 'Obesidade Grau III'
    }else{
        faixa_imc = 'Valor inválido'
    }
    return faixa_imc               
}

function handleButtonClick(){
    var inputWeight = document.querySelector('#input-weight')
    var inputHeight = document.querySelector('#input-height')
    var imcResult = document.querySelector('#imc-result')
    var faixaPesoResult = document.querySelector('#imc-faixa-peso')
    var imc = 0
    var faixa_peso = ''
    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);
    console.log('peso: ',weight)
    if (weight !== 0 && height !== 0){
        imc = calculateIMC(height,weight)
        var formattedImc = imc.toFixed(2).replace('.', ',')
        faixa_peso = faixaPeso(imc)
        
        console.log(imc)
        imcResult.textContent = formattedImc;
        faixaPesoResult.textContent = faixa_peso
        
    }
    
}

start()