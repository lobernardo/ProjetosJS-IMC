const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    if (nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso/(altura*altura)).toFixed(2);

        let classificacao ='';

            if (valorIMC <18.5){
                classificacao = 'Abaixo do peso. Cuidado!';
            } else if (valorIMC <25){
                classificacao='com o peso ideal. Parabéns!';
            }else if (valorIMC <30){
                classificacao ='acima do peso. Exagerou no final de semana, né?';
            } else if (valorIMC <35){
                classificacao ='com obesidade grau 1.';
            } else if (valorIMC <40){
            classificacao ='com obesidade grau 2.';
            } else {
                classificacao ='com obesidade mórbida. Cuidado!';
            }


        resultado.textContent = `${nome}, seu IMC é: ${valorIMC}. Você está ${classificacao}`;
    } else{
        resultado.textContent = 'Preencha todos os campos'
    }

}


calcular.addEventListener('click', imc);