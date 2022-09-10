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

console.log(altura);
console.log(peso);

var imc = peso / (altura * altura);

console.log(imc);