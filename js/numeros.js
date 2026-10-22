const botoes = document.querySelectorAll(".botao-numero");
const nomeNumero = document.querySelector(".nome-numero");

const numeros = {
  1: "Um",
  2: "Dois",
  3: "Três",
  4: "Quatro",
  5: "Cinco",
  6: "Seis",
  7: "Sete",
  8: "Oito",
  9: "Nove",
  10: "Dez",
};
function tocarNumero(botao) {
  const numero = botao.dataset.numero;
  nomeNumero.textContent = numeros[numero];

  const som = new Audio(`assets/sons/${numero}.mp3`);
  som.play();
}
botoes.forEach((botao) => {
  botao.addEventListener("pointerdown", () => {
    tocarNumero(botao);
  });

  botao.addEventListener("click", (evento) => {
    if (evento.detail === 0) {
      tocarNumero(botao);
    }
  });
});
