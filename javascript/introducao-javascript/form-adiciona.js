var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    // var nome = form.nome.value;
    // var peso = form.peso.value;
    // var altura = form.altura.value;
    // var gordura = form.gordura.value;
    // var imc = calculaImc(form.peso.value, form.altura.value);

    // var pacienteTr = document.createElement("tr");

    // var nomeTd = document.createElement("td");
    // var pesoTd = document.createElement("td");
    // var alturaTd = document.createElement("td");
    // var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    // nomeTd.textContent = nome;
    // pesoTd.textContent = peso;
    // alturaTd.textContent = altura;
    // gorduraTd.textContent = gordura;
    // imcTd.textContent = imc;

    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);

    var erros = validaPaciente(paciente);
    if(erros.length > 0) {
        console.log(erros);
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var msgsErro = document.querySelector("#msg-erro");
    msgsErro.innerHTML = "";

});

// botãoAdicionar.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("Seu botão foi clicado?!");
// });

// O scrit acima é uma forma de adicionar dados via botão submit

function obtemPacienteDoFormulario (form) {
    var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco!");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco!");
    }
    if (paciente.altura.length == 0) {
        erros.push("O altura não pode ser em branco!");
    }
    if (paciente.gordura.length == 0) {
        erros.push("O não pode ser em branco!");
    }

    // validação de peso e altura
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido!");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!");
    }
    return erros;

}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#msg-erro");
    ul.innerHTML = "";

    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}