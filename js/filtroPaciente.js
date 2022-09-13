var filtro = document.querySelector(".filtroPaciente");

filtro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {

        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            //Expressão Regular para melhorar filtro
            var filtroExp = new RegExp(this.value, "i");

            if (!filtroExp.test(nome)) {
                paciente.classList.add("ocultaPaciente");

            } else {
                paciente.classList.remove("ocultaPaciente");

            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("ocultaPaciente");
        }
    }
});