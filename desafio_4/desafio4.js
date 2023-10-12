listaGenerica = []
linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python']
linguagensDeProgramacao.push('Java')
linguagensDeProgramacao.push('Ruby')
linguagensDeProgramacao.push('GoLang')

function exibirLista(lista) {
    console.log(lista);
}

function exibirListaInvertida(lista) {
    lista.reverse();
    console.log(lista);
}

function calculaMediaDaLista(lista) {
    let soma = 0
    for (i=0; i < lista.length; i++) {
        soma = soma + lista[i]
    }

    const media = soma / lista.length
    console.log("A média é " + media);

}

listaDeNumeros = [6, 7, 7, 8, 6, 8]
calculaMediaDaLista(listaDeNumeros)

exibirLista(linguagensDeProgramacao)
exibirListaInvertida(linguagensDeProgramacao)