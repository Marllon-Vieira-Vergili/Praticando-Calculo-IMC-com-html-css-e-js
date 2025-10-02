/**Declarando as variáveis */

const botaoCalcular = document.querySelector("#calcular");
const botaoLimpar = document.querySelector("#limpar");


const mostrarImc = document.querySelector("#valor-imc");
const calcularCategoriaImc = document.querySelector("#categoria-imc");



//Funções

const calcularImc = () =>{

    //Instanciando os valores que serão lidos no input, já convertidos
    const altura = parseFloat(document.querySelector("#altura").value);
    const peso = parseFloat(document.querySelector("#peso").value);

    //Condição para verificar se o usuário digitou o peso e altura
    if(isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0){
        alert("Digite valores válidos para a altura e o peso!");
        calcularCategoriaImc = "";
        return; //Caso contrário, ele passa o if normalmente
    }
    
    //variável para calcular o peso do IMC
    const calculoIMC = peso /(altura * altura);

    
    //Mostrar o IMC com duas cadas decimais
    mostrarImc.textContent = calculoIMC.toFixed(2);


    //Cada caso de condição, conforme o peso
    //Chamar a constante calcular categoria, e o conteúdo do texto dela
    if(calculoIMC < 18.5){
        calcularCategoriaImc.textContent = "Abaixo do Peso";
    }else if(calculoIMC > 18.5 && calculoIMC <= 24.9){
        calcularCategoriaImc.textContent = "Peso normal";
    }else if(calculoIMC >= 25 && calculoIMC <= 29.9){
        calcularCategoriaImc.textContent = "Sobrepeso";
    }else if(calculoIMC >= 30 && calculoIMC <= 34.9){
        calcularCategoriaImc.textContent = "Obesidade Grau I";
    }else if(calculoIMC >= 35 && calculoIMC <= 39.9){
        calcularCategoriaImc.textContent = "Obesidade Grau II";
    }else{
        calcularCategoriaImc.textContent = "Obesidade Grau III";
    }

};


//Eventos dos botões e ao clicar no formulário


/*Evento ao clicar em cima de ambos os formulários */

botaoCalcular.addEventListener("click", (e) =>{
   
    e.preventDefault();
    //Quando clicar em cima de calcular, chamar a função
    calcularImc();

});

/**Evento ao clicar em cima do botão limpar, resetará os valores */
botaoLimpar.addEventListener("click", (e) =>{
    e.preventDefault();
    document.querySelector("#altura").value = "";
    document.querySelector("#peso").value = "";
    mostrarImc.textContent = "";
    calcularCategoriaImc.textContent = "";
});