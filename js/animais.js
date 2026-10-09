const botoes = document.querySelectorAll(".botao-animal");
const nomeAnimal = document.querySelector(".nome-animal");

const animais = {
  cachorro: "Cachorro",
  gato: "Gato",
  macaco: "Macaco",
  galinha: "Galinha",
  abelha: "Abelha",
  vaca: "Vaca",
  cavalo: "Cavalo",
  leao: "Leão",
  elefante: "Elefante",
};
function tocarAnimal(botao) {
  const animal = botao.dataset.animal;
  nomeAnimal.textContent = animais[animal];

  const som = new Audio(`assets/sons/${animal}.mp3`);
  som.play();
}
botoes.forEach((botao) => {
  botao.addEventListener("pointerdown", () => {
    tocarAnimal(botao);
  });

  botao.addEventListener("click", (evento) => {
    if (evento.detail === 0) {
      tocarAnimal(botao);
    }
  });
});
