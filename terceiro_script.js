var num1 = Number(prompt("Digite o primeiro número: "));
var num2 = Number(prompt("Digite o segundo número: "));

var soma = 0;

for (var cont = num1; cont <= num2; cont++) {
    if (cont % 2 !== 0) {
        soma += cont;
    }
}

alert("A soma de todos os números ímpares no intervalo é: " + soma);