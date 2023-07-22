let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener('input', function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        pacientes.forEach((paciente) => {
            let nome = paciente.querySelector(".info-nome").textContent;
            let expressão = new RegExp(this.value, "i" ) //Expressão Regular 

            if(!expressão.test(nome)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        })
    }else{
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel")
        });
    }
})
