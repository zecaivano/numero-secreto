let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function clicarConsole() {
    console.log('O botão foi clicado!');
};

function clicarPrompt() {
    const cidade = prompt("Qual o nome da sua cidade?");
    alert(`Estive em ${cidade} em lembrei de você.`);
};

function clicarAlert() {
    alert('Eu amo JS');
};

function clicarSoma() {
    const a = parseInt(prompt('Digite um número:'));
    const b = parseInt(prompt('Digite outro número:'));
    alert(`A soma é ${a + b}`);
}