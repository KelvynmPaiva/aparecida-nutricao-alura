let tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", (event) => {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function (){
        event.target.parentNode.remove();
    }, 500)
    
})

/*
    Target - É o alvo do clique.

    This - É o elemento que esta atrelado ao evento, o pai do evento.

    parentNode - É o pai do alvo, ou seja, se refere ao elemeto pai do target.
*/ 
