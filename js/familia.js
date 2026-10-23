const botoes = document.querySelectorAll(".botao-familia");
const nomeFamilia = document.querySelector(".nome-familia");

const pessoas = {
  papai: "Papai",
  mamae: "Mamãe",
};
function tocarNomePessoa(botao) {
  const pessoa = botao.dataset.pessoa;
  nomeFamilia.textContent = pessoas[pessoa];

  const som = new Audio(`assets/sons/${pessoa}.mp3`);
  som.play();
}
botoes.forEach((botao) => {
  botao.addEventListener("pointerdown", () => {
    tocarNomePessoa(botao);
  });

  botao.addEventListener("click", (evento) => {
    if (evento.detail === 0) {
      tocarNomePessoa(botao);
    }
  });
});

const entradasFoto = document.querySelectorAll('input[type="file"]');
const TAMANHO_FOTO = 400;

function mostrarFoto(entrada, foto) {
  const cartao = entrada.closest(".cartao-pessoa");
  const imagem = cartao.querySelector(".botao-familia img");
  imagem.src = foto;

  cartao.classList.add("com-foto");
  cartao.classList.remove("editando");
}

function reduzirFoto(imagemOriginal) {
  const folha = document.createElement("canvas");
  folha.width = TAMANHO_FOTO;
  folha.height = TAMANHO_FOTO;
  const pincel = folha.getContext("2d");

  const largura = imagemOriginal.naturalWidth;
  const altura = imagemOriginal.naturalHeight;
  const lado = Math.min(largura, altura);
  const recorteX = (largura - lado) / 2;
  const recorteY = (altura - lado) / 2;

  pincel.drawImage(
    imagemOriginal,
    recorteX,
    recorteY,
    lado,
    lado,
    0,
    0,
    TAMANHO_FOTO,
    TAMANHO_FOTO,
  );

  return folha.toDataURL("image/jpeg", 0.85);
}

function salvarFoto(chave, foto) {
  try {
    localStorage.setItem(chave, foto);
  } catch (erro) {
    console.warn("Não foi possível guardar a foto:", erro);
  }
}

function lerFotoSalva(chave) {
  try {
    return localStorage.getItem(chave);
  } catch (erro) {
    return null;
  }
}

function receberFoto(entrada) {
  const arquivo = entrada.files[0];
  if (!arquivo) return;

  const endereco = URL.createObjectURL(arquivo);
  const imagemOriginal = new Image();

  imagemOriginal.onload = () => {
    const foto = reduzirFoto(imagemOriginal);
    URL.revokeObjectURL(endereco);
    mostrarFoto(entrada, foto);
    salvarFoto(entrada.id, foto);
  };
  imagemOriginal.src = endereco;

  entrada.value = "";
}

entradasFoto.forEach((entrada) => {
  const fotoSalva = lerFotoSalva(entrada.id);
  if (fotoSalva) {
    mostrarFoto(entrada, fotoSalva);
  }

  entrada.addEventListener("change", () => {
    receberFoto(entrada);
  });
});

const TEMPO_PARA_SEGURAR = 800;

function permitirTrocarAoSegurar(botao) {
  const cartao = botao.closest(".cartao-pessoa");
  let temporizador;

  function cancelarEspera() {
    clearTimeout(temporizador);
  }

  botao.addEventListener("pointerdown", () => {
    temporizador = setTimeout(() => {
      cartao.classList.add("editando");
    }, TEMPO_PARA_SEGURAR);
  });

  botao.addEventListener("pointerup", cancelarEspera);
  botao.addEventListener("pointerleave", cancelarEspera);
  botao.addEventListener("pointercancel", cancelarEspera);
  botao.addEventListener("contextmenu", (evento) => evento.preventDefault());
}

botoes.forEach(permitirTrocarAoSegurar);
