const nome = 'Jose';
const numero = 12;
const segundoNumero = 15;
const terceiroNumero = 16;

olaMundo();
olaFulano(nome);
dobraNumero(numero);
calculaMedia(numero, segundoNumero, terceiroNumero);
comparaNumeros (numero, segundoNumero);
elevaAoQuadrado(numero);

function olaMundo() {
    console.log('Olá, mundo!');
};

function olaFulano(nome) {
    console.log(`Olá, ${nome}`);
};

function dobraNumero(valor) {
    return valor * 2;
};

function calculaMedia(a, b, c) {
    return (a + b + c)/3;
};

function comparaNumeros(a, b) {
    compara = a - b;
    if(compara >= 0) {
        return a;
    } else {
        return b;
    };
};

function elevaAoQuadrado(a) {
    return a * a;
}