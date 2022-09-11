var titulo = document.querySelector(".titulo"); //Usando a função QuerySelector para selcionar uma classe e alterar o conteúdo da mesma.

titulo.textContent = "Nutricionista";

//Para caucular o IMC foi criado a variavel paciente para extrair a informação do ID 'primeiro-paciente'
//Foi criado as variaveis de 'peso' e 'altura' com o conteúdo do peso e altura do primeiro paciente.
//Foi criado a variavel imc para armazenar o calculo de peso /peso / (altura * altura)

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//Validação do peso, verificação se é menor que 0 ou maior que 999

if (peso < 0 || peso > 999) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdPeso.textContent = "Peso inválido!";
}

//Validação da Alturea, verificação se é menor que 0 ou maior que 5

if (altura < 0 || altura > 5) {
    console.log("Altura inválida");
    alturaValida = false;
    tdAltura.textContent = "Altura inválida!"; //Adicionando informação no campo visivel para usuário
}

else {
    var imc = peso / (altura * altura);

//Preenchendo o calculo do IMC na tabela, campo IMC

var calcImc = document.querySelector(".info-imc");
calcImc.textContent = imc;

}

