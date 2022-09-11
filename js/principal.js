var titulo = document.querySelector(".titulo"); //Usando a função QuerySelector para selcionar uma classe e alterar o conteúdo da mesma.

titulo.textContent = "Nutricionista";

//trocando a querySelector por querySelectorAll para ter acesso a todos os pacientes, pois a querySelector retorna somente 1 paciente.

var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

//criando for para calcular IMC de todos os pacientes

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var calcImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    //Validação do peso, verificação se é menor ou igual a 0 ou maior ou igual a 700.

    if (peso <= 0 || peso >= 700) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdPeso.textContent = "Peso inválido!";
    }

    //Validação da Altura, verificação se é menor que 0 ou maior que 3.

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaValida = false;
        tdAltura.textContent = "Altura inválida!"; //Adicionando informação no campo visivel para usuário
    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);

        //Preenchendo o calculo do IMC na tabela, campo IMC.
        calcImc.textContent = imc.toFixed(2); //limitando as casas decimais para 2 com a função toFixed(2).

    }
}



