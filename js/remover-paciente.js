var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

        event.target.parentNode.remove(); // O target identifica quem sofreu o evento(duplo clique), para remover somente quem sobre o evento.
        console.log(tabela);

    });



