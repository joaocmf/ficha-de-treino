
const treinos = document.querySelector('.treinos');
const btnVoltar = document.getElementById('btnVoltar');
const btnProx = document.getElementById('btnProx');

let currentIndex = 0;
const totalTreinos = document.querySelectorAll('.treino').length;

function atualizarCarrossel() {
    const offset = -currentIndex * 300; // 300px é a largura do container
    treinos.style.transform = `translateX(${offset}px)`;

    // Habilitar ou desabilitar botões conforme o índice atual
    btnVoltar.disabled = currentIndex === 0;
    btnProx.disabled = currentIndex === totalTreinos - 1;
}

function voltar() {
    if (currentIndex > 0) {
        currentIndex--;
        atualizarCarrossel();
    }
}

function avancar() {
    if (currentIndex < totalTreinos - 1) {
        currentIndex++;
        atualizarCarrossel();
    }
}
