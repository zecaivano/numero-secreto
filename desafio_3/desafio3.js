calculaIMC (90, 1.74);

const numero = 6;
let fator = calculaFatorial (numero);
console.log(fator);

const reais = converteDolarEmReais(numero);
console.log(reais);

calculaAreaEPerimetro(10,2);
calculaCirculo(5);
exibeTabuada(7);


function calculaIMC(peso, altura) {
    return peso/(altura * altura);
};

function calculaFatorial (numero) {
    if (numero > 1) {
        return fatorial = numero*calculaFatorial(numero - 1);
    }
    else {
        return 1;
    };
};

function converteDolarEmReais(numero) {
    cotacaoDolar = 4.80;
    valorEmReais = numero * cotacaoDolar;
    return valorEmReais.toFixed(2);
};

function calculaAreaEPerimetro(base, altura) {
    const area = base * altura;
    const perimetro = base * 2 + altura * 2;
    console.log(`A área é ${area.toFixed(2)} m² e o perímetro é ${perimetro.toFixed(2)}m.`);
};

function calculaCirculo (raio) {
    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
    console.log(`A área do círculo vale ${area.toFixed(2)} m² e sua circunferência vale ${perimetro.toFixed(2)} m.`);
}

function exibeTabuada(numero) {
    console.log(`Tabuada do ${numero}: `);
    for (let i = 1; i <= 10; i++) {
        console.log(` ${numero} x ${i} = ${numero * i}`)
    }
}