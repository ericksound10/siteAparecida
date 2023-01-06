var botaoImportar = document.querySelector("#importar-paciente");

botaoImportar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master11/pacientes.json");

    xhr.addEventListener("load", function () {
        var erroImport = document.querySelector("#erroImport");
        //Se a requisição for true 
        if (xhr.status == 200) {
            erroImport.classList.add("ocultaPaciente");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroImport.classList.remove("ocultaPaciente");
        }
    });

    xhr.send();
});