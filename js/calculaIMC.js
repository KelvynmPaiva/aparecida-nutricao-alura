let pacientes = document.querySelectorAll(".paciente")

for(i = 0; i < pacientes.length; i++ ){
    let paciente = pacientes[i]

    // BUSCANDO ELEMENTOS

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdIMC = paciente.querySelector(".info-imc")

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    // VALIDAÇÕES

    if(!pesoEhValido){
        tdPeso.textContent = "Peso Inválido"
        tdPeso.classList.add("paciente-invalido")
        pesoEhValido = false
    }

    if(!alturaEhValida){
        tdAltura.textContent = "Altura Inválida"
        tdAltura.classList.add("paciente-invalido") // Adiciona uma classe CSS no elemento. 
        alturaEhValida = false
    }
    
    if(alturaEhValida && pesoEhValido){
        let imc = calculaIMC(peso, altura)
        tdIMC.textContent = imc
    } 

    function calculaIMC(peso, altura){
        let imc = 0;
        imc = peso / (altura * altura)
        return imc.toFixed(2)
    }

    function validaPeso(peso){
        if(peso >= 0 && peso < 1000){
            return true
        } else {
            return false
        }
    }

    function validaAltura(altura){
        if(altura >= 0 && altura <= 3.0){
            return true
        } else {
            return false
        }
    }
}
