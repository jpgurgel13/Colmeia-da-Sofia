const botoes = document.querySelectorAll(".botao-fruta");
const nomeFruta = document.querySelector(".nome-fruta");

const frutas = {
  abacaxi: "Abacaxi",
  pera: "Pera",
  maca: "Maçã",
  banana: "Banana",
  limao: "Limão",
  melancia: "Melancia",
  uva: "Uva",
};
function tocarFruta(botao) {
  const fruta = botao.dataset.fruta;
  nomeFruta.textContent = frutas[fruta];

  const som = new Audio(`assets/sons/${fruta}.mp3`);
  som.play();
}
botoes.forEach((botao) => {
  botao.addEventListener("pointerdown", () => {
    tocarFruta(botao);
  });

  botao.addEventListener("click", (evento) => {
    if (evento.detail === 0) {
      tocarFruta(botao);
    }
  });
});
