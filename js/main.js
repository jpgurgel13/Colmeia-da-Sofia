const botoes = document.querySelectorAll(".botao-cor");
const nomeCor = document.querySelector(".nome-cor");

const cores = {
  vermelho: "Vermelho",
  azul: "Azul",
  verde: "Verde",
  amarelo: "Amarelo",
};

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const cor = botao.dataset.cor;
    nomeCor.textContent = cores[cor];
    nomeCor.style.color = `var(--botao-${cor})`;
  });
});
