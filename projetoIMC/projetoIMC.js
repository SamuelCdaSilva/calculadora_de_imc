
const calcular = document.getElementById("calcular");

calcular.addEventListener("click", imc);

function imc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const texto = document.getElementById("texto");
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    if (nome == "" || altura == "" || peso == "") {
        alert("Preencha todos os campos!");
    } else if (valorIMC > 0 && valorIMC <= 18.5) {
        texto.innerHTML = nome + ", seu IMC é " + valorIMC + " sendo assim, você está abaixo do peso."
    } else if (valorIMC > 18.5 && valorIMC <= 25) {
        texto.innerHTML = nome + ", seu IMC é " + valorIMC + " sendo assim, você está com o peso ideal. Parabéns!!!."
    } else if (valorIMC > 25 && valorIMC <= 30) {
        texto.innerHTML = nome + ", seu IMC é " + valorIMC + " sendo assim, você está levemente acima do peso."
    } else if (valorIMC > 30 && valorIMC <= 35) {
        texto.innerHTML = nome + ", seu IMC é " + valorIMC + " sendo assim, você está com obesidade grau 1."
    } else if (valorIMC > 35 && valorIMC <= 40) {
        texto.innerHTML = nome + ", seu IMC é " + valorIMC + " sendo assim, você está com obesidade grau 2."
    } else if (valorIMC > 40) {
        texto.innerHTML = nome + ", seu IMC é " + valorIMC + " sendo assim, você está com obesidade grau 3. Cuidado!!!."
    }
}




