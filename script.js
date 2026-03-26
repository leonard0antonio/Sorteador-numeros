// Seleção de elementos do DOM
const btnSortear = document.getElementById('btn-sortear');
const btnReiniciar = document.getElementById('btn-reiniciar');
const configArea = document.getElementById('config-area');
const resultArea = document.getElementById('result-area');

// Função principal de sorteio
function sortear() {
    const qtd = parseInt(document.getElementById('quantidade').value);
    const min = parseInt(document.getElementById('minimo').value);
    const max = parseInt(document.getElementById('maximo').value);
    const naoRepetir = document.getElementById('nao-repetir').checked;

    // Validações de segurança
    if (isNaN(qtd) || isNaN(min) || isNaN(max)) {
        alert("Por favor, preencha todos os campos com números.");
        return;
    }

    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.");
        return;
    }

    if (naoRepetir && qtd > (max - min + 1)) {
        alert("A quantidade de números é maior que o intervalo disponível para não repetir.");
        return;
    }

    const resultados = [];

    // Lógica de geração dos números
    while (resultados.length < qtd) {
        const numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

        if (naoRepetir) {
            if (!resultados.includes(numAleatorio)) {
                resultados.push(numAleatorio);
            }
        } else {
            resultados.push(numAleatorio);
        }
    }

    exibirResultado(resultados);
}

// Função para mostrar os números na tela
function exibirResultado(lista) {
    const display = document.getElementById('numeros-sorteados');
    display.innerHTML = lista.join('  '); // Adiciona os números com espaço

    // Alterna a visibilidade das seções
    configArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
}

// Função para resetar o sorteador
function reiniciar() {
    configArea.classList.remove('hidden');
    resultArea.classList.add('hidden');
}

// Event Listeners (Escutadores de eventos)
btnSortear.addEventListener('click', sortear);
btnReiniciar.addEventListener('click', reiniciar);