const botoes = document.querySelectorAll(".botao-cor");
const nomeCor = document.querySelector(".nome-cor");

const cores = {
  vermelho: "Vermelho",
  azul: "Azul",
  verde: "Verde",
  amarelo: "Amarelo",
};

function tocarCor(botao) {
  const cor = botao.dataset.cor;
  nomeCor.textContent = cores[cor];
  nomeCor.style.color = `var(--botao-${cor})`;

  const som = new Audio(`assets/sons/${cor}.mp3`);
  som.play();
}

botoes.forEach((botao) => {
  botao.addEventListener("pointerdown", () => {
    tocarCor(botao);
  });

  botao.addEventListener("click", (evento) => {
    if (evento.detail === 0) {
      tocarCor(botao);
    }
  });
});
