
document.addEventListener("DOMContentLoaded", function() {
  const imagens = document.querySelectorAll(".efeitoimg");
  const janela = document.getElementById("janelaFlutua");
  const fechar = document.getElementById("fechar");
  const iframe = janela.querySelector(".trailer_video iframe");
  const titulo = janela.querySelector(".sinopse h2");
  const sinopse = janela.querySelector(".sinopse p");

  imagens.forEach(img => {
    img.addEventListener("click", function() {
      const trailerURL = img.getAttribute("data-trailer");
      const filmeTitulo = img.getAttribute("data-titulo");
      const filmeSinopse = img.getAttribute("data-sinopse");
      iframe.src = trailerURL;
      titulo.textContent = filmeTitulo;
      sinopse.textContent = filmeSinopse;
      janela.style.display = "block";
    });
  });

  fechar.addEventListener("click", function() {
    iframe.src = "";
    janela.style.display = "none";
  });
});

// ---------------------------------------------------------------------------------------------------------------
//-----------------------------------------BOTÃO DE CRIAR CONTA --------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const botaoConta = document.getElementById("botaoConta");
  const janelaCadastro = document.getElementById("janelaCadastro");
  const fecharCadastro = document.getElementById("fecharCadastro");

  botaoConta.addEventListener("click", function() {
    janelaCadastro.style.display = "block";
  });

  fecharCadastro.addEventListener("click", function() {
    janelaCadastro.style.display = "none";
  });

  document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("BEM-VINDO AO DIVULGANDO FILMES! \n Cadastro Realizado!");
    janelaCadastro.style.display = "none";
  });
});
