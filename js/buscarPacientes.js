let botaoBuscarPacientes = document.querySelector("#buscar-paciente");

botaoBuscarPacientes.addEventListener("click", function() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"
  );

  xhr.addEventListener("load", () => {
    let mensagemErroApi = document.querySelector("#mensagemErroApi");
    mensagemErroApi.classList.add("paciente-invalido");

    if (xhr.status == 200) {
      let resposta = xhr.responseText;
      let pacientesDaAPI = JSON.parse(resposta);

      pacientesDaAPI.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      mensagemErroApi.classList.remove("invisivel");
      mensagemErroApi.classList.add("paciente-invalido");
      mensagemErroApi.textContent = "Error ao buscar os pacientes";
    }
  });
  xhr.send(); //É responsavel por ENVIAR a requisição que criamos.
});
