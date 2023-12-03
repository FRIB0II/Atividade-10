soma = 0;
media = 0;

for(cont = 1; cont <= 4; cont ++){
    num = Number(prompt("Digite o " + cont + "º número: "));
    soma += num;
}

media = soma / 4;
alert("A soma é: " + soma);
alert("A média é: " + media);
