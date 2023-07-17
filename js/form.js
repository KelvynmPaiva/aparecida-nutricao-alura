// Formulario
let botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener('click', (event) => {
    event.preventDefault();
 
    let form = document.querySelector("#form-adiciona");
    let paciente = puxaInformacoes(form);


    // Cria tr e td do paciente
    let pacienteTr = montaTr(paciente)

    let erros = validaPaciente(paciente)

    if(erros.length > 0 ){
        exibeMensagemDeErro(erros);
        return;
    }

    // Adiciona paciente a tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset() // Limpa o form

    //Exclui mensagens de erros anteriores
    let ul = document.querySelector("#mensagens-de-erro");
    ul.innerHTML = "";
});


function puxaInformacoes(props){
    let paciente = {
        nome: props.nome.value,
        peso: props.peso.value,
        altura: props.altura.value,
        gordura: props.gordura.value,
        imc: calculaIMC(props.peso.value, props.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    let pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    let erros = [];
    if(paciente.nome.length == 0) erros.push("Informe o nome do paciente")
    if(!validaPeso(paciente.peso)) erros.push("Peso é Inválido")
    if(paciente.peso.length == 0) erros.push("Informe o peso do paciente")
    if(!validaAltura(paciente.altura)) erros.push("Altura Inválida")
    if(paciente.altura.length == 0) erros.push("Informe a altura do pacinete")
    if(paciente.gordura.length == 0) erros.push("Informe a gordura do paciente")
    if(paciente.gordura >= 100 || paciente.gordura == 0) erros.push("Gordura Inválida")
    return erros;
}

function exibeMensagemDeErro(erros){
    let ul = document.querySelector("#mensagens-de-erro");
    ul.innerHTML = ""

    erros.forEach((erro) => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
