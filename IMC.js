
const calcular = document.getElementById("calcular");


function imc() {
    const nome = document.getElementById("nome");
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");
    const resultado = document.getElementById("resultado");

    if (nome.value == "" || altura.value == "" || peso.value == ""){
        alert("preencha todos os campos!");
    } else {
        alert("campos preenchidos!");
    }
}

calcular.addEventListener("click", imc);