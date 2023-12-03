soma = 0;
media = 0;

tamanho = Number(prompt("Informe a quantidade de números a ser digitado: "));

for(cont = 1; cont <= tamanho; cont ++){
    num = Number(prompt("Digite o " + cont + "º número: "));
    soma += num;
}

media = soma / tamanho;
alert("A soma é: " + soma);
alert("A média é: " + media);
