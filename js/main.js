const botaoVermelho = document.querySelector("[data-cor='vermelho']");
const botaoAmarelo = document.querySelector("[data-cor='amarelo']");
const botaoVerde = document.querySelector("[data-cor='verde']");
const botaoAzul = document.querySelector("[data-cor='azul']");

const nomeCor = document.querySelector(".nome-cor");

botaoVermelho.addEventListener("click", () => {
  nomeCor.textContent = "Vermelho";
  nomeCor.style.color = "var(--botao-vermelho)";
});

botaoAmarelo.addEventListener("click", () => {
  nomeCor.textContent = "Amarelo";
  nomeCor.style.color = "var(--botao-amarelo)";
});

botaoVerde.addEventListener("click", () => {
  nomeCor.textContent = "Verde";
  nomeCor.style.color = "var(--botao-verde)";
});

botaoAzul.addEventListener("click", () => {
  nomeCor.textContent = "Azul";
  nomeCor.style.color = "var(--botao-azul)";
});
