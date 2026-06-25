// var titulo = document.querySelector("h1");
// titulo.textContent = "Aparecida Nutricionista";

// var paciente = document.querySelector("#primeiro-paciente");

// var tdPeso = paciente.querySelector(".info-peso");
// var peso = tdPeso.textContent;

// var tdAltura = paciente.querySelector(".info-altura");
// var altura = tdAltura.textContent;

// var imc = peso / Math.pow(altura, 2);

// var tdImc = paciente.querySelector(".info-imc");
// tdImc.textContent = imc.toFixed(2);

// O modelo acima é a forma de manipular os dados de cada paciente
// para resultar o calculo do imc.
// Abaixo faremos a mesma manipulação de dados, porém com laço de repetição
// para que percorra todas as informações da tabela 


var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

// var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        paciente.classList.add("paciente-invalido");
        tdPeso.textContent = "Peso inválido!";
    }

    
    if (!alturaEhValida) {
        paciente.classList.add("paciente-invalido");
        tdAltura.textContent = "Altura inválida!";
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
        // toFixed() serve para determinar a quantidade de casa decimal de um float
    }

    // else {
    //     tdImc.textContent = "-";
    // }
}

    function calculaImc(peso, altura) {
        var imc = 0;
        imc = peso / Math.pow(altura, 2);
        return imc.toFixed(2);
    }

    function validaPeso(peso) {
        if (peso > 0 && peso <= 635.0) {
            return true;
    }
    
    else {
        return false;
        }
    }

    function validaAltura(altura) {
        if (altura > 0 && altura <= 2.70) {
            return true;
        }

        else {
            return false;
        }
    }